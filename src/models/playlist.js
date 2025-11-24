import mongoose, { Schema } from "mongoose";

const playlistSchema = new Schema({
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "usuario",
    required: true,
  },
  canciones: [
    {
      type: Schema.Types.ObjectId,
      ref: "cancion",
    },
  ],
});

export default mongoose.model("playlist", playlistSchema);
