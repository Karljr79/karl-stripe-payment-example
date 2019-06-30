var express = require('express');
const fs = require('fs');
const config = require('../config');
var router = express.Router();

//grab the products from the fake database.  In this case just a JSON file
let rawdata = fs.readFileSync('products.json');
let products = JSON.parse(rawdata);

// GET main store page.
router.get('/', function(req, res, next) {
  res.render('shop/index', { title: 'Shopping Cart', products: products, stripeKey: config.stripePublishableKey });
});

// GET purchase page for the selected item
router.get('/purchase/:id', function(req, res, next) {
  var productToPurchase = products[req.params.id];
  // send the selected item and Stripe Key to the view
  res.render('shop/purchase', { title: 'Purchase Screen', item: productToPurchase, stripeKey: config.stripePublishableKey });
});

router.post('/charge', function(req, res, next) {
  // See your keys here: https://dashboard.stripe.com/account/apikeys
  const stripe = require('stripe')(config.stripeSecretKey);

  // Token is created using Checkout or Elements!
  // Get the payment token ID submitted by the form:
  const token = req.body.stripeToken; // Using Express

  stripe.charges.create({
    amount: products[req.body.id].price,
    currency: 'usd',
    source: token, // obtained with Stripe.js
    description: 'Example charge for: ' + products[req.body.id].name,
    }, function(err, charge) {
      res.render('shop/confirmation', { title: 'Thank You!', charge: JSON.stringify(charge, null, 4) });
    });
});

module.exports = router;
