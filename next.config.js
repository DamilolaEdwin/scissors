// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

// // module.exports = {
// //     images: {
// //       domains: ['bit.ly'],
// //     },
// //   };
  
// // next.config.js
// module.exports = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'bit.ly',
//           pathname: '/**',
//         },
//       ],
//     },
//   };
  
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bit.ly',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'bitly.is',
        pathname: '/**',
      },
    ],
  },
};
