import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Author = {
  __typename?: 'Author';
  _id: Scalars['ID'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']>;
  createAuthor?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']>;
  listAuthor: Array<Maybe<Author>>;
};

export type ListAuthorQueryVariables = Exact<{ [key: string]: never; }>;


export type ListAuthorQuery = { __typename?: 'Query', listAuthor: Array<{ __typename?: 'Author', name: string } | null> };

export type CreateAuthorMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateAuthorMutation = { __typename?: 'Mutation', createAuthor?: boolean | null };


export const ListAuthorDocument = gql`
    query listAuthor {
  listAuthor {
    name
  }
}
    `;
export const CreateAuthorDocument = gql`
    mutation createAuthor {
  createAuthor
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    listAuthor(variables?: ListAuthorQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ListAuthorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListAuthorQuery>(ListAuthorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listAuthor', 'query');
    },
    createAuthor(variables?: CreateAuthorMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateAuthorMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateAuthorMutation>(CreateAuthorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createAuthor', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;