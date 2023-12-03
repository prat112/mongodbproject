require('dotenv').config();
const mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient;

let db;

const mongoConnect=(callback)=>{
  MongoClient.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PWD}@cluster0.qcghe17.mongodb.net/shop?retryWrites=true&w=majority`)
    .then(client=>{
        console.log('connected!');
        db=client.db();
        callback();
    })
    .catch((err)=>{
         console.log(err);
         throw err;
    });
};

const getDb=()=>{
  if(db)
  {
    return db;
  }
  throw 'No Database found';
}

exports.mongoConnect=mongoConnect;
exports.getDb=getDb;