// import { create } from "apisauce";



import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.36:1337/api',
  headers: {
    "X-API-Key": "14cd01ffa8c1eafe173ec93cee9fd551068fd32dcbdc6099067474c3624c1f6f863b8c15f60fb47ba55546f6c1dd3bd43352027b162b1012154404256e617b69b026b22d9c07b7734b23da2b4d7b50fa939d7592f13c56401648a72d6dd7021930a88859dd13b3fd98e19d19b960d65812165f425f1c652928961781eb6186bd"
  },
});

const getSlider = () => api.get('/sliders?populate=*');
const getVedioCourse=()=>api.get('/vedio-courses?populate=*');
const getBasicCourse=()=>api.get('/basic-courses?populate=*');

export default {
  getSlider,
  getVedioCourse,
  getBasicCourse
}




// import {request, gql} from 'graphql-request';

// const MASTER_URL="https://ap-south-1.cdn.hygraph.com/content/clybbe4k602ab07w9vmq0h6fg/master";

// const getCategory=async()=>{
//   const query = gql`
//  query GetCategory{
//   categories {
//     id
//     name
//     icon {
//       url
//     }
//   }
// }
//   ` 

//   const result=await request(MASTER_URL,query);
//   return result;

// }

// export default{
//     getCategory
// };


