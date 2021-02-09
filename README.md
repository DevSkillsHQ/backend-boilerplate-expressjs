### Intro

This project was created using Node.js for the runtime environment, Express.js for the REST API, Sequelize as the ORM to model the SQLite Database

The project is structured using a MVC approach with vertical slices - each business entity has a folder with its own routes, controller, models, etc.

The View section is not implemented since there is no front-end in the project description

### Setup

To test the software: install the modules (first time) ==> run the start command ==> run the test command

### Considerations

The api validations were applied using reusable middlewares following the middleware chain model on express.js

The validations can be easily extended to validate more fields a with custom functions

Aspects that were not improved further because of time constraints or were out of scope:
1. The HTTP validate method middleware is not scalable / does not work in all cases because it only checks for the first param of the route, but to create an even more complex validator would take more time. I assume it’s not the point of this assignment.
2. There is no sophisticated error handling, I assume that is out of scope
3. I did not develop relationships between tables, given there is no test for that. I assume it's out of scope. In a normal scenario I would associate account and transaction
4. The way the DB starts is not optimal (is running more than one time) and I have force: true for testing purposes
5. GET queries performance I assume can be improved even further, given more time. Just by changing to findByPk (find by primary key) / using indexes, would improve easily
6. Promise chaining could be improved even further on the POST amount endpoint
7. The project is not following proper REST in my opinion => I followed the challenge specs, I guess that it was not suppose to be changed

To summarize: given more time, I could improve even further. It passes all the tests and its organized, reusable and maintainable


# Account Management Backend - Level 2 - Challenge Description


**Before you get started, please read [this guide](https://www.notion.so/Get-started-with-your-assignment-dade100d93054a6db1036ce294bdaeb6)** that walks you through how to submit your solution and get help.

### Time limit ⏳

Try not to spend more than **3 hours**.

### The challenge 🎯

Your task is to build a backend service that implements this [API specification](api-specification.yml) that defines a set of operations for creating and reading account transactions. You can use [editor.swagger.io](https://editor.swagger.io/) to visualize the spec.

### The focus areas 🔍

- **Use an SQLite database as the service datastore.** We want to see how you design the database schema and SQL queries for working with the service data. Please use [SQLite](https://www.sqlite.org/index.html) as a DB engine.
- **Create a backend service that implements the provided API.** This will involve the following:
  - Handling invalid HTTP requests;
  - Creating new transactions idempotently;
  - Reading historical transactions;
  - Retreiving the current account balance.
- **Optimize the GET endpoints for speed.** When designing your service, ensure that the GET endpoints remain fast with the database growing in size.
- **Ensure no lost updates.** When submitting a new transaction, make sure no account balance updates are lost. E.g., when having two concurrent requests updating the same account balance.
- **Organize your code as a set of low-coupled modules**. Avoid duplication and extract re-usable modules where it makes sense, but don't break things apart needlessly. We want to see that you can create a codebase that is easy to maintain.
- **Document your decisions.** Extend this README.md with info about how to run your application along with any hints that will help us review your submission and better understand the decisions you made.

### The provided boilerplate 🗂
* The [service specification](api-specification.yml) in the Open API format.
* Automated tests to validate your solution. To run locally:
  * Install the required test dependencies with `yarn install`.
  * Update the `apiUrl` (where your app will run) in [cypress.json](cypress.json).
  * Run your app.
  * Run the tests with `yarn run test`.

### Before submitting your solution ⚠️
1. Update the `apiUrl` (where your app will run) in [cypress.json](cypress.json).
2. Update the [`build`](package.json#L5) and [`start`](package.json#L6) scripts in [package.json](package.json) that respectively build and run your application. **[See examples](https://www.notion.so/devskills/Backend-78f49bea524148228f29ceb446157474)**.

---

Made by [DevSkills](https://devskills.co). 

How was your experience? **Give us a shout on [Twitter](https://twitter.com/DevSkillsHQ) / [LinkedIn](https://www.linkedin.com/company/devskills)**.
