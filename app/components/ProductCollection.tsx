import React from 'react';
import { useQuery } from 'urql';

import { ProductElement } from '@/components/ProductElement';
import { Product } from '@/types';

const TodosQuery = `
  query {
    products(first: 10, channel: "default-channel") {
      edges {
        node {
          id
          name 
          media {
            url
          }
        }
      }
    }
  }
`;


export const ProductCollection: React.FC<{ collection: Product[] }> = ({ collection = [] }) => {
  const [result, reexecuteQuery] = useQuery({
    query: TodosQuery,
  });

  const { data, fetching, error } = result;


  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <ul role="list" className="grid grid-cols-3 gap-2">
      {data.products.edges.map(({ node: product }: any) => <ProductElement {...product} />)}
    </ul>
  );
}
