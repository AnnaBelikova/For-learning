import mongoose from "mongoose"
mongoose.connect ("mongodb+srv://Anna_Belikova:cjO3AR2gl7LRdlyC@test20190630-xjgsu.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true })

export const db=mongoose.connection;
db.on('error', 
console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB OPEN!') ;
});



export interface Bike{

    id:number,
    name:string
}
