# ExpressTheBackend
 
## Description
This is the back-end for an e-commerce website built using Express.js and Sequelize. The application connects to a MySQL database and provides API routes for managing categories, products, and tags.

## User Story
As a manager at an internet retail company, I want a back end for my e-commerce website that uses the latest technologies so that my company can compete with other e-commerce companies.

## Acceptance Criteria
- [x] A functional Express.js API
- [x] Database name, MySQL username, and MySQL password configured in an environment variable file
- [x] Ability to connect to a database using Sequelize
- [x] Schema and seed commands to create a development database and seed it with test data
- [x] Server starts, and Sequelize models are synced to the MySQL database
- [x] API GET routes in Insomnia Core for categories, products, or tags display data in a formatted JSON
- [x] API POST, PUT, and DELETE routes in Insomnia Core successfully create, update, and delete data in the database

## Installation
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file and add your database name, MySQL username, and MySQL password.
4. Run `npm run seed` to create and seed the database.
5. Run `npm start` to start the server and sync Sequelize models.

## Usage
- Open Insomnia Core.
- Test API routes (GET, POST, PUT, DELETE) for categories, products, or tags.
- Instructional Video: https://drive.google.com/file/d/1mYf7C7AFMB69U1MqF-wb09skQjiq83sX/view

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement, please submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).


##