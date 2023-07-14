import ProductDetails from "@/components/products/ProductDetails";
import mongoose from "mongoose";
import { redirect } from "next/navigation";
import React from "react";
import axios from "axios";


const getProductDetails = async (id) => {
    const { data } = await axios.get(`${process.env.API_URL}/api/products/${id}`, {});
    // if (res.headers["content-type"] == "text/html") return null;
    // const data = await res.json();
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
    const product = await getProductDetails(params?.id);

    const metadata = {
        title: product?.name,
        description: product?.description,
        image: product?.images[0].url,
        openGraph: product?.images[0]
            ? {
                  images: [
                      {
                          url: product?.images[0].url,
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

// export async function generateStaticParams() {
//     const { data } = await axios.get(`${process.env.API_URL}/api/products`, {
//         cache: "force-cache",
//         next: {
//             revalidate: 5,
//         },
//     });
//     // const data = await res.json();

//     const paths = data?.products.map((product) => ({ id: product?._id }));

//     return paths;
// }
