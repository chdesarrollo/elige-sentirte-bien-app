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
            
            <div className="flex w-full max-w-sm flex-col gap-6"> 
                <Link href="/" className="flex items-center gap-2 self-center font-medium">  
                    
                        <Image src="/brand/logo-reserva.png" alt="Elige Sentirte Bien" width={180} height={180}/>

                </Link>
                {children} 
                <Link href="/" className=" bg-transparent flex items text-white px-4 mx-4" >
                <ArrowLeft></ArrowLeft>  Volver </Link>
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