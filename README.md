# Ecommerce Backend Server

## Description

This app runs an ecommerce backend server, allowing user to perform CURD Operations on a store inventory.

## APP Walkthrough Video

The App walkthrough video can be accessed via this link - https://drive.google.com/file/d/1KS4IcpwxofiWxxwR1bBtX7a4vI72Edzk/view

## Installation Instructions

Install by typing NPM "Install" in project folder.
Run the app by typing NPM Start.

## Usage Information

Setup the Databases by typing "psql -U postgres" in your project folder. The Database can be created by typing "\i db/schema.sql" 
The sample data can be seeded by running "NPM Run Seed" in the project folder.

## User Story

AS A manager at an internet retail company 
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

## Acceptance Criteria

- WHEN I add my database name, PostgreSQL username, and PostgreSQL password to an environment variable file
- THEN I am able to connect to a database using Sequelize
- WHEN I enter schema and seed commands
- THEN a development database is created and is seeded with test data
- WHEN I enter the command to invoke the application
- THEN my server is started and the Sequelize models are synced to the PostgreSQL database
- WHEN I open API GET routes in Insomnia Core for categories, products, or tags
- THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
- THEN I am able to successfully create, update, and delete data in my database

## App Repository Link

https://github.com/SHarpreet89/ECommerce-Backend-App

## Contact me

https://github.com/SHarpreet89

## Screenshot

![Alt text](./assets/images/Application%20Image.png)
