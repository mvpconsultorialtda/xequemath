
"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginSchema } from "@/app/schemas/login";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from 'next/link';

type FormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: FormData) => {
    // Simulate backend validation
    if (data.email === "test@example.com" && data.password === "password") {
      // On success, simulate a session by saving a flag in sessionStorage
      sessionStorage.setItem('isLoggedIn', 'true');
      // Redirect to the protected page
      router.push("/assistente");
    } else {
      // On failure, show an error message
      setErrorMessage("Email ou senha inválidos.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-sm">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>Digite seu email e senha para acessar sua conta</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                {...register("email")}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" {...register("password")} />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>

            {errorMessage && (
              <div className="p-2 text-center text-red-700 bg-red-100 rounded-md">
                {errorMessage}
              </div>
            )}

            <Button type="submit" className="w-full mt-6" disabled={isSubmitting}>
              {isSubmitting ? "Entrando..." : "Login"}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Não tem uma conta?{" "}
            <Link href="/request-invitation" className="underline">
              Solicite um convite
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
