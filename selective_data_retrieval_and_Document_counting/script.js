// //Returning Specific Data from a Query in MongoDB:
// const { MongoClient } = require('mongodb');

// const uri = 'mongodb://localhost:27017/';

// const client = new MongoClient(uri);

// async function main(){
//     try{
//         await  client.connect();
        
//         const database = client.db('Practice');
//         const collection = database.collection('users');

//         // const cursor = collection.find({age: {$gt: 12}}, {projection: {name: 1, age: 1}});
//         const cursor = collection.find({age: {$gt: 12}}, {projection: {name: 1, age: 1}}).sort({age:-1}).limit(1);


//         await cursor.forEach(document =>{
//             console.log('Document with specific fields: ', document);
//         });
//     }catch(error){
//         console.log("Error finding element document: ", error);
//     }finally{
//         await client.close();
//         console.log('Disconnected from mongodb');
//     }
// }

// main().catch(console.error);






//Counting Documents in a MongoDB Collection:
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/';

const client = new MongoClient(uri);

async function main(){
    try{
        await  client.connect();
        
        const database = client.db('Practice');
        const collection = database.collection('users');

        const result = await collection.countDocuments({});

        //const result = await collection.countDocuments({age: {$gt: 12}});
        console.log("Number of Documents: ", result);
    }catch(error){
        console.log("Error finding element document: ", error);
    }finally{
        await client.close();
        console.log('Disconnected from mongodb');
    }
}

main().catch(console.error);