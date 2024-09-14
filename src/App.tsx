import FilterableProductTable from "./FilterableProductTable.tsx";
import {PRODUCTS} from "./products.ts";
export default function App() {
    return <FilterableProductTable products={PRODUCTS} />;
}
