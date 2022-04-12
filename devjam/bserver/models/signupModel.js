import mongoose from 'mongoose'

const signupSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    idnumber:{
        type:String,
        required:true
        
    },
    number:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    confirmpassword:{
        type:String,
        required:true
    }
})

const Detail = new mongoose.model("Detail",signupSchema)


const facultySchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Fdetails = new mongoose.model("Fdetails", facultySchema);

const requestSchema = new mongoose.Schema({
    reason:{
        type:String,
        required:true
    },
    userid:{
        type:String,
        required:true
    },
    facultyid:{
        type:String,
        required:true
    },
    accpected:{
        type:Boolean,
        required:true
    },
    categeory:{
        type:String,
        required:true
    }

})

const Request =new mongoose.model("Request",requestSchema);


const acceptedSchema = new mongoose.Schema({
  reason: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
    required: true,
  },
  facultyid: {
    type: String,
    required: true,
  },
  accpected: {
    type: Boolean,
    required: true,
  },
  categeory: {
    type: String,
    required: true,
  },
});

const Accepted = new mongoose.model("Accepted",acceptedSchema)

const declineSchema = new mongoose.Schema({
  reason: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
    required: true,
  },
  facultyid: {
    type: String,
    required: true,
  },
  accpected: {
    type: Boolean,
    required: true,
  },
  categeory: {
    type: String,
    required: true,
  },
});

const Declined = new mongoose.model("Declined",declineSchema)

export default Detail;
export {Fdetails,Request,Accepted,Declined}