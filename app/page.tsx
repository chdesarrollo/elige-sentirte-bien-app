"use client";

import { useState } from "react";
import { Heart, Brain, Leaf, Briefcase, DollarSign, Users, Star, ArrowRight, Play, CheckCircle, Menu, X, Flame, ChevronRight } from "lucide-react";
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Montserrat } from "next/font/google";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="flex min-h-screen flex-col">

      {/* NAVBAR */}
      <nav
  className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
  style={{
    background: "rgba(61,17,82,0.97)",
    backdropFilter: "blur(12px)",
  }}
>
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

    {/* LOGO */}
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <div className="flex items-center justify-center">
        <Image src="/brand/white-icon.png" alt="Elige Sentirte Bien" width={80} height={10}/>
        <span className="text-white text-xl font-italic font-bold">
        </span>
        </div>
    </Link>

    {/* MENÚ DESKTOP */}
    <div className="hidden md:flex items-center gap-8">

      <a
        href="#segmentos"
        className="text-white/80 hover:text-white transition"
      >
        <div className="flex items-center gap-1 rounded-full px-3 py-2 hover:bg-white/10 transition">
          <Users />
          ¿Para quién es?
        </div>
      </a>
      <a
        href="#como-funciona"
        className="text-white/80 hover:text-white transition"
      >
        <div className="flex items-center gap-1 rounded-full px-3 py-2 hover:bg-white/10 transition">
          <ChevronRight />
          ¿Cómo funciona?
        </div>
      </a>

    </div>

    {/* BOTONES DESKTOP */}
    <div className="hidden md:flex items-center gap-3 px-3 py-2 ">

      <Button
        asChild
        variant="ghost"
        className="text-white  rounded-full hover:text-white hover:bg-white/10"
      >
        <Link href="/login">
          Iniciar sesión
        </Link>
      </Button>

      <Button asChild className="rounded-full">
        <Link href="/register">
          Regístrate
        </Link>
      </Button>

    </div>

    {/* MOBILE */}
    <div className="md:hidden flex items-center gap-2">

      <Button asChild size="sm" className="rounded-full">
        <Link href="/register">
          Regístrate
        </Link>
      </Button>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-white"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

    </div>

  </div>

  {menuOpen && (
    <div
      className="md:hidden px-6 py-5 border-t border-white/10"
      style={{ background: "#3D1152" }}
    >
      <div className="flex flex-col gap-4">
        
        <a href="#segmentos" className="text-white">
          ¿Para quién es?
        </a>
        <a href="#como-funciona" className="text-white">
          ¿Cómo funciona?
        </a>
        <Button
          asChild
          variant="ghost"
          className="justify-start text-white"
        >
          <Link href="/login">
            Iniciar sesión
          </Link>
        </Button>


      </div>
    </div>
  )}
</nav>

{/* ================= HERO ================= */}

<section className="relative flex items-center min-h-screen bg-cover bg-center overflow-hidden px-6">

  {/* Overlay */}
  <div
    className="absolute inset-0 w-full h-full"
    style={{
  background: `
    radial-gradient(circle at 85% 90%, rgba(244,76,127,0.75) 0%, rgba(244,76,127,0.25) 28%, transparent 55%),
    radial-gradient(circle at 95% 10%, rgba(122,90,138,0.25) 0%, transparent 35%),
    linear-gradient(
      145deg,
      #2D0B43 0%,
      #3D1152 35%,
      #442563 70%,
      #5A2D73 100%
    )
  `,
}}
  />

  {/* Glow */}
  <div
    className="
absolute
top-0
left-1/2
-translate-x-1/2

w-[170vw]
max-w-[1200px]

aspect-square

