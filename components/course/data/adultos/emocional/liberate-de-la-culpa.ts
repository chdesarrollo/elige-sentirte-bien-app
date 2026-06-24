import { Course } from "@/components/course/types";

export const liberateDeLaCulpa: Course = {
    id: "liberate-de-la-culpa",
    title: "Libérate de la culpa",
    section: "adultos",
    dimension: "emocional",
    price: 0, // luego será pago
    description: `<h1> <strong>Bienvenida al proceso Libérate de la culpa</strong></h1>
    No toda culpa es un problema.
Hay una culpa que te muestra que hiciste algo que no está alineado con lo que
sabes que es correcto.
Esa culpa es útil.
El problema es cuando la conviertes en carga permanente,
cuando te quedas ahí sin corregir,
o cuando te culpas por cosas que ni siquiera dependen de ti.
La culpa mal gestionada no te hace mejor persona.
Te estanca, te desgasta y te mantiene mirando hacia atrás sin avanzar.
Este proceso no es para dejar de sentir culpa.
Es para aprender a usarla cuando aporta y soltarla cuando no corresponde.
Aquí no vas a justificarte.
Tampoco vas a castigarte.
Vas a aprender a diferenciar, asumir y soltar.
Porque no se trata de no equivocarte,
se trata de qué haces después de hacerlo.
<h2><strong>¿De qué se trata este proceso?</strong></h2>
Es un proceso práctico donde identificas de qué te estás culpando, distingues si
esa culpa es válida o no, asumes lo que corresponde y sueltas lo que no
depende de ti.
No es reflexión pasiva.
Es toma de responsabilidad consciente.
<h2><strong>¿Para quién es este proceso?</strong></h2>
Para quien carga con errores del pasado.
Para quien se culpa constantemente.
Para quien no logra soltar situaciones que ya pasaron.
<h2><strong>¿Cómo se va a vivir el proceso?</strong></h2>
Con honestidad y sin evasión.
No es sentirte mejor. Es ver con claridad.
Compromiso consciente
No maquilles lo que hiciste. Pero tampoco exageres lo que no te corresponde.`,

    days: [
  {
    day: 1,
    title: "Identificación de culpa",
    purpose: "Hacer consciente de qué te estás culpando actualmente.",
    activity: [
      "Escribe todas las situaciones por las que sientes culpa",
      "Incluye situaciones recientes y pasadas",
      "No filtres ni justifiques",
      "Escríbelas de forma concreta"
    ],
    questions: [
      "¿De qué me culpo con más frecuencia?",
      "¿Hay algo que llevo cargando hace tiempo?"
    ],
    help: "No puedes trabajar lo que no haces visible.",
    closure: "Hoy hiciste visible tu carga.",
    phrase: "Identifico mi culpa"
  },
  {
    day: 2,
    title: "Diferenciación de culpa",
    purpose: "Distinguir entre culpa real y culpa asumida incorrectamente.",
    activity: [
      "Clasifica cada situación según responsabilidad directa, parcial o no dependía de ti",
      "Revisa qué tanto control tenías en cada caso",
      "Evita extremos al categorizar",
      "Ordena tu lista del día anterior"
    ],
    questions: [
      "¿Estoy asumiendo más de lo que me corresponde?",
      "¿Estoy minimizando mi responsabilidad en algo?"
    ],
    help: "La culpa mal ubicada distorsiona la responsabilidad.",
    closure: "Hoy ordenaste tu culpa con más precisión.",
    phrase: "Ubico mi responsabilidad"
  },
  {
    day: 3,
    title: "Responsabilidad sin distorsión",
    purpose: "Asumir con claridad lo que hiciste sin exagerar ni justificar.",
    activity: [
      "Describe exactamente qué hiciste o dejaste de hacer",
      "Evita justificar o explicar en exceso",
      "Identifica qué decisiones fueron tuyas",
      "Sé directo y preciso"
    ],
    questions: [
      "¿Estoy siendo claro o me estoy justificando?",
      "¿Estoy exagerando mi error?"
    ],
    help: "La claridad reduce tanto la culpa excesiva como la evasión.",
    closure: "Hoy asumiste sin distorsión.",
    phrase: "Asumo con claridad"
  },
  {
    day: 4,
    title: "Impacto real",
    purpose: "Entender las consecuencias reales de lo ocurrido sin dramatizar ni minimizar.",
    activity: [
      "Elige una situación donde sientas culpa",
      "Describe el impacto real, no el imaginado",
      "Distingue hechos de interpretaciones",
      "Evita exagerar consecuencias"
    ],
    questions: [
      "¿Estoy reaccionando al hecho o a lo que imagino?",
      "¿El impacto fue tan grande como lo siento?"
    ],
    help: "La culpa se intensifica cuando mezclas realidad con interpretación.",
    closure: "Hoy separaste hechos de interpretación.",
    phrase: "Veo el impacto real"
  },
  {
    day: 5,
    title: "Corrección responsable",
    purpose: "Definir acciones concretas para reparar lo que aún es posible.",
    activity: [
      "Identifica si hay algo que puedas corregir",
      "Define una acción concreta (hablar, reparar, aclarar)",
      "Decide cuándo lo harás",
      "Si no lo harás, justifica por qué"
    ],
    questions: [
      "¿Estoy evitando una acción que sé que debo hacer?",
      "¿Estoy postergando la corrección?"
    ],
    help: "La culpa útil se transforma en acción concreta.",
    closure: "Hoy convertiste culpa en responsabilidad activa.",
    phrase: "Actúo frente a lo que hice"
  },
  {
    day: 6,
    title: "Ejecución de corrección",
    purpose: "Cerrar la brecha entre saber qué hacer y hacerlo.",
    activity: [
      "Ejecuta la acción definida previamente",
      "Sé directo y sin excesiva justificación",
      "Enfócate en asumir responsabilidad",
      "Registra lo que ocurrió"
    ],
    questions: [
      "¿Qué pasó al actuar en lugar de evitarlo?",
      "¿Fue más difícil hacerlo o pensarlo?"
    ],
    help: "Actuar reduce la carga más que pensar en lo ocurrido.",
    closure: "Hoy pasaste de cargar a resolver.",
    phrase: "Resuelvo lo que está en mis manos"
  },
  {
    day: 7,
    title: "Límite de la responsabilidad",
    purpose: "Reconocer hasta dónde llega tu responsabilidad y dónde termina.",
    activity: [
      "Divide la situación en lo que dependía de ti y lo que no",
      "Sé específico en cada punto",
      "Evita asumir lo de otros",
      "Define el límite con claridad"
    ],
    questions: [
      "¿Estoy asumiendo más de lo que me corresponde?",
      "¿Estoy cargando decisiones de otros?"
    ],
    help: "No todo lo que ocurre es tu responsabilidad.",
    closure: "Hoy delimitaste lo que es tuyo y lo que no.",
    phrase: "No cargo lo que no me corresponde"
  },
  {
    day: 8,
    title: "Soltar culpa impropia",
    purpose: "Liberarte de culpas que no te corresponden.",
    activity: [
      "Identifica culpas que no dependen de ti",
      "Escríbelas claramente",
      "Explica por qué no son tu responsabilidad",
      "Declara que las sueltas"
    ],
    questions: [
      "¿Por qué sigo cargando algo que no me corresponde?",
      "¿Qué cambia si lo suelto?"
    ],
    help: "Sostener culpa ajena solo genera desgaste.",
    closure: "Hoy soltaste carga innecesaria.",
    phrase: "Suelto lo que no es mío"
  },
  {
    day: 9,
    title: "Aprendizaje del error",
    purpose: "Transformar la culpa en aprendizaje útil.",
    activity: [
      "Identifica una situación con responsabilidad tuya",
      "Extrae aprendizajes concretos",
      "Define qué harías diferente",
      "Conviértelo en acción futura"
    ],
    questions: [
      "¿Qué me deja este error?",
      "¿Estoy aprendiendo o repitiendo culpa?"
    ],
    help: "Sin aprendizaje, la culpa se repite.",
    closure: "Hoy transformaste culpa en aprendizaje.",
    phrase: "Aprendo y ajusto"
  },
  {
    day: 10,
    title: "Cierre interno",
    purpose: "Dejar de revivir mentalmente lo ocurrido.",
    activity: [
      "Identifica una situación repetitiva en tu mente",
      "Escribe qué ya hiciste al respecto",
      "Reconoce lo aprendido o corregido",
      "Declara el cierre consciente"
    ],
    questions: [
      "¿Estoy resolviendo o repitiendo mentalmente?",
      "¿Qué gano manteniéndolo activo?"
    ],
    help: "Repetir mentalmente no repara, solo prolonga la carga.",
    closure: "Hoy cerraste un ciclo interno.",
    phrase: "Cierro lo que ya pasó"
  },
  {
    day: 11,
    title: "Autocompasión responsable",
    purpose: "Tratarte con firmeza y respeto sin castigo constante.",
    activity: [
      "Observa cómo te hablas frente a tus errores",
      "Identifica juicio excesivo o castigo",
      "Reformula tu diálogo interno",
      "Lee tu nueva forma de hablarte"
    ],
    questions: [
      "¿Me trato con dureza innecesaria?",
      "¿Estoy aprendiendo o castigándome?"
    ],
    help: "El castigo bloquea el cambio, no lo mejora.",
    closure: "Hoy cambiaste la forma en que te tratas.",
    phrase: "Me trato con responsabilidad y respeto"
  },
  {
    day: 12,
    title: "Integración y liberación",
    purpose: "Cerrar el proceso integrando una nueva forma de gestionar la culpa.",
    activity: [
      "Escribe qué cambió en tu forma de ver la culpa",
      "Identifica herramientas que funcionaron mejor",
      "Define cómo actuarás ante futuros errores",
      "Establece un compromiso contigo mismo",
      "Escribe qué ya no vas a cargar"
    ],
    questions: [
      "¿Sigo viendo la culpa como carga o como información?",
      "¿Qué no voy a repetir en mi forma de gestionarla?",
      "¿Estoy listo para soltar lo aprendido?"
    ],
    help: "La culpa bien gestionada se procesa y se suelta.",
    closure: "Este proceso termina, pero tu forma de responder cambia desde hoy.",
    phrase: "Asumo, aprendo y suelto"
  }
]
}