import axios from "axios";
import React from "react";

import { cookies } from "next/headers";
import UpdateOrder from "@/components/admin/UpdateOrder";

const getOrder = async (id) => {
    const nextCookies = cookies();

    const nextAuthSessionToken = nextCookies.get("next-auth.session-token");

    const res = await fetch(`${process.env.API_URL}/api/admin/orders/${id}`, {
        headers: {
            Cookie: `next-auth.session-token=${nextAuthSessionToken?.value}`,
        },
        cache: "force-cache",
        next: {
            revalidate: 5,
        },
    });

    const data = await res.json();
    return data;
};

const AdminOrderDetailsPage = async ({ params }) => {
    const data = await getOrder(params?.id);

    return <UpdateOrder order={data?.order} />;
};

export default AdminOrderDetailsPage;
