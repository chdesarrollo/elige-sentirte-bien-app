import { Course } from "@/components/course/types";

export const gestionDeEmociones: Course = {
    id: "gestion-de-emociones",
    title: "Gestión de emociones",
    section: "adultos",
    dimension: "emocional",
    price: 0, // luego será pago
    description: `<h1> <strong>Bienvenida al proceso Gestión de emociones</strong></h1>
    Cuando una emoción aparece, haces algo con ella.
A veces respondes bien. Muchas veces reaccionas sin pensar.
No porque quieras, sino porque no tienes una forma clara de gestionarla.
Este proceso no es para entender más tus emociones. Es para que tengas herramientas concretas para manejarlas cuando aparezcan.
Aquí no vas a analizar lo que sientes durante días. Vas a aprender qué hacer en el momento en que una emoción te afecta.
Porque la diferencia no está en lo que sientes, está en lo que haces cuando lo sientes.
¿De qué se trata este proceso?
Es un proceso práctico donde aprendes estrategias específicas para manejar emociones como enojo, ansiedad, frustración o tristeza.
Cada día vas a aplicar una herramienta concreta en situaciones reales.
No se trata de evitar emociones. Se trata de saber gestionarlas cuando aparecen.
¿Para quién es este proceso?
Para quien reacciona impulsivamente. Para quien se deja llevar por lo que siente. Para quien quiere tener control sobre su respuesta emocional.
¿Cómo se va a vivir el proceso?
Aplicando herramientas en tiempo real.
No es teoría. Es práctica diaria.
Compromiso consciente
No basta con leer las herramientas. Tienes que usarlas cuando más las necesitas.`,

    days: [
  {
    day: 1,
    title: "Pausa consciente",
    purpose: "Evitar reaccionar de inmediato cuando aparece una emoción intensa",
    activity: [
      "Identifica una situación donde sientas una emoción fuerte",
      "Antes de reaccionar, detente 10 segundos",
      "No hables, no respondas, no actúes",
      "Solo observa lo que estás sintiendo",
      "Luego decide qué hacer"
    ],
    questions: [
      "¿Qué cambia cuando no reacciono de inmediato?",
      "¿Pude detenerme o actué en automático?"
    ],
    help: "La pausa rompe la reacción automática",
    closure: "Hoy creaste espacio entre emoción y reacción.",
    phrase: "Me detengo antes de reaccionar"
  },
  {
    day: 2,
    title: "Respiración reguladora",
    purpose: "Disminuir la intensidad de la emoción a través del cuerpo",
    activity: [
      "Cuando sientas una emoción intensa, detente",
      "Inhala lento por 4 segundos",
      "Sostén 2 segundos",
      "Exhala por 6 segundos",
      "Repite durante 2 a 3 minutos"
    ],
    questions: [
      "¿Mi cuerpo se calmó después de respirar?",
      "¿Qué pasó con la intensidad de la emoción?"
    ],
    help: "No puedes gestionar la emoción si tu cuerpo está activado",
    closure: "Hoy regulaste la emoción desde el cuerpo.",
    phrase: "Calmo mi cuerpo para responder mejor"
  },
  {
    day: 3,
    title: "Nombrar la emoción",
    purpose: "Bajar la intensidad emocional al identificarla con claridad",
    activity: [
      "Cuando sientas una emoción, nómbrala en voz interna",
      "Usa una sola palabra (enojo, miedo, tristeza, ansiedad)",
      "Evita explicarla, solo nómbrala",
      "Repite el nombre durante unos segundos"
    ],
    questions: [
      "¿Qué cambia cuando nombro la emoción?",
      "¿Se vuelve más clara o más intensa?"
    ],
    help: "Nombrar organiza lo que sientes y reduce su intensidad",
    closure: "Hoy le diste forma a lo que sientes.",
    phrase: "Nombrar me da control"
  },
  {
    day: 4,
    title: "Distancia mental",
    purpose: "Evitar que la emoción controle tus pensamientos",
    activity: [
      "Identifica un pensamiento que surge con la emoción",
      "Escríbelo o repítelo en tu mente",
      "Añade la frase: 'estoy teniendo el pensamiento de que...'",
      "Observa cómo cambia tu relación con ese pensamiento"
    ],
    questions: [
      "¿El pensamiento es un hecho o una interpretación?",
      "¿Qué cambia cuando lo veo desde afuera?"
    ],
    help: "No todo lo que piensas en una emoción es verdad",
    closure: "Hoy tomaste distancia de tus pensamientos.",
    phrase: "No todo lo que pienso es real"
  },
  {
    day: 5,
    title: "Acción alternativa",
    purpose: "Romper la reacción automática reemplazándola por una acción consciente",
    activity: [
      "Identifica tu reacción habitual (discutir, evitar, callar, explotar)",
      "Define una acción alternativa (guardar silencio, posponer respuesta, hablar con calma, retirarte)",
      "Aplícala en una situación real",
      "Observa el resultado"
    ],
    questions: [
      "¿Qué pasó al actuar diferente?",
      "¿Fue difícil no hacer lo de siempre?"
    ],
    help: "No basta con detener la reacción, necesitas reemplazarla",
    closure: "Hoy cambiaste tu forma de responder.",
    phrase: "Elijo cómo actuar"
  },
  {
    day: 6,
    title: "Descarga emocional controlada",
    purpose: "Liberar la emoción sin dañarte ni afectar a otros",
    activity: [
      "Identifica una emoción acumulada (enojo, frustración, tensión)",
      "Libérala de forma controlada (escribir, caminar rápido, respirar profundo, hablar solo)",
      "Evita hacerlo sobre otra persona",
      "Observa cómo cambia tu estado después"
    ],
    questions: [
      "¿Qué pasa cuando libero la emoción sin reaccionar?",
      "¿Se reduce la intensidad?"
    ],
    help: "Las emociones no gestionadas se acumulan y explotan",
    closure: "Hoy liberaste sin desbordarte.",
    phrase: "Libero sin desbordarme"
  },
  {
    day: 7,
    title: "Aplicación en tiempo real",
    purpose: "Usar conscientemente varias herramientas en una misma situación emocional",
    activity: [
      "Identifica una situación emocional intensa",
      "Aplica la pausa consciente",
      "Usa la respiración reguladora",
      "Nombra la emoción",
      "Decide una acción alternativa"
    ],
    questions: [
      "¿Qué herramienta fue más útil?",
      "¿Pude aplicar más de una o reaccioné automático?"
    ],
    help: "Gestionar emociones es combinar herramientas, no usar solo una",
    closure: "Hoy empezaste a integrar lo aprendido.",
    phrase: "Uso lo que sé cuando lo necesito"
  },
  {
    day: 8,
    title: "Gestión del enojo",
    purpose: "Evitar reacciones impulsivas frente al enojo",
    activity: [
      "Identifica un momento de enojo",
      "Aplica pausa y respiración",
      "No respondas de inmediato",
      "Decide si hablar o esperar",
      "Si hablas, hazlo sin atacar ni elevar el tono"
    ],
    questions: [
      "¿Qué suelo hacer cuando me enojo?",
      "¿Qué cambió al no reaccionar de inmediato?"
    ],
    help: "El enojo no es el problema, la reacción impulsiva sí",
    closure: "Hoy gestionaste el enojo sin desbordarte.",
    phrase: "El enojo no me controla"
  },
  {
    day: 9,
    title: "Gestión de la ansiedad",
    purpose: "Reducir la anticipación y la sobre reacción mental",
    activity: [
      "Identifica un pensamiento anticipatorio",
      "Aplica respiración reguladora",
      "Nombra la emoción (ansiedad)",
      "Verifica si está ocurriendo ahora",
      "Regresa al presente"
    ],
    questions: [
      "¿Estoy reaccionando a algo real o imaginado?",
      "¿Qué pasa cuando vuelvo al presente?"
    ],
    help: "La ansiedad vive en el futuro, no en el presente",
    closure: "Hoy redujiste la anticipación.",
    phrase: "Vuelvo al presente"
  },
  {
    day: 10,
    title: "Gestión de la tristeza",
    purpose: "Evitar el aislamiento o desconexión emocional",
    activity: [
      "Identifica un momento de tristeza",
      "Permite sentirla sin bloquearla",
      "Evita aislarte completamente",
      "Haz una acción mínima (hablar, salir, moverte)",
      "Observa el cambio"
    ],
    questions: [
      "¿Qué hago normalmente cuando estoy triste?",
      "¿Qué cambia al no aislarme?"
    ],
    help: "Sentir tristeza no es el problema, aislarse sí",
    closure: "Hoy gestionaste la tristeza sin desconectarte.",
    phrase: "Siento sin aislarme"
  },
  {
    day: 11,
    title: "Gestión de la frustración",
    purpose: "Evitar rendirte o reaccionar negativamente ante lo inesperado",
    activity: [
      "Identifica una situación frustrante",
      "Nombra la emoción",
      "Evita rendirte o explotar",
      "Define una acción pequeña para continuar",
      "Ejecútala"
    ],
    questions: [
      "¿Qué hago cuando las cosas no salen como espero?",
      "¿Puedo avanzar aunque no sea perfecto?"
    ],
    help: "La frustración aparece cuando la realidad no coincide con lo esperado",
    closure: "Hoy avanzaste sin rendirte.",
    phrase: "Continúo aunque no sea perfecto"
  },
  {
    day: 12,
    title: "Gestión en relaciones",
    purpose: "Evitar reacciones emocionales en interacción con otros",
    activity: [
      "Identifica una interacción emocional",
      "Aplica pausa antes de responder",
      "Escucha sin interrumpir",
      "Responde con calma",
      "Observa el resultado"
    ],
    questions: [
      "¿Reacciono o escucho cuando estoy emocional?",
      "¿Qué cambia cuando respondo con calma?"
    ],
    help: "Las emociones se intensifican en interacción con otros",
    closure: "Hoy gestionaste una emoción en relación con alguien.",
    phrase: "Respondo con conciencia"
  },
  {
    day: 13,
    title: "Recuperación emocional",
    purpose: "Reducir el tiempo de permanencia en una emoción",
    activity: [
      "Identifica una situación emocional",
      "Aplica respiración o descarga",
      "Evita alimentar el pensamiento",
      "Haz una acción de cambio de estado",
      "Observa el tiempo de recuperación"
    ],
    questions: [
      "¿Cuánto tiempo me quedo en una emoción?",
      "¿Qué me ayuda a salir más rápido?"
    ],
    help: "No se trata de no sentir, sino de no quedarse atrapado",
    closure: "Hoy acortaste el impacto emocional.",
    phrase: "Recupero mi equilibrio"
  },
  {
    day: 14,
    title: "Prevención emocional",
    purpose: "Anticiparte a situaciones que suelen desbordarte",
    activity: [
      "Identifica una situación activadora",
      "Reconoce la emoción habitual",
      "Define herramientas preventivas",
      "Aplícalas antes o durante",
      "Observa el cambio"
    ],
    questions: [
      "¿Sé qué me afecta antes de que ocurra?",
      "¿Qué cambia cuando me preparo?"
    ],
    help: "Gestionar emociones también es anticiparse",
    closure: "Hoy te preparaste antes de reaccionar.",
    phrase: "Me anticipo a lo que siento"
  },
  {
    day: 15,
    title: "Integración y autonomía",
    purpose: "Consolidar la gestión emocional independiente",
    activity: [
      "Identifica herramientas usadas",
      "Evalúa cuáles funcionan mejor",
      "Define cuándo usarlas",
      "Describe tu sistema de gestión emocional",
      "Establece compromiso personal"
    ],
    questions: [
      "¿Qué cambió en mi forma de reaccionar?",
      "¿Qué herramienta voy a seguir usando?",
      "¿Soy más consciente de lo que siento?"
    ],
    help: "La gestión emocional es una habilidad entrenable",
    closure: "Este proceso termina, pero tu práctica continúa.",
    phrase: "Gestiono mis emociones con herramientas"
  }
]
}

