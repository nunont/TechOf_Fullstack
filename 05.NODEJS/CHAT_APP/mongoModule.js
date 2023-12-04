
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

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
    /* var rooms = await getAllRooms();
    console.log(rooms); */

    /* let newRoom = {
        name: "FS Room",
        tags: ["Fullstack", "Web", "Programming"]
    }
    await createRoom(newRoom); */

    /* var result = await getRoomByName('FS Room');
    console.log(result); */

    let newMessage = {
        sender: {
            name: "Nuno Marques",
            username: "nunomarques"
        },
        message: "Hello World"
    }
    await createMessage("656e3b592c2aa986aa66e72c", newMessage);
}

getAllRooms = async ()=> {
    try {
        await client.connect();
        const database = client.db("Fullstack");
        const collection = database.collection("CHAT_ROOMS");

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

createRoom = async (room) => {

    try {
        await client.connect();
        const database = client.db("Fullstack");
        const collection = database.collection("CHAT_ROOMS");

        if (room.name == null || room.name == "") {
            throw "Room name is required";
        }

        if (room.messages == null) {
            room.messages = [];
        }

        await collection.insertOne(room);
    }
    catch(err) {
        console.log(err);
    }
    finally {
        await client.close();
    }

}

getRoomByName = async (nameValue) => {
    try {
        await client.connect();
        const database = client.db("Fullstack");
        const collection = database.collection("CHAT_ROOMS");

        var query = { name : nameValue };

        let results = await collection.findOne(query).toArray();
        
        return results;
    }
    catch(err) {
        console.log(err);
    }
    finally {
        await client.close();
    }
}

createMessage = async (roomId, message) => {
    try {
        await client.connect();
        const database = client.db("Fullstack");
        const collection = database.collection("CHAT_ROOMS");

        var query = { _id :  new ObjectId(roomId) };
        var room = await collection.findOne(query);

        if (room == null) {
            throw "Room not found";
        }

        /* if (room.messages == null) {
            room.messages = [];
        } */

        if (message.sender == null || message.sender == "") {
            throw "Message sender is required";
        }
        if (message.message == null || message.message == "") {
            throw "Message text is required";
        }

        message.date = new Date();

        room.messages.push(message);

        await collection.updateOne(query, { $set: room });
    } catch (error) {
        console.log(error);
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);
