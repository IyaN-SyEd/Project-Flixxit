import mongoose from "mongoose";

const watchListSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  likedMovies: Array,
});

const WatchList = mongoose.model("WatchList", watchListSchema);

export default WatchList;