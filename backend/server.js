// importing 
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";

// app config
const app = express();
const port = process.env.PORT || 9000// importing es6
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";

// app config
const app = express();
const port = process.env.PORT || 9000

const pusher = new Pusher({
  appId: "1419419",
  key: "3f79a1fd14a7aa9987fc",
  secret: "e38660ed58a81c3ec9f3",
  cluster: "ap2",
  useTLS: true
});

// middlewares
app.use(express.json());

// DB config
const connection_url = "mongodb+srv://AyushKatoch:ayush2002@cluster0.airoq.mongodb.net/whatsappdb?retryWrites=true&w=majority"

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.once('open', () => {
    console.log("DB Connected");

    
    const msgCollection = db.collection("messagecontent");
    // changeStream will trigger pusher to watch for any new messages
    const changeStream = msgCollection.watch();

    changeStream.on('change', (change) => {
        console.log(change);
    })
})

// ????

// api routes
app.get("/", (req, res) => res.status(200).send("hello world"));


app.get("/messages/sync", (req, res) => {
    const dbMessage = req.body;

    Messages.find(dbMessage, (err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})


app.post("/messages/new", (req, res) => {
    const dbMessage = req.body;

    Messages.create(dbMessage, (err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})



// listener
app.listen(port, ()=>console.log(`${port}`));


// middlewares
app.use(express.json());

// DB config
const connection_url = "mongodb+srv://<username>:<password>@cluster0.airoq.mongodb.net/whatsappdb?retryWrites=true&w=majority"

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// ????

// api routes
app.get("/", (req, res) => res.status(200).send("hello world"));


app.get("/messages/sync", (req, res) => {
    const dbMessage = req.body;

    Messages.find(dbMessage, (err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})


app.post("/messages/new", (req, res) => {
    const dbMessage = req.body;

    Messages.create(dbMessage, (err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})



// listener
app.listen(port, ()=>console.log(`${port}`));
