const { BACKEND_URL } = process.env;

class AuthService {
    static async Register(body: any) {
        const response = await fetch(`${BACKEND_URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        return response.json();
    }
}

export default AuthService;
