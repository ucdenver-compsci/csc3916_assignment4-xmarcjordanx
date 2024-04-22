const mongoose = require('mongoose');
const Movie = require('./models/Movies');

mongoose.connect('mongodb://localhost:27017/webapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define the aggregation pipeline
Movies.aggregate([
  {
    $match: { _id: movieId }
  },
  {
    $lookup: {
      from: "reviews",
      localField: "reviews",
      foreignField: "_id",
      as: "movieReviews" 
    }
  }
]).exec(function(err, results) {
  if (err) {
    // Handle error
    console.error(err);
  } else {
    console.log(result);
  }
});
