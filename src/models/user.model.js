import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
fullName:{
    firstname:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
    }
},

  email:{
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },

  password: {
    type: String,
    required: true,
    minlength: 1,
    select: false 
  },

}, { timestamps: true });

export default mongoose.model("User", userSchema);
