import { Course } from "@/components/course/types";
import { act } from "react";

export const misHabitosDeExito: Course = {
    id: "mis-habitos-de-exito",
    title: "Mis hábitos de éxito",
    section: "adultos",
    dimension: "emocional",
    price: 0, // luego será pago
    description: `<h1> <strong>Bienvenida al proceso Mis hábitos de éxito</strong></h1>
    Revisa tu día de ayer.
No lo que planeaste. Lo que realmente hiciste.
Ahí están tus hábitos.
No necesitas imaginar una mejor versión tuya. Necesitas empezar a actuar distinto en cosas pequeñas y repetirlo.
Este proceso no es para hacer más. Es para dejar de fallar en lo básico.
Aquí no vas a depender de motivación. Vas a construir algo que funcione incluso cuando no tengas ganas.
Cómo trabajar este proceso
Un hábito a la vez.
No sumes más. No compenses. No adelantes días.
Haz lo que corresponde hoy.
Punto clave
No estás fallando por falta de disciplina. Estás fallando porque lo haces difícil de sostener.`,
    days: [
  {
    day: 1,
    title: "Elegir lo correcto",
    purpose: "Definir un hábito que sí puedas sostener",
    activity: [
      "Elige un hábito que sabes que te hace bien pero no has logrado mantener",
      "Haz que tu objetivo sea específico y concreto",
      "Escribe por qué es importante para ti sostener este hábito",
      "Define una acción concreta que puedas hacer hoy para empezar a construir este hábito",
      "Asegúrate de que tu hábito puedas hacerlo incluso en un mal día"
    ],
    questions: [
      "¿Esto es realista o estoy exagerando?",
      "¿Podría hacerlo incluso sin ganas?"
    ],
    help: "Un buen hábito no empieza grande, empieza posible.",
    closure: "Hoy dejaste de elegir desde la emoción y empezaste a elegir desde la realidad.",
    phrase: "Lo hago posible"
  },
  {
    day: 2,
    title: "Quitar obstáculos",
    purpose: "Hacer que empezar el hábito sea fácil",
    activity: [
      "Identifica qué te dificulta hacer el hábito",
      "Elimina al menos una barrera hoy (dejar listo, definir lugar, reducir pasos)",
      "Facilita el inicio del hábito lo más posible",
      "Ejecuta el hábito después de simplificar el entorno"
    ],
    questions: [
      "¿Qué me estaba frenando antes?",
      "¿Qué cambió al facilitarlo?"
    ],
    help: "No es falta de disciplina, es exceso de dificultad.",
    closure: "Hoy hiciste más fácil cumplir.",
    phrase: "Lo facilito"
  },
  {
    day: 3,
    title: "Momento claro",
    purpose: "Dejar de depender del “cuando pueda”",
    activity: [
      "Define exactamente cuándo vas a hacer tu hábito",
      "Conéctalo a algo que ya haces todos los días",
      "Ejemplo: después de desayunar o antes de dormir",
      "Ejecuta el hábito en ese momento definido"
    ],
    questions: [
      "¿Tengo claro cuándo empieza?"
    ],
    help: "Si no tiene momento, no existe.",
    closure: "Hoy le diste lugar a tu hábito.",
    phrase: "Tengo mi momento"
  },
  {
    day: 4,
    title: "Hacerlo sin negociar",
    purpose: "Romper la conversación interna que te frena",
    activity: [
      "Cuando llegue el momento del hábito, no lo pienses",
      "No lo evalúes ni lo postergues",
      "Ejecuta la acción de inmediato",
      "Observa si aparece resistencia mental"
    ],
    questions: [
      "¿Qué me dije para no hacerlo?",
      "¿Lo hice igual?"
    ],
    help: "Cada vez que negocias, debilitas el hábito.",
    closure: "Hoy cumpliste sin depender de las ganas.",
    phrase: "No negocio"
  },
  {
    day: 5,
    title: "Ver la verdad",
    purpose: "Tener claridad real sobre tu cumplimiento",
    activity: [
      "Al final del día responde solo: ¿lo hice o no?",
      "No justifiques ni expliques",
      "Registra tu cumplimiento con honestidad",
      "Observa tu patrón real"
    ],
    questions: [
      "¿Estoy siendo constante o intermitente?"
    ],
    help: "La claridad elimina el autoengaño.",
    closure: "Hoy viste tu comportamiento real.",
    phrase: "Cumplo hoy"
  },
  {
    day: 6,
    title: "Primer quiebre",
    purpose: "Detectar el momento en el que normalmente empiezas a fallar",
    activity: [
      "Identifica cuándo aparece la intención de no hacer el hábito",
      "No analices, solo ejecútalo igual",
      "Observa tu momento de resistencia",
      "Continúa sin negociar"
    ],
    questions: [
      "¿En qué momento quise no hacerlo?",
      "¿Qué me dije para evitarlo?"
    ],
    help: "El hábito no se rompe cuando fallas, sino cuando decides no hacerlo.",
    closure: "Hoy viste el punto donde normalmente te caes.",
    phrase: "Lo hago igual"
  },
  {
    day: 7,
    title: "Días sin ganas",
    purpose: "Sostener el hábito incluso sin motivación",
    activity: [
      "Haz tu hábito sin esperar ganas",
      "Si es necesario, haz la versión mínima",
      "No canceles la acción",
      "Ejecuta aunque no tengas motivación"
    ],
    questions: [
      "¿Esperaba sentirme diferente para hacerlo?",
      "¿Qué pasó cuando lo hice sin ganas?"
    ],
    help: "Si dependes de las ganas, no hay hábito.",
    closure: "Hoy actuaste sin motivación.",
    phrase: "Lo hago sin ganas"
  },
  {
    day: 8,
    title: "Interrupciones",
    purpose: "Mantener el hábito aunque el día no salga como planeaste",
    activity: [
      "Si el día se complica, no canceles el hábito",
      "Ajusta la forma de hacerlo",
      "Reduce el tamaño si es necesario",
      "Ejecuta en otro momento si hace falta"
    ],
    questions: [
      "¿Abandoné o ajusté?",
      "¿Qué hice cuando el día se desordenó?"
    ],
    help: "Un hábito fuerte se adapta, no se rompe.",
    closure: "Hoy evitaste abandonar por desorden.",
    phrase: "Me adapto"
  },
  {
    day: 9,
    title: "Excusas reales",
    purpose: "Reconocer las razones que usas para no cumplir",
    activity: [
      "Escribe cada excusa cuando aparezca",
      "No la ignores, regístrala",
      "Ejecuta el hábito igual",
      "Observa si la excusa se repite"
    ],
    questions: [
      "¿Qué excusa se repite?",
      "¿Era una razón real o una salida fácil?"
    ],
    help: "Las excusas no se eliminan, se atraviesan.",
    closure: "Hoy dejaste de creerte todo lo que piensas.",
    phrase: "No me detengo"
  },
  {
    day: 10,
    title: "Cansancio",
    purpose: "Sostener el hábito incluso con baja energía",
    activity: [
      "Si estás cansado, haz la versión más pequeña posible",
      "No omitas el hábito",
      "Ejecuta aunque sea mínimo",
      "Mantén continuidad"
    ],
    questions: [
      "¿El cansancio me detuvo o me ajusté?"
    ],
    help: "El hábito se pierde cuando lo dejas, no cuando lo haces pequeño.",
    closure: "Hoy mantuviste continuidad.",
    phrase: "No lo dejo"
  },
  {
    day: 11,
    title: "Automatismo inicial",
    purpose: "Empezar a hacer el hábito con menos resistencia",
    activity: [
      "Empieza el hábito sin pensarlo demasiado",
      "Reduce la pausa antes de iniciar",
      "Evita analizar antes de actuar",
      "Ejecuta de inmediato"
    ],
    questions: [
      "¿Pensé menos para empezar?",
      "¿Fue más fácil que otros días?"
    ],
    help: "Entre menos lo piensas, más fácil se vuelve.",
    closure: "Hoy redujiste la resistencia.",
    phrase: "Empiezo rápido"
  },
  {
    day: 12,
    title: "Consistencia visible",
    purpose: "Ver si realmente estás sosteniendo el hábito",
    activity: [
      "Revisa los últimos días de cumplimiento",
      "Cuenta cuántos días cumpliste y cuántos no",
      "No justifiques resultados",
      "Observa el patrón real"
    ],
    questions: [
      "¿Estoy siendo constante o intermitente?",
      "¿Qué patrón veo?"
    ],
    help: "La consistencia no se siente, se mide.",
    closure: "Hoy viste tu nivel real de constancia.",
    phrase: "Soy constante"
  },
  {
    day: 13,
    title: "Cuando fallas",
    purpose: "Evitar que un error se convierta en abandono",
    activity: [
      "Si fallaste ayer, retoma hoy sin compensar",
      "No hagas más de lo normal",
      "Solo vuelve al hábito",
      "Evita intentar recuperar el día perdido"
    ],
    questions: [
      "¿Abandono o retomo?",
      "¿Qué hago normalmente cuando fallo?"
    ],
    help: "Un hábito no se pierde por un día, se pierde cuando no vuelves.",
    closure: "Hoy practicaste volver.",
    phrase: "Vuelvo sin drama"
  },
  {
    day: 14,
    title: "Evitar el ‘ya dañé todo’",
    purpose: "Romper el pensamiento que te hace abandonar después de fallar",
    activity: [
      "Si fallas, no des el día por perdido",
      "Haz el hábito en otro momento",
      "Aunque sea versión mínima",
      "Evita el todo o nada"
    ],
    questions: [
      "¿Abandono o ajusto?",
      "¿Qué pasa cuando no lo hago perfecto?"
    ],
    help: "El todo o nada destruye la constancia.",
    closure: "Hoy evitaste perder el día completo.",
    phrase: "Ajusto, no abandono"
  },
  {
    day: 15,
    title: "Días imperfectos",
    purpose: "Sostener el hábito aunque el día no sea ideal",
    activity: [
      "Haz el hábito en un día con distracciones o cansancio",
      "No esperes condiciones perfectas",
      "Ejecuta de todos modos",
      "Observa tu comportamiento real"
    ],
    questions: [
      "¿Estoy esperando demasiado para actuar?",
      "¿Qué condiciones necesito realmente?"
    ],
    help: "Los hábitos reales se sostienen en días imperfectos.",
    closure: "Hoy dejaste de depender del ‘día ideal’.",
    phrase: "Lo hago igual"
  },
  {
    day: 16,
    title: "Recaídas pequeñas",
    purpose: "Normalizar días de bajo nivel sin perder continuidad",
    activity: [
      "Si hay resistencia, haz versión mínima del hábito",
      "No te castigues",
      "Mantén continuidad aunque sea baja",
      "Evita abandonar por baja energía"
    ],
    questions: [
      "¿Me exijo demasiado o abandono rápido?"
    ],
    help: "Bajar el nivel es válido, dejarlo no.",
    closure: "Hoy mantuviste el hábito en bajo nivel.",
    phrase: "Sigo, aunque sea poco"
  },
  {
    day: 17,
    title: "Volver rápido",
    purpose: "Reducir el tiempo entre fallar y retomar",
    activity: [
      "Si fallas, retoma el mismo día",
      "No esperes al día siguiente",
      "Haz la versión mínima si es necesario",
      "Evita pausas largas después del error"
    ],
    questions: [
      "¿Cuánto tiempo dejo pasar antes de retomar?"
    ],
    help: "El problema no es fallar, es demorarte en volver.",
    closure: "Hoy acortaste el regreso.",
    phrase: "Vuelvo rápido"
  },
  {
    day: 18,
    title: "Constancia sobre perfección",
    purpose: "Enfocarte en hacerlo seguido, no perfecto",
    activity: [
      "Haz el hábito sin enfocarte en hacerlo perfecto",
      "Prioriza ejecución sobre calidad ideal",
      "Evita sobrepensar",
      "Cumple de forma simple"
    ],
    questions: [
      "¿Estoy buscando perfección o constancia?"
    ],
    help: "La perfección interrumpe, la constancia construye.",
    closure: "Hoy priorizaste continuidad.",
    phrase: "Cumplo, no perfecto"
  },
  {
    day: 19,
    title: "Ya es parte de tu día",
    purpose: "Integrar el hábito como algo normal",
    activity: [
      "Haz el hábito como parte natural de tu rutina",
      "Sin hacerlo especial",
      "Sin darle protagonismo extra",
      "Incorpóralo en tu día a día"
    ],
    questions: [
      "¿Sigue siendo esfuerzo o ya es más natural?"
    ],
    help: "Cuando deja de ser extraordinario, empieza a consolidarse.",
    closure: "Hoy lo hiciste parte de tu rutina.",
    phrase: "Es parte de mi día"
  },
  {
    day: 20,
    title: "Identidad",
    purpose: "Reconocerte como alguien que sostiene lo que empieza",
    activity: [
      "Escribe evidencia de cumplimiento de estos días",
      "Describe cómo has actuado",
      "Identifica cambios en tu comportamiento",
      "Reconoce tu evolución"
    ],
    questions: [
      "¿Qué evidencia tengo de cambio?",
      "¿Sigo viéndome igual que antes?"
    ],
    help: "La identidad cambia cuando hay evidencia repetida.",
    closure: "Hoy te reconoces distinto.",
    phrase: "Soy constante"
  },
  {
    day: 21,
    title: "Cierre y continuidad",
    purpose: "Asegurar la continuidad del hábito después del proceso",
    activity: [
      "Define cómo continuarás el hábito",
      "Mantén el mismo momento y nivel",
      "Decide qué harás si fallas",
      "Escribe tu plan de continuidad"
    ],
    questions: [
      "¿Qué me permitió sostener esto?",
      "¿Cómo voy a continuar sin este proceso?"
    ],
    help: "El proceso termina, pero el hábito continúa si lo mantienes simple.",
    closure: "Esto fue el inicio de una forma distinta de actuar.",
    phrase: "Lo sostengo"
  }
]
}

        

