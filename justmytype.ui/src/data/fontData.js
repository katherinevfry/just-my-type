import axios from "axios";


const baseUrl = "https://localhost:44370";

const getUserFonts = (userId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/users/fonts/${userId}`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const saveFont = (font) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}/fonts/post`, font)
  .then(response => resolve(response.data))
  .catch(error => reject(error));
});


const deleteFont = (fontId) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}/fonts/delete/${fontId}`)
  .then(response => resolve(response.data))
  .catch(error => reject(error));
});

export {
  getUserFonts,
  saveFont,
  deleteFont
}
