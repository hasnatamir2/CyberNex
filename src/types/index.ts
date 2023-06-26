export interface INavMenuItem {
    title: string;
    path: string;
}

export type Money = {
    amount: string;
    currencyCode: string;
};

export type Image = {
    url: string;
    altText: string;
    width: number;
    height: number;
};

export type ProductOption = {
    id: string;
    name: string;
    values: string[];
};

export type ProductVariant = {
    id: string;
    title: string;
    availableForSale: boolean;
    selectedOptions: {
        name: string;
        value: string;
    }[];
    price: Money;
};

export type Product = {
    id: string;
    handle: string;
    availableForSale: boolean;
    title: string;
    description: string;
    descriptionHtml: string;
    options: ProductOption[];
    priceRange: {
        maxVariantPrice: Money;
        minVariantPrice: Money;
    };
    featuredImage: Image;
    seo: SEO;
    tags: string[];
    updatedAt: string;
    variants: ProductVariant[];
    images: Image[];
};

export type SEO = {
    title: string;
    description: string;
};

export type Cart = {
    id: string;
    checkoutUrl: string;
    cost: {
        subtotalAmount: Money;
        totalAmount: Money;
        totalTaxAmount: Money;
    };
    totalQuantity: number;
    lines: CartItem[];
};

export type CartItem = {
    id: string;
    quantity: number;
    cost: {
        totalAmount: Money;
    };
    merchandise: {
        id: string;
        title: string;
        selectedOptions: {
            name: string;
            value: string;
        }[];
        product: Product;
    };
};

export type Menu = {
    title: string;
    path: string;
};
