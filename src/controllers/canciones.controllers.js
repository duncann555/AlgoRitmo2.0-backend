import Cancion from "../models/cancion.js";

export const crearCancion = async (req, res) => {
  try {
    const { nombre, artista, categoria, album, anio, imagen, duracion } =
      req.body;

    if (!imagen || !/^https?:\/\/.*\.(jpg|jpeg|png|webp)$/i.test(imagen)) {
      return res.status(400).json({
        mensaje: "Debe enviar una URL de imagen válida",
      });
    }

    const nueva = new Cancion({
      nombre,
      artista,
      categoria,
      album,
      anio,
      imagen,
      duracion,
    });

    await nueva.save();

    res.status(201).json({ mensaje: "Canción creada correctamente" });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al registrar canción",
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
