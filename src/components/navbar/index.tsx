"use client";
import { Suspense, Fragment } from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { Menu, Transition } from "@headlessui/react";

import { INavMenuItem } from "@/types";
import { Menu as MenuOptions } from "@/libs/constants";
import CartIcon from "@components/icons/cart";
import Cart from "@components/cart";
import ShoppingBagIcon from "@components/icons/shopping-bag";
import MobileMenu from "./mobile-menu.tsx";
import UserIcon from "@components/icons/user";

const Navbar = () => {
    const { data } = useSession();

    return (
        <nav className='relative flex items-center justify-between bg-white p-4 dark:bg-black lg:px-6'>
            <div className='block w-1/3 md:hidden'>
                <MobileMenu menu={MenuOptions} />
            </div>
            <div className='flex justify-self-center md:w-1/3 md:justify-self-start'>
                <div className='md:mr-4'>
                    <Link href='/' aria-label='Go back home'>
                        <ShoppingBagIcon className='h-8 transition-transform hover:scale-110' />
                    </Link>
                </div>
                {Menu.length ? (
                    <ul className='hidden md:flex'>
                        {MenuOptions.map((item: INavMenuItem) => (
                            <li key={item.title}>
                                <Link
                                    href={item.path}
                                    className='rounded-lg px-2 py-1 text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400'
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : null}
            </div>

            <div className='flex w-1/3 justify-end gap-4'>
                <Suspense fallback={<CartIcon className='h-6' />}>
                    <Cart />
                </Suspense>
                <Menu as='div' className='relative inline-block text-left z-50'>
                    <Menu.Button className='inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                        <UserIcon className='h-8 transition-transform hover:scale-110' />
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                    >
                        <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                            <div className='px-1 py-1 '>
                                {data?.user?.user?.role === "ADMIN" && (
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                href='/admin'
                                                className={`${
                                                    active
                                                        ? "bg-gray-500 text-white"
                                                        : "text-gray-900"
                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            >
                                                Admin
                                            </Link>
                                        )}
                                    </Menu.Item>
                                )}

                                {data?.user?.token ? (
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                onClick={() => signOut()}
                                                className={`${
                                                    active
                                                        ? "bg-gray-500 text-white"
                                                        : "text-gray-900"
                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            >
                                                Logout
                                            </button>
                                        )}
                                    </Menu.Item>
                                ) : (
                                    <>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    onClick={() => signIn()}
                                                    className={`${
                                                        active
                                                            ? "bg-gray-500 text-white"
                                                            : "text-gray-900"
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                >
                                                    Login
                                                </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    href='/register'
                                                    className={`${
                                                        active
                                                            ? "bg-gray-500 text-white"
                                                            : "text-gray-900"
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                >
                                                    Sign Up
                                                </Link>
                                            )}
                                        </Menu.Item>
                                    </>
                                )}
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </nav>
    );
};

export default Navbar;
