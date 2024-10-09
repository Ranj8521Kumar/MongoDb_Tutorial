// //updateOne documented in mongodb
// const { MongoClient } = require('mongodb');

// const uri = 'mongodb://localhost:27017/';

// const client = new MongoClient(uri);

// async function main(){
//     try{
//         await  client.connect();
        
//         const database = client.db('Practice');
//         const collection = database.collection('users');

//         const result = await collection.updateOne({name: 'Ranjan Kumar Pandit'}, {$set: {name: 'Ranjan', age: 21}});
//         console.log('Document updated: ', result.modifiedCount);
//     }catch(error){
//         console.log("Error replacing document: ", error);
//     }finally{
//         await client.close();
//         console.log('Disconnected from mongodb');
//     }
// }

// main().catch(console.error);



// //updateMany documented in mongodb
// const { MongoClient } = require('mongodb');

// const uri = 'mongodb://localhost:27017/';

// const client = new MongoClient(uri);

// async function main(){
//     try{
//         await  client.connect();
        
//         const database = client.db('Practice');
//         const collection = database.collection('users');

//         const result = await collection.updateMany({name: 'Ranjan'}, {$set: {name: 'Ranjan Kumar Pandit', age: 21}});
//         console.log('Document updated: ', result.modifiedCount);
//     }catch(error){
//         console.log("Error replacing document: ", error);
//     }finally{
//         await client.close();
//         console.log('Disconnected from mongodb');
//     }
// }

// main().catch(console.error);





//findAndModify documented in mongodb
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/';

const client = new MongoClient(uri);

async function main(){
    try{
        await  client.connect();
        
        const database = client.db('Practice');
        const collection = database.collection('users');

        const result = await collection.findOneAndUpdate({name: 'Ranjan Kumar Pandit'}, {$set: {name: 'Ranjan'}}, {returnOriginal :true});
        console.log('Document updated: ', result.modifiedCount);
    }catch(error){
        console.log("Error replacing document: ", error);
    }finally{
        await client.close();
        console.log('Disconnected from mongodb');
    }
}

main().catch(console.error);



