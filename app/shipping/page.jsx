import axios from "axios";
import React from "react";

import { cookies } from "next/headers";
import Shipping from "@/components/cart/Shipping";

const getAddresses = async () => {
    const nextCookies = cookies();

    const nextAuthSessionToken = nextCookies.get("next-auth.session-token");

    const res = await fetch(`${process.env.API_URL}/api/address`, {
        headers: {
            Cookie: `next-auth.session-token=${nextAuthSessionToken?.value}`,
        },
        cache: "force-cache",
        next: {
            revalidate: 30,
        },
    });
    const data = await res.json();

    return data?.addresses;
};

const ShippingPage = async () => {
    const addresses = await getAddresses();

    return <Shipping addresses={addresses} />;
};

export default ShippingPage;
