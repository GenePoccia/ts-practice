import  express = require('express')
import multer = require('multer')
import cors = require('cors')
import bodyParser = require('body-parser')
import Mongo = require('mongoDB')

//express
const app: express.Application = express()
//multer
const UPLOAD_PATH = 'uploads'
const upload = multer({dest: `${UPLOAD_PATH}/`})
//cors
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
//bodyParser
app.use(bodyParser())
//MongoDB
const MongoClient = Mongo.MongoClient
const url = 'mongodb+srv://gene:panama13@cluster0-9verg.mongodb.net/test?retryWrites=true&w=majority'
let dbs: any = undefined

MongoClient.connect(url, (err, allDbs) => {
    console.log(err);
    dbs = allDbs;
  });
  


app.get('/', (req,res) => {
    res.send('Hello World')
})

app.get("/planter", (req, res) => {
    let db = dbs.db("items");
    db.collection("planters")
      .find({})
      .toArray((err: Error, results: Array<Object>) => {
        console.log(err);
        res.send(JSON.stringify({ success: true, results }));
      });
  });

app.listen(4000, () => {
console.log('Listening on port 4000')
})