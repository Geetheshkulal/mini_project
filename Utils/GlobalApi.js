

import axios from 'axios';

const baseURL = process.env.API_BASE_URL || 'http://192.168.1.36:1337/api';
const apiKey = process.env.API_KEY || '';

console.log('Base URL:', baseURL);
console.log('API Key:', apiKey);

const api = axios.create({
  baseURL,
  headers: {
    "X-API-Key": apiKey
  },
});

const getSlider = () => api.get('/sliders?populate=*');
const getVedioCourse = () => api.get('/vedio-courses?populate=*');
const getBasicCourse = () => api.get('/basic-courses?populate=*');

export default {
  getSlider,
  getVedioCourse,
  getBasicCourse
};
