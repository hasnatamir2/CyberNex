import Profile from "@/components/auth/Profile";
import axios from "axios";
import React from "react";

import { cookies } from "next/headers";
import { getCookieName } from "@/helpers/helpers";

const getAddresses = async () => {
    const nextCookies = cookies();
    const cookieName = getCookieName();
    const nextAuthSessionToken = nextCookies.get(cookieName);

    const { data } = await axios.get(`${process.env.API_URL}/api/address`, {
        headers: {
            Cookie: `${nextAuthSessionToken?.name}=${nextAuthSessionToken?.value}`,
        },
        cache: "force-cache",
        next: {
            revalidate: 5,
        }
    });
    // const data = await res.json();
    return data?.addresses;
};



const ProfilePage = async () => {
    const addresses = await getAddresses();

    return <Profile addresses={addresses} />;
};

export default ProfilePage;
