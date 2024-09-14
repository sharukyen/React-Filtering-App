// ProductRow.tsx
import React from 'react';
import { Product } from './products';

interface ProductRowProps {
    product: Product;
}

export const ProductRow: React.FC<ProductRowProps> = ({ product }) => {
    const name = product.stocked ? product.name :
        <span className="text-red-500">
      {product.name}
    </span>;

    return (
        <tr>
            <td className="border px-4 py-2">{name}</td>
            <td className="border px-4 py-2">{product.price}</td>
        </tr>
    );
};
