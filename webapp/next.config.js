const { BLOG_URL } = process.env

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/crypto',
        destination: `${BLOG_URL}/crypto`,
      },
      {
        source: '/crypto/:path*',
        destination: `${BLOG_URL}/crypto/:path*`,
      },
      {
        source: '/:path*',
        destination: `/:path*`,
      },
    ]
  },
}
