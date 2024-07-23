# bestprice_store

## Description

**bestprice_store** is a Node.js project designed to manage an online store that offers the best prices for products. The project uses Mongoose to interact with a MongoDB database, providing a seamless interface for database operations.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/bestprice_store.git
   cd bestprice_store
   ```

2. **Install dependencies:**

   ```bash
   yarn install
   ```

3. **Set up the environment variables:**

   Create a `.env` file in the root directory and add the following environment variables:

   ```env
   PORT=5000
   ```

4. **Start the server:**

   ```bash
   yarn dev
   ```

## Usage

- Make sure MongoDB is running on your machine or use a cloud MongoDB service.
- Use the API endpoints listed below to interact with the bestprice_store application.

## Features

- **Product Management:** Add, update, delete, and view products.
- **User Authentication:** Sign up, login, and manage user profiles.
- **Order Processing:** Create and manage customer orders.
- **Pricing Engine:** Ensure the best prices for the products.

## API Endpoints

### Auth

- **POST /api/auth/register** - Register a new user
- **POST /api/auth/login** - Login a user

### Users

- **GET /api/users** - Get all users
- **GET /api/users/:id** - Get a single user by ID
- **PUT /api/users/:id** - Update a user by ID
- **DELETE /api/users/:id** - Delete a user by ID

### Products

- **GET /api/products** - Get all products
- **GET /api/products/:id** - Get a single product by ID
- **POST /api/products** - Create a new product
- **PUT /api/products/:id** - Update a product by ID
- **DELETE /api/products/:id** - Delete a product by ID

### Orders

- **GET /api/orders** - Get all orders
- **GET /api/orders/:id** - Get a single order by ID
- **POST /api/orders** - Create a new order
- **PUT /api/orders/:id** - Update an order by ID
- **DELETE /api/orders/:id** - Delete an order by ID

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
