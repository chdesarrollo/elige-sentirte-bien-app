"use client";

import { useState, useTransition } from "react";
import { authClient } from "@/lib/auth-client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";

import { ArrowLeft, Lock, Unlock, Mail } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isPending, startTransition] = useTransition();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    startTransition(async () => {
      const { error } = await authClient.signIn.email({
        email,
        password,
        callbackURL: "/dashboard",
      });

      if (error) {
        console.log("LOGIN ERROR:", error);
        alert(error.message);
      }
    });
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4 mb-6">
      <Card className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/15 shadow-2xl">
        <CardHeader>
          <CardTitle className="text-xl">Iniciar sesión</CardTitle>
          <CardDescription>Inicia sesión con tu correo</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
              <label className="text-white/80 text-xs font-semibold uppercase tracking-widest">
                Correo electrónico
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
                
                  <Input
                type="email"
                placeholder="correo@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isPending}
              />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label className="text-white/80 text-xs font-semibold uppercase tracking-widest">
                  Contraseña
                </label>
                
              </div>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
                <Input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isPending}
              />
                
              </div>
            </div>
             <Button type="submit" disabled={isPending} className="w-full mt-2 w-full bg-[#F44C7F] hover:bg-[#e03870] active:scale-[0.98] transition-all text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-[#F44C7F]/30 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
              {isPending ? "Iniciando sesión..." : "Continuar"}
            </Button>
          <Link href="/register" className="text-balance text-center text-xs text-muted-foreground">
                    ¿No tienes una cuenta?{" "}
                    <span className="underline cursor-pointer">
                        Regístrate aquí
                    </span>
            </Link>
        </CardContent>
            
      </Card>
      
    </form>
  );
}