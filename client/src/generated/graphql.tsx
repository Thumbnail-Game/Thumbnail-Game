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

export type Mutation = {
  __typename?: 'Mutation';
  createUser: UserResponse;
};


export type MutationCreateUserArgs = {
  options: UserInput;
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<UserAccount>;
  users?: Maybe<Array<UserAccount>>;
  videos?: Maybe<Array<Videos>>;
  twoVideos?: Maybe<Array<Videos>>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

export type UserAccount = {
  __typename?: 'UserAccount';
  id: Scalars['Float'];
  username: Scalars['String'];
  email: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type UserInput = {
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
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
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & {
    createUser: (
      { __typename?: 'UserResponse' }
      & {
        errors?: Maybe<Array<(
          { __typename?: 'FieldError' }
          & Pick<FieldError, 'field' | 'message'>
        )>>, user?: Maybe<(
          { __typename?: 'UserAccount' }
          & Pick<UserAccount, 'id' | 'username'>
        )>
      }
    )
  }
);

export type GetTwoVideosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTwoVideosQuery = (
  { __typename?: 'Query' }
  & {
    twoVideos?: Maybe<Array<(
      { __typename?: 'Videos' }
      & Pick<Videos, 'id' | 'title' | 'thumbnail' | 'views' | 'date_published' | 'channel_id' | 'url'>
    )>>
  }
);

export type GetUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & {
    user?: Maybe<(
      { __typename?: 'UserAccount' }
      & Pick<UserAccount, 'id' | 'username' | 'email'>
    )>
  }
);

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & {
    users?: Maybe<Array<(
      { __typename?: 'UserAccount' }
      & Pick<UserAccount, 'id' | 'username' | 'email'>
    )>>
  }
);

export type GetVideosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetVideosQuery = (
  { __typename?: 'Query' }
  & {
    videos?: Maybe<Array<(
      { __typename?: 'Videos' }
      & Pick<Videos, 'id' | 'title' | 'url' | 'thumbnail' | 'views' | 'date_published' | 'channel_id'>
    )>>
  }
);


export const CreateUserDocument = gql`
    mutation CreateUser($username: String!, $email: String!, $password: String!) {
  createUser(options: {username: $username, email: $email, password: $password}) {
    errors {
      field
      message
    }
    user {
      id
      username
    }
  }
}
    `;

export function useCreateUserMutation() {
  return Urql.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument);
};

export const GetTwoVideosDocument = gql`
    query getTwoVideos {
  twoVideos {
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
    query getUser($id: String!) {
  user(id: $id) {
    id
    username
    email
  }
}
    `;

export function useGetUserQuery(options: Omit<Urql.UseQueryArgs<GetUserQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetUserQuery>({ query: GetUserDocument, ...options });
};
export const GetUsersDocument = gql`
    query getUsers {
  users {
    id
    username
    email
  }
}
    `;

export function useGetUsersQuery(options: Omit<Urql.UseQueryArgs<GetUsersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetUsersQuery>({ query: GetUsersDocument, ...options });
};
export const GetVideosDocument = gql`
    query getVideos {
  videos {
    id
    title
    url
    thumbnail
    views
    date_published
    channel_id
  }
}
    `;

export function useGetVideosQuery(options: Omit<Urql.UseQueryArgs<GetVideosQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetVideosQuery>({ query: GetVideosDocument, ...options });
};