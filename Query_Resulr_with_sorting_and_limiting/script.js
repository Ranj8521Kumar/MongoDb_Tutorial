// //Sorting Query Result in mongodb
// const { MongoClient } = require('mongodb');

// const uri = 'mongodb://localhost:27017/';

// const client = new MongoClient(uri);

// async function main(){
//     try{
//         await  client.connect();
        
//         const database = client.db('Practice');
//         const collection = database.collection('users');

//         const cursor = collection.find({age: {$gte: 12}}).sort({age:1});

//         await cursor.forEach(document =>{
//             console.log('Sorted Document: ', document);
//         });
//     }catch(error){
//         console.log("Error finding element document: ", error);
//     }finally{
//         await client.close();
//         console.log('Disconnected from mongodb');
//     }
// }

// main().catch(console.error);




//Limiting Query Result in mongodb
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/';

const client = new MongoClient(uri);

async function main(){
    try{
        await  client.connect();
        
        const database = client.db('Practice');
        const collection = database.collection('users');

        // const cursor = collection.find({age: {$gte: 12}}).limit(2).sort({age:-1});//for Descending
        const cursor = collection.find({age: {$gte: 12}}).limit(2).sort({age:1});//for Ascending


        await cursor.forEach(document =>{
            console.log('Sorted Document: ', document);
        });
    }catch(error){
        console.log("Error finding element document: ", error);
    }finally{
        await client.close();
        console.log('Disconnected from mongodb');
    }
}

main().catch(console.error);