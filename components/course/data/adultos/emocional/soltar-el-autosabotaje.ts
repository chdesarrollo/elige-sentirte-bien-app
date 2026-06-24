import { Course } from "@/components/course/types";

export const soltarElAutosabotaje : Course = {
    id: "soltar-el-autosabotaje", 
    title: "Soltar el Autosabotaje", 
    section: "adultos", 
    dimension: "emocional", 
    price: 3, 
    description: `<h1>Bienvenido</h1>
El autosabotaje no es pereza
es una respuesta automática que aparece cuando algo te incomoda:
empezar
exponerte
equivocarte
sostener algo en el tiempo
por eso te distraes
lo dejas para después
o abandonas
no porque no puedas
sino porque hay algo que no estás gestionando
este proceso no es para motivarte
es para que aprendas algo mucho más útil:
detectar el autosabotaje en el momento exacto en que aparece
intervenirlo con acciones concretas
 y sostener lo que empiezas aunque no tengas ganas
<h2> Cómo trabajar este proceso </h2>
No lo leas
úsalo cuando te estés frenando
<h2> Punto clave </h2>
El autosabotaje no se vence pensando
se rompe actuando distinto en el momento
Si lo detectas a tiempo
puedes cambiarlo
`, 
days: [
  {
    day: 1,
    title: "Identificar tu punto exacto de sabotaje",
    purpose: "Ubicar con precisión el momento en el que aparece el autosabotaje.",
    activity: [
      "Elige algo que has estado evitando",
      "Acércate a hacerlo sin ejecutarlo aún",
      "Detente justo antes de empezar",
      "Observa qué sientes, qué piensas y qué ganas de hacer aparecen",
      "Completa: 'me saboteo justo cuando ______'"
    ],
    questions: [
      "¿Mi sabotaje aparece antes de empezar, durante o al sostener la acción?"
    ],
    help: "El autosabotaje tiene un punto específico. Si no lo identificas, no puedes intervenirlo.",
    closure: "Hoy dejaste de verlo como algo difuso y lo ubicaste en un momento concreto.",
    phrase: "Ya sé cuándo pasa"
  },
  {
    day: 2,
    title: "Desenmascarar la excusa real",
    purpose: "Identificar el pensamiento automático que justifica no actuar.",
    activity: [
      "Cuando aparezca resistencia, detente",
      "Escribe exactamente lo que te dices sin filtrar",
      "Clasifica si es hecho o justificación",
      "Reformula: no lo hago porque me incomoda ______"
    ],
    questions: [
      "¿Qué emoción estoy evitando detrás de esta excusa?"
    ],
    help: "El autosabotaje no se expresa como miedo directo, sino como postergación o justificación.",
    closure: "Hoy dejaste de creerte la excusa automática.",
    phrase: "Veo lo que hay detrás"
  },
  {
    day: 3,
    title: "Enfrentar la emoción que evitas",
    purpose: "Sostener la incomodidad en lugar de evitarla.",
    activity: [
      "Acércate a la tarea que estás evitando",
      "Detente 2 minutos antes de huir",
      "Sostén la incomodidad sin distraerte",
      "No actúes todavía, solo observa"
    ],
    questions: [
      "¿La emoción era tan intensa como parecía?"
    ],
    help: "El autosabotaje evita emociones, no tareas. Al sostenerlas, pierden fuerza.",
    closure: "Hoy no huiste automáticamente.",
    phrase: "Puedo sostener esto"
  },
  {
    day: 4,
    title: "Romper la barrera de inicio",
    purpose: "Iniciar la acción de forma estructurada y concreta.",
    activity: [
      "Define el primer paso mínimo de la tarea",
      "Pon un temporizador de 10 minutos",
      "Ejecuta sin evaluar ni perfeccionar",
      "Decide después si continúas"
    ],
    questions: [
      "¿Empezar era más difícil que continuar?"
    ],
    help: "El cerebro evita la incertidumbre del inicio más que la tarea en sí.",
    closure: "Hoy atravesaste el punto más difícil: empezar.",
    phrase: "Ya empecé"
  },
  {
    day: 5,
    title: "Evitar el abandono a mitad",
    purpose: "Sostener la acción en momentos de incomodidad.",
    activity: [
      "Cuando quieras abandonar, detente",
      "Identifica si es cansancio o incomodidad",
      "Si es incomodidad, continúa 5 minutos más",
      "Si es cansancio real, pausa breve y retoma"
    ],
    questions: [
      "¿Realmente necesitaba parar o quería escapar?"
    ],
    help: "El autosabotaje aparece cuando la tarea deja de ser cómoda.",
    closure: "Hoy no abandonaste en automático.",
    phrase: "Me quedo un poco más"
  },
  {
    day: 6,
    title: "Actuar sin ganas",
    purpose: "Romper la dependencia del estado emocional para actuar.",
    activity: [
      "Define una acción concreta",
      "Fija una hora específica",
      "Cuando llegue el momento, ejecuta sin pensar",
      "No evalúes si tienes ganas"
    ],
    questions: [
      "¿Qué pasó cuando actué sin esperar ganas?"
    ],
    help: "Las ganas son inestables; la acción consistente construye avance.",
    closure: "Hoy dejaste de depender del estado emocional.",
    phrase: "Lo hago igual"
  },
  {
    day: 7,
    title: "Detectar tu patrón completo",
    purpose: "Identificar el ciclo completo del autosabotaje.",
    activity: [
      "Completa: intento ___, me digo ___, siento ___, termino ___",
      "Analiza en qué punto puedes intervenir"
    ],
    questions: [
      "¿Esto me ha pasado más veces?"
    ],
    help: "El autosabotaje es un patrón, no un evento aislado.",
    closure: "Hoy viste el patrón completo.",
    phrase: "Ya lo entiendo"
  },
  {
    day: 8,
    title: "Interrumpir el ciclo en tiempo real",
    purpose: "Romper el patrón con acción opuesta inmediata.",
    activity: [
      "Detecta el autosabotaje",
      "Nómbralo en el momento",
      "Haz la acción contraria inmediatamente"
    ],
    questions: [
      "¿Qué pasó cuando hice lo opuesto?"
    ],
    help: "El cambio ocurre en el momento del impulso, no después.",
    closure: "Hoy rompiste el automático.",
    phrase: "Hago lo contrario"
  },
  {
    day: 9,
    title: "Diseñar un entorno que no te sabotee",
    purpose: "Reducir fricción para facilitar la acción.",
    activity: [
      "Identifica distracciones principales",
      "Reduce o elimina estímulos (celular, ruido, desorden)",
      "Prepara el entorno para empezar fácil"
    ],
    questions: [
      "¿Me era más fácil avanzar así?"
    ],
    help: "El entorno influye directamente en el comportamiento, no todo es voluntad.",
    closure: "Hoy te ayudaste a avanzar.",
    phrase: "Me lo facilito"
  },
  {
    day: 10,
    title: "Intervenir el autosabotaje en vivo",
    purpose: "Integrar todo el proceso en situaciones reales.",
    activity: [
      "Detecta el momento de sabotaje",
      "Identifica la excusa",
      "Reconoce la emoción",
      "Sostén 2 minutos",
      "Inicia acción estructurada",
      "Aplica continuidad"
    ],
    questions: [
      "¿Me doy cuenta más rápido?",
      "¿Logro intervenirlo?",
      "¿Avanzo más que antes?"
    ],
    help: "El autosabotaje no desaparece, pero pierde control cuando lo detectas y actúas distinto.",
    closure: "Hoy empezaste a recuperar control sobre tus acciones.",
    phrase: "Ya no me detengo igual"
  }
]
}