//github.com/benawad/lireddit/blob/28011261643e466bb9258acf1f5c335582639201/web/src/utils/betterUpdateQuery.tsx#L3
import { Cache, QueryInput } from '@urql/exchange-graphcache'

export function betterUpdateQuery<Result, Query>(
  cache: Cache,
  qi: QueryInput,
  result: any,
  fn: (r: Result, q: Query) => Query
) {
  return cache.updateQuery(qi, (data) => fn(result, data as any) as any)
}
