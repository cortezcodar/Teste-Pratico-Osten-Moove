import express, { Application } from "express";
import bodyParser from "body-parser";

const app: Application = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false })); 

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
