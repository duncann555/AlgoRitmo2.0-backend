import Cancion from "../models/cancion.js";

export const crearCancion = async (req, res) => {
  try {
    const nuevaCancion = new Cancion(req.body);
    await nuevaCancion.save();

    res.status(201).json({
      mensaje: "Cancion creada correctamente",
      cancion: nuevaCancion,
    });
  } catch (error) {
    console.error("Error al crear cancion:", error);
    res.status(500).json({
      mensaje: "Ocurrio un error al crear el cancion",
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

export const borrarCancionID = async (req, res) => {
  try {
    const id = req.params.id;
    const cancionEliminada = await Cancion.findByIdAndDelete(id);

    if (!cancionEliminada){
        return res.status(404).json({
            mensaje: "No se encontro la cancion con ese ID"
        })
    }

    res.status(200).json({
        mensaje: "Cancion eliminada correctamente",
        cancion: cancionEliminada,
    })
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al borrar cancion",
      error: error.message,
    });
  }
};
