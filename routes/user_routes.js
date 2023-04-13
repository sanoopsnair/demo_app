var express = require('express');
var router = express.Router();

const {
  handleListing,
  userListing,
  userDynamicListing,
  createUser
} = require('../controllers/users/homeController')


router.get('/list', handleListing)
router.get('/user_list', userListing)
router.get('/user_dyn_list', userDynamicListing)
router.post('/user', createUser)


module.exports = router;
