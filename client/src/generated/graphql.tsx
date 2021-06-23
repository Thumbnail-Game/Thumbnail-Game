import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Games = {
  __typename?: 'Games';
  id: Scalars['Float'];
  userId: UserAccount;
  user: UserAccount;
  score: Scalars['Float'];
  gamemode?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: UserResponse;
  invalidateVideos?: Maybe<Array<Videos>>;
  addGame?: Maybe<Games>;
};


export type MutationCreateUserArgs = {
  options: UserInput;
};


export type MutationAddGameArgs = {
  gamemode?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  score: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<UserAccount>;
  userByDisplayName?: Maybe<UserAccount>;
  users?: Maybe<Array<UserAccount>>;
  videos?: Maybe<Array<Videos>>;
  twoVideos?: Maybe<Array<Videos>>;
  getVideos?: Maybe<Array<Videos>>;
  games?: Maybe<Array<Games>>;
  getGamesByUser?: Maybe<Array<Games>>;
};


export type QueryUserArgs = {
  uid?: Maybe<Scalars['String']>;
};


export type QueryUserByDisplayNameArgs = {
  displayName?: Maybe<Scalars['String']>;
};


export type QueryTwoVideosArgs = {
  videoIds: Array<Scalars['Int']>;
};


export type QueryGetVideosArgs = {
  numVideos: Scalars['Int'];
};


export type QueryGetGamesByUserArgs = {
  userId: Scalars['Int'];
};

export type UserAccount = {
  __typename?: 'UserAccount';
  id: Scalars['Float'];
  uid: Scalars['String'];
  displayName: Scalars['String'];
  email: Scalars['String'];
  photoURL: Scalars['String'];
  games: Array<Games>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type UserInput = {
  uid: Scalars['String'];
  displayName: Scalars['String'];
  email: Scalars['String'];
  photoURL?: Maybe<Scalars['String']>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<UserAccount>;
};

export type Videos = {
  __typename?: 'Videos';
  id: Scalars['Float'];
  title: Scalars['String'];
  thumbnail: Scalars['String'];
  views: Scalars['Float'];
  date_published: Scalars['String'];
  channel_id: Scalars['String'];
  url: Scalars['String'];
};

export type AddGameMutationVariables = Exact<{
  score: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
  gamemode?: Maybe<Scalars['String']>;
}>;


export type AddGameMutation = (
  { __typename?: 'Mutation' }
  & { addGame?: Maybe<(
    { __typename?: 'Games' }
    & Pick<Games, 'score'>
  )> }
);

export type CreateUserMutationVariables = Exact<{
  options: UserInput;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type InvalidateMutationVariables = Exact<{ [key: string]: never; }>;


export type InvalidateMutation = (
  { __typename?: 'Mutation' }
  & { invalidateVideos?: Maybe<Array<(
    { __typename?: 'Videos' }
    & Pick<Videos, 'id'>
  )>> }
);

export type GetDisplayNamesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDisplayNamesQuery = (
  { __typename?: 'Query' }
  & { users?: Maybe<Array<(
    { __typename?: 'UserAccount' }
    & Pick<UserAccount, 'id' | 'displayName'>
  )>> }
);

export type GetGamesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGamesQuery = (
  { __typename?: 'Query' }
  & { games?: Maybe<Array<(
    { __typename?: 'Games' }
    & Pick<Games, 'id' | 'score'>
  )>> }
);

export type GetGamesByUserQueryVariables = Exact<{
  userId: Scalars['Int'];
}>;


export type GetGamesByUserQuery = (
  { __typename?: 'Query' }
  & { getGamesByUser?: Maybe<Array<(
    { __typename?: 'Games' }
    & Pick<Games, 'id' | 'score' | 'createdAt'>
  )>> }
);

export type GetTwoVideosQueryVariables = Exact<{
  videoIds: Array<Scalars['Int']> | Scalars['Int'];
}>;


export type GetTwoVideosQuery = (
  { __typename?: 'Query' }
  & { twoVideos?: Maybe<Array<(
    { __typename?: 'Videos' }
    & Pick<Videos, 'id' | 'title' | 'thumbnail' | 'views' | 'date_published' | 'channel_id' | 'url'>
  )>> }
);

export type GetUserQueryVariables = Exact<{
  uid?: Maybe<Scalars['String']>;
}>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'UserAccount' }
    & Pick<UserAccount, 'id' | 'uid' | 'displayName' | 'email'>
  )> }
);

