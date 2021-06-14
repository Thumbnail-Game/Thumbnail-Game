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
  userId: Scalars['Float'];
  score: Scalars['Float'];
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
  score: Scalars['Float'];
  userId: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<UserAccount>;
  users?: Maybe<Array<UserAccount>>;
  videos?: Maybe<Array<Games>>;
  twoVideos?: Maybe<Array<Videos>>;
  getVideos?: Maybe<Array<Videos>>;
};


export type QueryUserArgs = {
  uid: Scalars['String'];
};


export type QueryTwoVideosArgs = {
  videoIds: Array<Scalars['Int']>;
};


export type QueryGetVideosArgs = {
  numVideos: Scalars['Int'];
};

export type UserAccount = {
  __typename?: 'UserAccount';
  id: Scalars['Float'];
  uid: Scalars['String'];
  displayName: Scalars['String'];
  email: Scalars['String'];
  photoURL: Scalars['String'];
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
  uid: Scalars['String'];
}>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'UserAccount' }
    & Pick<UserAccount, 'uid' | 'displayName' | 'email' | 'photoURL'>
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
    query getUser($uid: String!) {
  user(uid: $uid) {
    uid
    displayName
    email
    photoURL
  }
}
    `;

export function useGetUserQuery(options: Omit<Urql.UseQueryArgs<GetUserQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetUserQuery>({ query: GetUserDocument, ...options });
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