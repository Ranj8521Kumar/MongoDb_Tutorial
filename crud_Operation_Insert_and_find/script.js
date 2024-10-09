// Import the MongoDB Node.js driver
const { MongoClient } = require('mongodb');

// MongoDB connection URI
const uri = 'mongodb://localhost:27017/';

async function main() {
    // Connect to MongoDB
    const client = new MongoClient(uri);
    // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


    try {
        // Connect to the MongoDB server
        await client.connect();

        // Access/Create the "Practice" database
        const database = client.db('Practice'); // Connecting to the Practice database

        // Access/create the "users" collection
        const collection = database.collection('users'); // Collection will be created if not existing

        // // Insert a new document
        // const result = await collection.insertOne({
        //     name: 'Ranjan',
        //     age: 21,
        //     address: {
        //         street: '123 Main St',
        //         city: 'Amethi',
        //         country: 'India'
        //     },
        //     hobbies: ['reading', 'traveling', 'photography']
        // });

        // Insert new documents
        const result = await collection.insertMany([
            {
            name: 'Ranjan',
            age: 22,
            address: {
                street: '123 Main St',
                city: 'Amethi',
                country: 'India'
            },
            hobbies: ['reading', 'traveling', 'photography']
        },

        {
            name: 'Ranjan1',
            age: 10,
            address: {
                street: '123 Main St',
                city: 'Amethi',
                country: 'Australiya'
            },
            hobbies: ['reading', 'traveling', 'photography']
        },

        {
            name: 'Ranjan2',
            age: 12,
            address: {
                street: '123 Main St',
                city: 'Amethi',
                country: 'Japan'
            },
            hobbies: ['reading', 'traveling', 'photography']
        },

        {
            name: 'Ranjan3',
            age: 30,
            address: {
                street: '123 Main St',
                city: 'Amethi',
                country: 'Nepal'
            },
            hobbies: ['reading', 'traveling', 'photography']
        },
    ]);

        // Retrieving a document
        const document = await collection.findOne({name: "Ranjan Kumar Pandit"});
        console.log(document);

        const query = {age : {$gt : 10}};
        const cursor = collection.find(query);

        //Iterate Over the cursor toacess the documents
        await cursor.forEach(document => {
            console.log("Found Document:", document);
        });
    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
}

main().catch(console.error);  //Error Handling for async Functions
