import { withAuth } from "next-auth/middleware";

export default withAuth(
    // `withAuth` augments your `Request` with the user's token.
    function middleware(req) {
        const { token } = req.nextauth;
    },
    {
        // callbacks: {
        //     authorized: ({ token }) => {
        //         if (token?.data?.user?.role === "ADMIN") {
        //             return true;
        //         }
        //         return false;
        //     },
        // },
    }
);

export const config = {
    matcher: ["/admin/:path*", "/checkout/:path*"],
};
