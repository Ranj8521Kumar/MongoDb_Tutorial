// //deleteOne documented in mongodb
// const { MongoClient } = require('mongodb');

// const uri = 'mongodb://localhost:27017/';

// const client = new MongoClient(uri);

// async function main(){
//     try{
//         await  client.connect();
        
//         const database = client.db('Practice');
//         const collection = database.collection('users');

//         const result = await collection.deleteOne({name: 'Ranjan'}, {$set: {name: 'Ranjan'}}, {returnOriginal :true});
//         console.log('Document Deleted: ', result.deletedCount);
//     }catch(error){
//         console.log("Error deleting document: ", error);
//     }finally{
//         await client.close();
//         console.log('Disconnected from mongodb');
//     }
// }

// main().catch(console.error);




// //deleteMany documented in mongodb
// const { MongoClient } = require('mongodb');

// const uri = 'mongodb://localhost:27017/';

// const client = new MongoClient(uri);

// async function main(){
//     try{
//         await  client.connect();
        
//         const database = client.db('Practice');
//         const collection = database.collection('users');

//         const result = await collection.deleteMany({age: { $gte: 21}}, {$set: {name: 'Ranjan'}}, {returnOriginal :true});
//         console.log('Document Deleted: ', result.deletedCount);
//     }catch(error){
//         console.log("Error deleting document: ", error);
//     }finally{
//         await client.close();
//         console.log('Disconnected from mongodb');
//     }
// }

// main().catch(console.error);




//findOneAndDelete documented in mongodb
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/';

const client = new MongoClient(uri);

async function main(){
    try{
        await  client.connect();
        
        const database = client.db('Practice');
        const collection = database.collection('users');

        const result = await collection.findOneAndDelete({age: 12}, {$set: {name: 'Ranjan'}}, {returnOriginal :true});
        console.log('Document Deleted: ', result);
    }catch(error){
        console.log("Error deleting document: ", error);
    }finally{
        await client.close();
        console.log('Disconnected from mongodb');
    }
}

main().catch(console.error);


