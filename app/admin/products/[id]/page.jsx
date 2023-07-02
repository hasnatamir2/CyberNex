import React from "react";
import axios from "axios";

import UpdateProduct from "@/components/admin/UpdateProduct";
import mongoose from "mongoose";
import { redirect } from "next/navigation";

const getProduct = async (id) => {
    const res = await fetch(`${process.env.API_URL}/api/products/${id}`, {
        cache: "force-cache", // "force-cache
        next: {
            revalidate: 5,
        },
    });
    if(res.headers["content-type"] === "text/html") return null
    const data = res.json();
    return data;
};

const HomePage = async ({ params }) => {
    const isValidId = mongoose.isValidObjectId(params?.id);

    if (!isValidId) {
        return redirect("/");
    }

    const data = await getProduct(params.id);

    return <UpdateProduct data={data.product} />;
};

export default HomePage;

// export async function generateStaticParams() {
//     const res = await fetch(`${process.env.API_URL}/api/products`, {
//         cache: "force-cache",
//         next: {
//             revalidate: 5,
//         },
//     });
//     const data = await res.json();

//     const paths = data?.products.map((product) => ({ id: product?._id }));

//     return paths;
// }
