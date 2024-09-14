// SearchBar.tsx

interface SearchBarProps {
    filterText: string;
    inStockOnly: boolean;
    onFilterTextChange: (text: string) => void;
    onInStockOnlyChange: (checked: boolean) => void;
}

export default function SearchBar({
                       filterText,
                       inStockOnly,
                       onFilterTextChange,
                       onInStockOnlyChange
                   }: SearchBarProps) {
    return (
        <form className="mb-4">
            <input
                className="border rounded py-2 px-4 mb-2 w-full"
                type="text"
                value={filterText} placeholder="Search..."
                onChange={(e) => onFilterTextChange(e.target.value)}/>
            <label className="flex items-center">
                <input
                    className="mr-2"
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => onInStockOnlyChange(e.target.checked)}/>
                Only show products in stock
            </label>
        </form>
    );
}