import { createContext, useContext, useState, type ReactNode, useEffect } from "react";

interface User {
  id: number;
  google_id: string;
  full_name: string;
  email: string;
}

interface AuthContextType {
    user : User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/auth/status", {
                    method: "GET",
                    credentials: "include",
                });

                const data = await response.json();

                if (data.authenticated) {
                    setUser(data.user);
                    setIsAuthenticated(true);
                } else {
                    setUser(null);
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.error("Error checking authentication status:", error);
            } finally {
                setIsLoading(false);
            }
        };

        checkAuthStatus();
    }, []);

    const logout = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/auth/logout", {
                method: "POST",
                credentials: "include",
            });

            if (response.ok) {
                setUser(null);
                setIsAuthenticated(false);
            } else {
                console.error("Logout failed");
            }
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, isLoading, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};