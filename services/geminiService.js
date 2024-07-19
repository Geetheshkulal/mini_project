import axios from 'axios';
import { GEMINI_API_KEY } from '@env';

const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

const generateContent = async (text) => {

  try {
    const response = await axios.post(`${apiUrl}?key=${GEMINI_API_KEY}`, {
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

// const apiKey = '';

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
