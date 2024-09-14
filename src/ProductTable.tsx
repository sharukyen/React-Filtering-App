// ProductTable.tsx
import React from 'react';
import { Product } from './products';
import { ProductCategoryRow } from './ProductCategoryRow';
import { ProductRow } from './ProductRow';

interface ProductTableProps {
    products?: Product[];
    filterText?: string;
    inStockOnly?: boolean;
}

interface ProductRowProps {
    product: Product;
    key: string;
}

interface ProductCategoryRowProps {
    category: string;
    key: string;
}

const ProductTable: React.FC<ProductTableProps> = ({ products = [], filterText = '', inStockOnly = false }) => {
    const rows: (React.ReactElement<ProductRowProps> | React.ReactElement<ProductCategoryRowProps>)[] = [];
    let lastCategory: string | null = null;

    products.forEach((product: Product) => {
        if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            return;
        }
        if (inStockOnly && !product.stocked) {
            return;
        }
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category} />
            );
        }
        rows.push(
            <ProductRow
                product={product}
                key={product.name} />
        );
        lastCategory = product.category;
    });

    return (
        <table className="min-w-full bg-white border-collapse">
            <thead>
            <tr>
                <th className="border-b-2 py-2 px-4 text-left">Name</th>
                <th className="border-b-2 py-2 px-4 text-left">Price</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

export default ProductTable;
