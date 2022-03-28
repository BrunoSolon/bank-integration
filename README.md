<h1 align="center">Welcome Bank Integration Challenge 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Code challenge to integrate with 2 fake Bank APIs using the best software design patterns

### NOTE:
It was used TDD & DDD in the development of this project.

The bank1 and bank2 code in provider section is the same of the original challenge purpose.

There are two endpoints which returns all information from all available bank integrations and display them, one after the other.
 - /api/balances
 - /api/transactions

## Development Environment Setup

1.  Make sure you have `nvm`, node `v12.8.0` or `LTS` version of node installed
2.  Install `yarn` or `npm install`

## Usage

```sh
yarn run start:dev
or
npm run start:dev
```

When the server starts, you can send a GET request to the endpoints listed above to check the all information
For instance:
```sh 
    curl --location --request GET 'http://localhost:8080/api/balances'
    curl --location --request GET 'http://localhost:8080/api/transactions'
```

## Author

👤 **Bruno Solon**

* Github: [@BrunoSolon](https://github.com/BrunoSolon)

## Show your support

Give a ⭐️ if this project helped you!
