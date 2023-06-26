import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Grid from "@components/grid";
import { Gallery } from "@/components/product/gallery";
import { AddToCart } from "@/components/product/add-to-cart";
import Prose from "@/components/common/prose";
import { Image } from "@/types";

export default async function ProductPage({
    params,
}: {
    params: { handle: string };
}) {
    const { handle } = params;
    // const res = await fetch(
    //     "https://tech-commerce.myshopify.com/api/2021-07/graphql.json"
    // );
    const product = {
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
    };

    if (!product) return notFound();

    return (
        <main>
            <div className='lg:grid lg:grid-cols-6'>
                <div className='lg:col-span-4'>
                    <Gallery
                        title={product.title}
                        amount={product.priceRange.maxVariantPrice.amount}
                        currencyCode={
                            product.priceRange.maxVariantPrice.currencyCode
                        }
                        images={product.images.map((image: Image) => ({
                            src: image.url,
                            altText: image.altText,
                        }))}
                    />
                </div>

                <div className='p-6 lg:col-span-2'>
                    {product.descriptionHtml ? (
                        <Prose
                            className='mb-6 text-sm leading-tight'
                            html={product.descriptionHtml}
                        />
                    ) : null}

                    <AddToCart
                        variants={product.variants}
                        availableForSale={product.availableForSale}
                    />
                </div>
            </div>
        </main>
    );
}
