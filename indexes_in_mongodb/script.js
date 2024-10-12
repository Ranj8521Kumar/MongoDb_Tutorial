// Import the MongoDB Node.js driver
const { MongoClient } = require("mongodb");

// MongoDB connection URI
const uri = "mongodb://localhost:27017/";

async function main() {
  // Connect to MongoDB
  const client = new MongoClient(uri);
  // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Connect to the MongoDB server
    await client.connect();

    // Access/Create the "Practice" database
    const database = client.db("Practice"); // Connecting to the Practice database

    // Access/create the "users" collection
    const collection = database.collection("sells"); // Collection will be created if not existing

    // Insert a new document
    // const result = await collection.insertMany([
    //   { name: "Laptop", category: "Electronics", price: 1200 },
    //   { name: "Phone", category: "Electronics", price: 800 },
    //   { name: "Tablet", category: "Electronics", price: 400 },
    //   { name: "Keyboard", category: "Accessories", price: 100 },
    //   { name: "Mouse", category: "Accessories", price: 50 },
    // ]);

    // // Query Without an Index
    // const document = await collection.find({ category: "Electronics"});
    // const document = await collection.find({ category: "Electronics" }).explain("executionStats");//This will show a COLLSCAN (collection scan), indicating that MongoDB is scanning every document.
    // const document = await collection.explain().find({ category: "Electronics"});//error
    //console.log(document);

    // Creating an Index
    // await collection.createIndex({category:1});//The 1 specifies that the index should be created in ascending order. If you wanted a descending index, you would use -1 instead.
    // await collection.createIndex({category:-1});

    //Query After Creating the Index
    // const document = await collection.find({category:"Electronics"}).explain("executionStats");//This time, you should see IXSCAN (index scan) instead of COLLSCAN, showing that MongoDB is using the index to fulfill the query.
    // console.log(document);

    //Creating a Compound Index
    // await collection.createIndex({category:1, price:-1});
    //Using the Compound Index in a Query
    // const document = await collection.find({category:"Electronics", price:{$gte:500}}).explain("executionStats");//This time, you should see IXSCAN (index scan) instead of COLLSCAN, showing that MongoDB is using the index to fulfill the query.
    // console.log(document);


    //  const result1 = await collection.insertMany([
    //         { name: "Laptop", tags: ["Electronics", "Computer", "Gadgets"] },
    //{ name: "Phone", tags: ["Electronics", "Mobile", "Gadgets"] },
    //{ name: "Tablet", tags: ["Electronics", "Computer", "Mobile"] },
    //{ name: "Headphones", tags: ["Accessories", "Audio"] },
    //{ name: "Smartwatch", tags: ["Wearable", "Electronics", "Accessories"] }
    //       ]);

    //Creating a Multikey Index
    // await collection.createIndex({tags:1});

    //Querying Using a Multikey Index
    // const document = await collection.find({tags:"Electronics"}).explain("executionStats");//This time, you should see IXSCAN (index scan) instead of COLLSCAN, showing that MongoDB is using the index to fulfill the query.
    // console.log(document);

    //Multikey Index on Embedded Documents
    // await collection.insertMany([
    //     {
    //       name: "Laptop",
    //       specifications: [
    //         { feature: "RAM", value: "16GB" },
    //         { feature: "Storage", value: "512GB SSD" }
    //       ]
    //     },
    //     {
    //       name: "Phone",
    //       specifications: [
    //         { feature: "RAM", value: "8GB" },
    //         { feature: "Storage", value: "256GB" }
    //       ]
    //     }
    // ]);
      
    // await collection.createIndex({"specifications.feature":1});
    // const document = await collection.find({"specifications.feature": "RAM"}).explain("executionStats");//This time, you should see IXSCAN (index scan) instead of COLLSCAN, showing that MongoDB is using the index to fulfill the query.
    // console.log(document);


    // //Compound Multikey Indexes
    // await collection.insertMany([
    //     {
    //       name: "Smartphone",
    //       tags: ["Electronics", "Mobile"],
    //       stores: ["StoreA", "StoreB"]
    //     },
    //     {
    //       name: "Laptop",
    //       tags: ["Electronics", "Computer"],
    //       stores: ["StoreB", "StoreC"]
    //     }
    //   ]);
      
    // await collection.createIndex({ tags: 1, stores: 1 });
    // // const document = await collection.find({"specifications.feature": "RAM"}).explain("executionStats");//This time, you should see IXSCAN (index scan) instead of COLLSCAN, showing that MongoDB is using the index to fulfill the query.
    // // console.log(document);

    //Error: Indicates that you're trying to create a compound multikey index on two array fields (stores and tags) in the same collection. MongoDB does not support creating compound indexes on multiple array fields because it can lead to ambiguity and inefficiencies in how the index is constructed.



    // //Viewing Existing Indexes
    // const indexes = await collection.indexes();//In mongoDb shell use getIndexes() function
    // console.log(indexes);

    // Deleting an Index
    // await collection.dropIndex({category:1});
    await collection.dropIndexes({category:1, price:-1},{tags:1});


    
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

main().catch(console.error); //Error Handling for async Functions
