import Image from "next/image";
import Link from "next/link";

export async function Carousel() {
    const products = [
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

    if (!products?.length) return null;

    return (
        <div className='relative w-full overflow-hidden bg-black dark:bg-white'>
            <div className='flex animate-carousel'>
                {[...products, ...products].map((product, i) => (
                    <Link
                        key={`${product.handle}${i}`}
                        href={`/product/${product.handle}`}
                        className='relative h-[30vh] w-1/2 flex-none md:w-1/3'
                    >
                        {product.featuredImage ? (
                            <Image
                                alt={product.title}
                                className='h-full object-contain'
                                fill
                                sizes='33vw'
                                src={product.featuredImage.url}
                            />
                        ) : null}
                        <div className='absolute inset-y-0 right-0 flex items-center justify-center'>
                            <div className='inline-flex bg-white p-4 text-xl font-semibold text-black dark:bg-black dark:text-white'>
                                {product.title}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
