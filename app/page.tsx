// export default function Home() {
  

//   return (
//     <>


//     <p>Shall we begin?</p>
    
//     </>
   
//   )
// }

// pages/index.tsx


'use client'
// import { useState } from 'react';
// import { saveUrl } from '../utils/firestore';

// export default function Home() {
//   const [longUrl, setLongUrl] = useState('');
//   const [shortUrl, setShortUrl] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const shortCode = await saveUrl(longUrl);

//     setShortUrl(`${window.location.origin}/${shortCode}`);
//   };

//   return (
//     <div>
//       <h1>URL Shortener</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter URL"
//           value={longUrl}
//           onChange={(e) => setLongUrl(e.target.value)}
//         />
//         <button type="submit">Shorten</button>
//       </form>
//       {shortUrl && (
//         <p>
//           Short URL: <a href={shortUrl}>{shortUrl}</a>
//         </p>
//       )}
//     </div>
//   );
// }

'use client'

// pages/index.tsx

import { useState } from 'react';
import { saveUrl } from '../utils/firestore';

export default function Home() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (longUrl) {
      // Save the URL and get the short code
      const shortCode = await saveUrl(longUrl);
      
      // Construct the short URL using the short code
      setShortUrl(`${window.location.origin}/${shortCode}`);
    }
  };

  return (
    <div>
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <button type="submit">Shorten</button>
      </form>
      {shortUrl && (
        <p>
          Short URL: <a href={shortUrl}>{shortUrl}</a>
        </p>
      )}
    </div>
  );
}
