
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://nunomarques:JhhwOvTNH2oHwvI1@techof.l1ey8sn.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    
    var people = await getAllPeople();
    //console.log(people);
    //await createPeople();
    console.log(await getPeopleByName("Nuno"));

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

getAllPeople = async () => {
    try {
        await client.connect();
        const database = client.db("Fullstack");
        const collection = database.collection("People");

        let results = await collection.find({}).toArray();
        
        return results;
    }
    catch(err) {
        console.log(err);
    }
    finally {
        await client.close();
    }
}

createPeople = async () => {
    await client.connect();

    var collection = client.db("Fullstack").collection("People");

    let newPerson = {
        name: { firstName: "Harvey", lastName: "Specter" },
        age: 32,
        address: { city: "New York", country: "USA" },
    };

    await collection.insertOne(newPerson);
    
}

getPeopleByName = async (nameValue) => {
    try {
        await client.connect();
        const database = client.db("Fullstack");
        const collection = database.collection("People");

        var query = { "name.firstName" : nameValue };

        let results = await collection.find(query).toArray();
        
        return results;
    }
    catch(err) {
        console.log(err);
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);
