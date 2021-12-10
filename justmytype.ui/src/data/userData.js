import axios from "axios";

const baseUrl = "https://localhost:44370";

const getUserByFBKey = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/user/fbkey/${firebaseKey}`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const createNewUser = (user) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}/user`, user)
  .then(response => resolve(response.data))
  .catch(error => reject(error));
});

export {
  getUserByFBKey,
  createNewUser
}