opacity-30
pointer-events-none
"
    style={{
      background:
        "radial-gradient(circle, rgba(244,76,127,.35) 0%, transparent 70%)",
    }}
  />

  <div className="relative z-10 max-w-6xl mx-auto px-6 ">

    <div className="max-w-3xl py-28 md:py-40">

      {/* Badge */}

      <div
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-[#F44C7F]
          bg-[#F44C7F]/15
          px-5
          py-2
          mb-10
        "
      >
        <span className="text-[#F44C7F] text-sm font-medium tracking-wide">
          🦋 Plataforma de autogestión del bienestar integral
        </span>
      </div>

      {/* Título */}

      <h1
        className="text-white leading-none font-bold"
        style={{
          fontFamily: "var(--font-zilla)",
          fontSize: "clamp(2.2rem,7vw,4.5rem)",
        }}
      >
        Dejar de vivir en automático
        <br />

        <span
          className="italic"
          style={{
            color: "#F44C7F",
          }}
        >
          es una decisión.
        </span>
      </h1>

      {/* Lema */}

      <div className="mt-10 mb-12 max-w-xl">

        <div className="h-px bg-[#F44C7F] mb-5 opacity-70" />

        <p
          className="italic text-white/75 text-lg leading-relaxed"
          style={{
            fontFamily: "var(--font-zilla)",
          }}
        >
          “Solo se transforma, aquello que se identifica y se reconoce.”
        </p>

        <div className="h-px bg-[#F44C7F] mt-5 opacity-70" />

      </div>

      {/* Botones */}

      <div className="flex flex-col sm:flex-row gap-5">

        <Button
          asChild
          size="lg"
          className="
            h-14
            rounded-full
            px-8
            text-lg
            shadow-[0_10px_40px_rgba(244,76,127,.45)]
            hover:scale-[1.03]
            transition-all
          "
          style={{
            background: "#F44C7F",
          }}
        >
          <Link
            href="/dashboard"
            className="flex items-center gap-2"
          >
            Quiero transformarme
            <ArrowRight size={20} />
          </Link>
        </Button>

        <Button
          asChild
          variant="outline"
          size="lg"
          className="
            h-14
            rounded-full
            px-8
            border-white/40
            text-white
            bg-transparent
            hover:bg-white/10
          "
        >
          <Link href="#como-funciona">
            ¿Cómo funciona?
          </Link>
        </Button>

      </div>

      {/* Precio */}

      <div className="mt-10">

        <div className="flex items-end gap-3 flex-wrap">

          <span className="text-white/60 text-lg">
            Desde
          </span>

          <span
            className="text-white leading-none"
            style={{
              fontFamily: "var(--font-zilla)",
              fontSize: "clamp(2rem,3vw,5rem)",
              fontWeight: 700,
            }}
          >
            $5
          </span>

          <span className="text-white/70 text-lg pb-2">
            USD por proceso
          </span>

        </div>

        <p className="text-white/60 mt-1">
          Acceso inmediato
        </p>

      </div>

    </div>

  </div>

</section>
    {/* ================= METAMORFOSIS - VALUE PROP ================= */}
<section
  className="min-h-[90vh] grid lg:grid-cols-2 overflow-hidden"
  style={{ background: "#3D1152" }}
>
  {/* IMAGEN */}
  <div className="bg-[#DDEFD6] flex items-center justify-center p-8 lg:p-12">
    <Image
      src="/images/metamorfosis.png"
      alt="Metamorfosis de una mariposa"
      width={900}
      height={900}
      className="w-full h-auto object-contain max-h-[80vh]"
      priority
    />
  </div>

  {/* TEXTO */}
  <div className="flex items-center">
    <div className="max-w-2xl mx-auto px-8 py-16 lg:px-16">

      {/* Etiqueta */}
      <p
        className="uppercase font-bold tracking-[0.3em] text-[10px] mb-6"
        style={{ color: "#F44C7F" }}
      >
        🦋 La metáfora que nos guía
      </p>

      {/* Título */}
      <h2
        className="font-bold leading-tight mb-8 text-white"
        style={{
          fontFamily: "var(--font-zilla)",
          fontSize: "clamp(2rem,4vw,2.8rem)",
        }}
      >
        Como la mariposa, la transformación{" "}
        <span
          className="italic"
          style={{ color: "#F44C7F" }}
        >
          ocurre desde adentro.
        </span>
      </h2>

      {/* Párrafos */}
      <div className="space-y-6 text-white/75 text-[17px] leading-8">

        <p>
          La oruga no se convierte en mariposa porque alguien la cambia.
          Se transforma porque algo dentro de ella lo decide.
          El proceso es interno, silencioso y profundo.
        </p>

        <p>
          Elige Sentirte Bien nació con esa misma convicción:
          nadie puede transformarte desde afuera.
          La transformación real ocurre cuando decides observarte,
          reconocerte y actuar diferente.
        </p>

      </div>

      {/* Cita */}
      <blockquote
        className="mt-10 pl-6 italic text-lg text-white border-l-4"
        style={{
          borderColor: "#F44C7F",
          fontFamily: "var(--font-zilla)",
        }}
      >
        "Solo se transforma, aquello que se identifica y se reconoce."
      </blockquote>

      {/* Pasos */}
      <div className="mt-14 space-y-8">

        {/* Paso 1 */}
        <div className="flex gap-5">

          <div
            className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0"
            style={{ background: "#F44C7F" }}
          >
            1
          </div>

          <div>

            <h3 className="text-white font-semibold text-[15px] mb-2">
              Identificar: Poner nombre a lo que sientes
            </h3>

            <p className="text-white/60 text-[14px] leading-7">
              El primer paso es poner nombre a lo que está ocurriendo
              en tu vida. Sin evasión, sin filtros.
            </p>

          </div>

        </div>

        {/* Paso 2 */}
        <div className="flex gap-5">

          <div
            className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0"
            style={{ background: "#F44C7F" }}
          >
            2
          </div>

          <div>

            <h3 className="text-white font-semibold text-[15px] mb-2">
              Reconocer: El proceso de transformación inicia
            </h3>

            <p className="text-white/60 text-[14px] leading-7">
              Mirarte con honestidad y sin juicio.
              Entender de dónde vienen tus patrones
              y tus respuestas automáticas.
            </p>

          </div>

        </div>

        {/* Paso 3 */}
        <div className="flex gap-5">

          <div
            className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0"
            style={{ background: "#F44C7F" }}
          >
            3
          </div>

          <div>

            <h3 className="text-white font-semibold text-[15px] mb-2">
              Transformar: La mariposa elige volar
            </h3>

            <p className="text-white/60 text-[14px] leading-7">
              Actuar diferente.
              Construir una nueva forma de relacionarte contigo mismo
              y con tu vida.
            </p>

          </div>

        </div>

      </div>

    </div>
  </div>
</section>

{/* SECCION 4 - ¿ESTO TE SUENA FAMILIAR? */}
<section className="bg-[#F9F7FB] py-24 md:py-32  overflow-hidden">
  <div className="max-w-3xl mx-auto px-6">

    {/* Header */}
    <div className="text-center max-w-3xl mx-auto">

      <p
        className="uppercase tracking-[0.3em] text-xs font-bold mb-5"
        style={{ color: "#F44C7F" }}
      >
        ¿Esto te suena familiar?
      </p>

      <h2
        className="font-bold leading-tight"
        style={{
          fontFamily: "var(--font-zilla-slab)",
          fontSize: "clamp(2rem,5vw,2.75rem)",
          color: "#1a1a2e",
        }}
      >
        Hay algo en tu vida que sabes que puede ser diferente.
      </h2>

    </div>

    {/* Cards */}
    <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">

      {[
        {
          emoji: "😔",
          title: "Sientes que algo no está bien",
          text: "Pero no sabes exactamente qué es ni cómo nombrarlo.",
        },
        {
          emoji: "🔄",
          title: "Repites los mismos patrones",
          text: "Las mismas reacciones, las mismas decisiones, los mismos resultados.",
        },
        {
          emoji: "😰",
          title: "Cargas con demasiado",
          text: "Estrés, culpa, miedo, cansancio. Y tratas de seguir adelante igual.",
        },
        {
          emoji: "🤔",
          title: "Sabes que puedes más",
          text: "Pero no encuentras por dónde empezar ni cómo sostenerlo.",
        },
        {
          emoji: "💔",
          title: "Tus relaciones te agotan",
          text: "En el trabajo, en la familia, en pareja. Algo no está funcionando.",
        },
        {
          emoji: "🌱",
          title: "Quieres transformarte",
          text: "No un cambio superficial. Algo real, desde adentro y sostenible.",
        },
      ].map((item) => (
        <Card
          key={item.title}
          className="
            bg-white
            rounded-2xl
            border
            p-4
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-xl
          "
          style={{
            borderColor: "rgba(61,17,82,.08)",
          }}
        >
          <CardHeader className="p-0 mb-0 mt-0">
          <div className="text-3xl mb-0">
            {item.emoji}
          </div>

          <CardTitle
            className="font-semibold text-xl mb-0 mt-0 p-0"
            style={{
              color: "#3D1152",
            }}
          >
            {item.title}
          </CardTitle>
            </CardHeader>
          <CardContent className="p-0 mt-0 mb-0">

          <p
            className="leading-7 text-sm"
            style={{
              color: "#7a5a8a",
            }}
          >
            {item.text}
          </p>
            </CardContent>
        </Card>
      ))}
      
    </div>

    {/* Cita */}

    <div
      className="
        mt-20
        max-w-5xl
        mx-auto
        bg-white
        rounded-3xl
        p-8
        md:p-10
        border-l-4
        shadow-sm
      "
      style={{
        borderLeftColor: "#F44C7F",
      }}
    >

      <p
        className="italic leading-9"
        style={{
          fontFamily: "var(--font-zilla-slab)",
          fontSize: "clamp(1.2rem,2vw,1.5rem)",
          color: "#442563",
        }}
      >
        "Elige Sentirte Bien existe para ese momento. Para ayudarte a
        nombrarlo, entenderlo y transformarlo — a tu ritmo, sin necesidad de
        un profesional."
      </p>

    </div>

  </div>
</section>



{/* SECTION 5 - ¿PARA QUIÉN ES? */}
<section
  id="segmentos"
  className="bg-white py-24 md:py-28  overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}

    <div className="text-center max-w-3xl mx-auto mb-16">

      <p
        className="uppercase tracking-[0.3em] text-xs font-bold mb-5"
        style={{ color: "#F44C7F" }}
      >
        ¿Para quién es?
      </p>

      <h2
        className="font-bold leading-tight"
        style={{
          fontFamily: "var(--font-zilla-slab)",
          fontSize: "clamp(2rem,5vw,2.8rem)",
          color: "#3D1152",
        }}
      >
        El bienestar no tiene edad. Tiene etapas.
      </h2>

      <p
        className="mt-6 text-lg leading-8"
        style={{
          color: "#7a5a8a",
        }}
      >
        Cada momento de la vida trae sus propios retos. Por eso tenemos
        procesos diseñados específicamente para cada etapa — desde la niñez
        hasta la adultez mayor.
      </p>

    </div>

    {/* GRID */}

    <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">

      {[
        {
          title: "Niños",
          age: "0 – 12 años",
          color: "#F4A261",
          image: "/segmentos/ninos.jpg",
          href: "/segmentos/ninos",
          description:
            "Herramientas lúdicas para el desarrollo temprano de hábitos de bienestar y regulación emocional. Aprenden jugando, desde adentro.",
        },
        {
          title: "Adolescentes",
          age: "13 – 17 años",
          color: "#4CC9F0",
          image: "/segmentos/adolescentes.jpg",
          href: "/segmentos/adolescentes",
          description:
            "Un espacio que habla directo, sin rodeos y sin juicio. Para la etapa más intensa, cambiante y determinante de la vida.",
        },
        {
          title: "Adultos",
          age: "18 – 59 años",
          color: "#52B788",
          image: "/segmentos/adultos.jpg",
          href: "/segmentos/adultos",
          description:
            "Para quien carga con el trabajo, la familia, las deudas y las expectativas. Aquí puedes pausar, entenderte y actuar diferente.",
        },
        {
          title: "Adultos mayores",
          age: "60+ años",
          color: "#C77DFF",
          image: "/segmentos/adultos-mayores.jpg",
          href: "/segmentos/adultos-mayores",
          description:
            "Ejercicios que honran lo que has vivido y te acompañan a seguir creciendo, conectado y con propósito.",
        },
        {
          title: "Parejas",
          age: "Todas las edades",
          color: "#E8A598",
          image: "/segmentos/parejas.jpg",
          href: "/segmentos/parejas",
          description:
            "Herramientas para fortalecer el vínculo, mejorar la comunicación y construir juntos desde un lugar más consciente.",
        },
        {
          title: "Padres",
          age: "Todas las edades",
          color: "#FFD166",
          image: "/segmentos/padres.jpg",
          href: "/segmentos/padres",
          description:
            "Crianza consciente, bienestar familiar y herramientas para acompañar el desarrollo de tus hijos desde tu propio bienestar.",
        },
      ].map((segment) => (

        <Link
          key={segment.title}
          href={segment.href}
          className="
            group
            overflow-hidden
            rounded-3xl
            bg-white
            border
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-2xl
            m-0
            p-0
          "
          style={{
            borderColor: "rgba(61,17,82,.08)",
          }}
        >

          {/* Imagen */}

          <div className="relative h-60 overflow-hidden mb-0 mt-0">

            <Image
              src={segment.image}
              alt={segment.title}
              width={900}
              height={900}
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-500
                group-hover:scale-105
              "
            />

            {/* Badge */}

            <div
              className="absolute top-5 left-5 rounded-full px-4 py-2 text-xs font-semibold text-white shadow-lg"
              style={{
                background: segment.color,
              }}
            >
              {segment.age}
            </div>

            {/* Línea inferior */}

            <div
              className="absolute bottom-0 left-0 w-full h-1 mb-0 mt-0"
              style={{
                background: segment.color,
              }}
            />

          </div>

          {/* Texto */}

          <div className="p-7 text-sm p-0 mb-0 mt-0">

            <h3
              className="text-2xl font-bold mb-4"
              style={{
                color: "#3D1152",
              }}
            >
              {segment.title}
            </h3>

            <p
              className="leading-7"
              style={{
                color: "#7a5a8a",
              }}
            >
              {segment.description}
            </p>

            <div
              className="mt-8 flex items-center font-semibold transition-all group-hover:translate-x-1"
              style={{
                color: segment.color,
              }}
            >
              Explorar procesos

              <ArrowRight
                size={18}
                className="ml-2"
              />
            </div>

          </div>

        </Link>

      ))}

    </div>

  </div>

  
</section>

{/* SECTION 7 - ¿CÓMO FUNCIONA? */}

<section
  id="como-funciona"
  className="relative bg-[#F9F7FB] py-24 md:py-28 overflow-hidden "
>
  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}

    <div className="text-center max-w-2xl mx-auto mb-20">

      <p
        className="uppercase tracking-[0.3em] text-xs font-bold mb-5"
        style={{
          color: "#F44C7F",
        }}
      >
        Simple y poderoso
      </p>

      <h2
        className="font-bold"
        style={{
          fontFamily: "var(--font-zilla-slab)",
          fontSize: "clamp(2rem,5vw,2.8rem)",
          color: "#3D1152",
        }}
      >
        ¿Cómo funciona?
      </h2>

    </div>

    {/* Línea central (solo desktop) */}

    <div
      className="hidden lg:block absolute left-0 right-0 mx-auto"
      style={{
        top: "255px",
        width: "72%",
        height: "2px",
        background: "rgba(61,17,82,.12)",
      }}
    />

    {/* Pasos */}

    <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">

      {[
        {
          number: "1",
          title: "Elige tu etapa de vida",
          text: "Niños, adolescentes, adultos, adultos mayores, parejas o padres. El punto de partida siempre es dónde estás hoy.",
        },
        {
          number: "2",
          title: "Explora las dimensiones",
          text: "8 áreas del bienestar integral. Elige la que más resuene con lo que estás viviendo en este momento.",
        },
        {
          number: "3",
          title: "Elige tu proceso",
          text: "Cada dimensión tiene múltiples procesos. Desde $5 USD, con acceso inmediato y a tu propio ritmo.",
        },
        {
          number: "4",
          title: "Transforma día a día",
          text: "Un ejercicio por día. Observación, escritura y acción consciente. No se trata de hacerlo perfecto, se trata de hacerlo honesto.",
        },
      ].map((step) => (

        <div
          key={step.number}
          className="relative text-center flex flex-col items-center"
        >

          {/* Número */}

          <div
            className="
              w-14 h-14 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0
              mb-2
              z-10
            "
            style={{
              background: "#3D1152",
            }}
          >
            <span className="rounded-full"
              style={{
                fontFamily: "var(--font-zilla-slab)",
                color: "white",
                fontSize: "1.5rem",
                fontWeight: 700,
              }}
            >
              {step.number}
            </span>
          </div>

          {/* Card */}

          <Card
            className="
              bg-white
              rounded-3xl
              p-4
              h-full
              border
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-xl

            "
            style={{
              borderColor: "rgba(61,17,82,.08)",
            }}
          >

            <CardTitle
              className="font-semibold mt-3 mb-0"
              style={{
                color: "#1a1a2e",
                fontSize: "1rem",
              }}
            >
              {step.title}
            </CardTitle>
              <CardContent >
            <p
              className="leading-5 text-sm "
              style={{
                color: "#8a7a96",
              }}
            >
              {step.text}
            </p>
              </CardContent>
          </Card>

        </div>

      ))}

    </div>

  </div>


</section>
 {/* SECTION 8 - CTA FINAL */}

<section
  className="relative overflow-hidden py-28 md:py-36"
  style={{
    background: "#3D1152",
  }}
>

  {/* Glow superior */}

  <div
    className="absolute -top-48 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-3xl opacity-30"
    style={{
      background: "#F44C7F",
    }}
  />

  {/* Glow inferior */}

  <div
    className="absolute bottom-[-250px] right-[-120px] w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
    style={{
      background: "#F44C7F",
    }}
  />

  <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

    {/* Badge */}

    <div
      className="
        inline-flex
        items-center
        rounded-full
        border
        px-5
        py-2
        mb-8
      "
      style={{
        borderColor: "#F44C7F",
        background: "rgba(244,76,127,.12)",
        color: "#F44C7F",
      }}
    >
      🦋&nbsp;&nbsp;El momento es ahora
    </div>

    {/* Título */}

    <h2
      className="font-bold leading-tight"
      style={{
        fontFamily: "var(--font-zilla-slab)",
        fontSize: "clamp(2rem,6vw,3.5rem)",
        color: "#FFF",
      }}
    >
      La transformación no ocurre cuando entiendes.
      <br />

      <span
        className="italic"
        style={{
          color: "#F44C7F",
        }}
      >
        Ocurre cuando practicas distinto.
      </span>

    </h2>

    {/* Lema */}

    <div
      className="mt-10 inline-block border-y py-4 px-8"
      style={{
        borderColor: "rgba(244,76,127,.35)",
      }}
    >
      <p
        className="italic"
        style={{
          fontFamily: "var(--font-zilla-slab)",
          color: "rgba(255,255,255,.65)",
          fontSize: "1.1rem",
        }}
      >
        "Solo se transforma, aquello que se identifica y se reconoce."
      </p>
    </div>

   

    {/* Botón */}

    <div className="mt-14">

      <Link href="/dashboard">

        <Button
          size="lg"
          className="
            rounded-full
            px-10
            py-7
            text-lg
            font-semibold
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-[0_0_50px_rgba(244,76,127,.55)]
          "
          style={{
            background: "#F44C7F",
            color: "white",
          }}
        >
          Elige sentirte bien

          <ArrowRight className="ml-3" size={20} />

        </Button>

      </Link>

    </div>

  </div>

</section>
      {/* FOOTER */}
<footer
  className="py-20 px-6"
  style={{
    background: "#14001F",
  }}
>
  <div className="max-w-5xl mx-auto">

    {/* TOP */}
    <div className="flex flex-col md:flex-row justify-between gap-12">

      {/* BRAND */}
      <div className="max-w-md">

        <Link
          href="/"
          className="flex items-center gap-4 mb-8"
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
            style={{
              background: "#F44C7F",
            }}
          >
            e
          </div>

          <span className="text-white text-3xl font-bold">
            Elige Sentirte Bien
          </span>
        </Link>

        <p className="text-white/60 text-lg leading-relaxed">
          Procesos de bienestar integral para todas las etapas
          de la vida.
          <br />
          Aprende, crece y florece — a tu ritmo.
        </p>

      </div>

      {/* LINKS */}
      <div className="grid grid-cols-2 gap-16">

        <div>

          <h3 className="text-white/80 uppercase tracking-[0.15em] text-sm mb-6">
            Plataforma
          </h3>

          <div className="flex flex-col gap-4">

            <Link
              href="/dashboard"
              className="text-white/60 hover:text-white transition"
            >
              Procesos
            </Link>

            <Link
              href="/comunidad"
              className="text-white/60 hover:text-white transition"
            >
              Comunidad
            </Link>

            <Link
              href="/blog"
              className="text-white/60 hover:text-white transition"
            >
              Blog
            </Link>

          </div>

        </div>

        <div>

          <h3 className="text-white/80 uppercase tracking-[0.15em] text-sm mb-6">
            Compañía
          </h3>

          <div className="flex flex-col gap-4">

            <Link
              href="/nosotros"
              className="text-white/60 hover:text-white transition"
            >
              Sobre nosotros
            </Link>

            <Link
              href="/privacidad"
              className="text-white/60 hover:text-white transition"
            >
              Privacidad
            </Link>

            <Link
              href="/terminos"
              className="text-white/60 hover:text-white transition"
            >
              Términos
            </Link>

            <Link
              href="/contacto"
              className="text-white/60 hover:text-white transition"
            >
              Contacto
            </Link>

          </div>

        </div>

      </div>

    </div>

    {/* DIVIDER */}
    <div className="mt-16 border-t border-white/10" />

    {/* BOTTOM */}
    <div className="pt-8 text-center">

      <p className="text-white/40">
        © {new Date().getFullYear()} Elige Sentirte Bien.
        Todos los derechos reservados.
      </p>

    </div>

  </div>
</footer>

    </main>
  )
}
