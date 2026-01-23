// ****** Conection Of MongoDB With NodeJS ******

// Install MongoDB and mongosh. Now:
// 1. First open powershell run as administator and start mongo db:  net start MongoDB
// 2. Now type mongosh and press enter
// 3. Visit mongoDb NodeJS Driver website and copy command
// 4. Then in VS Code in terminal, type command: npm i mongodb. Note: The mongo server starts neccessary fot this process.

// ****** use file name index.js only, because in package.json main is index.js ******

import express from 'express';
import { MongoClient } from 'mongodb';

const dbname = "college"
const url = "mongodb://localhost:27017"  // mongodb defult url
const client = new MongoClient(url)

async function dbConnection(){
    await client.connect()
    const db = client.db(dbname)
    const collection = db.collection('students')

    const result = await collection.find().toArray()
    console.log(result)
}
dbConnection();

const app = express();
app.listen(2600);