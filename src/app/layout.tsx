import { Suspense } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Provider from "./Provider";

export const runtime = "edge";

export const metadata = {
    title: "Tech Commerce",
    description: "A tech commerce site built with Next.js and Vercel.",
    robots: {
        follow: true,
        index: true,
    },
    openGraph: {
        images: [
            {
                url: `/api/og?title=${encodeURIComponent(
                    process.env.SITE_NAME || ""
                )}`,
                width: 1200,
                height: 630,
            },
        ],
        type: "website",
    },
    metadataBase: {}
};

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' className={inter.variable}>
            <body className='bg-white text-black selection:bg-teal-300 dark:bg-black dark:text-white dark:selection:bg-fuchsia-600 dark:selection:text-white'>
                <Provider>
                    <Navbar />
                    <Suspense fallback={<div>Loading...</div>}>
                        <main>{children}</main>
                    </Suspense>
                    <Footer />
                </Provider>
            </body>
        </html>
    );
}
