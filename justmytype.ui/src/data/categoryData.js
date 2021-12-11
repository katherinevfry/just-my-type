import axios from "axios";


const baseUrl = "https://localhost:44370";
const googleAPI = "AIzaSyBQvsOQ85vFGS7UqDJKAjVWOrtcPtVc4Dw";

const getUserCategories = (userId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/users/categories/${userId}`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const createCategory = (category) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}/categories/post`, category)
  .then(response => resolve(response.data))
  .catch(error => reject(error));
});


const deleteCategory = (id) => new Promise((resolve, reject) => {
  axios.delete(`${baseUrl}/categories/delete/${id}`)
  .then(response => resolve(response.data))
  .catch(error => reject(error));
});

//category font calls

const addFontToCategory = (categoryFont) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}/categoryFonts/post`, categoryFont)
  .then(response => resolve(response.data))
  .catch(error => reject(error));
});

const removeFontFromCategory = (id) => new Promise((resolve, reject) => {
  axios.delete(`${baseUrl}/delete/${id}`)
  .then(response => resolve(response.data))
  .catch(error => reject(error));
});

const getCategoryFonts = (categoryId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/categories/fonts/${categoryId}`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const getGoogleFonts = () => new Promise((resolve, reject) => {
  axios.get(`https://www.googleapis.com/webfonts/v1/webfonts?key=${googleAPI}`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

export {
  getUserCategories,
  createCategory,
  deleteCategory,
  addFontToCategory,
  removeFontFromCategory,
  getCategoryFonts,
  getGoogleFonts
}
