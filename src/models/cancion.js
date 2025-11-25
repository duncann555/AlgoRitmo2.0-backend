import mongoose, { Schema } from "mongoose";

const cancionSchema = new Schema({
  nombre: {
    type: String,
    minLength: 2,
    maxLength: 100,
    required: true,
    trim: true,
  },
  artista: {
    type: String,
    minLength: 2,
    maxLength: 50,
    required: true,
    trim: true,
  },
  categoria: {
    type: String,
    required: true,
    enum: [
      "Pop",
      "Rock",
      "Urbano",
      "Balada",
      "Cumbia",
      "Electrónica",
      "Regueton",
      "Tango",
      "Folcklore",
      "Jazz",
      "Romantico",
      "Lentos",
      "Cuarteto",
      "Clasica",
      "Trap",
    ],
  },
  album: {
    type: String,
    minLength: 2,
    maxLength: 50,
    required: true,
    trim: true,
  },
  anio: {
    type: Number,
    required: true,
    min: 1800,
    max: 2026,
  },
  imagen: {
    type: String,
    required: [true, "La imagen es obligatoria"],
    match: [
      /^https?:\/\/.*\.(jpg|jpeg|png|webp)$/i,
      "La URL de imagen no es válida",
    ],
  },
  duracion: {
    type: String,
    required: true,
    trim: true,
    match: /^([0-9]{2}):([0-9]{2})$/,
  },
});

const Cancion = mongoose.model("cancion", cancionSchema);

export default Cancion;
