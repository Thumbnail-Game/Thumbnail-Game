export const dev = process.env.NODE_ENV !== 'production'

export const URL = dev
  ? 'http://localhost:3000/api'
  : 'https://thumbnail-game.vercel.app/api'

export const serverURL = dev
  ? 'http://localhost:4000'
  : 'https://thumbnail-game.herokuapp.com/'
