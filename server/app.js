import express from 'express';
import 'dotenv/config';

// create server
const app = express();

// middlewares
app.use(express.json());

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));