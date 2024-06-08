// import mongoose from "mongoose";

// export const  connectDB = async () =>{
//     await mongoose.connect("mongodb+srv://pranshu:Pranshu%40123@cluster0.hy69jmh.mongodb.net//food-del",{
//         useUnifiedTopology: true,
//         useNewUrlParser: true}).then(()=>console.log("DB Connected"))
// }

 import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://pranshu:Pranshu%40123@cluster0.hy69jmh.mongodb.net/food-del', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected");
  } catch (error) {
    console.error("DB Connection Error:", error);
  }
};
// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.