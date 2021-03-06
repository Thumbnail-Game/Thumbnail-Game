import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any
}

export type FieldError = {
  __typename?: 'FieldError'
  field: Scalars['String']
  message: Scalars['String']
}

export type Games = {
  __typename?: 'Games'
  id: Scalars['Float']
  userId: UserAccount
  user: UserAccount
  score: Scalars['Float']
  gamemode?: Maybe<Scalars['String']>
  createdAt: Scalars['String']
  updatedAt: Scalars['String']
}

export type LeaderboardGames = {
  __typename?: 'LeaderboardGames'
  id: Scalars['Float']
  user_id: UserAccount
  score: Scalars['Float']
  gamemode?: Maybe<Scalars['String']>
  createdAt: Scalars['String']
  updatedAt: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  createUser: UserResponse
  updateHighscore: Scalars['Boolean']
  invalidateVideos?: Maybe<Array<Videos>>
  addGame?: Maybe<Games>
  createImpression: Scalars['Boolean']
}

export type MutationCreateUserArgs = {
  options: UserInput
}

export type MutationUpdateHighscoreArgs = {
  highscore: Scalars['Int']
  uid: Scalars['String']
}

export type MutationAddGameArgs = {
  gamemode?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['Int']>
  score: Scalars['Int']
}

export type MutationCreateImpressionArgs = {
  video_id: Scalars['Float']
  user_id?: Maybe<Scalars['Float']>
}

export type Query = {
  __typename?: 'Query'
  user?: Maybe<UserAccount>
  userByDisplayName?: Maybe<UserAccount>
  users?: Maybe<Array<UserAccount>>
  videos?: Maybe<Array<Videos>>
  twoVideos?: Maybe<Array<Videos>>
  getVideos?: Maybe<Array<Videos>>
  games?: Maybe<Array<Games>>
  getTotalGames?: Maybe<Scalars['Int']>
  getGamesByUser?: Maybe<Array<Games>>
  getUserHighscores?: Maybe<Array<UserHighscoreResponse>>
  getLeaderboardHighscores: Array<LeaderboardGames>
}

export type QueryUserArgs = {
  uid?: Maybe<Scalars['String']>
}

export type QueryUserByDisplayNameArgs = {
  displayName?: Maybe<Scalars['String']>
}

export type QueryTwoVideosArgs = {
  videoIds: Array<Scalars['Int']>
}

export type QueryGetVideosArgs = {
  numVideos: Scalars['Int']
}

export type QueryGetGamesByUserArgs = {
  userId: Scalars['Int']
}

export type QueryGetUserHighscoresArgs = {
  userIds: Array<Scalars['Int']>
}

export type UserAccount = {
  __typename?: 'UserAccount'
  id: Scalars['Float']
  uid: Scalars['String']
  displayName: Scalars['String']
  email: Scalars['String']
  photoURL: Scalars['String']
  games: Array<Games>
  highscore: Scalars['Float']
  createdAt: Scalars['String']
  updatedAt: Scalars['String']
}

export type UserHighscoreResponse = {
  __typename?: 'UserHighscoreResponse'
  userId?: Maybe<Scalars['Float']>
  highScore?: Maybe<Scalars['Float']>
  date?: Maybe<Scalars['DateTime']>
}

export type UserInput = {
  uid: Scalars['String']
  displayName: Scalars['String']
  email: Scalars['String']
  photoURL?: Maybe<Scalars['String']>
}

export type UserResponse = {
  __typename?: 'UserResponse'
  errors?: Maybe<Array<FieldError>>
  user?: Maybe<UserAccount>
}

export type Videos = {
  __typename?: 'Videos'
  id: Scalars['Float']
  title: Scalars['String']
  thumbnail: Scalars['String']
  views: Scalars['Float']
  date_published: Scalars['String']
  channel_id: Scalars['String']
  url: Scalars['String']
}

