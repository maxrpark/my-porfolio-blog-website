---
title: This is my first website 3.2
id: rec7GmsOW5KGLmgLJ
img: https://dl.airtable.com/.attachments/670a21d137c174c6f1c20f5021b124fa/700567e1/noodleit.png
description: Just Noodle it.
alt: Home page image
---

## Noodle it! 

## About the project

Noodle it! is the frontend side of a full-stack project about a noodle shop.
The frontend is built with React.js and typescript and deployed on netlify and the backend (noodles-API) was
built with Django and deployed on Heroku.

I try to implement as many different things as I could to practice and learn deeply React, Typescript and Django.

## Frontend

As I mentioned the frontend is built with React and typescript, for the styles I used styled-components. I used useContext and useReducer to manage most of the states of the application which made everything simple because the application is quite big.
           
Besides that, I also create a few custumeHooks which were also helpful around the app.

## pPages
 Noodle it! has around 14 different pages which are:
- Home
- Dashboard
- Products
- NoodlePage (Single Product)
- Listpage
  - Show a list of the result of all categories or brands.
- NoodlesTypePage
  - Show a list of all noodles corresponding to a certain brand, category, or tag.
- Search
- Order
- Cart
- Checkout
- Login
- Register
- Error

Page About The dashboard and checkout page are only available for users that are registered.

## Benefice of registered users

Besides being able to complete their purchase, registered users have also access to their dashboard page.

Also, registered users can mark single noodles as favorites.

### Dashboard Page

On the Dashboard page the user can find their orders, and wishlist(favorites noodles), and if he or she has items in the cart, can also see them there.
## Search Page

I mostly create this page to make use of one of the endpoints of the API.

## Dark mode

The application also has a light and dark theme which is basic but I implemented it so I could learn how to use ThemeProvider from styled-components.

## Payment getaway

For the payment I used stripe, it was my first time implementing something like this, and it turned out to be quite simple after I watched some tutorials but especially because their documentation is so clear.

## Ideas

Some of the inspiration for the website, like the sidebar, wishlist, and checkout page are coming from the Udemy website.

## My NPM packages
In this application I had use my two npm packages,[SimpleSlider](https://www.npmjs.com/package/@maxcoding/simpleslider) for the carrousel in SINGLE NOODLE PAGE and [SimpleReview](https://www.npmjs.com/package/simplereview) also in the single noodle page and in the card component.

## Backend

The backend of the project is created using python. The main idea was to create the API, which is available for everyone to use it.
You can visit the API[HERE](https://noodles-api.herokuapp.com/) to know more about it.

## Learn more about it

These are only few things included in the project that just come to my mind now if you want to know more about it, please take a look the the two repositories

[Noodle it](https://github.com/maxrpark/noodle_it_ts)
[Noodles-api](https://github.com/maxrpark/nooodles_api)
