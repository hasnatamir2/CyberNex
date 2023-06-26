"use client";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";

const Sidebar = () => {
    const { data } = useSession();

    return (
        <div className='bg-gray-800 text-white w-64 py-8 px-4'>
            <div className='mb-10'>
                <h2 className='text-2xl font-bold'>
                    Admin ({data?.user?.user?.username})
                </h2>
            </div>
            <ul className='space-y-2'>
                <li>
                    <Link
                        href='/admin/products'
                        className='block py-2 px-4 rounded hover:bg-gray-700'
                    >
                        Products
                    </Link>
                </li>
                <li>
                    <Link
                        href='/admin/users'
                        className='block py-2 px-4 rounded hover:bg-gray-700'
                    >
                        Users
                    </Link>
                </li>
                <li>
                    <Link
                        href='/admin/orders'
                        className='block py-2 px-4 rounded hover:bg-gray-700'
                    >
                        Orders
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