export type GetUserByDisplayNameQueryVariables = Exact<{
  displayName: Scalars['String'];
}>;


export type GetUserByDisplayNameQuery = (
  { __typename?: 'Query' }
  & { userByDisplayName?: Maybe<(
    { __typename?: 'UserAccount' }
    & Pick<UserAccount, 'id' | 'displayName' | 'email' | 'createdAt'>
  )> }
);

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { users?: Maybe<Array<(
    { __typename?: 'UserAccount' }
    & Pick<UserAccount, 'uid' | 'displayName' | 'email'>
  )>> }
);

export type GetVideosQueryVariables = Exact<{
  numVideos: Scalars['Int'];
}>;


export type GetVideosQuery = (
  { __typename?: 'Query' }
  & { getVideos?: Maybe<Array<(
    { __typename?: 'Videos' }
    & Pick<Videos, 'id' | 'title' | 'thumbnail' | 'views' | 'date_published' | 'channel_id' | 'url'>
  )>> }
);


export const AddGameDocument = gql`
    mutation addGame($score: Int!, $userId: Int, $gamemode: String) {
  addGame(score: $score, userId: $userId, gamemode: $gamemode) {
    score
  }
}
    `;

export function useAddGameMutation() {
  return Urql.useMutation<AddGameMutation, AddGameMutationVariables>(AddGameDocument);
};
export const CreateUserDocument = gql`
    mutation CreateUser($options: UserInput!) {
  createUser(options: $options) {
    errors {
      field
      message
    }
  }
}
    `;

export function useCreateUserMutation() {
  return Urql.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument);
};
export const InvalidateDocument = gql`
    mutation invalidate {
  invalidateVideos {
    id
  }
}
    `;

export function useInvalidateMutation() {
  return Urql.useMutation<InvalidateMutation, InvalidateMutationVariables>(InvalidateDocument);
};
export const GetDisplayNamesDocument = gql`
    query getDisplayNames {
  users {
    id
    displayName
  }
}
    `;

export function useGetDisplayNamesQuery(options: Omit<Urql.UseQueryArgs<GetDisplayNamesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetDisplayNamesQuery>({ query: GetDisplayNamesDocument, ...options });
};
export const GetGamesDocument = gql`
    query getGames {
  games {
    id
    score
  }
}
    `;

export function useGetGamesQuery(options: Omit<Urql.UseQueryArgs<GetGamesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetGamesQuery>({ query: GetGamesDocument, ...options });
};
export const GetGamesByUserDocument = gql`
    query getGamesByUser($userId: Int!) {
  getGamesByUser(userId: $userId) {
    id
    score
    createdAt
  }
}
    `;

export function useGetGamesByUserQuery(options: Omit<Urql.UseQueryArgs<GetGamesByUserQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetGamesByUserQuery>({ query: GetGamesByUserDocument, ...options });
};
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
    `;

export function useGetTwoVideosQuery(options: Omit<Urql.UseQueryArgs<GetTwoVideosQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetTwoVideosQuery>({ query: GetTwoVideosDocument, ...options });
};
export const GetUserDocument = gql`
    query getUser($uid: String) {
  user(uid: $uid) {
    id
    uid
    displayName
    email
  }
}
    `;

export function useGetUserQuery(options: Omit<Urql.UseQueryArgs<GetUserQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetUserQuery>({ query: GetUserDocument, ...options });
};
export const GetUserByDisplayNameDocument = gql`
    query getUserByDisplayName($displayName: String!) {
  userByDisplayName(displayName: $displayName) {
    id
    displayName
    email
    createdAt
  }
}
    `;

export function useGetUserByDisplayNameQuery(options: Omit<Urql.UseQueryArgs<GetUserByDisplayNameQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetUserByDisplayNameQuery>({ query: GetUserByDisplayNameDocument, ...options });
};
export const GetUsersDocument = gql`
    query getUsers {
  users {
    uid
    displayName
    email
  }
}
    `;

export function useGetUsersQuery(options: Omit<Urql.UseQueryArgs<GetUsersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetUsersQuery>({ query: GetUsersDocument, ...options });
};
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
    `;

export function useGetVideosQuery(options: Omit<Urql.UseQueryArgs<GetVideosQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetVideosQuery>({ query: GetVideosDocument, ...options });
};