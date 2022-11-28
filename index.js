const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const Register=require("./registerschema.js")
const port=3000


app.use(bodyParser.urlencoded({
	extended:true
}))

app.use(bodyParser.json())

app.use(cors())
mongoose.connect("mongodb+srv://asmapathan:asmapathan@cluster0.2czs7an.mongodb.net/firstdb?retryWrites=true&w=majority")
   .then(()=>{
   	console.log("Connection established")
   })
   .catch((err)=>{
   	console.log(err)
   })

app.get("/",(req,res)=>{
	res.send("dummy root route")
})

app.post("/register",(req,res)=>{
	//const {email,passcode}=req.body;
	const email="user1@gmail.com",passcode="12345"
	const newFrontendUser= new Register({
		username:email,
		password:passcode
	})
	newFrontendUser.save()
})



app.listen(port,()=>console.log("Server is running on port",port))