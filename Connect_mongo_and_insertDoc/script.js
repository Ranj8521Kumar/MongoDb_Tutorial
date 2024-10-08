// // Import the MongoDB Node.js driver
// const { MongoClient } = require('mongodb');

// // MongoDB connection URI
// const uri = 'mongodb://localhost:27017/';

// async function main() {
//     // Connect to MongoDB
//     const client = new MongoClient(uri);
//     // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


//     try {
//         // Connect to the MongoDB server
//         await client.connect();

//         // Access/Create the "Practice" database
//         const database = client.db('Practice'); // Connecting to the Practice database

//         // Access/create the "users" collection
//         const collection = database.collection('users'); // Collection will be created if not existing

//         // Insert a new document
//         const result = await collection.insertOne({
//             name: 'Ranjan',
//             age: 21,
//             address: {
//                 street: '123 Main St',
//                 city: 'Amethi',
//                 country: 'India'
//             },
//             hobbies: ['reading', 'traveling', 'photography']
//         });

//         // Retrieving a document
//         const document = await collection.findOne({name: "Ranjan Kumar Pandit"});
//         console.log(document);
//     } catch (error) {
//         console.log(error);
//     } finally {
//         await client.close();
//     }
// }

// main().catch(console.error);  //Error Handling for async Functions




// Import the MongoDB Node.js driver
const { MongoClient } = require('mongodb');

// MongoDB Atlas connection URI
const uri = 'mongodb+srv://22it3037:22RG%40cs69@cluster0.7mvfchn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

async function main() {
    // Connect to MongoDB Atlas
    const client = new MongoClient(uri);
    // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


    try {
        // Connect to the MongoDB server
        await client.connect();

        // Access/Create the "Practice" database
        const database = client.db('Practice'); // Connecting to the Practice database

        // Access/create the "users" collection
        const collection = database.collection('users'); // Collection will be created if not existing

        // Insert a new document
        const result = await collection.insertOne({
            name: 'Ranjan',
            age: 21,
            address: {
                street: '123 Main St',
                city: 'Amethi',
                country: 'India'
            },
            hobbies: ['reading', 'traveling', 'photography']
        });

        // // Retrieving a document
        // const document = await collection.findOne({name: "Ranjan Kumar Pandit"});
        // console.log(document);
    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
}

main().catch(console.error);  //Error Handling for async Functions

