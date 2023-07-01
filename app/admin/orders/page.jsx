import axios from "axios";
import React from "react";

import { cookies } from "next/headers";
import queryString from "query-string";
import Orders from "@/components/admin/Orders";

const getOrders = async (searchParams) => {
    const nextCookies = cookies();

    const nextAuthSessionToken = nextCookies.get("next-auth.session-token");

    const urlParams = {
        page: searchParams.page || 1,
    };

    const searchQuery = queryString.stringify(urlParams);

    const res = await fetch(
        `${process.env.API_URL}/api/admin/orders?${searchQuery}`,
        {
            headers: {
                Cookie: `next-auth.session-token=${nextAuthSessionToken?.value}`,
            },
            cache: "force-cache",
            next: {
                revalidate: 5,
            },
        }
    );
    const data = await res.json();
    return data;
};

const AdminOrdersPage = async ({ searchParams }) => {
    const orders = await getOrders(searchParams);

    return <Orders orders={orders} />;
};

export default AdminOrdersPage;
