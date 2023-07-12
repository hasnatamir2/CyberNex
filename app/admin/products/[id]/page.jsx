import React from "react";
import axios from "axios";

import UpdateProduct from "@/components/admin/UpdateProduct";

const getProduct = async (id) => {
    const { data } = await axios.get(`${process.env.API_URL}/api/products/${id}`, {});
    // if (!res.ok) return { product: null };
    // if (res.headers["content-type"] === "text/html") return null;
    // const data = res.json();
    return data;
};

const HomePage = async ({ params }) => {
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
