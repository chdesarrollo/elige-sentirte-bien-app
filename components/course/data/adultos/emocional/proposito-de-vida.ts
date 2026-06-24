import { Course } from "@/components/course/types";

export const propositoDeVida: Course = {
    id: "proposito-de-vida",
    title: "Propósito de vida",
    section: "adultos",
    dimension: "emocional",
    price: 0, // luego será pago
    description: `<h1> <strong>Bienvenida al proceso Propósito de vida</strong></h1>
    No estás aquí para encontrar una frase que resuma tu vida.
Estás aquí para dejar de moverte sin cuestionar hacia dónde vas.
El propósito no es algo que aparece claro de un momento a otro. Es algo que se construye cuando empiezas a observar cómo vives, qué eliges y qué sostienes.
Probablemente ya haces muchas cosas bien. Pero eso no significa que todo lo que haces tenga sentido para ti.
Este proceso no busca que “descubras tu misión”. Busca que empieces a tomar decisiones con más intención.
Porque el problema no es no saber qué hacer. Es seguir haciendo cosas que no conectan contigo.
<h2>Cómo trabajar este proceso</h2>
No respondas rápido.
Responde real.
No pienses en lo ideal. Piensa en lo que estás viviendo.
Punto clave
Tu propósito no está lejos. Está en lo que eliges repetir cada día.`,
    days: [
  {
    day: 1,
    title: "Dónde estás realmente",
    purpose: "Tomar conciencia de tu punto actual.",
    activity: [
      "Describe tu vida hoy de forma concreta: en qué pasas tu tiempo",
      "Qué haces con frecuencia durante el día",
      "Qué te hace sentir bien",
      "Qué te hace sentir mal",
      "Qué te gustaría cambiar",
      "Hazlo sin justificar y sin suavizar"
    ],
    questions: [
      "¿Estoy satisfecho con cómo vivo hoy?",
      "¿Qué parte de mi vida no se siente alineada?"
    ],
    help: "No puedes definir dirección sin ver tu realidad.",
    closure: "Hoy viste tu punto de partida real.",
    phrase: "Veo dónde estoy"
  },

  {
    day: 2,
    title: "Lo que valoras",
    purpose: "Identificar lo que realmente es importante para ti.",
    activity: [
      "Escribe 5 cosas que hoy son importantes en tu vida",
      "Reduce esa lista a 3",
      "Asegúrate de que sean reales, no ideales",
      "Verifica si lo que dices coincide con lo que vives"
    ],
    questions: [
      "¿Esto es lo que digo o lo que vivo?",
      "¿Qué es realmente importante para mí?"
    ],
    help: "El propósito se construye desde lo que valoras, no desde lo que admiras.",
    closure: "Hoy definiste lo importante para ti.",
    phrase: "Sé lo que me importa"
  },

  {
    day: 3,
    title: "Coherencia",
    purpose: "Ver si lo que valoras se refleja en tu vida.",
    activity: [
      "Toma tus 3 valores definidos",
      "Describe cómo se reflejan hoy en tu vida",
      "Identifica dónde sí están presentes",
      "Identifica dónde no están presentes",
      "Escribe la brecha con claridad"
    ],
    questions: [
      "¿Estoy viviendo lo que digo que es importante?",
      "¿Dónde hay incoherencia en mi vida?"
    ],
    help: "La incoherencia sostenida genera insatisfacción.",
    closure: "Hoy viste la brecha entre lo que valoras y lo que haces.",
    phrase: "Busco coherencia"
  },

  {
    day: 4,
    title: "Energía real",
    purpose: "Identificar qué te acerca y qué te aleja de ti.",
    activity: [
      "Durante el día identifica qué actividades te activan",
      "Identifica qué actividades te drenan",
      "Registra al menos 3 de cada una",
      "Observa cómo cambia tu estado en cada caso"
    ],
    questions: [
      "¿En qué momentos me siento más yo?",
      "¿En cuáles me desconecto de mí?"
    ],
    help: "Tu energía muestra lo que tu mente muchas veces justifica.",
    closure: "Hoy identificaste lo que te suma y lo que te resta.",
    phrase: "Escucho mi energía"
  },

  {
    day: 5,
    title: "Cómo decides",
    purpose: "Entender qué guía tus decisiones hoy.",
    activity: [
      "Toma 3 decisiones recientes",
      "Escribe por qué las tomaste realmente",
      "No uses justificaciones, usa la razón real",
      "Identifica el patrón detrás de tus decisiones"
    ],
    questions: [
      "¿Decido por convicción, miedo, costumbre o presión?",
      "¿Qué está guiando mis decisiones?"
    ],
    help: "Tu dirección se construye con decisiones repetidas.",
    closure: "Hoy entendiste qué está guiando tu vida.",
    phrase: "Reconozco cómo decido"
  },

  {
    day: 6,
    title: "Lo que ya no quieres",
    purpose: "Definir con claridad qué no estás dispuesto a seguir sosteniendo.",
    activity: [
      "Haz una lista de lo que ya no quieres en tu vida",
      "Incluye hábitos, dinámicas y decisiones",
      "Identifica cuáles sigues repitiendo",
      "Reconoce qué te impide soltarlos"
    ],
    questions: [
      "¿Por qué sigo sosteniendo esto?",
      "¿Qué me cuesta soltar?"
    ],
    help: "A veces la claridad empieza por lo que ya no quieres.",
    closure: "Hoy empezaste a limpiar tu dirección.",
    phrase: "Dejo de sostener"
  },

  {
    day: 7,
    title: "Elegir qué sí",
    purpose: "Definir hacia dónde quieres empezar a dirigir tu vida.",
    activity: [
      "Define qué sí quieres sostener en tu vida",
      "Define qué sí quieres construir",
      "Limita a máximo 3 elementos",
      "Asegúrate de que sean realmente importantes para ti"
    ],
    questions: [
      "¿Esto realmente es importante para mí?",
      "¿O solo suena bien?"
    ],
    help: "No se trata de tener muchas opciones, sino de elegir con claridad.",
    closure: "Hoy empezaste a definir dirección.",
    phrase: "Elijo con intención"
  },

  {
    day: 8,
    title: "Aterrizar en acciones",
    purpose: "Convertir lo que quieres en algo que puedas hacer.",
    activity: [
      "Toma lo que definiste como importante",
      "Convierte cada punto en una acción concreta",
      "Define al menos una acción por cada uno",
      "Haz que sea ejecutable hoy"
    ],
    questions: [
      "¿Esto es claro o sigue siendo una idea?",
      "¿Se puede ejecutar realmente?"
    ],
    help: "Si no se puede hacer, no está definido.",
    closure: "Hoy bajaste tu dirección a la realidad.",
    phrase: "Lo vuelvo acción"
  },

  {
    day: 9,
    title: "Primera decisión consciente",
    purpose: "Actuar diferente en una situación real.",
    activity: [
      "Identifica una situación automática del día",
      "Elige actuar de forma distinta",
      "Acepta la incomodidad si aparece",
      "Registra qué hiciste diferente"
    ],
    questions: [
      "¿Qué hice diferente hoy?",
      "¿Cómo me sentí al hacerlo?"
    ],
    help: "El propósito se construye actuando, no pensando.",
    closure: "Hoy rompiste un patrón.",
    phrase: "Actúo distinto"
  },

  {
    day: 10,
    title: "Prioridad real",
    purpose: "Dar espacio en tu vida a lo que definiste como importante.",
    activity: [
      "Organiza tu día para incluir una acción alineada",
      "No lo dejes “si hay tiempo”",
      "Hazle espacio intencionalmente",
      "Ejecuta esa acción hoy"
    ],
    questions: [
      "¿Mi día refleja lo que digo que es importante?",
      "¿Dónde está mi prioridad real?"
    ],
    help: "Si no tiene espacio en tu día, no es prioridad.",
    closure: "Hoy alineaste tu tiempo con tu dirección.",
    phrase: "Lo priorizo"
  },

  {
    day: 11,
    title: "Sostener la decisión",
    purpose: "Evitar volver automáticamente a lo de antes.",
    activity: [
      "Detecta momentos donde vuelves al patrón anterior",
      "Elige conscientemente tu nueva dirección",
      "Tolera la incomodidad si aparece",
      "Repite la decisión en el momento"
    ],
    questions: [
      "¿En qué momento quise volver atrás?",
      "¿Qué elegí hacer en su lugar?"
    ],
    help: "Cambiar una vez no define nada, sostenerlo sí.",
    closure: "Hoy empezaste a sostener tu dirección.",
    phrase: "Me mantengo"
  },

  {
    day: 12,
    title: "Cierre y dirección consciente",
    purpose: "Cerrar el proceso con claridad sobre cómo vas a vivir a partir de ahora.",
    activity: [
      "Escribe qué entendiste de tu vida",
      "Define qué ya no quieres repetir",
      "Define qué sí vas a sostener",
      "Escribe decisiones concretas hacia adelante",
      "Define tu compromiso contigo mismo"
    ],
    questions: [
      "¿Qué cambió en mi forma de ver mi vida?",
      "¿Qué voy a empezar a hacer distinto?",
      "¿Qué no voy a volver a permitir?"
    ],
    help: "El propósito no es una idea, es una forma de vivir.",
    closure: "Este proceso no te dio respuestas, te dio criterio para decidir.",
    phrase: "Vivo con intención"
  }
]
}

