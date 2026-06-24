import { Course } from "@/components/course/types"; 


export const senalesDeAlertaAntesDelAgotamientoFisico : Course = {
    id : "senales-de-alerta-antes-del-agotamiento-fisico",
    title : "Señales de Alerta Antes del Agotamiento Físico", 
    section : "adultos", 
    dimension: "fisica", 
    price: 4, 
    description: ` <h1> Bienvenido a este espacio </h1>

El agotamiento no aparece de un momento a otro.
Se construye poco a poco
con señales pequeñas
silenciosas
que la mayoría de las veces ignoras
no porque no estén
sino porque aprendiste a normalizarlas
seguir cansado
seguir con dolor leve
seguir sin energía
seguir sin parar
hasta que un día el cuerpo ya no responde igual
Este proceso es para que empieces a ver algo que antes pasaba desapercibido:
las señales que aparecen antes del agotamiento
<h2> Cómo trabajar este proceso </h2>

No necesitas que la señal sea fuerte
de hecho, aquí trabajamos con lo sutil
<h2> Punto clave </h2>
El cuerpo avisa antes de colapsar
Si aprendes a leer las señales
puedes actuar antes de agotarte
`, 
days: [
  {
    day: 1,
    title: "El cuerpo avisa",
    purpose: "Aceptar que el agotamiento no aparece de forma repentina",
    activity: [
      "Identifica un momento del día donde tu cuerpo haya pedido bajar el ritmo",
      "Observa qué hiciste en ese momento sin cambiarlo",
      "Registra la señal aunque haya sido leve"
    ],
    questions: [
      "¿Estoy esperando sentirme muy mal para parar?",
      "¿Qué señales he ignorado recientemente?"
    ],
    help: "El agotamiento se construye de forma progresiva, no súbita",
    closure: "Hoy empezaste a notar que tu cuerpo avisa antes del colapso",
    phrase: "Mi cuerpo me avisa"
  },
  {
    day: 2,
    title: "Señales físicas tempranas",
    purpose: "Reconocer manifestaciones corporales iniciales del cansancio",
    activity: [
      "Observa si aparece tensión, pesadez o dolor leve",
      "Registra en qué parte del cuerpo se manifiesta",
      "No intentes corregir, solo detectar"
    ],
    questions: [
      "¿Qué sensaciones físicas aparecen antes del agotamiento?",
      "¿Dónde se expresa primero el cansancio en mi cuerpo?"
    ],
    help: "Las señales físicas suelen ser las primeras en aparecer",
    closure: "Hoy conectaste con señales físicas que antes ignorabas",
    phrase: "Escucho mi cuerpo"
  },
  {
    day: 3,
    title: "Señales mentales del desgaste",
    purpose: "Identificar cambios cognitivos asociados al cansancio",
    activity: [
      "Detecta momentos de falta de concentración o bloqueo",
      "Observa si tu pensamiento se vuelve más lento o confuso",
      "Registra sin interpretar"
    ],
    questions: [
      "¿Qué cambia en mi mente cuando empiezo a cansarme?",
      "¿Cómo afecta el cansancio mi capacidad de enfoque?"
    ],
    help: "El desgaste también se expresa como disminución cognitiva",
    closure: "Hoy identificaste señales mentales del agotamiento",
    phrase: "Mi mente también habla"
  },
  {
    day: 4,
    title: "Señales emocionales",
    purpose: "Reconocer cambios emocionales asociados al cansancio",
    activity: [
      "Observa irritabilidad, impaciencia o desmotivación",
      "Registra cuándo cambia tu estado emocional sin razón clara",
      "Identifica patrones repetidos"
    ],
    questions: [
      "¿Cómo cambia mi estado emocional cuando estoy cansado?",
      "¿Qué emociones aparecen antes del agotamiento?"
    ],
    help: "Las emociones también son indicadores fisiológicos del desgaste",
    closure: "Hoy reconociste señales emocionales del cansancio",
    phrase: "Mis emociones me muestran"
  },
  {
    day: 5,
    title: "Lo que ignoras",
    purpose: "Identificar señales que ya conoces pero no atiendes",
    activity: [
      "Escribe tres señales de cansancio que sueles ignorar",
      "Observa por qué no les haces caso",
      "Registra sin justificar"
    ],
    questions: [
      "¿Qué señales ignoro a pesar de reconocerlas?",
      "¿Por qué tiendo a normalizarlas?"
    ],
    help: "Ignorar una señal no la elimina, solo retrasa su impacto",
    closure: "Hoy dejaste de normalizar señales conocidas",
    phrase: "Dejo de ignorar"
  },
  {
    day: 6,
    title: "El costo de no escuchar",
    purpose: "Entender las consecuencias de ignorar las señales del cuerpo",
    activity: [
      "Responde qué ocurre cuando no detienes el ritmo a tiempo",
      "Identifica consecuencias físicas, mentales y emocionales",
      "Sé específico en los efectos"
    ],
    questions: [
      "¿Qué consecuencias tiene ignorar mi cuerpo?",
      "¿Qué he perdido por no parar a tiempo?"
    ],
    help: "El cuerpo siempre responde a lo que se ignora repetidamente",
    closure: "Hoy viste el impacto real de no escucharte",
    phrase: "Escucharme me cuida"
  },
  {
    day: 7,
    title: "El punto de decisión",
    purpose: "Reconocer el momento donde aún puedes ajustar tu ritmo",
    activity: [
      "Cuando identifiques una señal, detente brevemente",
      "Pregúntate si debes continuar o bajar el ritmo",
      "Observa la decisión sin automatismo"
    ],
    questions: [
      "¿En qué momento aún puedo intervenir?",
      "¿Cómo se siente elegir bajar el ritmo a tiempo?"
    ],
    help: "Siempre existe un punto previo al agotamiento total donde puedes intervenir",
    closure: "Hoy identificaste el momento clave de decisión",
    phrase: "Aún puedo elegir"
  },
  {
    day: 8,
    title: "Permiso para parar",
    purpose: "Romper la asociación entre parar y fallar",
    activity: [
      "Cuando detectes una señal, realiza una pausa breve",
      "Evita justificarte por detenerte",
      "Observa el efecto de parar"
    ],
    questions: [
      "¿Qué me impide detenerme a tiempo?",
      "¿Qué cambia cuando me permito parar?"
    ],
    help: "Parar es una forma de regulación, no de fracaso",
    closure: "Hoy te diste permiso para detenerte",
    phrase: "Puedo parar"
  },
  {
    day: 9,
    title: "Microajustes en el momento",
    purpose: "Regular el estado físico sin detener toda la actividad",
    activity: [
      "Realiza pequeños ajustes como cambiar postura o hidratarte",
      "Respira conscientemente durante unos segundos",
      "Observa cambios en tu estado"
    ],
    questions: [
      "¿Qué pequeños ajustes mejoran mi energía?",
      "¿Puedo regularme sin detener todo?"
    ],
    help: "No siempre es necesario parar por completo para regularse",
    closure: "Hoy aplicaste ajustes conscientes al cuerpo",
    phrase: "Me ajusto"
  },
  {
    day: 10,
    title: "Reducir la exigencia",
    purpose: "Adaptar el nivel de esfuerzo a tu estado real",
    activity: [
      "Realiza una versión más simple de una tarea cuando estés cansado",
      "Evita exigirte el mismo rendimiento en todos los estados",
      "Observa el efecto en tu energía"
    ],
    questions: [
      "¿Me exijo igual en todos mis estados?",
      "¿Qué pasa cuando reduzco la exigencia?"
    ],
    help: "La exigencia constante en estados bajos incrementa el desgaste",
    closure: "Hoy ajustaste tu nivel de exigencia",
    phrase: "No me exijo igual"
  },
  {
    day: 11,
    title: "Prevenir antes de reaccionar",
    purpose: "Anticiparse a señales conocidas de agotamiento",
    activity: [
      "Identifica patrones previos de cansancio",
      "Realiza pausas antes de llegar al límite",
      "Observa cambios preventivos"
    ],
    questions: [
      "¿Puedo anticiparme a mi agotamiento?",
      "¿Qué señales puedo usar como aviso temprano?"
    ],
    help: "Prevenir requiere menos energía que recuperarse del agotamiento",
    closure: "Hoy actuaste antes de llegar al límite",
    phrase: "Me anticipo"
  },
  {
    day: 12,
    title: "Integración de escucha corporal",
    purpose: "Consolidar una nueva relación con las señales del cuerpo",
    activity: [
      "Identifica las señales que reconoces ahora",
      "Escribe cómo respondes actualmente a ellas",
      "Define cómo quieres responder a futuro"
    ],
    questions: [
      "¿Qué señales ya no voy a ignorar?",
      "¿Cómo ha cambiado mi relación con mi cuerpo?"
    ],
    help: "Escuchar el cuerpo mejora sostenibilidad, no debilita",
    closure: "Hoy integraste una nueva forma de escuchar tu cuerpo",
    phrase: "Me escucho a tiempo"
  }
]


}