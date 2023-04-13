// const {

// } = require('../services/restaurantService')

// const models = require( '../models/user');

const handleListing = async (req, res) => {

  return ({'status': 'success', 'data': [1,2,3,4,5,6,7,8,9], 'error': false})

  // return getPopularRestaurants()
  //   .then(data => res.send(data))
  //   .catch(e => res.send({"error": "error occured while rendering handleListing", details: e}))
}

module.exports = {
  handleListing
}