module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/nasa-search',
        permanent: false
      },
    ]
  },
}
