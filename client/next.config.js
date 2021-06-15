module.exports = {
  images: {
    domains: ['i.ytimg.com'],
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/home',
        permanent: true,
      }
    ]
  },
}
