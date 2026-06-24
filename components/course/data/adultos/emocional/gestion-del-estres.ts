import { Course } from "@/components/course/types";

export const gestionDelEstres: Course = {
    id: "gestion-del-estres",
    title: "Gestión del estrés",
    section: "adultos",
    dimension: "emocional",
    price: 0, // luego será pago
    description: `<h1> <strong>Bienvenida al proceso Gestión del Estrés</strong></h1>
Este proceso no es para eliminar el estrés. Es para aprender a gestionarlo.
El estrés no siempre viene de lo que pasa afuera, viene de cómo lo interpretas, cómo lo manejas y cómo respondes.
Muchas personas viven con estrés constante sin darse cuenta de qué lo genera ni cómo lo sostienen.
Este proceso está diseñado para que puedas identificar qué lo activa en ti, cómo reaccionas y cómo empezar a responder de forma más consciente.
No se trata de evitar la presión. Se trata de no desbordarte frente a ella.
<h2> <strong>¿De qué se trata este proceso?</strong></h2>
Es un proceso práctico donde haces consciente tu forma de reaccionar ante el estrés, identificas tus detonantes y desarrollas respuestas más reguladas y efectivas.
Aquí el objetivo no es sentirte tranquilo todo el tiempo. Es saber qué hacer cuando el estrés aparece.
<h2> <strong>¿Para quién es este proceso?</strong></h2>
Para quien se siente saturado con frecuencia. Para quien reacciona impulsivamente bajo presión. Para quien quiere manejar mejor su energía y su respuesta emocional.
<h2> <strong>¿Cómo se va a vivir el proceso?</strong></h2>
Día a día, observando y respondiendo distinto en situaciones reales.
No es lo que sabes, es cómo reaccionas cuando algo te sobrepasa.
Compromiso consciente
Haz este proceso con honestidad.
No para evitar el estrés, sino para aprender a gestionarlo.`, 
    days: [
  {
    day: 1,
    title: "Consciencia del estrés",
    purpose: "Reconocer cómo se manifiesta el estrés en ti.",
    activity: [
      "Identifica tres momentos recientes donde sentiste estrés",
      "Describe qué ocurrió en cada uno",
      "Escribe qué sentiste en el cuerpo y en la mente",
      "Identifica cómo reaccionaste"
    ],
    questions: [
      "¿Cómo sé que estoy estresado?",
      "¿Lo noto a tiempo o cuando ya estoy saturado?"
    ],
    help: "No puedes gestionar lo que no reconoces.",
    closure: "Hoy hiciste visible tu experiencia de estrés.",
    phrase: "Reconozco mi estrés"
  },
  {
    day: 2,
    title: "Detonantes",
    purpose: "Identificar qué situaciones activan tu estrés.",
    activity: [
      "Revisa situaciones del día anterior",
      "Identifica qué las detonó (personas, tiempo, exigencia, incertidumbre)",
      "Agrupa los detonantes repetidos",
      "Nombra tus principales fuentes de estrés"
    ],
    questions: [
      "¿Qué activa mi estrés con mayor frecuencia?",
      "¿Son factores externos o internos?"
    ],
    help: "El estrés no aparece al azar, tiene detonantes claros.",
    closure: "Hoy identificaste qué lo activa en ti.",
    phrase: "Reconozco mis detonantes"
  },
  {
    day: 3,
    title: "Interpretación",
    purpose: "Entender cómo lo que piensas influye en tu nivel de estrés.",
    activity: [
      "Toma una situación estresante reciente",
      "Escribe qué pensaste en ese momento",
      "Identifica si fue presión, miedo o anticipación negativa",
      "Analiza cómo ese pensamiento afectó tu estrés"
    ],
    questions: [
      "¿Qué me digo cuando algo me estresa?",
      "¿Estoy interpretando o reaccionando automáticamente?"
    ],
    help: "No es solo lo que pasa, es lo que piensas sobre lo que pasa.",
    closure: "Hoy entendiste el papel de tu mente en el estrés.",
    phrase: "Observo lo que pienso"
  },
  {
    day: 4,
    title: "Respuesta automática",
    purpose: "Identificar cómo reaccionas de forma automática ante el estrés.",
    activity: [
      "Revisa una situación reciente de estrés",
      "Describe tu reacción inmediata",
      "Evalúa si ayudó o empeoró la situación",
      "Identifica tu patrón de respuesta"
    ],
    questions: [
      "¿Qué hago automáticamente cuando me estreso?",
      "¿Esa reacción me ayuda o me perjudica?"
    ],
    help: "Tu reacción automática define si el estrés escala o se regula.",
    closure: "Hoy reconoces cómo respondes sin darte cuenta.",
    phrase: "Reconozco mi reacción"
  },
  {
    day: 5,
    title: "Punto de intervención",
    purpose: "Identificar el momento donde puedes intervenir tu respuesta al estrés.",
    activity: [
      "Identifica tu patrón de reacción",
      "Encuentra el momento previo a la reacción automática",
      "Define qué puedes hacer diferente ahí",
      "Escríbelo de forma clara"
    ],
    questions: [
      "¿En qué momento puedo detener la reacción automática?",
      "¿Qué acción pequeña puedo introducir?"
    ],
    help: "El cambio ocurre antes de reaccionar, no después.",
    closure: "Hoy identificas dónde empezar a gestionar tu estrés.",
    phrase: "Puedo intervenir mi respuesta"
  },
  {
    day: 6,
    title: "Primera intervención consciente",
    purpose: "Aplicar una acción para intervenir tu reacción al estrés.",
    activity: [
      "Identifica una situación de estrés",
      "Detecta el momento previo a reaccionar",
      "Aplica pausa, respiración o cambio de ritmo",
      "Observa qué cambia"
    ],
    questions: [
      "¿Logré intervenir antes de reaccionar?",
      "¿Qué cambió cuando no actué automático?"
    ],
    help: "La regulación empieza al interrumpir lo automático.",
    closure: "Hoy actuaste diferente frente al estrés.",
    phrase: "Intervengo mi reacción"
  },
  {
    day: 7,
    title: "Regulación física",
    purpose: "Usar el cuerpo como herramienta de regulación del estrés.",
    activity: [
      "Identifica señales físicas del estrés",
      "Enfócate en la respiración",
      "Haz una pausa consciente de 1 minuto",
      "Observa cambios en tu estado"
    ],
    questions: [
      "¿Qué pasa en mi cuerpo cuando me estreso?",
      "¿Puedo regular desde lo físico?"
    ],
    help: "El cuerpo puede regular el estrés más rápido que la mente.",
    closure: "Hoy usaste tu cuerpo como herramienta de regulación.",
    phrase: "Regulo desde mi cuerpo"
  },
  {
    day: 8,
    title: "Distancia mental",
    purpose: "Evitar que los pensamientos escalen el estrés.",
    activity: [
      "Identifica un pensamiento estresante",
      "Escríbelo tal como aparece",
      "Cuestiónalo: hecho o interpretación",
      "Reformúlalo de forma objetiva"
    ],
    questions: [
      "¿Estoy pensando o anticipando?",
      "¿Estoy exagerando la situación?"
    ],
    help: "No todo pensamiento es real, pero sí influye en tu estrés.",
    closure: "Hoy generaste distancia entre tú y tus pensamientos.",
    phrase: "No todo lo que pienso es real"
  },
  {
    day: 9,
    title: "Gestión de ritmo",
    purpose: "Reconocer cómo la velocidad influye en el estrés.",
    activity: [
      "Observa tu ritmo diario",
      "Identifica momentos de aceleración",
      "Reduce el ritmo en una actividad",
      "Observa el impacto"
    ],
    questions: [
      "¿Estoy acelerando innecesariamente?",
      "¿Qué cambia al bajar el ritmo?"
    ],
    help: "El estrés depende muchas veces de cómo haces las cosas.",
    closure: "Hoy regulaste tu ritmo de acción.",
    phrase: "Bajo el ritmo conscientemente"
  },
  {
    day: 10,
    title: "Límites frente al estrés",
    purpose: "Evitar sobrecarga por falta de límites.",
    activity: [
      "Identifica sobrecarga actual",
      "Define qué debes ajustar o rechazar",
      "Comunica o actúa en consecuencia",
      "Observa el impacto"
    ],
    questions: [
      "¿Estoy asumiendo demasiado?",
      "¿Qué pasa si pongo un límite?"
    ],
    help: "El estrés también se previene con límites.",
    closure: "Hoy evitaste una sobrecarga.",
    phrase: "Pongo límites a mi carga"
  },
  {
    day: 11,
    title: "Recuperación de energía",
    purpose: "Incorporar pausas para evitar acumulación de estrés.",
    activity: [
      "Identifica falta de pausas",
      "Define dos pausas diarias",
      "Desconéctate en esas pausas",
      "Observa cambios en energía"
    ],
    questions: [
      "¿Estoy funcionando sin pausas?",
      "¿Qué cambia cuando me detengo?"
    ],
    help: "Sin recuperación, el estrés se acumula.",
    closure: "Hoy empezaste a recuperar tu energía.",
    phrase: "Me doy pausas reales"
  },
  {
    day: 12,
    title: "Repetición consciente",
    purpose: "Consolidar acciones que regulan el estrés.",
    activity: [
      "Identifica lo que mejor te funciona",
      "Elige 2 prácticas clave",
      "Ejecútalas intencionalmente",
      "Repítelas durante el día"
    ],
    questions: [
      "¿Qué me está ayudando realmente?",
      "¿Lo estoy haciendo constante?"
    ],
    help: "La regulación depende de la repetición.",
    closure: "Hoy empiezas a construir consistencia.",
    phrase: "Repito lo que me regula"
  },
  {
    day: 13,
    title: "Aplicación en situación exigente",
    purpose: "Gestionar el estrés bajo presión real.",
    activity: [
      "Identifica situación exigente",
      "Anticipa detonantes",
      "Aplica herramientas de regulación",
      "Registra resultados"
    ],
    questions: [
      "¿Pude aplicarlo bajo presión?",
      "¿Qué fue más difícil?"
    ],
    help: "El cambio real se valida en la exigencia.",
    closure: "Hoy aplicaste la gestión del estrés en un contexto real.",
    phrase: "Me regulo incluso en presión"
  },
  {
    day: 14,
    title: "Prevención consciente",
    purpose: "Evitar estrés anticipando situaciones.",
    activity: [
      "Identifica situaciones estresantes",
      "Define acciones preventivas",
      "Ajusta preparación o límites",
      "Aplica un ajuste hoy"
    ],
    questions: [
      "¿Estoy esperando a estresarme?",
      "¿Qué puedo prevenir?"
    ],
    help: "La mejor gestión es la que previene.",
    closure: "Hoy empezaste a anticiparte.",
    phrase: "Prevengo antes de reaccionar"
  },
  {
    day: 15,
    title: "Identificación de recaídas",
    purpose: "Reconocer patrones automáticos de estrés.",
    activity: [
      "Identifica una recaída reciente",
      "Describe el proceso completo",
      "Detecta el punto de quiebre",
      "Define ajuste futuro"
    ],
    questions: [
      "¿Cuándo vuelvo al automático?",
      "¿Qué me hace recaer?"
    ],
    help: "Recaer es información, no fracaso.",
    closure: "Hoy aprendes de tus patrones.",
    phrase: "Ajusto cuando recaigo"
  },
  {
    day: 16,
    title: "Recuperación rápida",
    purpose: "Reducir el tiempo en estado de estrés.",
    activity: [
      "Identifica una situación reciente",
      "Mide duración del estrés",
      "Aplica estrategia de salida",
      "Evalúa reducción del tiempo"
    ],
    questions: [
      "¿Cuánto tiempo me quedo en estrés?",
      "¿Puedo salir más rápido?"
    ],
    help: "No es evitar el estrés, es salir más rápido.",
    closure: "Hoy mejoraste tu recuperación.",
    phrase: "Salgo más rápido del estrés"
  },
  {
    day: 17,
    title: "Consistencia en la regulación",
    purpose: "Sostener prácticas de regulación de forma constante.",
    activity: [
      "Identifica prácticas efectivas",
      "Define momentos de aplicación",
      "Ejecútalas intencionalmente",
      "Observa estabilidad"
    ],
    questions: [
      "¿Estoy siendo constante?",
      "¿Qué cambia con la repetición?"
    ],
    help: "La estabilidad depende de la consistencia.",
    closure: "Hoy fortaleces tu regulación.",
    phrase: "Sostengo mi regulación"
  },
  {
    day: 18,
    title: "Integración e identidad",
    purpose: "Integrar una nueva forma de gestionar el estrés.",
    activity: [
      "Describe tu forma anterior de reaccionar",
      "Describe tu forma actual",
      "Identifica cambios concretos",
      "Define lo que no repetirás",
      "Establece tu forma futura de gestión"
    ],
    questions: [
      "¿Quién soy frente al estrés ahora?",
      "¿Qué voy a sostener?",
      "¿Qué cambió realmente?"
    ],
    help: "El objetivo es aprender a gestionar, no eliminar el estrés.",
    closure: "Este proceso termina, tu regulación continúa.",
    phrase: "Gestiono mi estrés de forma consciente"
  }
]
    
}
