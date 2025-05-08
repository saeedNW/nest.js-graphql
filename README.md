# NestJS GraphQL API

A GraphQL API built with NestJS, MongoDB, and Apollo Federation.

## Overview

This project is a GraphQL API built using NestJS framework with Apollo Federation for creating scalable and distributed GraphQL architectures. It uses MongoDB as the database with Mongoose ODM for data modeling.

## Table of Content

- [NestJS GraphQL API](#nestjs-graphql-api)
	- [Overview](#overview)
	- [Table of Content](#table-of-content)
	- [Features](#features)
	- [Prerequisites](#prerequisites)
	- [Installation](#installation)
	- [Configuration](#configuration)
	- [Running the Application](#running-the-application)
		- [Development Mode](#development-mode)
		- [Production Mode](#production-mode)
	- [GraphQL Playground](#graphql-playground)
	- [Project Structure](#project-structure)
	- [API Documentation](#api-documentation)
	- [Contributing](#contributing)

## Features

- GraphQL API with Apollo Federation
- MongoDB integration with Mongoose
- User module implementation
- Modular architecture following NestJS best practices

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js
- NestJS
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/saeedNW/nest.js-graphql.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nest.js-graphql
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

The application uses MongoDB as its database. By default, it connects to `mongodb://localhost:27017/nestjs-graphql`. If you need to change this connection string, update it in `src/modules/app/app.module.ts`.

## Running the Application

### Development Mode

To run the application in development mode:

```bash
npm run start:dev
```

### Production Mode

To build and run the application in production mode:

```bash
npm run build
npm run start:prod
```

The application will be available at `http://localhost:3000` by default. You can change the port by setting the `PORT` environment variable.

## GraphQL Playground

Once the application is running, you can access the GraphQL Playground at:

`http://localhost:3000/graphql`

Use this interactive interface to explore the API, view the schema, and test queries and mutations.

## Project Structure

```txt
src/
├── main.ts                  # Application entry point
├── modules/
│   └── app/
│       └── app.module.ts    # Main application module
└── user/
    └── user.module.ts       # User module
```

## API Documentation

The API documentation is available through the GraphQL Playground. You can explore the schema, queries, mutations, and types directly in the playground interface.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
