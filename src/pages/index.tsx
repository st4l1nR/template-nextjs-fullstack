import React from 'react';
import { ListAuthorDocument } from '@ctypes/graphql';
import { useQuery } from '@apollo/client/react';
const index = () => {
  const authors = useQuery(ListAuthorDocument);
  console.log(authors)
  return (
    <div className="max-w-7xl">
      <div></div>
    </div>
  );
};

export default index;
