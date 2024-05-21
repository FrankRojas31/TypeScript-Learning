import { Product, taxCalculation } from "./06-function-destructuring"

const ShoppingCart: Product[] = [
    {
        description: "Nokia",
        price: 100
    },
    {
        description: "Ipad",
        price: 150
    }
];

const Tax = 0.15

const [total, tax] = taxCalculation({
    products: ShoppingCart,
    tax: Tax
});

console.log(total, tax)