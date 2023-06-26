import NextAuth from "next-auth";

enum Role {
    ADMIN,
    USER,
}

declare module "next-auth" {
    interface Session {
        user: {
            user: {
                userId: string;
                username: string;
                email: string;
                role: string;
                password: string;
                updatedAt: string;
                createdAt: string;
            };
            token: string;
        };
    }
}
