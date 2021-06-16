import React from 'react';
import { Product } from '@/types';

export const ProductElement: React.FC<any> = (product) => {
  return (
    <li key={product.name} className="relative">
      <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
        <div className="p-4">
          <img src={product.media[0].url} />
        </div>
        <div className="p-4">
          {product.name}
        </div>
      </div>
    </li>

  );
}
