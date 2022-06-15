## Menu App

Menu app is a Nuxt application built using typescript, Pinia, Netlify Serverless Functions, and Firebase.

The idea of the app is to replace the traditional restaurant's printed menu with a digital one.

The menu can be used on mobile but the idea is that the restaurant has at least one table per table.

The application is divided into two-part, customer, and manager.
---
title: Menu App
id: recgHVx8OlsRuj7J3
img: https://dl.airtable.com/.attachments/751d53508f748afdfdbfe774c4602ee6/1f135e4a/ScreenShot2022-03-13at11_17_28AM2.png
description: The best restaurant experience.
alt: Home page image
---


### Customer

The customer can choose from one of the available tables and after that has access to the table page.

On this page, the customer can find all the available options on the menu and filter them into categories and subcategories.

Each menu item has a small description and price, it also has the option to select the amount and add it to the table order.

On the table page, the customer can also check the table order details and totals.

Finally, there are two buttons on the top left, one to call a waiter and another one to ask for the bill.

### Manager section

The manager page is only available after login. On this page, the manager can take an overview of the restaurant.

There 5 sections on the manager page:
1. Total section
- Display sales of the day
2. Tables section
- Take a look at all the tables, select a specific table, and also can reserve or clear them.
  Single table section
- If the manager clicks on table details can get access to all the orders of the table. With a bottom to checkout
3. Checkout section
- Get final details of the table and confirm checkout. 
- After the checkout is confirmed the table is available again and the daily total amount is updated.
4. Order sections
- Show every new order coming from the tables.
- Click on the x icon to mark the orders as completed. Completed orders are removed from the list.

### Pinia

The main two reasons for this project were to build something with Nuxt and Pinia.

That is why more a less entire states of the application are controlled using Pinia.

### Firebase

I wanted to have some backend functionalities and I did not want to create a Django server for that, so I decide to learn firebase and create some documents for table control, orders, and checkout.

I used firebase real-time update so the entire all is always updated even if it's used on different devices at the same time.

I also used firebase auth to create a manager account, to have access to the manager page.

### Netlify serverless functions.

I also created an API for the menu items. I used netlify serverless functions and airtable, since it is easier and faster for these small tasks.

The side is deployed in Netlify.

Visit the site clickig [here](https://menu-app-nuxt.netlify.app/)
