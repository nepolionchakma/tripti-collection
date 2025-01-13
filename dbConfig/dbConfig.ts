import mongoose from "mongoose";

export const connect = async () => {
  try {
    const url = process.env.MONGODB_URL!;
    await mongoose.connect(url);

    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Database connected successfully");
    });
    connection.on("error", (err) => {
      console.log("Database connection failed");
      console.log(err);
      process.exit();
    });
  } catch (error) {
    console.log("Database connection failed");
    console.log(error);
  }
};
