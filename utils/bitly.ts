// import axios from 'axios';


// interface BitlyResponse {
//   link: string;
 
// }


// const shortenUrl = async (longUrl: string): Promise<string | null> => {
//   try {
//     const response = await axios.post<BitlyResponse>(
//       'https://api-ssl.bitly.com/v4/shorten',
//       {
//         long_url: longUrl,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.BITLY_ACCESS_TOKEN}`,
//           'Content-Type': 'application/json',
//         },
//       }
//     );


//     return response.data.link;
//   } catch (error) {
//     console.error('Error shortening URL:', error);
//     return null;
//   }
// };

// export default shortenUrl;

import axios from 'axios';

const BITLY_API_URL = 'https://api-ssl.bitly.com/v4/shorten';
const BITLY_ACCESS_TOKEN = process.env.BITLY_ACCESS_TOKEN;

// Define the type for the API response
interface BitlyResponse {
  link: string;
  id: string; // Add other fields from the response if needed
}

export async function shortenUrl(longUrl: string): Promise<string | null> {
  try {
    const response = await axios.post<BitlyResponse>(
      BITLY_API_URL,
      { long_url: longUrl },
      {
        headers: {
          Authorization: `Bearer ${BITLY_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );
    
    // TypeScript now knows that response.data is of type BitlyResponse
    return response.data.link;
  } catch (error) {
    console.error('Error shortening URL:', error);
    return null;
  }
}
