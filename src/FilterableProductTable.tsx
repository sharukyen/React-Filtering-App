// FilterableProductTable.tsx
import {Product} from './products';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import {useState} from "react";

interface FilterableProductTableProps {
    products: Product[];
}


export default function FilterableProductTable({ products }: FilterableProductTableProps) {
    const [filterText, setFilterText] = useState<string>('');
    const [inStockOnly, setInStockOnly] = useState<boolean>(false);

    return (
        <div className="p-4">
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly} />
            <ProductTable
                products={products}
                filterText={filterText}
                inStockOnly={inStockOnly} />
        </div>
    );
}
