import mongoose, { Schema } from "mongoose";

const usuarioSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
    minLength: 3,
    maxLength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
      "El email no es válido"
    ]
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  rol: {
    type: String,
    default: "usuario",
    enum: ["usuario", "admin"],
  },
});

export default mongoose.model("usuario", usuarioSchema);