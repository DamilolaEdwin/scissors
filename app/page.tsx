'use client';
import { useState } from 'react';

const ShortenForm = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); 

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
    } catch (error) {
      setError('Failed to shorten URL');
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-white mb-8">URL Shortener</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="url"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            placeholder="Enter URL to shorten"
            required
            className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition duration-200"
          >
            Shorten
          </button>
          {shortUrl && (
            <p className="mt-6 text-green-500 text-center">
              Shortened URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{shortUrl}</a>
            </p>
          )}
          {error && <p className="mt-6 text-red-500 text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default ShortenForm;
