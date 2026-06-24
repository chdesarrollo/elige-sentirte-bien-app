import { Course } from "@/components/course/types";

export const yoPuedoSanarMiAdiccion: Course = {
    id: "yo-puedo-sanar-mi-adiccion",
    title: "Yo puedo sanar mi adicción",
    section: "adultos",
    dimension: "emocional",
    price: 0, // luego será pago
    description: `<h1> <strong>Bienvenida al proceso Yo puedo sanar mi adicción</strong></h1>
    Bienvenido a este espacio
Si estás aquí, ya sabes algo importante:
esto no es solo un hábito
es algo que sientes que a veces te gana
algo que has intentado controlar prometer posponer dejar
y vuelve
A veces con fuerza a veces en momentos específicos a veces cuando menos lo esperas
Y no siempre es falta de voluntad
es repetición es escape es automatismo
Este proceso no es para juzgarte
ni para exigirte perfección
es para que empieces a entender qué está pasando realmente y cómo empezar a cambiarlo
Cómo trabajar este proceso
No busques hacerlo perfecto
si fallas un día no abandones
esto no se trata de hacerlo perfecto se trata de hacerlo continuo
Punto clave
No eres débil
pero sí necesitas estrategia
Cierre
No se trata de “nunca más”
se trata de empezar a recuperar control.`,
    days: [
  {
    day: 1,
    title: "Nombrar la adicción",
    purpose: "Dejar de minimizar o suavizar lo que estás viviendo.",
    activity: ["Escribe con claridad cuál es mi adicción (sin justificarla ni disfrazarla)."],
    questions: ["¿He estado minimizando o normalizando mi adicción?"],
    help: "Lo que no se nombra con claridad, no se transforma.",
    closure: "Hoy dejaste de rodear el tema y lo enfrentaste con honestidad.",
    phrase: "Puedo nombrar mi adicción con claridad y la veo como lo que es."
  },
  {
    day: 2,
    title: "Cuándo aparece",
    purpose: "Identificar los momentos en que surge el impulso.",
    activity: ["Escribe cuándo aparece más fuerte (aburrimiento, estrés, soledad, ansiedad, rutina)."],
    questions: ["¿Es constante o aparece en momentos específicos?"],
    help: "La adicción no es aleatoria, tiene patrones.",
    closure: "Hoy empezaste a ver el patrón.",
    phrase: "Identifico cuándo aparece"
  },
  {
    day: 3,
    title: "Qué te da",
    purpose: "Entender qué obtienes de esa conducta.",
    activity: ["Completa: 'Esto me da...' (placer, escape, desconexión, alivio). Sé honesto."],
    questions: ["¿Qué necesidad está cubriendo esto?"],
    help: "No repites algo que no te da nada a cambio.",
    closure: "Hoy viste el beneficio oculto.",
    phrase: "Entiendo para qué lo hago"
  },
  {
    day: 4,
    title: "Qué te quita",
    purpose: "Hacer visible el costo real.",
    activity: ["Escribe qué te está quitando (energía, tiempo, dinero, relaciones, bienestar)."],
    questions: ["¿Estoy viendo el costo completo o solo una parte?"],
    help: "Lo que alivia a corto plazo suele costar a largo plazo.",
    closure: "Hoy viste el impacto real.",
    phrase: "Reconozco lo que pierdo"
  },
  {
    day: 5,
    title: "El disparador",
    purpose: "Identificar qué activa el impulso.",
    activity: ["Detecta un momento del día donde aparezca el impulso y escribe qué pasó justo antes."],
    questions: ["¿Qué activa el comportamiento?"],
    help: "Entre el disparador y la acción hay un espacio.",
    closure: "Hoy empezaste a ver ese espacio.",
    phrase: "Detecto el inicio"
  },
  {
    day: 6,
    title: "Pausa consciente",
    purpose: "Interrumpir el automatismo aunque sea unos segundos.",
    activity: ["Cuando aparezca el impulso, detente 1 minuto y observa sin actuar."],
    questions: ["¿Puedo no reaccionar inmediatamente?"],
    help: "La adicción vive en la reacción automática.",
    closure: "Hoy creaste un espacio nuevo.",
    phrase: "Puedo pausar"
  },
  {
    day: 7,
    title: "Elegir distinto (aunque sea una vez)",
    purpose: "Romper el patrón al menos en una ocasión.",
    activity: ["En un momento de impulso, elige no hacerlo o retrasarlo."],
    questions: ["¿Qué pasó cuando no reaccioné igual?"],
    help: "No necesitas dejarlo todo hoy, solo empezar a romper el ciclo.",
    closure: "Hoy demostraste que sí puedes interrumpirlo.",
    phrase: "Puedo elegir diferente"
  },
  {
    day: 8,
    title: "Retrasar el impulso",
    purpose: "Debilitar la urgencia sin enfrentarte de golpe.",
    activity: ["Retrasa el impulso 10 minutos y haz otra cosa mientras tanto."],
    questions: ["¿Qué pasa con el impulso cuando no actúo de inmediato?"],
    help: "El impulso sube… y también baja.",
    closure: "Hoy no reaccionaste de inmediato.",
    phrase: "Puedo esperar"
  },
  {
    day: 9,
    title: "Sustituir, no solo quitar",
    purpose: "Evitar el vacío que deja la conducta.",
    activity: ["Define una acción alternativa (caminar, respirar, tomar agua, salir del lugar) y úsala."],
    questions: ["¿Qué puedo hacer en lugar de esto?"],
    help: "Si solo quitas, el cerebro vuelve a lo conocido.",
    closure: "Hoy empezaste a reemplazar.",
    phrase: "Elijo otra acción"
  },
  {
    day: 10,
    title: "Cambiar el entorno",
    purpose: "Reducir estímulos que activan la conducta.",
    activity: ["Elimina o reduce algo que te dispare el impulso (objetos, accesos, lugares)."],
    questions: ["¿Qué en mi entorno facilita que esto pase?"],
    help: "La fuerza de voluntad no compite con un entorno mal diseñado.",
    closure: "Hoy hiciste el camino más fácil.",
    phrase: "Cambio lo que me rodea"
  },
  {
    day: 11,
    title: "Reconocer el progreso",
    purpose: "Evitar la autoexigencia destructiva.",
    activity: ["Haz una lista de lo que has logrado, aunque sea pequeño."],
    questions: ["¿Estoy viendo avances o solo errores?"],
    help: "El progreso pequeño sostenido cambia patrones.",
    closure: "Hoy viste lo que sí estás haciendo.",
    phrase: "Estoy avanzando"
  },
  {
    day: 12,
    title: "Entender la recaída",
    purpose: "Quitar el todo o nada.",
    activity: ["Define qué harás si recaíste en lugar de abandonar el proceso."],
    questions: ["¿Una caída me hace abandonar todo?"],
    help: "Recaer no es volver al inicio si no abandonas.",
    closure: "Hoy cambiaste la forma de ver los errores.",
    phrase: "Sigo incluso si fallo"
  },
  {
    day: 13,
    title: "Detectar justificaciones",
    purpose: "Identificar el diálogo interno que te hace ceder.",
    activity: ["Escribe las frases que te dices antes de caer (ej: 'solo hoy', 'no pasa nada')."],
    questions: ["¿Qué me digo para justificarlo?"],
    help: "El comportamiento empieza en el pensamiento.",
    closure: "Hoy viste el autoengaño.",
    phrase: "No me engaño"
  },
  {
    day: 14,
    title: "Interrumpir el pensamiento",
    purpose: "No seguir automáticamente la idea.",
    activity: ["Cuando aparezca el pensamiento, di 'no' mentalmente y cambia de acción."],
    questions: ["¿Sigo el pensamiento o puedo cortarlo?"],
    help: "Pensar no es lo mismo que actuar.",
    closure: "Hoy interrumpiste el ciclo mental.",
    phrase: "No todo lo que pienso lo hago"
  },
  {
    day: 15,
    title: "Soportar el impulso",
    purpose: "Fortalecer la tolerancia al impulso.",
    activity: ["Observa el impulso sin actuar hasta que baje."],
    questions: ["¿Cuánto dura realmente el impulso?"],
    help: "El impulso no es permanente.",
    closure: "Hoy comprobaste que pasa.",
    phrase: "Esto pasa"
  },
  {
    day: 16,
    title: "Volver al cuerpo",
    purpose: "Salir del impulso mental.",
    activity: ["Respira, muévete o camina cuando aparezca el impulso."],
    questions: ["¿Qué cambia cuando vuelvo al cuerpo?"],
    help: "El cuerpo te saca del automatismo.",
    closure: "Hoy usaste otra vía.",
    phrase: "Vuelvo a mí"
  },
  {
    day: 17,
    title: "Evitar el todo o nada",
    purpose: "Romper la mentalidad extrema.",
    activity: ["Si fallas, retoma en la siguiente decisión sin castigarte."],
    questions: ["¿Abandono todo cuando fallo?"],
    help: "Un error no define todo el proceso.",
    closure: "Hoy evitaste caer en extremos.",
    phrase: "Sigo aunque no sea perfecto"
  },
  {
    day: 18,
    title: "Construir nuevas rutinas",
    purpose: "Reemplazar espacios donde ocurría la conducta.",
    activity: ["Define una rutina nueva en el momento donde más caes y ejecútala."],
    questions: ["¿Qué hago ahora en ese espacio?"],
    help: "El cambio se sostiene con estructura.",
    closure: "Hoy empezaste a construir algo nuevo.",
    phrase: "Construyo algo diferente"
  },
  {
    day: 19,
    title: "Responsabilidad real",
    purpose: "Dejar de culpar solo a factores externos.",
    activity: ["Escribe qué decisiones tuyas mantienen esto activo."],
    questions: ["¿Estoy asumiendo mi parte?"],
    help: "Sin responsabilidad no hay cambio real.",
    closure: "Hoy tomaste control.",
    phrase: "Me hago responsable"
  },
  {
    day: 20,
    title: "Identidad",
    purpose: "Empezar a verte diferente.",
    activity: ["Completa: 'Estoy siendo una persona que...' desde el cambio, no desde el problema."],
    questions: ["¿Cómo me estoy viendo ahora?"],
    help: "El cambio se consolida cuando cambia tu identidad.",
    closure: "Hoy cambiaste cómo te defines.",
    phrase: "Estoy cambiando"
  },
  {
    day: 21,
    title: "Cierre",
    purpose: "Consolidar el proceso y proyectar continuidad.",
    activity: ["Escribe qué entendiste, qué cambió y qué vas a seguir haciendo."],
    questions: ["¿Qué versión mía quiero sostener?"],
    help: "Esto no termina hoy, pero hoy empieza a ser más tuyo.",
    closure: "No eliminaste todo, pero empezaste a recuperar control.",
    phrase: "Sigo eligiendo diferente"
  }
]
}
