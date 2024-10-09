//ReplaceMany documented in mongodb

// const { MongoClient } = require('mongodb');

// const uri = 'mongodb://localhost:27017/';

// const client = new MongoClient(uri);

// async function main(){
//     try{
//         await  client.connect();
        
//         const database = client.db('Practice');
//         const collection = database.collection('users');

//         const result = await collection.replaceOne({name: 'Ranjan1'},  {name: 'Ranjan Kumar Pandit', age: 21});
//         console.log('Document replaced: ', result.modifiedCount);
//     }catch(error){
//         console.log("Error replacing document: ", error);
//     }finally{
//         await client.close();
//         console.log('Disconnected from mongodb');
//     }
// }

// main().catch(console.error);



//ReplaceMany documented in mongodb
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/';

const client = new MongoClient(uri);

async function main(){
    try{
        await  client.connect();
        
        const database = client.db('Practice');
        const collection = database.collection('users');

        const result = await collection.replaceMany({name: 'Ranjan Kumar Pandit'},  {name: 'Ranjan', age: 21}); //Error replacing document:  TypeError: collection.replaceMany is not a function
        console.log('Document replaced: ', result.modifiedCount);
    }catch(error){
        console.log("Error replacing document: ", error);
    }finally{
        await client.close();
        console.log('Disconnected from mongodb');
    }
}

main().catch(console.error);




// //DeleteOne  Documents  in mongoDb

// const { MongoClient } = require('mongodb');

// const uri = 'mongodb://localhost:27017/';

// const client = new MongoClient(uri);

// async function main(){
//     try{
//         await  client.connect();
        
//         const database = client.db('Practice');
//         const collection = database.collection('users');

//         const result = await collection.deleteOne({name: 'Ranjan2'});
//         console.log('Document deleted: ', result.deletedCount);
//     }catch(error){
//         console.log("Error deleting document: ", error);
//     }finally{
//         await client.close();
//         console.log('Disconnected from mongodb');
//     }
// }

// main().catch(console.error);




//DeleteMany  Documents  in mongoDb

// const { MongoClient } = require('mongodb');

// const uri = 'mongodb://localhost:27017/';

// const client = new MongoClient(uri);

// async function main(){
//     try{
//         await  client.connect();
        
//         const database = client.db('Practice');
//         const collection = database.collection('users');

//         const result = await collection.deleteMany({name: 'Ranjan'});
//         console.log('Document deleted: ', result.deletedCount);
//     }catch(error){
//         console.log("Error deleting document: ", error);
//     }finally{
//         await client.close();
//         console.log('Disconnected from mongodb');
//     }
// }

// main().catch(console.error);


