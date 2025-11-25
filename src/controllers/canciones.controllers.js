import Cancion from "../models/cancion.js";

export const crearCancion = async (req, res) => {
  try {
    console.log("Datos recibidos:", req.body); // <--- AGREGÁ ESTO para ver qué llega
    const nuevaCancion = new Cancion(req.body);
    await nuevaCancion.save();

    res.status(201).json({
      mensaje: "Canción creada correctamente",
      cancion: nuevaCancion,
    });
  } catch (error) {
    console.log("ERROR EN CREAR CANCIÓN:", error); // <--- AGREGÁ ESTO URGENTE
    res.status(500).json({
      mensaje: "Ocurrió un error al crear la canción",
      error: error.message,
    });
  }
};

export const listarCanciones = async (req, res) => {
  try {
    const canciones = await Cancion.find();
    res.status(200).json(canciones);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al listar canciones",
      error: error.message,
    });
  }
};

export const obtenerCancionID = async (req, res) => {
  try {
    const id = req.params.id;

    const cancion = await Cancion.findById(id);

    if (!cancion) {
      return res.status(404).json({
        mensaje: "No se encontró la canción con ese ID",
      });
    }

    res.status(200).json(cancion);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al obtener canción",
      error: error.message,
    });
  }
};

export const editarCancionID = async (req, res) => {
  try {
    const id = req.params.id;

    const cancionEditada = await Cancion.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!cancionEditada) {
      return res.status(404).json({
        mensaje: "No se encontró la canción con ese ID",
      });
    }

    res.status(200).json({
      mensaje: "Canción editada correctamente",
      cancion: cancionEditada,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al editar canción",
      error: error.message,
    });
  }
};

export const borrarCancionID = async (req, res) => {
  try {
    const id = req.params.id;

    const cancionEliminada = await Cancion.findByIdAndDelete(id);

    if (!cancionEliminada) {
      return res.status(404).json({
        mensaje: "No se encontró la canción con ese ID",
      });
    }

    res.status(200).json({
      mensaje: "Canción eliminada correctamente",
      cancion: cancionEliminada,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al borrar canción",
      error: error.message,
    });
  }
};
