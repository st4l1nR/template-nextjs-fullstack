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
  Upload: any;
};

export type Author = {
  __typename?: 'Author';
  _id: Scalars['ID'];
  name: Scalars['String'];
};

export type MultipleUploadResponse = {
  __typename?: 'MultipleUploadResponse';
  urls: Array<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']>;
  createAuthor: Author;
  deleteAuthor: Author;
  multipleUpload: MultipleUploadResponse;
  singleUpload: SingleUploadResponse;
  updateAuthor: Author;
};


export type MutationCreateAuthorArgs = {
  createAuthorInput: CreateAuthorInput;
};


export type MutationDeleteAuthorArgs = {
  _id: Scalars['ID'];
};


export type MutationMultipleUploadArgs = {
  files: Array<Scalars['Upload']>;
};


export type MutationSingleUploadArgs = {
  file: Scalars['Upload'];
};


export type MutationUpdateAuthorArgs = {
  updateAuthorInput: UpdateAuthorInput;
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']>;
  getAuthorById: Author;
  listAuthor: Array<Maybe<Author>>;
};


export type QueryGetAuthorByIdArgs = {
  _id: Scalars['ID'];
};

export type SingleUploadResponse = {
  __typename?: 'SingleUploadResponse';
  url: Scalars['String'];
};

export type CreateAuthorInput = {
  name: Scalars['String'];
};

export type UpdateAuthorInput = {
  _id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type ListAuthorQueryVariables = Exact<{ [key: string]: never; }>;


export type ListAuthorQuery = { __typename?: 'Query', listAuthor: Array<{ __typename?: 'Author', name: string } | null> };

export type GetAuthorByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetAuthorByIdQuery = { __typename?: 'Query', getAuthorById: { __typename?: 'Author', _id: string, name: string } };

export type CreateAuthorMutationVariables = Exact<{
  createAuthorInput: CreateAuthorInput;
}>;


export type CreateAuthorMutation = { __typename?: 'Mutation', createAuthor: { __typename?: 'Author', _id: string, name: string } };

export type UpdateAuthorMutationVariables = Exact<{
  updateAuthorInput: UpdateAuthorInput;
}>;


export type UpdateAuthorMutation = { __typename?: 'Mutation', updateAuthor: { __typename?: 'Author', _id: string } };

export type DeleteAuthorMutationVariables = Exact<{
  deleteAuthorId2: Scalars['ID'];
}>;


export type DeleteAuthorMutation = { __typename?: 'Mutation', deleteAuthor: { __typename?: 'Author', _id: string, name: string } };

export type SingleUploadMutationVariables = Exact<{
  file: Scalars['Upload'];
}>;


export type SingleUploadMutation = { __typename?: 'Mutation', singleUpload: { __typename?: 'SingleUploadResponse', url: string } };

export type MultipleUploadMutationVariables = Exact<{
  files: Array<Scalars['Upload']> | Scalars['Upload'];
}>;


export type MultipleUploadMutation = { __typename?: 'Mutation', multipleUpload: { __typename?: 'MultipleUploadResponse', urls: Array<string> } };


export const ListAuthorDocument = gql`
    query ListAuthor {
  listAuthor {
    name
  }
}
    `;
export const GetAuthorByIdDocument = gql`
    query GetAuthorById($id: ID!) {
  getAuthorById(_id: $id) {
    _id
    name
  }
}
    `;
export const CreateAuthorDocument = gql`
    mutation CreateAuthor($createAuthorInput: createAuthorInput!) {
  createAuthor(createAuthorInput: $createAuthorInput) {
    _id
    name
  }
}
    `;
export const UpdateAuthorDocument = gql`
    mutation UpdateAuthor($updateAuthorInput: updateAuthorInput!) {
  updateAuthor(updateAuthorInput: $updateAuthorInput) {
    _id
  }
}
    `;
export const DeleteAuthorDocument = gql`
    mutation DeleteAuthor($deleteAuthorId2: ID!) {
  deleteAuthor(_id: $deleteAuthorId2) {
    _id
    name
  }
}
    `;
export const SingleUploadDocument = gql`
    mutation singleUpload($file: Upload!) {
  singleUpload(file: $file) {
    url
  }
}
    `;
export const MultipleUploadDocument = gql`
    mutation multipleUpload($files: [Upload!]!) {
  multipleUpload(files: $files) {
    urls
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    ListAuthor(variables?: ListAuthorQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ListAuthorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListAuthorQuery>(ListAuthorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ListAuthor', 'query');
    },
    GetAuthorById(variables: GetAuthorByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAuthorByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAuthorByIdQuery>(GetAuthorByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAuthorById', 'query');
    },
    CreateAuthor(variables: CreateAuthorMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateAuthorMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateAuthorMutation>(CreateAuthorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateAuthor', 'mutation');
    },
    UpdateAuthor(variables: UpdateAuthorMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateAuthorMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateAuthorMutation>(UpdateAuthorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateAuthor', 'mutation');
    },
    DeleteAuthor(variables: DeleteAuthorMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteAuthorMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteAuthorMutation>(DeleteAuthorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeleteAuthor', 'mutation');
    },
    singleUpload(variables: SingleUploadMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SingleUploadMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SingleUploadMutation>(SingleUploadDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'singleUpload', 'mutation');
    },
    multipleUpload(variables: MultipleUploadMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MultipleUploadMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<MultipleUploadMutation>(MultipleUploadDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'multipleUpload', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;