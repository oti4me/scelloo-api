[![meetup](https://circleci.com/gh/oti4me/scelloo-api.svg?style=shield)](https://app.circleci.com/pipelines/github/oti4me/scelloo-api)
[![Maintainability](https://api.codeclimate.com/v1/badges/d0ee0df5f69357e03b70/maintainability)](https://codeclimate.com/github/oti4me/scelloo-api/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/d0ee0df5f69357e03b70/test_coverage)](https://codeclimate.com/github/oti4me/scelloo-api/test_coverage)

# User Management

## Introduction

**`User Management`** is simple user management application.

#### Expected features

- Create User.
- Delete User .
- Edit User .
- Read User.

## Installation and Setup

- Install NodeJs
- Install Postgres
- Navigate to your directory of choice on the `terminal`.
- Clone this repository on that directory.

  > git clone https://github.com/oti4me/scelloo-api.git

- Navigate to the repo's folder on your computer
- `cd scelloo-api`
- Install the application's dependencies using `npm install`

  #### Note

  - In order to begin using, you need to have [NodeJs](https://nodejs.org) and **npm** installed on your system.
  - For database you need to install **PostGres** locally or setup with an online client eg. **ElephantSql**
  - Setup Database according to setting in src/config/db.ts and create an env file using the example env.example file.
  - Migrate the database `sequelize db:migrate`
  - Create two (2) databases one for **development** and the other for **testing**
  - Change database config variables in the src/config/db.ts and .env file, based on your db set-up
  - In other to interact effectively with the endpoints, install and use [Postman](https://www.getpostman.com/)

- Run the app
  - `npm run dev`
  - Running the command above will run the app at `http://localhost://3001` or the port provided in .env file.

## Dependencies

- See Package.json for reference

## Tests

- The tests have been written using **[Mocha](https://www.npmjs.com/package/mocha)** , **[Chai](https://www.npmjs.com/package/chai)** as it's assertion library and **[Supertest](https://www.npmjs.com/package/supertest)**.
- To run the tests, navigate to the project's folder.
- Issue the following command on the terminal `npm test`
- If the tests are successful, they will complete without failures or errors.

## Technologies

- [ECMAScript 7](http://es7-features.org/): This is the newest version of JavsScript with new features such as arrow functions, spread and rest operators and many more.
- [TypeScript:](https://www.typescriptlang.org/) A superset of JavaScript with runtime type checking capability

# Coding Style

- Airbnb

# Language

- TypeScript

## Api Documentation

\*[Coming soom]()

## Limitations

\*[Coming soom]()

## Contributions

- N/A

## Author

    Henry Otighe

## License & Copyright

[Coming soon]()
