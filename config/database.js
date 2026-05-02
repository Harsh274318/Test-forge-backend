import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGO_ID}:${process.env.MONGO_PASSWORD}@cluster0.d907rno.mongodb.net/testforge`,
    );
    console.log("Database connected successfully");
  } catch (error) {
    console.log("DB not connected", error);
    process.exit(1);
  }
};

export default connectDB;