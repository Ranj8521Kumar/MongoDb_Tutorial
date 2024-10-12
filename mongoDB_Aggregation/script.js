const {MongoClient, ObjectId} = require('mongodb');

const uri = 'mongodb://localhost:27017/';

const client  = new MongoClient(uri, {
    useNewUrlParser: true,  useUnifiedTopology: true,
});

async function main(){
    try{
        await client.connect();
        console.log('Connected to mongodb');

        const database = client.db('Practice');
        const collection = database.collection('users');

        //Retrieve Document by using objectid
        const result1 = await collection.find({ '_id': new ObjectId('6706dc32a609bb90925bc189') }).toArray();//find method directly return the  cursor so we  use toArray() function
        console.log(result1);

        const result2 = await collection.findOne({ '_id': new ObjectId('6706dc32a609bb90925bc189') });
        console.log(result2);

        
        //Group Pipeline

        // const pipeline = [
        //     {
        //         $group: {_id: '$age', totalAge:{$sum: '$age'}}
        //     },
        // ];



        //Using matchandgroup Stages in a MongoDB Aggregation Pipeline:

        // const  pipeline = [
        //     {
        //         $match: { 
        //             'address.city':'Siwan',
        //         }
        //     },

        //     {
        //         $group: {
        //             _id:'$age', 
        //             totalAge: {
        //                 $sum: '$age',
        //             },
        //         },
        //     },
        // ]


        //Using sortandlimit Stages in a MongoDB Aggregation Pipeline:

        // const pipeline = [
        //    {
        //         $sort:{
        //             age:-1,
        //         },
        //    },

        //    {
        //         $limit: 3,
        //    }
        // ];


        //Using project, count, and $set Stages in a MongoDB Aggregation Pipeline:

        // const pipeline = [
        //     {
        //         $project: {
        //             name: 1,
        //             _id: 0, 
        //             divideAge: {
        //                 $divide: ['$age', 5]
        //             },
        //             multiplyAge:{
        //                 $multiply:['$age', 2]
        //             }
        //         },
        //     },

        //     {
        //         $set:{
        //             userName:"Pandit"// Add a userName field to the output
        //         }
        //     },
        // ];


        //count and set:

        // const pipeline = [
        //     {
        //         $count: 'name'
        //     },

        //     {
        //         $set:{
        //             userName:"Pandit"// Add a userName field to the output
        //         }
        //     },
        // ];

        //Using $out Stage in a MongoDB Aggregation Pipeline:
        const pipeline = [
            {
                $match: {
                    'address.city':'Siwan'
                }
            },

            {
                $project: {
                    age: 1,
                    multiplyAge: {
                        $multiply: ['$age', 5]
                    }
                }
            },

            {
                $group: {
                    _id: '$age',
                    sumAge: {
                        $sum: '$age'
                    },
                    totalMultiplyAge: {
                        $sum: '$multiplyAge'  // Sum of multiplied ages
                    }
                }
            },

            {
                $out: 'newGroup1'
            },
        ];


        // const pipeline = [
        //     {
        //         $match: {
        //             'address.city':'Siwan'
        //         }
        //     },

        //     {
        //         $group: {
        //             _id: '$age',
        //             sumAge: {
        //                 $sum: '$age'
        //             }
        //         }
        //     },

        //     {
        //         $out: 'newGroup'
        //     },
        // ];


        const result = await collection.aggregate(pipeline).toArray();
        console.log('Aggregationresult: ',result);
    }catch(error){
        console.error('Error Performing aggregation: ', error);
    }finally{
        await client.close();
        console.log('Disconnected from mongodb');
    }
}


main().catch(console.error);

