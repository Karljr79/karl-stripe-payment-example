## Getting Started

This is an extremely simple and lightweight e-commerce page that demonstrates how Stripe.js can be used to quickly and securely accept payments.

You will need the following to use this app:

[Node.js] (https://nodejs.org/en/) - Ensure your machine has the latest version of Node.js installed

If you have any questions along the way, simply [email me] (mailto:karljr79@gmail.com)

##Stripe account

You will need a Stripe account to use this app.  You can sign up for one [here] (https://dashboard.stripe.com/register)

## Running the Application

In order to run this demo on your local machine, please follow the steps below:

1. Clone or Download the source code in this repo. If you plan on cloning, open a terminal window, navigate to the folder where you want this project to live and enter the following command:
```bash
$ git clone https://github.com/
```

2. Once you have cloned/downloaded the source, you will need to use npm to install project dependencies prior to running the code.  
```bash
$ cd karl-stripe-payment-example
$ npm install
```
3. If you received errors after attempting to install dependencies, you may need to do the following:
```bash
$ cd karl-stripe-payment-example
$ sudo npm install
```
4. You will need to input your Stripe API credentials in the config.js file.  These can be found from your newly created Stripe account's dashboard.  Replace the following values:
```
stripePublishableKey: 'YOUR_PK_HERE',
stripeSecretKey: 'YOUR_SK_HERE'
```

5. Once the dependencies have completed installing and your Stripe credentials are in place, you are now ready to run the project.  To start the server,
```bash
$ npm start
```

6. Now that the code is running, open a browser and navigate to: [http://localhost:3000/](http://127.0.0.1:3000/)

## Using the Application

As you have noticed, you have a few choices and all of them involve you spending money.  Click "purchase" next to any item and this will bring up a page where you can enter your credit card details and pay for the item.  For testing purposes, you can use the following sandbox credit card details:

__Card__ #: 4242 4242 4242 4242
__Exp__: Any date in the future
__CVV__: Any three digits
__Zip__: Any 5 digits (For US)

After you click purchase, a simple confirmation screen will be displayed showing the raw response from Stripe.  

## Populating the Inventory

For simplicity/portability's sake, there is no database.  Rather, all items are stored in JSON format in the "products.json" file.  If you want to add more, feel free.  
