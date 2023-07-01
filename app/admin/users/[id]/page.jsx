import axios from "axios";
import React from "react";

import { cookies } from "next/headers";
import UpdateOrder from "@/components/admin/UpdateOrder";
import UpdateUser from "@/components/admin/UpdateUser";

const getUser = async (id) => {
    const nextCookies = cookies();

    const nextAuthSessionToken = nextCookies.get("next-auth.session-token");

    const res = await fetch(`${process.env.API_URL}/api/admin/users/${id}`, {
        headers: {
            Cookie: `next-auth.session-token=${nextAuthSessionToken?.value}`,
        },
        next: {
            revalidate: 5,
        },
    });
    const data = await res.json();
    return data;
};

const AdminUserDetailsPage = async ({ params }) => {
    const data = await getUser(params?.id);

    return <UpdateUser user={data?.user} />;
};

export default AdminUserDetailsPage;