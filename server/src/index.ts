import 'reflect-metadata'
import 'dotenv-safe/config'
import express from 'express'
import path from 'path'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { createConnection } from 'typeorm'

import { __prod__ } from './config'
import { UserAccount, Videos } from './entities/index'
import { UserResolver, VideoResolver } from './resolvers/index'

const main = async () => {
  console.log(process.env.DATABASE_URL)
<<<<<<< HEAD
  const conn = await createConnection({
=======
  /*const conn = */ await createConnection({
>>>>>>> 872dc4a07fad13d74c3ba0c55843afe40df24522
    type: 'postgres',
    url: process.env.DATABASE_URL,
    logging: true,
    //  do not want synchronize true in production, possiblility of losing data
    synchronize: false,
    entities: [UserAccount, Videos],
    migrations: [path.join(__dirname, './migrations/*')],
    //  need this to use postgres heroku plugin
    ssl: {
      rejectUnauthorized: false,
    },
  })
<<<<<<< HEAD
  await conn.runMigrations()
=======
  //  await conn.runMigrations()
>>>>>>> 872dc4a07fad13d74c3ba0c55843afe40df24522

  const app = express()

  app.set('trust proxy', 1)
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
  )

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, VideoResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({
      req,
      res,
    }),
  })

  apolloServer.applyMiddleware({
    app,
    cors: false,
    path: '/',
  })

  app.listen(parseInt(process.env.PORT!), () => {
    console.log(`server started on localhost:${process.env.PORT!}`)
  })
}

main().catch((err) => {
  console.error(err)
})
