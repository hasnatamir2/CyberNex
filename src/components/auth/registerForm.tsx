"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const RegisterForm = () => {
    const router = useRouter();
    const [error, setError] = useState("");

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { email, username, password } = e.target as HTMLFormElement;
        if (!email.value && !username.value && !password.value) {
            setError("Please fill in all the fields");
            return;
        }

        // check for valid email
        if (email.value && !email.value.includes("@")) {
            setError("Please enter a valid email");
            return;
        }
        const body = {
            email: email.value,
            username: username.value,
            password: password.value,
            role: "USER",
        };
        const response = await fetch(
            `http://localhost:8000/api/v1/auth/register`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            }
        );
        if (response.status === 200) {
            signIn();
            console.log(response);
        }
    };
    return (
        <div className=''>
            <p className='text-red-500	'>{error}</p>
            <form
                onSubmit={onSubmit}
                className='flex flex-col gap-4 bg-transparent p-0 dark:border-gray-500'
            >
                <input
                    type='email'
                    name='email'
                    placeholder='abc@xyz.com'
                    autoComplete='off'
                    className='w-full px-4 py-2 text-black border border-gray-200 dark:bg-black dark:text-gray-100'
                />
                <input
                    type='text'
                    name='username'
                    placeholder='John'
                    autoComplete='off'
                    className='w-full px-4 py-2 text-black border border-gray-200 dark:bg-black dark:text-gray-100'
                />
                <input
                    type='password'
                    name='password'
                    placeholder='*****'
                    autoComplete='off'
                    className='w-full px-4 py-2 text-black border border-gray-200 dark:bg-black dark:text-gray-100'
                />
                <button
                    type='submit'
                    className='bg-gray-500 py-2 hover:bg-gray-800	'
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
