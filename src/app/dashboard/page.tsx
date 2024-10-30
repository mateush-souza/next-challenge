"use client"
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { AuthContext } from "../contexts/AuthContext";
import { parseCookies } from "nookies";
import { api } from "@/services/api";

export default function Dashboard() {
    const { user } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        const { 'challenge.token': token } = parseCookies();

        if (!token) {
            router.push('/');
        } else {
            api.get('/dashboard');
        }
    }, []);

    return (
        <div className="h-[100vh] flex justify-center">
            <h1 className="font-size-300">Bem-vindo {user?.name}</h1>
        </div>
    );
}
