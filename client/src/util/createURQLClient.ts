import { cacheExchange, Resolver, Cache } from '@urql/exchange-graphcache'
import { dedupExchange, fetchExchange, gql } from 'urql'

import { GetTwoVideosDocument } from '../generated/graphql'

import { serverURL } from '../config/config'
// import { isServer } from './isServer'

// function invalidateThumbnails(cache: Cache) {
//   const allFields = cache.inspectFields('Query')
//   const fieldInfos = allFields.filter((info) => info.fieldName === '')
//   fieldInfos.forEach((fi) => {
//     cache.invalidate('Query', '', fi.arguments || {})
//   })
// }

export const createUrqlClient = (ssrExchange: any, ctx: any) => {
  //  uncomment if necessary to send cookie to the server. Useful for authentification
  // let cookie = ''
  // if (isServer()) {
  //   cookie = ctx?.req?.headers?.cookie
  // }

  return {
    url: serverURL,
    fetchOptions: {
      credentials: 'include' as const,
      //  this will send a cookie to the server
      // headers: cookie
      //   ? {
      //       cookie,
      //     }
      //   : undefined,
    },
    exchanges: [
      dedupExchange,
      cacheExchange({
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
          },
        },
      }),
      ssrExchange, // Add `ssr` in front of the `fetchExchange`
      fetchExchange,
    ],
  }
}
