# Wishlist-it product tracker

GitHub Repository: https://github.com/RubinoD1/Wishlist-it-product-tracker

Heroku Live Page: https://vast-depths-33526.herokuapp.com/ 


## Table of Contents 
- [Introduction](#introduction)
- [Contributers](#contributers)
- [User Story](#user-story)
- [Features](#features)
- [Technology](#technology)
- [Environment Variables](#environment-variables)
- [Run Locally](#run-locally)
- [Create The Database](#create-the-database)
- [Seed The Database](#seed-the-database)
- [Running Tests](#running-tests)
- [Screenshots](#screenshots)
- [Requirments](#requirments)




## Introduction 

Wishlist-it is a full-stack app that allows a user to create and manage a list of products. 
The inspiration was to create an app that is similar to a shopping list, but with the ability to easily manage information such as desired price, product notes, and other related information about a product.


## Contributers

- Arjun Sharman 
  
  GitHub: [arjunsharman06](https://github.com/arjunsharman06)

- Daniel Rubino  
  
  GitHub: [Rubinod1](https://github.com/RubinoD1)

- Umer Farooq 

  GitHub: [umerf123](https://github.com/umerf123)

- William Chow 
  
  GitHub: [hippobb](https://github.com/hippobb)

## User Story 

As a shopper, I want a easy way to keep track of the products I want. 

## Features

- The ability to register an account [Username, email, password]

- The ability to login [Email, password]

- Create a product tracked by category and linked to user id. 

- Edit and remove products from list. 

- Add the following product info: 
   
   - Product name 
   - Price
   - Desired Price
   - Product notes 
   - Quantity (default is 1)

- Add a image for products


## Technology 
- Node.js
- Express
- SQL
- MySQL2
- Jest
- Heroku
- JawsDB
- Handlebars.js
- Express-session 
- Google OAuth


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

- DB_NAME='wishlist_it_db'
- DB_USER='root'
- DB_PASSWORD='YOUR PASSWORD'
- GOOGLE_CLIENT_ID=
- GOOGLE_CLIENT_SECRET=

A example .env file can be found in the root of the repository. The file is:   

.env.EXAMPLE

## Run Locally

Clone the project

```bash
  git clone https://github.com/RubinoD1/Wishlist-it-product-tracker.git
```

Go to the project directory

```bash
  cd Wishlist-it-product-tracker
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Create The Database 

Login to MySQL 

```bash
  mysql -u root p
```

Run the schema.sql file

```bash
  SOURCE db/schema.sql;
```

To check that wishlist_it_db was created 

```bash
  SHOW DATABASES; 
```

Exit MySQL

```bash
  quit; 
```


## Seed The Database 

To seed the database 

```bash
  npm run seeds
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Screenshots 
![Home page](./public/images/Homepage.png)

![Dashboard Main](./public/images/dashboard%20main.png)

![Dashboard Category Filter](./public/images/dashboard%20category%20filter.png)


## Requirments 

Your project should fulfill the following requirements:

    Use Node.js and Express.js to create a RESTful API.

    Use Handlebars.js as the templating engine.

    Use MySQL and the Sequelize ORM for the database.

    Have both GET and POST routes for retrieving and adding new data.

    Be deployed using Heroku (with data).

    Use at least one new library, package, or technology that we haven’t discussed.

    Have a polished UI.

    Be responsive.

    Be interactive (i.e., accept and respond to user input).

    Have a folder structure that meets the MVC paradigm.

    Include authentication (express-session and cookies).

    Protect API keys and sensitive information with environment variables.

    Have a clean repository that meets quality coding standards (file structure, naming conventions, best practices for class/id naming conventions, indentation, quality comments, etc.).

    Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).


