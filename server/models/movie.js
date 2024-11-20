import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
  user: { type: String, required: true },
  movieId: { type: Number, required: true },
  movieTitle: { type: String, required: true },
  movieImage: { type: String, required: true },
  movieVote: { type: Number, default: 0 },
});

const Movie = mongoose.model("Movie", MovieSchema);

export default Movie;
