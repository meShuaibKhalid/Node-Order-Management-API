import express from 'express';
import cors from 'cors';
import http from 'http';
import dotenv from 'dotenv';
dotenv.config();
import dataBaseConfig from './db/config';

const app = express();
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use(
  cors({
    origin: "*",
  })
);
app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,PUT, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});


// create a server 
const server = http.createServer(app);
const port = process.env.PORT || 3001;
app.set('port', port);

// connect to database
dataBaseConfig();

server.listen(port);
server.on('listening', () => {
    console.log(`Listening on ${port}`);
});


app.get('/', (req, res) => {
  res.send(`Server is running!`);
});

app.use("/api/orders", require('./api/orders'));

export default app;
