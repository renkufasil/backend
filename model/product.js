const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://renkuhussain:raiyannehan@cluster0.kijpqgh.mongodb.net/?retryWrites=true&w=majority")
.then(() =>{console.log("Database connected")})
.catch(err =>console.log(err));



let sc = mongoose.Schema;
const studschema = new  sc(
    {
        sname:String,
        admno:Number,
        age:Number
    }
);
var studmodel = mongoose.model("stud",studschema)
module.exports=studmodel;