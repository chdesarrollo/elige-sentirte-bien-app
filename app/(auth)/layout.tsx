import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";



import { ReactNode } from "react";
import Image from "next/image";


export default function AuthLayout({children}:{children: ReactNode}) {
    return (
        <div className="relative flex min-h-svh flex-col items-center justify-center"
         style={{
          background:
            "linear-gradient(160deg, #3D1152 0%, #442563 70%, #5a1f7a 100%)",}}>
            <Link href="/" className={buttonVariants({variant: 'outline', className: 'absolute top-4 left-4'})}> <ArrowLeft className="size-4"/>Volver</Link>
            <div className="flex w-full max-w-sm flex-col gap-6"> 
                <Link href="/" className="flex items-center gap-2 self-center font-medium">  
                    <div className="flex flex-col items-center mb-8">
                        <Image src="/brand/logo-reserva.png" alt="Elige Sentirte Bien" width={80} height={10}/>
                        <h1
                            className="text-white text-2xl font-bold text-center leading-tight"
                            style={{ fontFamily: "'Fraunces', serif" }}
                        >
                            Bienvenido de nuevo
                        </h1>
                        <p className="text-white/60 text-sm mt-1 text-center">
                            Ingresa a tu espacio de bienestar
                        </p>
                    </div>
                </Link>
                {children} 
            </div>
            <div className="text-balance text-center text-xs text-muted-foreground mt-6">
                    Al continuar aceptas nuestros{" "}
                    <span className="underline cursor-pointer">
                        Términos y Condiciones
                    </span>{" "}
                    y{" "}
                    <span className="underline cursor-pointer">
                        Política de Privacidad
                    </span>
                    .
                    <p className="mt-3">
                        El contenido ofrecido en esta plataforma es de carácter educativo y de
                        autogestión. No constituye terapia psicológica ni reemplaza la atención
                        profesional. Si necesitas apoyo clínico, te recomendamos acudir a un
                        profesional de la salud calificado.
                    </p>
            </div>
        </div>
    );
}