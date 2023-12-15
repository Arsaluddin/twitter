const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const { configDotenv } = require('dotenv');
const app = express();
const port = process.env.PORT || 5000;
const { BotFrameworkAdapter, MemoryStorage, ConversationState, UserState } = require('botbuilder');
configDotenv()
app.use(cors());
app.use(express.json());


const uri =  process.env.uri;
const client = new MongoClient(uri, { serverApi: ServerApiVersion.v1 });

// Bot Framework Setup
const adapter = new BotFrameworkAdapter({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword,
});

const memoryStorage = new MemoryStorage();
const conversationState = new ConversationState(memoryStorage);
const userState = new UserState(memoryStorage);

adapter.use(conversationState);
adapter.use(userState);

async function run() {
    try {
        await client.connect();
        const postCollection = client.db("database").collection("posts"); // this collection is for team-ekt
        const userCollection = client.db("database").collection("users"); // this collection is for team-srv

        // get
        app.get('/user', async (req, res) => {
            const user = await userCollection.find().toArray();
            res.send(user);
        })
        app.get('/loggedInUser', async (req, res) => {
            const email = req.query.email;
            const user = await userCollection.find({ email: email }).toArray();
            res.send(user);
        })
        app.get('/post', async (req, res) => {
            const post = (await postCollection.find().toArray()).reverse();
            res.send(post);
        })
        app.get('/userPost', async (req, res) => {
            const email = req.query.email;
            const post = (await postCollection.find({ email: email }).toArray()).reverse();
            res.send(post);
        })

        // post
        app.post('/register', async (req, res) => {
            const user = req.body;
            const result = await userCollection.insertOne(user);
            res.send(result);
        })

        app.post('/post', async (req, res) => {
            const post = req.body;
            const result = await postCollection.insertOne(post);
            res.send(result);
        })

        // patch
        app.patch('/userUpdates/:email', async (req, res) => {
            const filter = req.params;
            const profile = req.body;
            const options = { upsert: true };
            const updateDoc = { $set: profile };
            const result = await userCollection.updateOne(filter, updateDoc, options);
            res.send(result)
        })

        app.post('/api/messages', (req, res) => {
            adapter.processActivity(req, res, async (context) => {
                // Your bot logic goes here
                // For example, you can send a welcome message
                await context.sendActivity('Hello! I am your chatbot.');
            });
        });

    } catch (error) {
        console.log(error);
    }
} run(console.log('database connected')).catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello from Twitter Clone!')
})

app.listen(port, () => {
    console.log(`Twitter clone is listening on port ${port}`)
})