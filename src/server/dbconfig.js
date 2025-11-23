import mongoose from "mongoose";

try {
  mongoose.connect(process.env.MONGODB).then(() => {
    console.info("BD CONECTADA CORRECTAMENTE");
  });
} catch (error) {
  console.error(error);
}

export default mongoose;
