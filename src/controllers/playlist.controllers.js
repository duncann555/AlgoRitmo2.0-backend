import Playlist from "../models/playlist.js";

// Obtener o crear playlist del usuario
export const obtenerPlaylist = async (req, res) => {
  try {
    const { userId } = req.params;

    let playlist = await Playlist.findOne({ usuario: userId }).populate("canciones");

    // Si no existe, la creamos
    if (!playlist) {
      playlist = new Playlist({ usuario: userId, canciones: [] });
      await playlist.save();
    }

    res.status(200).json(playlist);

  } catch (error) {
    res.status(500).json({
      mensaje: "Error al obtener la playlist",
      error: error.message,
    });
  }
};

// Agregar canción a la playlist
export const agregarAPlaylist = async (req, res) => {
  try {
    const { userId, cancionId } = req.params;

    let playlist = await Playlist.findOne({ usuario: userId });

    if (!playlist) {
      playlist = new Playlist({ usuario: userId, canciones: [] });
    }

    // Evitar duplicados
    if (!playlist.canciones.includes(cancionId)) {
      playlist.canciones.push(cancionId);
    }

    await playlist.save();

    res.status(200).json({
      mensaje: "Canción agregada a la playlist",
      playlist,
    });

  } catch (error) {
    res.status(500).json({
      mensaje: "Error al agregar canción",
      error: error.message,
    });
  }
};

// Borrar canción de playlist
export const borrarDePlaylist = async (req, res) => {
  try {
    const { userId, cancionId } = req.params;

    let playlist = await Playlist.findOne({ usuario: userId });

    if (!playlist) {
      return res.status(404).json({ mensaje: "La playlist no existe" });
    }

    playlist.canciones = playlist.canciones.filter(id => id.toString() !== cancionId);

    await playlist.save();

    res.status(200).json({
      mensaje: "Canción eliminada de la playlist",
      playlist,
    });

  } catch (error) {
    res.status(500).json({
      mensaje: "Error al eliminar canción",
      error: error.message,
    });
  }
};
