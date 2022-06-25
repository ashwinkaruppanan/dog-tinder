import express from "express";
import mongoose from "mongoose";
import Cors from 'cors';

import Cards from './dbCards.js';

// App config
const app = express();
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://kathu:Y738EQVXtiBFTvxO@cluster0.3s62e.mongodb.net/?retryWrites=true&w=majority'

// Middleware
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(connection_url).then(() => console.log('db connected'))

// API endpoints
app.get('/', (req, res) => res.status(200).send("working.../"))

app.post('/card', (req, res) => {
    const dbCards = req.body;

    Cards.create(dbCards, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});

app.get('/card', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

// Listner
app.listen(port, () => console.log(`server is up on port ${port}`))