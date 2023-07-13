# REMC Project Documentation

This documentation provides an overview of the **REMC (Root Electronics and Manufacturing Company)** project, including its purpose, features, dependencies, and instructions for running the application.

Visit our [<b>website</b>](https://rem-company.web.app/) for more information and documentation.

## Table of Contents

-   [Description](#description)
-   [Features](#features)
-   [Installation](#installation)
-   [Usage](#usage)
-   [API Endpoints](#api-endpoints)
-   [Dependencies](#dependencies)
-   [Contributing](#contributing)
-   [License](#license)

## Description

The REMC project is a full-stack web application that provides a platform for managing and selling electronic products. It consists of a frontend client application and a backend server application. The frontend is built using React and is responsible for the user interface and interactions, while the backend is built using Express.js and MongoDB and handles the data storage, authentication, and payment processing.

## Features

-   User authentication and authorization:
    -   User registration and login functionality.
    -   Role-based access control (admin and regular users).
-   User Profile Management:
    -   Users can update their profile information.
    -   Admins can manage user roles and permissions.
-   Electronic Products:
    -   Display a list of electronic products.
    -   View detailed information about each product.
    -   Add new products (admin-only feature).
-   Shopping Cart and Checkout:
    -   Users can add products to their cart and proceed to checkout.
    -   Integration with the Stripe payment platform for secure and easy payment processing.
-   Order Management:
    -   Users can view their order history.
    -   Admins can view and manage all orders.
-   Reviews:
    -   Users can leave reviews for products.
    -   Users can view and manage their own reviews.
-   Blog:
    -   Display blog posts and articles related to electronics.

## Installation

To run the REMC project locally, please follow these steps:

1. Backend code [<b>repository</b>](https://github.com/zhSHUVO/remc-server)
1. Clone the frontend repository: `git clone https://github.com/zhSHUVO/remc.git`
1. Clone the backend repository: `git clone https://github.com/zhSHUVO/remc-server.git`
1. Navigate to the project's root directory.
1. Install the project dependencies by running the following command: `npm install`
1. Create a `.env` file in the project's root directory and set the required environment variables. Refer to the `.env.example` file for the list of variables needed.
1. Make sure you have MongoDB installed and running locally or provide the necessary connection URI in the `.env` file.
1. Start the backend server by running the following command: `npm run start-dev`
1. Open a new terminal window, navigate to the project's root directory, and start the frontend client by running the following command: `npm start`
1. The REMC application should now be running locally on your machine. Access it by opening a web browser and visiting `http://localhost:3000`.

## Usage

1. Upon accessing the REMC application, you will be presented with the homepage, showcasing featured products and blog articles.
2. To browse and search for electronic products, navigate to the "All Products" page.
3. Click on a product to view detailed information about it.
4. To make a purchase, create an account or log in if you already have one.
5. Add the desired products to your cart and proceed to checkout.
6. Complete the payment process using the provided payment options.
7. After successful payment, you can view your order history in the dashboard.
8. Admin users have additional features accessible through the dashboard, such as managing users, orders, and products.

## API Endpoints

The REMC backend server provides several API endpoints for interacting with the application. Here are some of the key endpoints:

-   `/user/:email`: `PUT` - Update user information or create a new user.
-   `/user/admin/:email`: `PUT` - Grant admin privileges to a user.
-   `/admin/:email`: `GET` - Check if a user is an admin.
-   `/users`: `GET` - Retrieve a list of all users.
-   `/users/:email`: `GET` - Retrieve a specific user's profile.
-   `/update/users/:email`: `PUT` - Update a user's profile information.
-   `/product`: `GET` - Retrieve all electronic products.
-   `/product/:id`: `GET` - Retrieve detailed information about a specific product.
-   `/orders`: `POST` - Store an order.
-   `/orders/:id`: `GET` - Retrieve detailed information about a specific order.
-   `/create-payment-intent`: `POST` - Create a payment intent for processing payments.
-   `/review`: `POST` - Submit a review for a product.
-   `/review`: `GET` - Retrieve all reviews.
-   `/reviews`: `GET` - Retrieve a user's reviews.

For a complete list of available API endpoints and their descriptions, please refer to the backend code.

## Dependencies

The REMC project utilizes the following dependencies:

-   cors: ^2.8.5
-   dotenv: ^16.0.1
-   express: ^4.18.1
-   jsonwebtoken: ^8.5.1
-   mongodb: ^4.6.0
-   stripe: ^9.4.0

For detailed information about each dependency, please refer to the `package.json` file.

## Contributing

Contributions to the REMC project are welcome! If you would like to contribute, please follow these steps:

1. Fork the project repository on GitHub.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push them to your forked repository.
4. Submit a pull request describing your changes.
