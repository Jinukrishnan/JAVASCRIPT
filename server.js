import express from 'express';
import env from 'dotenv';
import router from './router.js';
import cors from 'cors';
import connection from './connection.js';
import connection2 from './connection.js';
import https from 'https';
import fs from 'fs';
env.config();
const app=express();
app.use(cors());
app.use(express.static('./front-end'))
app.use(express.json({limit:"20mb"}))
app.use("/api",router)
connection2()
connection().then(()=>{
    // app.listen(process.env.PORT||80,()=>{
    //     console.log("SERVER STARTED");
    // })
    https.createServer({key:fs.readFileSync('key.pem'),
        cert:fs.readFileSync('cert.pem'),},app).listen(3000, () => {
            console.log(`Listening on port https://localhost:${3000}...`);
          });
}).catch(error=>{
    console.log(error);
})
