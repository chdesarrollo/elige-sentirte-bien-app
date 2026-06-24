import { Course } from "@/components/course/types";

export const habitosQueDrenanTuEnergia : Course = {
    id : "habitos-que-drenan-tu-energia", 
    title : "Hábitos que drenan tu energía", 
    section: "adultos", 
    dimension: "fisica", 
    price: 3,
    description: `<h1> Bienvenido a este espacio </h1>

No todo el cansancio viene de lo que haces.
Mucho viene de cómo vives tu día sin darte cuenta
pequeñas acciones repetidas
decisiones automáticas
hábitos que parecen normales
pero que, sumados,
te dejan sin energía
No es el trabajo
no es el día
no es “la vida”
son cosas que haces todos los días
sin cuestionarlas
Este proceso no es para aprender algo nuevo
es para que veas algo incómodo:
tú también estás participando en tu propio agotamiento
<h2> Cómo trabajar este proceso </h2>

No te defiendas
no te justifiques
observa con honestidad
<h2> Punto clave </h2>
Lo que haces en automático
es lo que más impacto tiene
Cuando dejas de normalizar lo que te desgasta
empiezas a recuperar energía`, 
days: [
  {
    day: 1,
    title: "El desgaste invisible",
    purpose: "Aceptar que hay hábitos cotidianos que te afectan sin que los notes",
    activity: [
      "Durante el día observa momentos en los que sientas cansancio",
      "Pregúntate qué estabas haciendo justo antes de sentirte así",
      "Registra sin justificar ni interpretar"
    ],
    questions: [
      "¿Mi cansancio viene solo de lo evidente?",
      "¿Qué patrones se repiten antes de sentirme drenado?"
    ],
    help: "No todo el desgaste es evidente, gran parte es acumulativo y silencioso",
    closure: "Hoy empezaste a cuestionar lo que antes pasaba desapercibido",
    phrase: "Algo me está drenando"
  },
  {
    day: 2,
    title: "El piloto automático",
    purpose: "Detectar acciones que realizas sin decisión consciente",
    activity: [
      "Identifica 3 cosas que hiciste hoy sin pensarlo realmente",
      "Observa en qué momentos actúas sin decisión clara",
      "Registra sin juzgar"
    ],
    questions: [
      "¿Cuánto de mi día ocurre en automático?",
      "¿El piloto automático siempre me beneficia?"
    ],
    help: "No todo lo automático es funcional; parte de ello es inercia",
    closure: "Hoy viste con claridad lo automático en tu día",
    phrase: "No todo lo elijo"
  },
  {
    day: 3,
    title: "Microhábitos que pesan",
    purpose: "Reconocer pequeñas acciones repetidas que afectan tu energía",
    activity: [
      "Haz una lista de microhábitos diarios",
      "Incluye acciones como revisar el celular, postergar o no detenerte",
      "Observa su frecuencia sin minimizarlas"
    ],
    questions: [
      "¿Qué hago todos los días sin cuestionarlo?",
      "¿Qué microhábitos están drenando mi energía?"
    ],
    help: "Lo pequeño repetido tiene un impacto acumulativo significativo",
    closure: "Hoy viste el peso de lo que repites",
    phrase: "Lo pequeño cuenta"
  },
  {
    day: 4,
    title: "Lo que normalizaste",
    purpose: "Cuestionar hábitos dañinos que ya percibes como normales",
    activity: [
      "Escribe qué haces que sabes que no te hace bien",
      "Observa por qué lo mantienes a pesar de saberlo",
      "No justifiques, solo observa"
    ],
    questions: [
      "¿Por qué sigo haciendo algo que sé que no me hace bien?",
      "¿Qué he normalizado sin cuestionar?"
    ],
    help: "Normalizar algo no lo hace saludable",
    closure: "Hoy dejaste de justificar lo que te desgasta",
    phrase: "No todo lo normal es sano"
  },
  {
    day: 5,
    title: "El costo real",
    purpose: "Hacer consciente el impacto de tus hábitos",
    activity: [
      "Elige un hábito repetido",
      "Identifica qué te está quitando en energía, tiempo y bienestar",
      "Escribe el costo completo"
    ],
    questions: [
      "¿Estoy viendo el impacto completo de este hábito?",
      "¿Qué me cuesta mantenerlo?"
    ],
    help: "Lo aparentemente pequeño también tiene impacto acumulativo",
    closure: "Hoy viste el impacto real de tus hábitos",
    phrase: "Esto sí me afecta"
  },
  {
    day: 6,
    title: "Responsabilidad personal",
    purpose: "Reconocer tu participación en tu propio agotamiento",
    activity: [
      "Identifica qué estás haciendo que contribuye a tu cansancio",
      "Escribe tu parte sin culpar factores externos",
      "Observa patrones repetidos"
    ],
    questions: [
      "¿Qué parte de mi cansancio depende de mí?",
      "¿Qué estoy sosteniendo sin darme cuenta?"
    ],
    help: "Sin responsabilidad no hay posibilidad de cambio real",
    closure: "Hoy asumiste tu participación en tu energía",
    phrase: "Yo también influyo"
  },
  {
    day: 7,
    title: "Elegir un foco de cambio",
    purpose: "Seleccionar un hábito específico para intervenir",
    activity: [
      "Elige un hábito que te drena energía",
      "Obsérvalo durante el día sin intentar cambiarlo aún",
      "Registra cuándo aparece"
    ],
    questions: [
      "¿Qué hábito tiene mayor impacto en mi energía?",
      "¿Dónde debo enfocar mi atención primero?"
    ],
    help: "El cambio efectivo comienza con foco, no con dispersión",
    closure: "Hoy elegiste dónde enfocar tu atención",
    phrase: "Voy a cambiar esto"
  },
  {
    day: 8,
    title: "El momento exacto",
    purpose: "Detectar el disparador del hábito elegido",
    activity: [
      "Observa cuándo aparece el hábito",
      "Identifica qué ocurre justo antes",
      "Registra emociones y contexto"
    ],
    questions: [
      "¿Qué activa este comportamiento?",
      "¿Qué siento justo antes de hacerlo?"
    ],
    help: "Todo hábito tiene un disparador identificable",
    closure: "Hoy viste el inicio real del patrón",
    phrase: "Detecto el momento"
  },
  {
    day: 9,
    title: "Interrumpir el automático",
    purpose: "Crear un espacio entre impulso y acción",
    activity: [
      "Cuando aparezca el hábito, detente 1 minuto",
      "No actúes inmediatamente",
      "Observa el impulso"
    ],
    questions: [
      "¿Puedo no reaccionar automáticamente?",
      "¿Qué ocurre si detengo el impulso?"
    ],
    help: "Entre el impulso y la acción existe un espacio de elección",
    closure: "Hoy interrumpiste el patrón automático",
    phrase: "Puedo detenerme"
  },
  {
    day: 10,
    title: "Reducir en lugar de eliminar",
    purpose: "Hacer el cambio más sostenible",
    activity: [
      "Reduce la frecuencia del hábito elegido",
      "No intentes eliminarlo completamente",
      "Observa el efecto"
    ],
    questions: [
      "¿Puedo disminuir su frecuencia hoy?",
      "¿Qué cambia al reducirlo?"
    ],
    help: "El cambio sostenible empieza con reducción, no con eliminación total",
    closure: "Hoy hiciste el hábito menos dominante",
    phrase: "Reduzco el impacto"
  },
  {
    day: 11,
    title: "Sustituir el hábito",
    purpose: "Evitar el vacío conductual",
    activity: [
      "Cuando aparezca el impulso, realiza otra acción",
      "Ej: respirar, moverte o cambiar de entorno",
      "Registra el efecto"
    ],
    questions: [
      "¿Qué puedo hacer en lugar de esto?",
      "¿Qué pasa cuando lo sustituyo?"
    ],
    help: "Sin sustitución, el hábito tiende a reaparecer",
    closure: "Hoy empezaste a reemplazar el patrón",
    phrase: "Elijo otra acción"
  },
  {
    day: 12,
    title: "Sostener la incomodidad",
    purpose: "No ceder ante la urgencia del hábito",
    activity: [
      "Cuando aparezca el impulso, obsérvalo sin actuar",
      "No lo evites ni lo sigas",
      "Permanece hasta que disminuya"
    ],
    questions: [
      "¿Cuánto dura realmente la urgencia?",
      "¿Qué pasa si no reacciono?"
    ],
    help: "La urgencia no es permanente, es transitoria",
    closure: "Hoy no reaccionaste automáticamente",
    phrase: "Esto pasa"
  },
  {
    day: 13,
    title: "Evitar el todo o nada",
    purpose: "Romper la lógica de abandono por error",
    activity: [
      "Si fallas, retoma sin castigarte",
      "Evita abandonar el proceso",
      "Continúa en la siguiente decisión"
    ],
    questions: [
      "¿Abandono todo cuando fallo?",
      "¿Puedo continuar después de un error?"
    ],
    help: "Un error no invalida el proceso completo",
    closure: "Hoy evitaste el pensamiento extremo",
    phrase: "Sigo aunque falle"
  },
  {
    day: 14,
    title: "Nuevo estándar de conducta",
    purpose: "Definir cómo actuarás frente al hábito",
    activity: [
      "Escribe cómo responderás en adelante",
      "Define una acción concreta alternativa",
      "Comprométete con el nuevo estándar"
    ],
    questions: [
      "¿Qué versión de mí quiero sostener?",
      "¿Cómo quiero actuar a partir de ahora?"
    ],
    help: "El cambio se consolida con decisiones explícitas",
    closure: "Hoy definiste un nuevo estándar",
    phrase: "Actúo diferente"
  },
  {
    day: 15,
    title: "Integración del cambio",
    purpose: "Consolidar el aprendizaje del proceso",
    activity: [
      "Reflexiona sobre lo que has cambiado",
      "Identifica lo que ya no haces igual",
      "Escribe qué mantendrás a futuro"
    ],
    questions: [
      "¿Qué ya no estoy dispuesto a repetir?",
      "¿Qué cambió en mi forma de actuar?"
    ],
    help: "La constancia consciente es más importante que la perfección",
    closure: "Hoy consolidaste un cambio en tu conducta",
    phrase: "Ya no lo hago igual"
  }
]
}

