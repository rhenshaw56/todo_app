## Installation

1. Ensure you have `node`(LTS version), `npm`, `yarn` installed on your local machine, and `postgres` is configured locally.

2. clone this repo.
3. run `cd todo_app/` from your terminal to navigate into the root directory of this repo.
4. run `yarn` from the root of the repo to install dependencies

5. Ensure your local `postgres` database is running.
6. Create 2 databases one for the local app and the other for running tests.

8. Create a file named `.env` in the root directory and copy the contents of the `.env.sample` file into it.

9. Input the name of your local databases (created from **step 6**) and also the database user and password details into the created `.env` file.

10. run `yarn run sync:db` to sync the database tables.
11. run `yarn run dev` to start the app locally on port 400.
12. use postman or any other api client to test the following endpoints.
- POST http://localhost:4000/task/create - to create a task
- PUT http://localhost:4000/task/:id - to update an already created task
- DELETE http://localhost:4000/task/:id - to delete an existing task
- GET http://localhost:4000/tasks - to fetch all tasks.

13. run `yarn run test` to run all test.
