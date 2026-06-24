import { Course } from "@/components/course/types";

export const aprendeADecirNo: Course = {
    id: "aprende-a-decir-no",
    title: "Aprende a decir no",
    section: "adultos",
    dimension: "emocional",
    price: 0, // luego será pago
    description: `<h1> <strong>Bienvenida al proceso Aprendiendo a decir no, límites saludables</strong></h1>

Este proceso no es para aprender a decir “no” en teoría. Es para empezar a 
hacerlo en tu vida real.
Decir “no” no es solo una palabra. Es una decisión que muchas veces evitas por 
miedo, incomodidad o hábito.
Muchas personas saben que deberían poner límites, pero terminan diciendo “sí” 
cuando en realidad quieren decir “no”.
Este proceso está diseñado para que identifiques por qué te cuesta, reconozcas 
cómo ocurre y empieces a actuar diferente.
No se trata de volverte rígido o rechazar todo. Se trata de aprender a respetarte 
sin sentirte mal por hacerlo.

<h2> <strong>¿De qué se trata este proceso?</strong></h2>
Es un proceso práctico donde identificas en qué situaciones te cuesta decir “no”, 
entiendes qué hay detrás de eso y empiezas a poner límites de forma 
consciente.
Aquí el objetivo no es solo decir “no”, es hacerlo con claridad, sin culpa y con 
coherencia contigo.
<h2> <strong>¿Para quién es este proceso?</strong></h2>
Para quien dice “sí” cuando no quiere.
Para quien evita incomodar a otros y termina incomodándose a sí mismo.
Para quien siente que pone límites tarde o no los sostiene.
<h2> <strong>¿Cómo se va a vivir el proceso?</strong></h2>
Día a día, observando y actuando en situaciones reales.
No es lo que piensas, es lo que haces cuando te piden algo.
Compromiso consciente. 
Si haces este proceso, hazlo con honestidad y acción real.
No para entender, sino para cambiar.`,
    days: [
  {
    day: 1,
    title: "Relación con el “no”",
    purpose: "Hacer consciente cómo te relacionas con decir 'no'.",
    activity: [
      "Escribe cómo crees que manejas el decir 'no'",
      "Describe tres situaciones recientes donde dijiste “sí” y querías decir “no”",
      "Explica por qué aceptaste en cada caso",
      "Identifica si fue por miedo, culpa, costumbre o evitar conflicto"
    ],
    questions: [
      "¿Me cuesta decir “no” o evito hacerlo?",
      "¿Qué me pasa cuando pienso en decirlo?",
      "¿A quién le digo sí más fácilmente?"
    ],
    help: "Tu dificultad no está en decir “no”, está en lo que sientes antes de decirlo.",
    closure: "Hoy empezaste a ver cómo respondes cuando deberías ponerte un límite.",
    phrase: "Reconozco mi relación con el “no”"
  },
  {
    day: 2,
    title: "Costo de no poner límites",
    purpose: "Reconocer el impacto real de no decir 'no' cuando lo necesitas.",
    activity: [
      "Revisa situaciones donde dijiste 'sí' queriendo decir 'no'",
      "Identifica el costo en tiempo, energía y emocional",
      "Describe cómo te sentiste después",
      "Evalúa si volverías a aceptar lo mismo"
    ],
    questions: [
      "¿Qué pierdo cuando no pongo límites?",
      "¿Cómo me siento conmigo después?",
      "¿Vale la pena evitar incomodar a otros?"
    ],
    help: "Cada vez que no dices 'no' cuando lo necesitas, te estás diciendo 'no' a ti.",
    closure: "Hoy hiciste visible el costo de no respetarte.",
    phrase: "Reconozco el costo de no decir no"
  },
  {
    day: 3,
    title: "Discurso interno",
    purpose: "Identificar qué te dices para justificar no poner límites.",
    activity: [
      "Escribe pensamientos como 'debería', 'me toca', 'qué pena', 'qué van a pensar'",
      "Identifica los más repetidos",
      "Observa cómo influyen en tus decisiones"
    ],
    questions: [
      "¿Qué me digo antes de aceptar algo que no quiero?",
      "¿Estoy actuando por decisión o presión interna?",
      "¿Estas ideas son reales o aprendidas?"
    ],
    help: "Lo que te dices define lo que aceptas.",
    closure: "Hoy hiciste visible el diálogo que sostiene tu falta de límites.",
    phrase: "Cuestiono lo que me digo"
  },
  {
    day: 4,
    title: "Momento de decisión",
    purpose: "Identificar el punto exacto donde decides decir 'sí' en lugar de 'no'.",
    activity: [
      "Analiza una situación reciente paso a paso",
      "Identifica el momento donde pudiste decir 'no'",
      "Escribe qué pensaste en ese instante",
      "Identifica por qué no lo hiciste"
    ],
    questions: [
      "¿En qué momento pierdo la oportunidad de poner el límite?",
      "¿Es una decisión consciente o automática?"
    ],
    help: "El cambio ocurre en el momento de decidir, no después de aceptar.",
    closure: "Hoy identificaste dónde realmente puedes cambiar tu respuesta.",
    phrase: "Reconozco el momento de decidir"
  },
  {
    day: 5,
    title: "Preparación para decir no",
    purpose: "Prepararte para responder diferente en una situación real.",
    activity: [
      "Identifica una situación próxima donde podrías decir 'no'",
      "Define qué no quieres aceptar",
      "Escribe una respuesta clara y breve",
      "Practica esa respuesta"
    ],
    questions: [
      "¿Qué me ayudaría a responder con claridad?",
      "¿Estoy complicando algo que puede ser simple?",
      "¿Qué me da miedo de decir 'no'?"
    ],
    help: "Decir 'no' no requiere largas explicaciones, requiere claridad.",
    closure: "Hoy te preparaste para actuar diferente.",
    phrase: "Puedo decir no con claridad"
  },
  {
    day: 6,
    title: "Primer “no” consciente",
    purpose: "Decir 'no' en una situación real rompiendo el patrón automático.",
    activity: [
      "Identifica una situación donde normalmente dirías 'sí'",
      "Detecta el momento de decisión",
      "Responde con el 'no' claro y breve",
      "Observa qué ocurre después"
    ],
    questions: [
      "¿Qué tan difícil fue decir 'no'?",
      "¿Qué pasó realmente después?",
      "¿Fue peor en mi mente o en la realidad?"
    ],
    help: "El primer 'no' es incómodo, pero necesario para cambiar el patrón.",
    closure: "Hoy rompiste un patrón en una situación real.",
    phrase: "Digo no cuando lo necesito"
  },
  {
    day: 7,
    title: "Incomodidad y reacción",
    purpose: "Reconocer las emociones al empezar a poner límites.",
    activity: [
      "Identifica emociones al decir 'no' (culpa, miedo, incomodidad)",
      "Detecta cuándo aparecen",
      "Describe cómo reaccionas ante ellas"
    ],
    questions: [
      "¿Qué me incomoda de decir 'no'?",
      "¿Estoy evitando sentir algo al decir 'sí'?",
      "¿Esa incomodidad justifica no respetarme?"
    ],
    help: "La incomodidad es señal de cambio, no de error.",
    closure: "Hoy entiendes lo que sientes al ponerte un límite.",
    phrase: "Tolero la incomodidad de decir no"
  },
  {
    day: 8,
    title: "Culpa al poner límites",
    purpose: "Identificar y cuestionar la culpa al priorizarte.",
    activity: [
      "Identifica si sentiste culpa al decir 'no'",
      "Escribe qué te dijiste",
      "Analiza si es culpa real o aprendida",
      "Define una respuesta más consciente"
    ],
    questions: [
      "¿Por qué me siento culpable al decir 'no'?",
      "¿Confundo respeto propio con egoísmo?",
      "¿Qué pasa si dejo de justificarme?"
    ],
    help: "Sentir culpa no significa que estás haciendo algo mal.",
    closure: "Hoy empiezas a soltar la culpa por priorizarte.",
    phrase: "No me culpo por decir no"
  },
  {
    day: 9,
    title: "Claridad en la comunicación",
    purpose: "Decir 'no' de forma clara y directa.",
    activity: [
      "Identifica una nueva situación para poner un límite",
      "Responde de forma breve y directa",
      "Evita sobreexplicarte",
      "Observa la reacción sin cambiar tu decisión"
    ],
    questions: [
      "¿Estoy siendo claro o estoy suavizando demasiado?",
      "¿Necesito explicar tanto para sentirme tranquilo?"
    ],
    help: "Entre más explicas, más dudas transmites.",
    closure: "Hoy fortaleces la claridad en tu respuesta.",
    phrase: "Soy claro al decir no"
  },
  {
    day: 10,
    title: "Sostener el límite",
    purpose: "Mantener tu decisión bajo presión externa.",
    activity: [
      "Identifica una situación donde insisten tras tu 'no'",
      "Reafirma tu respuesta sin cambiarla",
      "Evita justificarte nuevamente",
      "Observa cómo te sientes"
    ],
    questions: [
      "¿Qué pasa cuando alguien insiste?",
      "¿Tiendes a ceder o sostenerte?",
      "¿Qué necesito para mantenerme firme?"
    ],
    help: "Un límite no es real si cambia con la presión.",
    closure: "Hoy practicaste sostener tu decisión.",
    phrase: "Sostengo mi no"
  },
  {
    day: 11,
    title: "Respeto propio en acción",
    purpose: "Reconocer que poner límites es una forma de respeto.",
    activity: [
      "Identifica dos situaciones donde pusiste un límite",
      "Describe qué hiciste diferente",
      "Observa qué cambió en ti",
      "Relaciona con respeto propio"
    ],
    questions: [
      "¿Qué cambia cuando me respeto?",
      "¿Cómo me siento cuando me sostengo?"
    ],
    help: "El respeto propio es acción repetida.",
    closure: "Hoy reconoces tu capacidad de respetarte.",
    phrase: "Me respeto al poner límites"
  },
  {
    day: 12,
    title: "Integración e identidad",
    purpose: "Cerrar el proceso integrando los límites en tu identidad.",
    activity: [
      "Describe cómo manejabas el 'no' antes",
      "Describe cómo actúas ahora",
      "Identifica cambios concretos",
      "Define lo que no volverás a aceptar",
      "Define cómo sostendrás los límites"
    ],
    questions: [
      "¿Quién soy ahora frente a mis límites?",
      "¿Qué voy a sostener a partir de hoy?",
      "¿Qué no voy a volver a permitir?"
    ],
    help: "Decir 'no' es una forma de relación contigo y con otros.",
    closure: "Este proceso termina, pero tu forma de responder continúa.",
    phrase: "Pongo límites y me sostengo"
  }
]
    }