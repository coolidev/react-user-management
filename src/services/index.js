import axios from "axios";

const fetchUsers = () => {
  return axios.get(process.env.REACT_APP_API_URL + '/users').then(res => {
    return res.data;
  })
};
const addUser = (newUser) => {
  return axios.post(process.env.REACT_APP_API_URL + '/users', newUser).then(res => {
    return res.data;
  })
};
const updateUser = (userToUpdate) => {
  return axios.post(process.env.REACT_APP_API_URL + '/users/' + userToUpdate._id, userToUpdate).then(res => {
    return res.data;
  })
};

export default {
  fetchUsers,
  addUser,
  updateUser
}
