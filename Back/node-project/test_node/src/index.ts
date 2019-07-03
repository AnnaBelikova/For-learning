import * as express  from "express"
import { Express, Request, Response } from "express-serve-static-core";
import router from "./router"
import * as bodyParser from "body-parser";
import * as cors from "cors";


const app = express();
/*app.use( express.static('views'));
app.engine('ejs', require('express-ejs-extend'));
app.set("view engine", "ejs");*/

app.use(cors());

app.use(bodyParser.json(undefined));

app.use(router)

app.use((req:Request, res:Response)=>{
    res.send("no found")
})

//mongodb+srv://Anna_Belikova:<password>@test20190630-xjgsu.mongodb.net/test?retryWrites=true&w=majority

app.listen(3000,()=>{
    console.log('start server on',3000)
})