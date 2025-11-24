import mongoose, { Schema } from "mongoose";

const usuarioSchema = new Schema({
  nombre: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
});

export default mongoose.model("usuario", usuarioSchema);
