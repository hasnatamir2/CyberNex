import Link from "next/link";
import { GridTileImage } from "@components/grid/tile";
import type { Product } from "@/types";

function ThreeItemGridItem({
    item,
    size,
    background,
}: {
    item: Product; // Product type;
    size: "full" | "half";
    background: "white" | "pink" | "purple" | "black";
}) {
    return (
        <div
            className={
                size === "full"
                    ? "lg:col-span-4 lg:row-span-2"
                    : "lg:col-span-2 lg:row-span-1"
            }
        >
            <Link className='block h-full' href={`/product/${item.handle}`}>
                <GridTileImage
                    src={item.featuredImage.url}
                    width={size === "full" ? 1080 : 540}
                    height={size === "full" ? 1080 : 540}
                    priority={true}
                    background={background}
                    alt={item.title}
                    labels={{
                        title: item.title as string,
                        amount: item.priceRange.maxVariantPrice.amount,
                        currencyCode:
                            item.priceRange.maxVariantPrice.currencyCode,
                    }}
                />
            </Link>
        </div>
    );
}

export async function ThreeItemGrid() {
    const homepageItems = [
        {
            id: "test",
            handle: "test",
            title: "test",
            description: "test",
            descriptionHtml: "test",
            availableForSale: true,
            options: [
                {
                    id: "test",
                    name: "test",
                    values: ["test"],
                },
            ],
            featuredImage: {
                url: "https://cdn.pixabay.com/photo/2023/06/12/11/34/mushrooms-8058299_1280.jpg",
                altText: "test",
                width: 100,
                height: 100,
            },
            priceRange: {
                maxVariantPrice: {
                    amount: "10",
                    currencyCode: "USD",
                },
                minVariantPrice: {
                    amount: "0",
                    currencyCode: "USD",
                },
            },
            seo: {
                title: "test",
                description: "test",
            },
            tags: ["test"],
            updatedAt: "test",
            variants: [
                {
                    id: "test",
                    title: "test",
                    availableForSale: true,
                    selectedOptions: [
                        {
                            name: "test",
                            value: "test",
                        },
                    ],
                    price: {
                        amount: "10",
                        currencyCode: "USD",
                    },
                },
            ],
            images: [
                {
                    url: "https://cdn.pixabay.com/photo/2023/06/12/11/34/mushrooms-8058299_1280.jpg",
                    altText: "test",
                    width: 100,
                    height: 100,
                },
            ],
        },
        {
            id: "test",
            handle: "test",
            title: "test",
            description: "test",
            descriptionHtml: "test",
            availableForSale: true,
            options: [
                {
                    id: "test",
                    name: "test",
                    values: ["test"],
                },
            ],
            featuredImage: {
                url: "https://cdn.pixabay.com/photo/2023/06/12/11/34/mushrooms-8058299_1280.jpg",
                altText: "test",
                width: 100,
                height: 100,
            },
            priceRange: {
                maxVariantPrice: {
                    amount: "10",
                    currencyCode: "USD",
                },
                minVariantPrice: {
                    amount: "0",
                    currencyCode: "USD",
                },
            },
            seo: {
                title: "test",
                description: "test",
            },
            tags: ["test"],
            updatedAt: "test",
            variants: [
                {
                    id: "test",
                    title: "test",
                    availableForSale: true,
                    selectedOptions: [
                        {
                            name: "test",
                            value: "test",
                        },
                    ],
                    price: {
                        amount: "10",
                        currencyCode: "USD",
                    },
                },
            ],
            images: [
                {
                    url: "https://cdn.pixabay.com/photo/2023/06/12/11/34/mushrooms-8058299_1280.jpg",
                    altText: "test",
                    width: 100,
                    height: 100,
                },
            ],
        },
        {
            id: "test",
            handle: "test",
            title: "test",
            description: "test",
            descriptionHtml: "test",
            availableForSale: true,
            options: [
                {
                    id: "test",
                    name: "test",
                    values: ["test"],
                },
            ],
            featuredImage: {
                url: "https://cdn.pixabay.com/photo/2023/06/12/11/34/mushrooms-8058299_1280.jpg",
                altText: "test",
                width: 100,
                height: 100,
            },
            priceRange: {
                maxVariantPrice: {
                    amount: "10",
                    currencyCode: "USD",
                },
                minVariantPrice: {
                    amount: "0",
                    currencyCode: "USD",
                },
            },
            seo: {
                title: "test",
                description: "test",
            },
            tags: ["test"],
            updatedAt: "test",
            variants: [
                {
                    id: "test",
                    title: "test",
                    availableForSale: true,
                    selectedOptions: [
                        {
                            name: "test",
                            value: "test",
                        },
                    ],
                    price: {
                        amount: "10",
                        currencyCode: "USD",
                    },
                },
            ],
            images: [
                {
                    url: "https://cdn.pixabay.com/photo/2023/06/12/11/34/mushrooms-8058299_1280.jpg",
                    altText: "test",
                    width: 100,
                    height: 100,
                },
            ],
        },
    ];

    if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2])
        return null;

    const [firstProduct, secondProduct, thirdProduct] = homepageItems;

    return (
        <section
            className='lg:grid lg:grid-cols-6 lg:grid-rows-2 mb-4'
            data-testid='homepage-products'
        >
            <ThreeItemGridItem
                size='full'
                item={firstProduct}
                background='purple'
            />
            <ThreeItemGridItem
                size='half'
                item={secondProduct}
                background='black'
            />
            <ThreeItemGridItem
                size='half'
                item={thirdProduct}
                background='pink'
            />
        </section>
    );
}
