Setup and Run Instructions:

Install Node.js: Ensure you have Node.js installed on your machine. You can download it from Node.js official website.

Create Project Directory:

Open your terminal or command prompt.

Create a new directory for your project:

mkdir transactions-app
cd transactions-app

Initialize a Node.js Project:

Run the following command to create a package.json file:

npm init -y
Install Required Packages:

Install Express, SQLite, SQLite3, Body-Parser, CORS,nodemon, and Path:

npm install express sqlite sqlite3 body-parser cors path nodemon

Create Required Files:

Inside your project directory, create the following files:

app.js: This file contains the main application code.

createtable.js: This file will create the transactions table and categories table in your SQLite database.

insertData.js: This file can be used to insert sample data into the transactions table and categories table.

transactions.db: This file will be automatically created when you run the application for the first time.

Run the script to create the table:

node createtable.js

Run the script to insert the table:

node insertData.js

Run the Application:
node app.js

Run the server using:

The server should start and listen on http://localhost:3636.

API Documentation:
Base URL
http://localhost:3636

Endpoints
POST /transactions

Description: Create a new transaction.
Request Body:

{
"type": "income" | "expense",
"category": "string",
"amount": number,
"date": "YYYY-MM-DD",
"description": "string"
}

Response:
Status: 201 Created
Body:

{
"id": number
}

GET /transactions

Description: Retrieve all transactions.
Response:
Status: 200 OK
Body: An array of transaction objects:

[
{
"id": number,
"type": "income" | "expense",
"category": "string",
"amount": number,
"date": "YYYY-MM-DD",
"description": "string"
},
...
]

GET /transactions/

Description: Retrieve a transaction by its ID.
Response:
Status: 200 OK
Body: Transaction object or 404 Not Found if not found:

{
"id": number,
"type": "income" | "expense",
"category": "string",
"amount": number,
"date": "YYYY-MM-DD",
"description": "string"
}

PUT /transactions/

Description: Update a transaction by its ID.
Request Body: Similar to POST /transactions.
Response:
Status: 200 OK on success or 404 Not Found if not found:

{
"message": "Transaction updated successfully"
}
DELETE /transactions/

Description: Delete a transaction by its ID.
Response:
Status: 200 OK on success or 404 Not Found if not found:

{
"message": "Transaction deleted successfully"
}

GET /summary

Description: Retrieve a summary of transactions, showing total income, total expenses, and balance.
Response:
Status: 200 OK
Body:

{
"totalIncome": number,
"totalExpenses": number,
"balance": number
}

run command:npm start

Screenshot Folder link: https://drive.google.com/drive/folders/1moFqZkUvHyicdL7lTuktdZKjfK3H7pKo?usp=sharing
