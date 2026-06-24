import { Course } from "@/components/course/types";

export const mejorarMiAutoestima : Course = {
    id : "mejorar-mi-autoestima", 
    title: "Mejorar mi autoestima", 
    section: "adultos", 
    dimension: "emocional", 
    price: 2,
    description: `<h1> Bienvenido </h1>

La mayoría de personas cree que la autoestima es sentirse bien consigo mismo
pero en la práctica, la autoestima se ve en otra cosa:
en cómo te tratas cuando no te sientes bien
ahí es donde realmente aparece
cuando fallas
cuando dudas
cuando no cumples lo que esperabas
este proceso no busca que te sientas mejor contigo
busca algo más profundo:
que dejes de tratarte de formas que te debilitan
y empieces a relacionarte contigo con más coherencia
no es cómodo
pero sí transformador
<h2> Cómo trabajar este proceso </h2>
No respondas desde lo que “debería ser”
responde desde lo que realmente haces
<h2> Punto clave </h2>
Tu autoestima no está en lo que dices que mereces
está en lo que te permites vivir

No vamos a construir algo nuevo
sin antes ver con claridad lo que hoy está pasando`,

days: [
  {
    day: 1,
    title: "Cómo te hablas cuando fallas",
    purpose: "Observar tu diálogo interno en momentos de error o dificultad.",
    activity: [
      "Observa cómo te hablas cuando algo no sale como esperabas",
      "Identifica si te corriges o te castigas",
      "Nota si usarías esas mismas palabras con otra persona"
    ],
    questions: [
      "¿Mi diálogo interno me acompaña o me ataca?",
      "¿Cómo cambia mi forma de hablarme cuando fallo?"
    ],
    help: "La autoestima no es lo que piensas de ti, sino cómo te tratas en los momentos difíciles.",
    closure: "Hoy comenzaste a ver tu forma de hablarte.",
    phrase: "me escucho con claridad"
  },
  {
    day: 2,
    title: "Tu reacción ante el error",
    purpose: "Reconocer cómo te tratas después de equivocarte.",
    activity: [
      "Observa una situación donde cometas un error",
      "Identifica tu reacción emocional contigo mismo",
      "Nota si aparece culpa, castigo o aprendizaje"
    ],
    questions: [
      "¿Me doy espacio para corregir o me castigo?",
      "¿Me trato como alguien que aprende o que debería saberlo todo?"
    ],
    help: "El problema no es fallar, sino cómo te tratas después del fallo.",
    closure: "Hoy viste tu reacción ante el error.",
    phrase: "me permito aprender"
  },
  {
    day: 3,
    title: "Lo que estás tolerando",
    purpose: "Identificar situaciones que afectan tu autoestima pero mantienes.",
    activity: [
      "Escribe situaciones, personas o dinámicas que te incomodan",
      "Identifica cuáles sigues manteniendo",
      "No justifiques, solo observa"
    ],
    questions: [
      "¿Qué estoy tolerando que me afecta?",
      "¿Qué he normalizado aunque me incomoda?"
    ],
    help: "Lo que toleras repetidamente también define cómo te valoras.",
    closure: "Hoy viste lo que estás sosteniendo.",
    phrase: "dejo de normalizar lo que me afecta"
  },
  {
    day: 4,
    title: "Dónde te abandonas",
    purpose: "Reconocer momentos donde te dejas de lado para evitar conflicto.",
    activity: [
      "Identifica situaciones donde no expresas lo que piensas",
      "Observa cuándo te adaptas para evitar incomodidad",
      "Registra esos momentos durante el día"
    ],
    questions: [
      "¿Cuándo me dejo de lado?",
      "¿Qué evito al no expresarme?"
    ],
    help: "Abandonarte no siempre es evidente, a veces es silencioso y constante.",
    closure: "Hoy reconociste dónde te abandonas.",
    phrase: "me doy cuenta cuando me dejo"
  },
  {
    day: 5,
    title: "Tus exigencias internas",
    purpose: "Cuestionar los estándares que te impones.",
    activity: [
      "Escribe qué sientes que deberías lograr o ser",
      "Identifica de dónde vienen esas exigencias",
      "Observa si son tuyas o heredadas"
    ],
    questions: [
      "¿Qué me exijo para sentirme en paz conmigo?",
      "¿De dónde viene esa exigencia?"
    ],
    help: "Muchas exigencias no nacen de ti, sino de expectativas externas internalizadas.",
    closure: "Hoy cuestionaste tus propias exigencias.",
    phrase: "reviso lo que me exijo"
  },
  {
    day: 6,
    title: "Reconocer sin distorsionar",
    purpose: "Verte con objetividad, sin exagerar ni minimizar.",
    activity: [
      "Identifica algo que estás haciendo bien",
      "Reconócelo sin restarle valor",
      "Evita justificarlo o minimizarlo"
    ],
    questions: [
      "¿Puedo reconocer algo bueno en mí sin rechazarlo?",
      "¿Me cuesta aceptar lo positivo?"
    ],
    help: "La autoestima sana incluye ver lo que sí haces bien sin distorsión.",
    closure: "Hoy viste con más equilibrio.",
    phrase: "me veo con claridad"
  },
  {
    day: 7,
    title: "Cumplirte en lo pequeño",
    purpose: "Construir confianza a través de acciones concretas.",
    activity: [
      "Elige una acción pequeña contigo mismo",
      "Hazla sin posponerla",
      "Observa cómo te sientes al cumplirla"
    ],
    questions: [
      "¿Qué pasa cuando me cumplo en algo pequeño?",
      "¿Soy consistente conmigo?"
    ],
    help: "La autoestima se construye con acciones repetidas, no con intención.",
    closure: "Hoy empezaste a cumplirte.",
    phrase: "empiezo a cumplirme"
  },
  {
    day: 8,
    title: "Decir no cuando es no",
    purpose: "Romper la incoherencia entre lo que sientes y lo que haces.",
    activity: [
      "Identifica una situación donde dirías sí sin querer",
      "Practica decir no en algo pequeño",
      "Observa la incomodidad sin evitarla"
    ],
    questions: [
      "¿Dónde digo sí para evitar conflicto?",
      "¿Qué me cuesta más: incomodar o traicionarme?"
    ],
    help: "Decir sí cuando es no debilita tu relación contigo.",
    closure: "Hoy respetaste un límite interno.",
    phrase: "respeto lo que siento"
  },
  {
    day: 9,
    title: "Dejar de postergarte",
    purpose: "Reconocer cómo te estás dejando para después.",
    activity: [
      "Identifica algo importante que has postergado",
      "Escribe por qué lo has evitado",
      "Define un pequeño primer paso"
    ],
    questions: [
      "¿Qué estoy dejando para después en mi vida?",
      "¿Qué priorizo antes que a mí?"
    ],
    help: "Postergarte sostenidamente debilita tu valor personal percibido.",
    closure: "Hoy viste cómo te pospones.",
    phrase: "dejo de dejarme para después"
  },
  {
    day: 10,
    title: "Construir confianza contigo",
    purpose: "Fortalecer la autoestima desde acciones cumplidas.",
    activity: [
      "Elige una acción concreta para hoy",
      "Cúmplela sin negociación interna",
      "Observa el impacto emocional"
    ],
    questions: [
      "¿Qué cambia cuando me cumplo?",
      "¿Qué evidencia genero sobre mí?"
    ],
    help: "La confianza en ti se construye con evidencia, no con ideas.",
    closure: "Hoy construiste confianza.",
    phrase: "me cumplo"
  },
  {
    day: 11,
    title: "Tu valor y los otros",
    purpose: "Separar tu valor de la respuesta externa.",
    activity: [
      "Observa cómo reaccionas cuando alguien no responde como esperabas",
      "Identifica si cambia tu percepción de ti",
      "Registra esa reacción sin juicio"
    ],
    questions: [
      "¿Depende mi valor de la respuesta del otro?",
      "¿Qué parte de esto sí controlo?"
    ],
    help: "Tu valor no cambia según la reacción de otros.",
    closure: "Hoy viste tu independencia emocional.",
    phrase: "no dependo de eso"
  },
  {
    day: 12,
    title: "Poner límites",
    purpose: "Empezar a marcar tu espacio personal.",
    activity: [
      "Identifica una situación donde necesitas un límite",
      "Exprésalo de forma simple y clara",
      "Tolera la incomodidad que aparezca"
    ],
    questions: [
      "¿Qué me impide poner límites?",
      "¿Qué protejo al ponerlos?"
    ],
    help: "Los límites no te alejan de los demás, te acercan a ti.",
    closure: "Hoy marcaste un límite.",
    phrase: "empiezo a marcar mi lugar"
  },
  {
    day: 13,
    title: "Sostenerte emocionalmente",
    purpose: "No abandonarte cuando estás mal.",
    activity: [
      "Observa cómo te tratas cuando estás emocionalmente afectado",
      "Evita exigirte salir rápido del malestar",
      "Acompáñate conscientemente"
    ],
    questions: [
      "¿Me sostengo o me abandono cuando estoy mal?",
      "¿Qué necesito en esos momentos?"
    ],
    help: "La autoestima también se construye en el malestar.",
    closure: "Hoy te acompañaste mejor.",
    phrase: "me sostengo"
  },
  {
    day: 14,
    title: "Coherencia entre saber y hacer",
    purpose: "Identificar la brecha entre lo que sabes y lo que haces.",
    activity: [
      "Escribe lo que sabes que te haría bien",
      "Observa qué no estás aplicando",
      "Identifica qué te detiene"
    ],
    questions: [
      "¿Dónde soy incoherente conmigo?",
      "¿Qué me impide actuar distinto?"
    ],
    help: "La incoherencia sostenida debilita la autoestima.",
    closure: "Hoy viste la brecha entre saber y hacer.",
    phrase: "alineo lo que sé con lo que hago"
  },
  {
    day: 15,
    title: "Integración del proceso",
    purpose: "Reconocer cambios en tu relación contigo mismo.",
    activity: [
      "Reflexiona qué ha cambiado en tu forma de tratarte",
      "Identifica hábitos que estás modificando",
      "Escribe cómo es tu relación contigo hoy"
    ],
    questions: [
      "¿Qué ha cambiado en mí?",
      "¿Cómo me estoy tratando ahora?"
    ],
    help: "La autoestima cambia cuando cambia la forma en que te relacionas contigo.",
    closure: "Hoy integraste tu proceso.",
    phrase: "me trato distinto"
  }
]
}
