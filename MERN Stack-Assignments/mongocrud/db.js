const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;

let database;
let objectId = mongodb.ObjectId;
async function getDatabase(){

    //Correct Mongodb connection string
    const client = await mongoClient.connect('mongodb://127.0.0.1:27017');
    database = client.db("t1");
    if(database){
        console.log("Database Connected Successfully");
    }
    else{
        console.log("Database Connection Failed");
    }
    return database;
}
module.exports = {getDatabase,objectId};