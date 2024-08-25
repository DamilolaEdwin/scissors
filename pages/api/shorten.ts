// import type { NextApiRequest, NextApiResponse } from 'next';
// import shortenUrl from '../../utils/bitly';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { longUrl } = req.body;
//     const shortUrl = await shortenUrl(longUrl);
//     res.status(200).json({ shortUrl });
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }

import type { NextApiRequest, NextApiResponse } from 'next';
import { shortenUrl } from '../../utils/bitly'; // Adjust this import if necessary

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { longUrl } = req.body;

    try {
      // Shorten the URL using the Bitly API
      const shortUrl = await shortenUrl(longUrl);

      if (!shortUrl) {
        return res.status(500).json({ error: 'Failed to shorten URL' });
      }

      // Generate the QR code URL using the Bitly API
      const qrCodeUrl = `${shortUrl}/qrcode`;

      // Respond with both the shortened URL and the QR code URL
      res.status(200).json({ shortUrl, qrCodeUrl });
    } catch (error) {
      console.error('Error in API:', error);
      res.status(500).json({ error: 'Failed to shorten URL or generate QR code' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
