export interface Product {
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    id: 1;
    images: string[];
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
}

export interface Store {
    limit: number;
    products: Product[];
    skip: number;
    total: number;
}
