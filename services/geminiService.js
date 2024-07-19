


import axios from 'axios';
// import dotenv from 'dotenv';

// dotenv.config();

const apiKey = process.env.GEMINI_APP_API_KEY;
const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

const generateContent = async (text) => {
  try {
    const response = await axios.post(`${apiUrl}?key=${apiKey}`, {
      contents: [
        {
          parts: [
            {
              text: text,
            },
          ],
        },
      ],
    });
    return response.data;
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    throw error;
  }
};

export { generateContent };


// import axios from 'axios';

// const apiKey = 'AIzaSyC-GKe8Tq_Gz5sW9czc9XgWJieFX1UArz8'; 

// const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

// const generateContent = async (text) => {
//   try {
//     const response = await axios.post(`${apiUrl}?key=${apiKey}`, {
//       contents: [
//         {
//           parts: [
//             {
//               text: text,
//             },
//           ],
//         },
//       ],
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error calling Gemini API:', error);
//     throw error;
//   }
// };

// export { generateContent };
