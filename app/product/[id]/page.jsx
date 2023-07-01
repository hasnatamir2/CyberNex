import ProductDetails from "@/components/products/ProductDetails";
import { notFound } from "next/navigation";
import mongoose from "mongoose";
import { redirect } from "next/navigation";
import React from "react";

const getProductDetails = async (id) => {
    const res = await fetch(`${process.env.API_URL}/api/products/${id}`, {
        cache: "force-cache",
        next: {
            revalidate: 5,
        },
    });
    const data = await res.json();
    return data?.product;
};

const ProductDetailsPage = async ({ params }) => {
    const isValidId = mongoose.isValidObjectId(params?.id);

    if (!isValidId) {
        return redirect("/");
    }

    const product = await getProductDetails(params?.id);

    return <ProductDetails product={product} />;
};

export default ProductDetailsPage;

export async function generateMetadata({ params }) {
    const product = await getProductDetails(params?.id)
    
    if (!product) return notFound();


    const metadata = {
        title: product?.name,
        description: product?.description,
        image: product?.image,
        robots: {
            index: hide,
            follow: hide,
            googleBot: {
                index: hide,
                follow: hide,
            },
        },
        openGraph: product.image
            ? {
                  images: [
                      {
                          url: product?.image,
                          width: 300,
                          height: 300,
                          alt: product?.name,
                      },
                  ],
              }
            : null,
    };

    return metadata;
}

export async function generateStaticParams() {
    const res = await fetch(`${process.env.API_URL}/api/products`, {
        cache: "force-cache",
        next: {
            revalidate: 5,
        },
    });
    const data = await res.json();

    const paths = data?.products.map((product) => ({ id: product?._id }));

    return paths;
}
