# Notion Database Integration

Example of REST Web API that manipulates a Notion DB through Notion API

## Before Running

You'll need Node.js (v18.18.2) and yarn; then you should also configure environment variables by copying .env.example in a .env file

## Running

You can run the project using:
```sh
# Installs dependencies
yarn

# Run the API
yarn dev 
```

## After Running

You could check the API documentation using Swagger acessing the endpoint `/api-docs` in your browser

## Tests

This application contains basically service minimal tests used through the development to validate the application functionalities, you can run it by running:

```sh
yarn test
```