export type AddGameMutationVariables = Exact<{
  score: Scalars['Int']
  userId?: Maybe<Scalars['Int']>
  gamemode?: Maybe<Scalars['String']>
}>

export type AddGameMutation = { __typename?: 'Mutation' } & {
  addGame?: Maybe<{ __typename?: 'Games' } & Pick<Games, 'score'>>
}

export type CreateImpressionMutationVariables = Exact<{
  user_id?: Maybe<Scalars['Float']>
  video_id: Scalars['Float']
}>

export type CreateImpressionMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'createImpression'
>

export type CreateUserMutationVariables = Exact<{
  options: UserInput
}>

export type CreateUserMutation = { __typename?: 'Mutation' } & {
  createUser: { __typename?: 'UserResponse' } & {
    errors?: Maybe<
      Array<
        { __typename?: 'FieldError' } & Pick<FieldError, 'field' | 'message'>
      >
    >
  }
}

export type InvalidateMutationVariables = Exact<{ [key: string]: never }>

export type InvalidateMutation = { __typename?: 'Mutation' } & {
  invalidateVideos?: Maybe<
    Array<{ __typename?: 'Videos' } & Pick<Videos, 'id'>>
  >
}

export type UpdateHighscoreMutationVariables = Exact<{
  uid: Scalars['String']
  highscore: Scalars['Int']
}>

export type UpdateHighscoreMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'updateHighscore'
>

export type GetDisplayNamesQueryVariables = Exact<{ [key: string]: never }>

export type GetDisplayNamesQuery = { __typename?: 'Query' } & {
  users?: Maybe<
    Array<
      { __typename?: 'UserAccount' } & Pick<UserAccount, 'id' | 'displayName'>
    >
  >
}

export type GetGamesQueryVariables = Exact<{ [key: string]: never }>

export type GetGamesQuery = { __typename?: 'Query' } & {
  games?: Maybe<
    Array<
      { __typename?: 'Games' } & Pick<
        Games,
        'id' | 'score' | 'gamemode' | 'createdAt'
      >
    >
  >
}

export type GetGamesByUserQueryVariables = Exact<{
  userId: Scalars['Int']
}>

export type GetGamesByUserQuery = { __typename?: 'Query' } & {
  getGamesByUser?: Maybe<
    Array<
      { __typename?: 'Games' } & Pick<
        Games,
        'id' | 'score' | 'gamemode' | 'createdAt'
      >
    >
  >
}

export type GetLeaderboardHighScoresQueryVariables = Exact<{
  [key: string]: never
}>

export type GetLeaderboardHighScoresQuery = { __typename?: 'Query' } & {
  getLeaderboardHighscores: Array<
    { __typename?: 'LeaderboardGames' } & Pick<
      LeaderboardGames,
      'id' | 'score' | 'gamemode' | 'createdAt'
    > & {
        user_id: { __typename?: 'UserAccount' } & Pick<
          UserAccount,
          'displayName'
        >
      }
  >
}

export type GetTotalGamesQueryVariables = Exact<{ [key: string]: never }>

export type GetTotalGamesQuery = { __typename?: 'Query' } & Pick<
  Query,
  'getTotalGames'
>

export type GetTwoVideosQueryVariables = Exact<{
  videoIds: Array<Scalars['Int']> | Scalars['Int']
}>

export type GetTwoVideosQuery = { __typename?: 'Query' } & {
  twoVideos?: Maybe<
    Array<
      { __typename?: 'Videos' } & Pick<
        Videos,
        | 'id'
        | 'title'
        | 'thumbnail'
        | 'views'
        | 'date_published'
        | 'channel_id'
        | 'url'
      >
    >
  >
}

export type GetUserQueryVariables = Exact<{
  uid?: Maybe<Scalars['String']>
}>

export type GetUserQuery = { __typename?: 'Query' } & {
  user?: Maybe<
    { __typename?: 'UserAccount' } & Pick<
      UserAccount,
      'id' | 'uid' | 'displayName' | 'email'
    >
  >
}

