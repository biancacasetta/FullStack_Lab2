import express from 'express';
import 'dotenv/config';
import { router } from './router.js';

// create server
const app = express();

// middlewares
app.use(express.json());
app.use(express.static("../client/dist"));
app.use(router);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));