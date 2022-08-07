import mongoose from "mongoose";

async function connect(server) {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connect to DB success!");
    server();
  } catch (e) {
    console.log("Connect to server fail: ", e);
  }
}

export default connect;
