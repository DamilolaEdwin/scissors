// 'use client';

// import { useState } from 'react';
// import QRCode from 'qrcode.react';

// const QRCodePage = () => {
//   const [url, setUrl] = useState('');
//   const [qrCodeUrl, setQrCodeUrl] = useState('');

//   const handleGenerateQRCode = (e: React.FormEvent) => {
//     e.preventDefault();
//     setQrCodeUrl(url);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
//       <div className="p-8 bg-gray-900 rounded-lg shadow-lg space-y-6">
//         <h1 className="text-2xl font-bold">QR Code Generator</h1>
//         <form onSubmit={handleGenerateQRCode} className="space-y-4">
//           <input
//             type="url"
//             value={url}
//             onChange={(e) => setUrl(e.target.value)}
//             placeholder="Enter URL"
//             required
//             className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
//           />
//           <button
//             type="submit"
//             className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//           >
//             Generate QR Code
//           </button>
//         </form>
//         {qrCodeUrl && (
//           <div className="mt-4">
//             <QRCode value={qrCodeUrl} size={256} bgColor="#ffffff" fgColor="#000000" />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default QRCodePage;

'use client'

import Image from 'next/image';
import { useState } from 'react';

const ShortenForm = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Assuming this function shortens the URL and returns the short URL and QR code URL
    try {
      const response = await fetch('/api/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ longUrl }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setShortUrl(data.shortUrl);
      setQrCodeUrl(data.qrCodeUrl);
    } catch (error) {
      setError('Failed to shorten URL or generate QR code');
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
      <div className="p-8 bg-gray-900 rounded-lg shadow-lg space-y-6">
        <h1 className="text-2xl font-bold">QR Code Generator</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="url"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            placeholder="Enter URL"
            required
            className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Generate Short URL & QR Code
          </button>
        </form>
        {shortUrl && (
          <div className="mt-4">
            <p>Shortened URL: <a href={shortUrl} target='_blank' className="text-blue-500">{shortUrl}</a></p>
            {qrCodeUrl && (
              <div className="mt-2">
                <Image
                  src={qrCodeUrl}
                  alt="QR Code"
                  width={200} // Adjust the width as needed
                  height={200} // Adjust the height as needed
                />
              </div>
            )}
          </div>
        )}
        {error && <p className="mt-2 text-red-600">{error}</p>}
      </div>
    </div>
  );
};

export default ShortenForm;
