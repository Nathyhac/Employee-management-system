import express, { json } from 'express';
import cors from "cors";
import employees from './fbConfig';

const app = express();
app.use(json())
app.use(cors());

app.post("./create", async (req,res)=>{
    const data = req.body;
    console.log("data of employees", data);

    res.send("employee added")
});

app.listen(4000,() => console.log("server is running"))