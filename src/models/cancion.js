import mongoose, { Schema } from "mongoose";

const cancionSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
    maxLength: 100,
  },
  artista: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
    maxLength: 50,
  },
  categoria: {
    type: String,
    required: true,
    trim: true,
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
    required: true,
    trim: true,
    minLength: 2,
    maxLength: 50,
  },
  anio: {
    type: Number,
    required: true,
    min: 1800,
    max: 2026,
  },
  imagen: {
    type: String,
    required: true,
    trim: true,
    match: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
    
    default: "https://drive.google.com/uc?export=view&id=1RGYkIppypVEn_BGrF1qgp7MH0ZKRUApI" 
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
