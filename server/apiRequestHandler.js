const apiHandler = {};

apiHandler.getData = (req, res, next) => {
  const placeId = req.params.place_id; //req.body.place_id ChIJAzVd6_BYwokRahMskpFCrFg
  // const dummy_url =
  //   'https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJAzVd6_BYwokRahMskpFCrFg&fields=name,rating,reviews&key=AIzaSyChCEgMt6qarWjaO3FL9aL9cJiPmd6iRXk';
  const real_url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=AIzaSyChCEgMt6qarWjaO3FL9aL9cJiPmd6iRXk`;
  // sarabeths restaurant
  fetch(real_url)
    .then((response) => response.json())
    // obj of data // get from result property
    .then((restuarant_data) => {
      // used map to return array of all reviews
      // looks like this [{}, {}]
      const reviews = restuarant_data.result.reviews.map((review) => ({
        author_name: review.author_name,
        author_url: review.author_url,
        profile_photo_url: review.profile_photo_url,
        rating: review.rating,
        text: review.text,
        time: review.time,
      }));

      res.locals.reviews = reviews;
      next();
    })
    .catch((err) => {
      return next({
        log: 'apiHandler error',
        status: 404,
        message: 'something went wrong in apiHandler.getData. probably in url',
      });
    });
};
module.exports = apiHandler;
