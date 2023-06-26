"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/sidebar";

const Admin = () => {
    const router = useRouter();

    const { data } = useSession();

    // if(data?.user?.user?.role !== "ADMIN") {
    //     router.push("/");
    // }
    return (
        <div>
            <h1>Admin dashboard</h1>
        </div>
    );
};

export default Admin;
