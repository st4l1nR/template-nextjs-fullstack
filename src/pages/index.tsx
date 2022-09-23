import React from 'react';
import { ListAuthorDocument } from '@ctypes/graphql';
import { useQuery } from '@apollo/client/react';

const index = () => {
  const authors = useQuery(ListAuthorDocument);

  return (
    <div className="container flex items-center justify-center min-h-screen p-4 mx-auto">
      <main>
        <h1 className="font-mono text-xl code">
          Welcome to <span className="text-purple-700">Nextjs</span>,{' '}
          <span className="text-indigo-700">TailwindCSS</span> ,{' '}
          <span className="text-gray-700">TypeScript</span>, <span className="text-pink-300">Storybook</span>,{' '}
          <span className="text-pink-700">Graphql</span> and <span className="text-emerald-700">MongoDB</span>
        </h1>

      </main>
      <div className="mt-5">{authors && JSON.stringify(authors.data)}</div>
    </div>
  );
};

export default index;
