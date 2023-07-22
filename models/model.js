import axios from 'axios';

const postData = async () => {
  const apiUrl = 'http://20.244.56.144/train/register';
  const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
       
    },
    roles:{
        type:String,
        enum:["Admin","Student","Visitor"]
    }
})

  try {
    const response = await axios.post(apiUrl, dataToSend);
    console.log('Response:', response.data);
   
  } catch (error) {
    console.error('Error:', error.message);
  
  }
};

postData();
