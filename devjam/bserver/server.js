import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import Detail,{Accepted, Declined, Fdetails,Request} from "./models/signupModel.js";


const app = express();
//Middleware
app.use(cors());
app.use(express.json());

//connecting mongoose
const url =
  "mongodb+srv://prathamesh:G4mzIfdkB5KFufh3@cluster0.sqgnq.mongodb.net/FirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then(() => {
    console.log("connected");
  })
  .catch((e) => {
    console.log(e);
  });

//Taking input from react and sending to database

app.post("/signup", (req, res) => {
  // console.log("recived")
  const password = req.body.password;
  const cpassword = req.body.confirmpassword;

  if (password === cpassword) {
    const userids = new Detail({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      confirmpassword: req.body.confirmpassword,
      idnumber: req.body.idnumber,
      number: req.body.number,
    });
    userids.save();
    res.status(200).json({ signup: true });
  } else {
    res.status(404).json({ signup: false });
  }
});

app.get('/',(req,res)=>{
  Fdetails.find({},(err,result)=>{
    if(err){
      console.log(err)
    }
    else{
      res.json(result)
    }
  })
})

app.post("/fsignup",(req,res)=>{

    const newUser = new Fdetails({
      email : req.body.email,
      password: req.body.password
    })
    newUser.save();
    res.send("user added")
  
})
//Validating student login details
app.post("/login", (req, res) => {
  console.log("logged in");
  const email = req.body.email;
  const password = req.body.password;
  const id=req.body.idnumber;
  Detail.findOne({ "email": email }, (err, result) => {
    if (err) {
      res.status(400).json({ error: true });
    } else {
      if (result) {
        if (result.password === password) {
          res.status(200).json({ login: true,user_id:result._id });
          
        } else {
          res.status(200).json({ login: false });
        }
      } else {
        res.status(200).json({ found: false });
      }
    }
  });
});
app.post("/flogin", (req, res) => {
  console.log("logged in");
  const email = req.body.email;
  const password = req.body.password;
  console.log(email);
  console.log(password);
  Fdetails.findOne({ "email": email }, (err, result) => {
    if (err) {
      res.status(400).json({ error: true });
    } else {
      console.log("result = ", result);
      if (result) {
        if (result.password === password) {
          res.status(200).json({ login: true });
        } else {
          res.status(200).json({ login: false });
        }
      } else {
        res.status(200).json({ found: false });
      }
    }
  });
});






// sending request data to database
app.post("/addRequest",(req,res)=>{
  console.log("got req")
    const request = new Request({
      categeory: req.body.categeory,
      userid: req.body.userid,
      facultyid: req.body.facultyid,
      reason: req.body.reason,
      accpected: true,
    });
    console.log(request)
    request.save();
    res.json({"success":true})
});

app.get("/request",(req,res)=>{
  Request.find({},(err,result )=>{
    if(err){
      console.log(err)
    }
    else{
      res.json(result);
    }
  })
})


//sending Accepted Data to databse

app.post("/accepted", (req, res) => {
  console.log("got req");
  const accrequest = new Accepted({
    categeory: req.body.categeory,
    userid: req.body.userid,
    facultyid: req.body.facultyid,
    reason: req.body.reason,
    accpected: true,
  });
  console.log(accrequest);
  accrequest.save();
  res.json({ success: true });
});



app.get("/accepted",(req,res)=>{
  Accepted.find({},(err,result )=>{
    if(err){
      console.log(err)
    }
    else{
      res.json(result);
    }
  })
})



//sending declined data to database
app.post("/declined", (req, res) => {
  console.log("got req");
  const decrequest = new Declined({
    categeory: req.body.categeory,
    userid: req.body.userid,
    facultyid: req.body.facultyid,
    reason: req.body.reason,
    accpected: true,
  });
  console.log(decrequest);
  decrequest.save();
  res.json({ success: true });
});

app.get("/declined", (req, res) => {
  Declined.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

//Runnig on Port
app.listen(4000, () => {
  console.log("server started at port 4000");
});
