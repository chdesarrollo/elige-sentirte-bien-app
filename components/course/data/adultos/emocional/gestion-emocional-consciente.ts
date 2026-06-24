import { Course } from "@/components/course/types"; 

export const gestionEmocionalConsciente: Course = {
    id : "gestion-emocional-consciente",
    title: "Gestión emocional consciente", 
    section: "adultos", 
    dimension: "emocional", 
    price: 5,
    description: `<h1> Bienvenido </h1>
Tus emociones no son el problema
el problema es no saber qué hacer con ellas
cuando aparecen
por eso a veces:
reaccionas
te las guardas
o te quedas atrapado pensando
este proceso es diferente
no es para analizarte eternamente
es para que desarrolles algo concreto:
habilidad para gestionar lo que sientes en el momento en que lo sientes
aquí no solo vas a entender
vas a practicar
<h2>Cómo trabajar este proceso</h2>
Haz el ejercicio en situaciones reales
no lo dejes en teoría
<h2>Punto clave</h2>
Si no practicas en el momento
no hay cambio
Sentir es inevitable
quedarte atrapado no`, 
days: [
  {
    day: 1,
    title: "Nombrar con precisión",
    purpose: "Desarrollar la habilidad de identificar emociones específicas en tiempo real.",
    activity: [
      "Cada vez que sientas algo, evita usar palabras generales como 'mal' o 'raro'",
      "Nombra la emoción con precisión (ansiedad, frustración, enojo, decepción, incomodidad)",
      "Hazlo en el momento en que aparece la emoción"
    ],
    questions: [
      "¿Qué cambia cuando nombro la emoción con precisión?",
      "¿Estoy generalizando lo que siento?"
    ],
    help: "Nombrar con precisión reduce la ambigüedad emocional y mejora el autocontrol.",
    closure: "Hoy empezaste a ponerle nombre claro a lo que sientes.",
    phrase: "nombro con claridad"
  },
  {
    day: 2,
    title: "Ubicar la emoción en el cuerpo",
    purpose: "Aprender a reconocer las emociones como experiencias corporales.",
    activity: [
      "Cuando aparezca una emoción, identifica dónde la sientes en el cuerpo",
      "Observa sensaciones físicas (pecho, estómago, garganta, cabeza)",
      "Mantente 20–30 segundos en esa sensación sin evitarla"
    ],
    questions: [
      "¿Dónde siento la emoción en mi cuerpo?",
      "¿Cambia algo cuando la observo físicamente?"
    ],
    help: "Las emociones son también estados corporales, no solo mentales.",
    closure: "Hoy conectaste emoción y cuerpo.",
    phrase: "lo siento en el cuerpo"
  },
  {
    day: 3,
    title: "Detectar el detonante",
    purpose: "Identificar qué activa tus emociones en tiempo real.",
    activity: [
      "Cuando sientas una emoción, pregúntate qué ocurrió justo antes",
      "Distingue si fue un evento externo o un pensamiento",
      "Registra el detonante de forma breve"
    ],
    questions: [
      "¿Qué activó esta emoción?",
      "¿Fue la situación o mi interpretación?"
    ],
    help: "Las emociones no siempre provienen del hecho, sino de su interpretación.",
    closure: "Hoy identificaste el origen de tus emociones.",
    phrase: "veo qué lo activa"
  },
  {
    day: 4,
    title: "Hecho vs interpretación",
    purpose: "Separar la realidad objetiva de la interpretación mental.",
    activity: [
      "Escribe una situación en dos partes: hecho y pensamiento",
      "Hecho: lo observable",
      "Historia: lo que interpretaste"
    ],
    questions: [
      "¿Qué parte de lo que siento viene de la interpretación?",
      "¿Estoy confundiendo hechos con pensamientos?"
    ],
    help: "Confundir hechos con interpretaciones intensifica la emoción.",
    closure: "Hoy separaste realidad de interpretación.",
    phrase: "distingo lo real de lo que pienso"
  },
  {
    day: 5,
    title: "Regular la intensidad con respiración",
    purpose: "Reducir la activación emocional en el momento.",
    activity: [
      "Inhala en 4 segundos y exhala en 6 segundos",
      "Repite durante 2–3 minutos",
      "Observa el cambio en la intensidad emocional"
    ],
    questions: [
      "¿Cambia mi estado después de respirar?",
      "¿Puedo pensar más claro tras regularme?"
    ],
    help: "La regulación fisiológica es base de la regulación emocional.",
    closure: "Hoy bajaste la intensidad antes de reaccionar.",
    phrase: "primero regulo"
  },
  {
    day: 6,
    title: "Crear una pausa consciente",
    purpose: "Interrumpir la reacción automática.",
    activity: [
      "Cuando aparezca un impulso emocional, espera 90 segundos",
      "No respondas inmediatamente",
      "Observa cómo evoluciona el impulso"
    ],
    questions: [
      "¿El impulso se mantiene o cambia con el tiempo?",
      "¿Qué pasa cuando no reacciono de inmediato?"
    ],
    help: "El impulso emocional es temporal si no se refuerza con acción inmediata.",
    closure: "Hoy creaste espacio entre emoción y reacción.",
    phrase: "puedo pausar"
  },
  {
    day: 7,
    title: "Reconocer el impulso",
    purpose: "Identificar la tendencia de acción que acompaña la emoción.",
    activity: [
      "Cuando sientas una emoción, identifica qué quieres hacer",
      "Nombra el impulso (discutir, evitar, callar, huir)",
      "Observa sin actuar inmediatamente"
    ],
    questions: [
      "¿Qué impulso aparece con esta emoción?",
      "¿Este impulso me ayuda o me perjudica?"
    ],
    help: "Toda emoción impulsa una acción; reconocerla evita reacciones automáticas.",
    closure: "Hoy viste tu impulso antes de actuar.",
    phrase: "reconozco lo que quiero hacer"
  },
  {
    day: 8,
    title: "Interrumpir el pensamiento repetitivo",
    purpose: "Evitar la escalada emocional por rumiación.",
    activity: [
      "Identifica pensamientos repetitivos",
      "Di mentalmente 'esto no me ayuda ahora'",
      "Cambia a una acción concreta"
    ],
    questions: [
      "¿Mis pensamientos están ayudando o intensificando la emoción?",
      "¿Estoy atrapado en un bucle mental?"
    ],
    help: "La rumiación mantiene y amplifica la emoción.",
    closure: "Hoy dejaste de alimentar el bucle mental.",
    phrase: "detengo el bucle"
  },
  {
    day: 9,
    title: "Descargar la emoción en el cuerpo",
    purpose: "Liberar activación emocional a través del movimiento.",
    activity: [
      "Camina, estira o muévete durante 5–10 minutos",
      "Observa cómo cambia tu estado emocional",
      "Evita quedarte solo en la mente"
    ],
    questions: [
      "¿Qué cambia cuando me muevo?",
      "¿Dónde siento la emoción ahora?"
    ],
    help: "El cuerpo es una vía directa de regulación emocional.",
    closure: "Hoy liberaste la emoción mediante el cuerpo.",
    phrase: "lo muevo en el cuerpo"
  },
  {
    day: 10,
    title: "Elegir la respuesta",
    purpose: "Pasar de reacción automática a respuesta consciente.",
    activity: [
      "Cuando sientas una emoción, haz una pausa",
      "Pregunta qué acción te ayuda más",
      "Elige conscientemente cómo responder"
    ],
    questions: [
      "¿Estoy reaccionando o eligiendo?",
      "¿Qué respuesta es más útil para mí?"
    ],
    help: "La gestión emocional es elección, no supresión.",
    closure: "Hoy elegiste tu respuesta.",
    phrase: "elijo cómo respondo"
  },
  {
    day: 11,
    title: "Regulación en alta intensidad",
    purpose: "Aprender a estabilizarte en momentos emocionales fuertes.",
    activity: [
      "Aplica el ejercicio 5-4-3-2-1 cuando estés activado",
      "Identifica elementos sensoriales del presente",
      "Regresa al aquí y ahora"
    ],
    questions: [
      "¿Puedo salir del bucle emocional?",
      "¿Qué cambia cuando vuelvo al presente?"
    ],
    help: "Anclarte al presente reduce la intensidad emocional.",
    closure: "Hoy saliste del desborde emocional.",
    phrase: "vuelvo al presente"
  },
  {
    day: 12,
    title: "Aplazar la reacción",
    purpose: "Evitar decisiones impulsivas en alta emoción.",
    activity: [
      "Si algo te activa, espera antes de responder",
      "Tómate al menos 10–20 minutos",
      "Reevalúa después de ese tiempo"
    ],
    questions: [
      "¿Responder en caliente cambiaría el resultado?",
      "¿Qué gano al esperar?"
    ],
    help: "El tiempo reduce distorsiones emocionales.",
    closure: "Hoy elegiste cuándo responder.",
    phrase: "elijo el momento"
  },
  {
    day: 13,
    title: "Cortar el pensamiento repetitivo",
    purpose: "Reducir la rumiación emocional.",
    activity: [
      "Detecta pensamientos repetitivos",
      "Di 'esto no me ayuda ahora'",
      "Redirige tu atención a otra actividad"
    ],
    questions: [
      "¿Este pensamiento está resolviendo algo?",
      "¿O solo está amplificando la emoción?"
    ],
    help: "No todo pensamiento necesita continuidad.",
    closure: "Hoy cortaste el bucle mental.",
    phrase: "corto el bucle"
  },
  {
    day: 14,
    title: "Descarga emocional estructurada",
    purpose: "Liberar emociones acumuladas de forma consciente.",
    activity: [
      "Escribe sin filtro durante 5–10 minutos",
      "O habla con alguien de forma honesta",
      "O usa movimiento físico"
    ],
    questions: [
      "¿Qué cambia después de expresarlo?",
      "¿Qué estaba acumulado?"
    ],
    help: "Lo no expresado se acumula y se intensifica.",
    closure: "Hoy liberaste carga emocional.",
    phrase: "lo saco"
  },
  {
    day: 15,
    title: "Elegir conducta sobre impulso",
    purpose: "Fortalecer la toma de decisiones consciente.",
    activity: [
      "Identifica lo que sientes",
      "Reconoce el impulso",
      "Elige si actuar o no actuar"
    ],
    questions: [
      "¿Actué desde impulso o desde elección?",
      "¿Qué cambia cuando decido conscientemente?"
    ],
    help: "La regulación emocional es elección de conducta.",
    closure: "Hoy actuaste con conciencia.",
    phrase: "yo decido"
  },
  {
    day: 16,
    title: "Sostener la emoción",
    purpose: "Aprender a tolerar emociones sin evitarlas.",
    activity: [
      "Permanece con la emoción sin distraerte",
      "Usa un temporizador de 5–10 minutos",
      "Solo observa lo que sientes"
    ],
    questions: [
      "¿Puedo sostener esto sin reaccionar?",
      "¿Qué pasa si no evito la emoción?"
    ],
    help: "Evitar emociones las intensifica.",
    closure: "Hoy sostuviste lo que sentías.",
    phrase: "puedo sostenerlo"
  },
  {
    day: 17,
    title: "Ampliar perspectiva",
    purpose: "Reducir interpretación personal excesiva.",
    activity: [
      "Pregúntate qué otras explicaciones existen",
      "Evita asumir que todo es sobre ti",
      "Escribe alternativas"
    ],
    questions: [
      "¿Estoy tomando esto de forma personal?",
      "¿Qué otras explicaciones hay?"
    ],
    help: "No todo lo externo es personal.",
    closure: "Hoy ampliaste tu interpretación.",
    phrase: "no todo es sobre mí"
  },
  {
    day: 18,
    title: "Regular en conversaciones difíciles",
    purpose: "Mantener estabilidad emocional en interacción.",
    activity: [
      "Habla más lento en conversaciones difíciles",
      "Usa frases simples",
      "Evita reaccionar impulsivamente"
    ],
    questions: [
      "¿Logré mantenerme estable?",
      "¿Cómo cambió la conversación?"
    ],
    help: "La regulación también es interpersonal.",
    closure: "Hoy te mantuviste estable.",
    phrase: "me mantengo estable"
  },
  {
    day: 19,
    title: "Integración de herramientas",
    purpose: "Aplicar múltiples estrategias en una situación real.",
    activity: [
      "En una situación real: nombra emoción",
      "Respira",
      "Pausa",
      "Cuestiona pensamiento",
      "Elige respuesta"
    ],
    questions: [
      "¿Qué herramienta fue más útil?",
      "¿Cómo se sintió aplicar el proceso completo?"
    ],
    help: "La gestión emocional es un sistema integrado, no una técnica aislada.",
    closure: "Hoy integraste todo el proceso.",
    phrase: "uso lo aprendido"
  },
  {
    day: 20,
    title: "Cierre del proceso",
    purpose: "Reconocer cambios en la gestión emocional.",
    activity: [
      "Reflexiona cómo reaccionabas antes vs ahora",
      "Identifica mejoras en regulación",
      "Completa: cuando siento algo intenso ahora..."
    ],
    questions: [
      "¿Qué ha cambiado en mi forma de responder?",
      "¿Qué sigo necesitando practicar?"
    ],
    help: "El cambio es la capacidad de responder, no de dejar de sentir.",
    closure: "Hoy reconociste tu avance en regulación emocional.",
    phrase: "sé gestionar"
  }
]
}
