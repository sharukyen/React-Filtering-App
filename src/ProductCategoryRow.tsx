// ProductCategoryRow.tsx
import React from 'react';

interface ProductCategoryRowProps {
    category: string;
}

export const ProductCategoryRow: React.FC<ProductCategoryRowProps> = ({ category }) => (
    <tr className="bg-gray-200">
        <th colSpan={2} className="text-left py-2 px-4">
            {category}
        </th>
    </tr>
);
