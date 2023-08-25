import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
        required: true,
    
  },
}, {
      timestamps :true  // to add createdAt and updatedAt field in the schema
});


const User = mongoose.model('User', userSchema);

export default User;