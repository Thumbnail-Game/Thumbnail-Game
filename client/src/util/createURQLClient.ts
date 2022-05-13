import { cacheExchange } from '@urql/exchange-graphcache'
import { dedupExchange, fetchExchange } from 'urql'

import { serverURL } from '../config/config'

export const createUrqlClient = (ssrExchange: any, ctx: any) => {
  return {
    url: serverURL,
    fetchOptions: {
      credentials: 'include' as const,
    },
    exchanges: [
      dedupExchange,
      cacheExchange({
        keys: {
          UserAccount: () => null,
          UserHighscoreResponse: () => null,
        },
        updates: {
          Mutation: {
            invalidateVideos: (_result, _args, cache, _info) => {
              cache
                .inspectFields('Query')
                .filter((field) => field.fieldName === 'twoVideos')
                .forEach((field) => {
                  cache.invalidate('Query', field.fieldKey)
                })
            },
            createUser: (_result, _args, cache, _info) => {
              cache
                .inspectFields('Query')
                .filter((field) => field.fieldName === 'users')
                .forEach((field) => {
                  cache.invalidate('Query', field.fieldKey)
                })
            },
            addGame: (_result, _args, cache, _info) => {
              cache
                .inspectFields('Query')
                .filter(
                  (field) =>
                    field.fieldName === 'getGamesByUser' ||
                    field.fieldName === 'getUserHighscores' ||
                    field.fieldName === 'getTotalGames' ||
                    field.fieldName === 'getLeaderboardHighscores'
                )
                .forEach((field) => {
                  cache.invalidate('Query', field.fieldKey)
                })
            },
          },
        },
      }),
      ssrExchange,
      fetchExchange,
    ],
  }
}
