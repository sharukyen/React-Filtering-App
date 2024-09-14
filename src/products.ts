export interface Product {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
}

export const PRODUCTS: Product[] = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Fruits", price: "$1.5", stocked: true, name: "Banana"},
    {category: "Fruits", price: "$3", stocked: false, name: "Mango"},
    {category: "Fruits", price: "$2.5", stocked: true, name: "Blueberries"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"},
    {category: "Vegetables", price: "$1.5", stocked: true, name: "Carrots"},
    {category: "Vegetables", price: "$2.5", stocked: false, name: "Broccoli"},
    {category: "Vegetables", price: "$3", stocked: true, name: "Bell Pepper"},
    {category: "Dairy", price: "$2", stocked: true, name: "Milk"},
    {category: "Dairy", price: "$1.5", stocked: false, name: "Cheese"},
    {category: "Dairy", price: "$3", stocked: true, name: "Yogurt"},
    {category: "Dairy", price: "$4", stocked: false, name: "Butter"},
    {category: "Dairy", price: "$1", stocked: true, name: "Cream"}
];