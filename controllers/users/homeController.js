const {
  getUserList,
  fetchUser
} = require('../../services/user_services')

// Static API Call
const handleListing = async (req, res) => {
  res.send({'status': 'success', 'data': [1,2,3,4,5,6,7,8,9], 'error': false});
}

// Static API Call
const userListing = async (req, res) => {
  let data = [{'name': 'sanoop', 'age': 35, 'phone': 9845332456}, {'name': 'anoop', 'age': 30, 'phone': 9843343456}]
  res.send({'status': 'success', 'data': data, 'error': false})
}

// Dynamic API call
const userDynamicListing = async (req, res) => {
    return getUserList()
    .then(data => res.send({'status': 'success', 'data':data, 'error': false}))
    .catch(e => res.send({"error": "error occured while rendering handlePopular", details: e}))
}

const createUser = async (req, res) => {

    // Validate request
    if (!req.body.name) {
        res.status(400).send({ message: "Name missing!"});
        return;
    } else if(!req.body.age){
        res.status(400).send({ message: "Age Missing!"});
        return;
    }else if(!req.body.mobileNumber){
        res.status(400).send({ message: "Mobile Number Missing!"});
        return;
    }
    
    const user_data = {
                          name: req.body.name, 
                          age: req.body.age,
                          mobileNumber: req.body.mobileNumber
                         };
    return fetchUser(user_data)
    .then(data => res.send({'status': 'success', 'data':data, 'error': false}))
    .catch(e => res.send({"error": "error occured while rendering handlePopular", details: e}))
}

module.exports = {
  handleListing,
  userListing,
  userDynamicListing,
  createUser
} 


