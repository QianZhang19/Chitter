import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import { router as signup } from './routes/signUp.js'
import { router as login } from './routes/login.js'
import { router as postPeep } from './routes/postPeep.js'
import { router as seePeeps } from './routes/seePeeps.js'

dotenv.config()

const post = process.env.PORT;
const host = process.env.HOST;

const main = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.DBURI, { useNewUrlParser: true });
    } catch (e) {
        console.log(`Failed to connect to database at ${process.env.DBURI} with error: ${e.message}`);
    }
}

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/signUp', signup);
app.use('/login', login);
app.use('/postPeep', postPeep);
app.use('/seePeeps', seePeeps);

main();

const server = app.listen(post, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`App is listening at http://${SERVERHOST}:${SERVERPORT}`);
})

export default server;
