/** @type {import('next').NextConfig} */

module.exports = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**.cdninstagram.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: '',
          },
        ],
      },
    
}


