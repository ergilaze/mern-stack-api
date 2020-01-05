require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGODB_URI;

exports.findUsers = (res) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        client.connect(err => {
            if (err) {
                console.log(err);
            }
            const collection = client.db("mern-stack").collection("users");
            
            collection.find({}).toArray((err, item) => {
                if (err) {
                    console.log(err);
                    
                }
                else {
                    res.send(item);
                }
            })
        })
    }
    catch (err) {
        console.log(err);
    }
    finally {
        client.close();
    }
}

exports.addUsers = (user, res) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        client.connect(err => {
            if (err) {
                console.log(err);
            }
            const collection = client.db("mern-stack").collection("users");
            
            collection.insertOne(user, () => {
                res.status(200).send('User added');
            });
        })
    }
    catch (err) {
        console.log(err);
    }
    finally {
        client.close();
    }
}