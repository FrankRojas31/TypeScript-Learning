
export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: "Nokia A1",
    price: 150.00
}

const Tablet: Product = {
    description: "iPadAir",
    price: 250.00
}

export interface taxCalculationOptions {
    tax:number;
    products: Product[];
}


export function taxCalculation ( options: taxCalculationOptions ): [number,number] {

    const {tax, products} = options;
    let total = 0;

    products.forEach( ({ price }) => {
        total += price;
    });

    return [ total, total * tax ];

}

const ShoppingCart = [ phone, Tablet ];
const tax = 0.15;

const [total, Tax] = taxCalculation({
    products: ShoppingCart,
    tax
});

console.log( total, Tax );