export type GetUserByDisplayNameQueryVariables = Exact<{
  displayName: Scalars['String']
}>

export type GetUserByDisplayNameQuery = { __typename?: 'Query' } & {
  userByDisplayName?: Maybe<
    { __typename?: 'UserAccount' } & Pick<
      UserAccount,
      'id' | 'displayName' | 'email' | 'createdAt'
    >
  >
}

export type GetUserHighscoresQueryVariables = Exact<{
  userIds: Array<Scalars['Int']> | Scalars['Int']
}>

export type GetUserHighscoresQuery = { __typename?: 'Query' } & {
  getUserHighscores?: Maybe<
    Array<
      { __typename?: 'UserHighscoreResponse' } & Pick<
        UserHighscoreResponse,
        'userId' | 'highScore' | 'date'
      >
    >
  >
}

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>

export type GetUsersQuery = { __typename?: 'Query' } & {
  users?: Maybe<
    Array<
      { __typename?: 'UserAccount' } & Pick<
        UserAccount,
        'id' | 'uid' | 'displayName' | 'email'
      >
    >
  >
}

export type GetVideosQueryVariables = Exact<{
  numVideos: Scalars['Int']
}>

export type GetVideosQuery = { __typename?: 'Query' } & {
  getVideos?: Maybe<
    Array<
      { __typename?: 'Videos' } & Pick<
        Videos,
        | 'id'
        | 'title'
        | 'thumbnail'
        | 'views'
        | 'date_published'
        | 'channel_id'
        | 'url'
      >
    >
  >
}

export const AddGameDocument = gql`
  mutation addGame($score: Int!, $userId: Int, $gamemode: String) {
    addGame(score: $score, userId: $userId, gamemode: $gamemode) {
      score
    }
  }
`

export function useAddGameMutation() {
  return Urql.useMutation<AddGameMutation, AddGameMutationVariables>(
    AddGameDocument
  )
}
export const CreateImpressionDocument = gql`
  mutation createImpression($user_id: Float, $video_id: Float!) {
    createImpression(user_id: $user_id, video_id: $video_id)
  }
`

export function useCreateImpressionMutation() {
  return Urql.useMutation<
    CreateImpressionMutation,
    CreateImpressionMutationVariables
  >(CreateImpressionDocument)
}
export const CreateUserDocument = gql`
  mutation CreateUser($options: UserInput!) {
    createUser(options: $options) {
      errors {
        field
        message
      }
    }
  }
`

export function useCreateUserMutation() {
  return Urql.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument
  )
}
export const InvalidateDocument = gql`
  mutation invalidate {
    invalidateVideos {
      id
    }
  }
`

export function useInvalidateMutation() {
  return Urql.useMutation<InvalidateMutation, InvalidateMutationVariables>(
    InvalidateDocument
  )
}
export const UpdateHighscoreDocument = gql`
  mutation updateHighscore($uid: String!, $highscore: Int!) {
    updateHighscore(uid: $uid, highscore: $highscore)
  }
`

export function useUpdateHighscoreMutation() {
  return Urql.useMutation<
    UpdateHighscoreMutation,
    UpdateHighscoreMutationVariables
  >(UpdateHighscoreDocument)
}
export const GetDisplayNamesDocument = gql`
  query getDisplayNames {
    users {
      id
      displayName
    }
  }
`

export function useGetDisplayNamesQuery(
  options: Omit<Urql.UseQueryArgs<GetDisplayNamesQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<GetDisplayNamesQuery>({
    query: GetDisplayNamesDocument,
    ...options,
  })
}
export const GetGamesDocument = gql`
  query getGames {
    games {
      id
      score
      gamemode
      createdAt
    }
  }
`

