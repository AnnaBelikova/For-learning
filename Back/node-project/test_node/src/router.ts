import * as express  from "express"
import { Request, Response } from "express-serve-static-core";
import { Bike, db } from './models';

const router= express.Router()

const bikes:Bike[] = [
    {
        id:1,
        name: "Suzuki"
    },
    {
        id:2,
        name: "Honda"
    },
    {
        id:3,
        name: "Orlenok"
    }
]



router.get("/",(req:Request, res:Response)=>{
    console.log(req.query)
    res.render("index", {
        name:req.query.name||'',
        bikes:[],
    });
})

router.get("/bikes",(req:Request, res:Response)=>{
    res.render("bikes/list",{
        name:"<h1>biker</h1>",
        bikes:bikes
    });

    res.json(bikes);
})



router.get("/bike/:id",(req:Request, res:Response)=>{
   try{
    const id = parseInt(req.params.id,10);
    console.log(id)
    if (isNaN(id)){
        throw new Error("some error")
    }
    const bike = bikes.filter((el:Bike)=>{
        return id == el.id
    })
   res.json(bike);
   }catch(e){
       res.json({error:"Can not parse id"})
   }
})


router.post("/bike",(req:Request, res:Response)=>{
    console.log(req.body)
    const bike: Bike ={...req.body,id: bikes.length};
    bikes.push(bike);
    res.json(bike);
})

export default router