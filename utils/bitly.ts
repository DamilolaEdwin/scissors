import axios from 'axios';


interface BitlyResponse {
  link: string;
 
}


const shortenUrl = async (longUrl: string): Promise<string | null> => {
  try {
    const response = await axios.post<BitlyResponse>(
      'https://api-ssl.bitly.com/v4/shorten',
      {
        long_url: longUrl,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.BITLY_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );


    return response.data.link;
  } catch (error) {
    console.error('Error shortening URL:', error);
    return null;
  }
};

export default shortenUrl;