export function useGetGamesQuery(
  options: Omit<Urql.UseQueryArgs<GetGamesQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<GetGamesQuery>({ query: GetGamesDocument, ...options })
}
export const GetGamesByUserDocument = gql`
  query getGamesByUser($userId: Int!) {
    getGamesByUser(userId: $userId) {
      id
      score
      gamemode
      createdAt
    }
  }
`

export function useGetGamesByUserQuery(
  options: Omit<Urql.UseQueryArgs<GetGamesByUserQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<GetGamesByUserQuery>({
    query: GetGamesByUserDocument,
    ...options,
  })
}
export const GetLeaderboardHighScoresDocument = gql`
  query getLeaderboardHighScores {
    getLeaderboardHighscores {
      id
      score
      gamemode
      createdAt
      user_id {
        displayName
      }
    }
  }
`

export function useGetLeaderboardHighScoresQuery(
  options: Omit<
    Urql.UseQueryArgs<GetLeaderboardHighScoresQueryVariables>,
    'query'
  > = {}
) {
  return Urql.useQuery<GetLeaderboardHighScoresQuery>({
    query: GetLeaderboardHighScoresDocument,
    ...options,
  })
}
export const GetTotalGamesDocument = gql`
  query getTotalGames {
    getTotalGames
  }
`

export function useGetTotalGamesQuery(
  options: Omit<Urql.UseQueryArgs<GetTotalGamesQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<GetTotalGamesQuery>({
    query: GetTotalGamesDocument,
    ...options,
  })
}
export const GetTwoVideosDocument = gql`
  query getTwoVideos($videoIds: [Int!]!) {
    twoVideos(videoIds: $videoIds) {
      id
      title
      thumbnail
      views
      date_published
      channel_id
      url
    }
  }
`

export function useGetTwoVideosQuery(
  options: Omit<Urql.UseQueryArgs<GetTwoVideosQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<GetTwoVideosQuery>({
    query: GetTwoVideosDocument,
    ...options,
  })
}
export const GetUserDocument = gql`
  query getUser($uid: String) {
    user(uid: $uid) {
      id
      uid
      displayName
      email
    }
  }
`

export function useGetUserQuery(
  options: Omit<Urql.UseQueryArgs<GetUserQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<GetUserQuery>({ query: GetUserDocument, ...options })
}
export const GetUserByDisplayNameDocument = gql`
  query getUserByDisplayName($displayName: String!) {
    userByDisplayName(displayName: $displayName) {
      id
      displayName
      email
      createdAt
    }
  }
`

export function useGetUserByDisplayNameQuery(
  options: Omit<
    Urql.UseQueryArgs<GetUserByDisplayNameQueryVariables>,
    'query'
  > = {}
) {
  return Urql.useQuery<GetUserByDisplayNameQuery>({
    query: GetUserByDisplayNameDocument,
    ...options,
  })
}
export const GetUserHighscoresDocument = gql`
  query getUserHighscores($userIds: [Int!]!) {
    getUserHighscores(userIds: $userIds) {
      userId
      highScore
      date
    }
  }
`

export function useGetUserHighscoresQuery(
  options: Omit<
    Urql.UseQueryArgs<GetUserHighscoresQueryVariables>,
    'query'
  > = {}
) {
  return Urql.useQuery<GetUserHighscoresQuery>({
    query: GetUserHighscoresDocument,
    ...options,
  })
}
export const GetUsersDocument = gql`
  query getUsers {
    users {
      id
      uid
      displayName
      email
    }
  }
`

export function useGetUsersQuery(
  options: Omit<Urql.UseQueryArgs<GetUsersQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<GetUsersQuery>({ query: GetUsersDocument, ...options })
}
export const GetVideosDocument = gql`
  query getVideos($numVideos: Int!) {
    getVideos(numVideos: $numVideos) {
      id
      title
      thumbnail
      views
      date_published
      channel_id
      url
    }
  }
`

export function useGetVideosQuery(
  options: Omit<Urql.UseQueryArgs<GetVideosQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<GetVideosQuery>({ query: GetVideosDocument, ...options })
}
