import type { NextApiRequest, NextApiResponse } from 'next';
import shortenUrl from '../../utils/bitly';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { longUrl } = req.body;
    const shortUrl = await shortenUrl(longUrl);
    res.status(200).json({ shortUrl });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
