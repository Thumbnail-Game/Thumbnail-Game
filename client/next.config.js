module.exports = {
  images: {
    domains: ['i.ytimg.com'],
  },
  optimizeFonts: true,
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/home',
        permanent: true,
      },
    ]
  },
}
