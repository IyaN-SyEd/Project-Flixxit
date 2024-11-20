import mongoose from "mongoose";

const connectdb = async () => {
  try {
    const connects = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB Connected: ${connects.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectdb;