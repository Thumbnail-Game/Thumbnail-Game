import 'reflect-metadata'
import 'dotenv-safe/config'
import express from 'express'
import path from 'path'
import cors from 'cors'
import cron from 'node-cron'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { createConnection } from 'typeorm'

import { __prod__ } from './config'
import { Games, UserAccount, Videos } from './entities/index'
import { GamesResolver, UserResolver, VideoResolver } from './resolvers/index'
import { updateAllVideoViews } from './utils/updateAllVideoViews'

const main = async () => {
  console.log(process.env.DATABASE_URL)
  /* const conn = */ await createConnection({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    logging: true,
    synchronize: true,
    entities: [UserAccount, Videos, Games],
    migrations: [path.join(__dirname, './migrations/*')],
    ssl: {
      rejectUnauthorized: false,
    },
  })
  // await conn.runMigrations()

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
      resolvers: [UserResolver, VideoResolver, GamesResolver],
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

  //  updateAllVideoViews after every midnight
  cron.schedule('0 0 0 * * *', () => {
    updateAllVideoViews()
  })
}

main().catch((err) => {
  console.error(err)
})
