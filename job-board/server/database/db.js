import mongoose from "mongoose";

const DBConnection = async () => {
  const MONGO_URI = `mongodb+srv://jhalak:1234@cluster0.lai3y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error.message);
  }
};

export default DBConnection;
