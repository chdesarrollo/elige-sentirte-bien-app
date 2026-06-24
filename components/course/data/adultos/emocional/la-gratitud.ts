import { Course } from "@/components/course/types";

export const laGratitud: Course = {
    id: "la-gratitud",
    title: "La gratitud",
    section: "adultos",
    dimension: "emocional",
    price: 0, // luego será pago
    description: `<h1> <strong>Bienvenida al proceso La gratitud</strong></h1>
    Tu forma de ver la vida no es neutral. Está entrenada.
Y la mayoría del tiempo está entrenada para enfocarse en lo que falta, en lo que no salió bien y en lo que no es suficiente.
No porque así sea la realidad, sino porque así aprendiste a mirarla.
La gratitud no es una emoción espontánea. Es una habilidad que se entrena.
Si no la entrenas, tu atención se va a seguir yendo automáticamente hacia lo negativo, hacia la queja o hacia la insatisfacción constante.
Este proceso no es para “sentirte bien” por obligación. Es para cambiar el criterio con el que interpretas lo que vives.
Aquí no vas a negar lo difícil. Vas a dejar de ignorar lo que sí funciona, lo que sí tienes y lo que sí está aportando valor a tu vida.
La diferencia no está en tu realidad. Está en lo que eliges ver de ella.
<h2><strong>¿De qué se trata este proceso?</strong></h2>
Es un proceso práctico donde entrenas tu atención para identificar con precisión lo que sí está presente en tu vida y dejar de vivir desde la sensación constante de carencia.
No es repetir frases positivas. Es aprender a percibir diferente.
<h2><strong>¿Para quién es este proceso?</strong></h2>
Para quien siente que nunca es suficiente. Para quien se enfoca más en lo que falta que en lo que hay. Para quien quiere dejar de vivir desde la insatisfacción constante.
<h2><strong>¿Cómo se va a vivir el proceso?</strong></h2>
A través de observación, registro y precisión.
No es escribir por escribir. Es entrenar tu forma de mirar.
Compromiso consciente
Si lo haces superficial, no cambia nada.
Esto solo funciona si te obligas a ver más allá de lo obvio.`,
    days: [
  {
    day: 1,
    title: "Interrupción de la queja",
    purpose: "Hacer consciente cuántas veces te enfocas en lo negativo de forma automática.",
    activity: [
      "Durante el día, identifica cada vez que te quejas (mental o verbalmente)",
      "Registra al menos 5 momentos",
      "Escribe exactamente de qué te estabas quejando",
      "Al lado, escribe qué sí estaba funcionando en esa misma situación"
    ],
    questions: [
      "¿Con qué frecuencia me quejo sin darme cuenta?",
      "¿Puedo ver algo positivo en la misma situación?"
    ],
    help: "La gratitud empieza cuando haces visible la queja automática.",
    closure: "Hoy viste cómo tu atención se va a lo que no funciona.",
    phrase: "Detecto mi enfoque automático"
  },
  {
    day: 2,
    title: "Reentrenamiento de la atención",
    purpose: "Dirigir intencionalmente tu atención hacia lo que sí está presente.",
    activity: [
      "Elige tres momentos del día (mañana, tarde y noche)",
      "En cada momento escribe 3 cosas que están funcionando",
      "Deben ser específicas y actuales",
      "Evita repetir las mismas en cada bloque"
    ],
    questions: [
      "¿Me cuesta encontrar cosas que funcionan?",
      "¿Mi atención sigue yéndose a lo negativo?"
    ],
    help: "La atención se entrena con repetición, no con intención puntual.",
    closure: "Hoy empezaste a dirigir tu enfoque.",
    phrase: "Dirijo mi atención"
  },
  {
    day: 3,
    title: "Precisión en lo que valoras",
    purpose: "Evitar la gratitud automática y superficial.",
    activity: [
      "Escribe 3 cosas por las que sientes gratitud",
      "Para cada una responde por qué exactamente es valiosa",
      "Describe su impacto concreto en tu vida o tu día",
      "Evita frases genéricas"
    ],
    questions: [
      "¿Estoy repitiendo ideas o realmente estoy observando?",
      "¿Qué cambia cuando explico el valor de algo?"
    ],
    help: "Lo que no se detalla, no se integra.",
    closure: "Hoy hiciste la gratitud más consciente.",
    phrase: "Veo con claridad lo que valoro"
  },
  {
    day: 4,
    title: "Lo que das por hecho",
    purpose: "Hacer visible todo aquello que está presente pero no valoras.",
    activity: [
      "Identifica 5 cosas constantes en tu vida (salud, personas, servicios, rutinas)",
      "Escríbelas una por una",
      "Describe qué pasaría si no estuvieran",
      "Explica el impacto real de su ausencia"
    ],
    questions: [
      "¿Qué estoy dando por garantizado?",
      "¿Qué cambiaría si eso desaparece?"
    ],
    help: "Valoras más cuando dejas de asumir que todo está asegurado.",
    closure: "Hoy hiciste visible lo invisible.",
    phrase: "No doy todo por hecho"
  },
  {
    day: 5,
    title: "Reconocimiento hacia otros",
    purpose: "Valorar el aporte de otras personas de forma concreta.",
    activity: [
      "Identifica 2 personas que hayan influido en tu día",
      "Escribe qué hicieron exactamente",
      "Describe por qué fue importante para ti",
      "Exprésalo si es posible de forma directa"
    ],
    questions: [
      "¿Reconozco lo que otros hacen o lo doy por hecho?",
      "¿Qué cambia cuando lo expreso?"
    ],
    help: "La gratitud también se construye en relación con otros.",
    closure: "Hoy reconociste el aporte externo.",
    phrase: "Reconozco lo que recibo"
  },
  {
    day: 6,
    title: "Reconocimiento personal",
    purpose: "Reconocer tu propio aporte en lo que funciona en tu vida.",
    activity: [
      "Escribe 5 acciones que realizaste hoy",
      "Incluye acciones pequeñas",
      "Describe qué implicaron (esfuerzo, decisión o disciplina)",
      "Relaciona esas acciones con resultados en tu vida"
    ],
    questions: [
      "¿Reconozco lo que hago o solo lo que falta?",
      "¿Estoy minimizando mi propio aporte?"
    ],
    help: "No todo lo bueno en tu vida viene de afuera.",
    closure: "Hoy reconociste tu aporte.",
    phrase: "Reconozco mi aporte"
  },
  {
    day: 7,
    title: "Gratitud en lo incómodo",
    purpose: "Identificar valor incluso en situaciones no deseadas.",
    activity: [
      "Identifica una situación incómoda reciente",
      "Describe qué fue lo difícil",
      "Identifica qué te mostró (límite, aprendizaje, necesidad)",
      "Extrae un valor sin justificar la situación"
    ],
    questions: [
      "¿Puedo ver algo útil en lo que no me gusta?",
      "¿Estoy rechazando la experiencia o aprendiendo de ella?"
    ],
    help: "La gratitud también incluye lo que te muestra algo necesario.",
    closure: "Hoy encontraste valor en lo difícil.",
    phrase: "Encuentro valor incluso en lo difícil"
  },
  {
    day: 8,
    title: "Reencuadre de experiencia",
    purpose: "Cambiar la interpretación automática de una situación.",
    activity: [
      "Elige una situación interpretada negativamente",
      "Escribe tu interpretación inicial",
      "Crea al menos dos interpretaciones alternativas",
      "Elige conscientemente una forma de verla"
    ],
    questions: [
      "¿Mi interpretación es la única posible?",
      "¿Qué cambia al verla distinto?"
    ],
    help: "No reaccionas a lo que pasa, sino a cómo lo interpretas.",
    closure: "Hoy ampliaste tu perspectiva.",
    phrase: "Elijo cómo interpretar"
  },
  {
    day: 9,
    title: "Comparación consciente",
    purpose: "Reducir el enfoque en lo que falta.",
    activity: [
      "Identifica algo que sientes que te falta",
      "Escribe por qué lo necesitas",
      "Escribe lo que ya tienes relacionado con eso",
      "Observa lo que estabas ignorando"
    ],
    questions: [
      "¿Estoy comparándome constantemente?",
      "¿Estoy ignorando lo que ya tengo?"
    ],
    help: "La comparación mal dirigida alimenta la insatisfacción.",
    closure: "Hoy equilibraste tu percepción.",
    phrase: "Veo también lo que ya está"
  },
  {
    day: 10,
    title: "Lenguaje y gratitud",
    purpose: "Hacer consciente cómo el lenguaje influye en tu percepción.",
    activity: [
      "Identifica 3 frases que usas frecuentemente",
      "Detecta si son de queja o crítica",
      "Reformula esas frases de forma más consciente",
      "Úsalas durante el día"
    ],
    questions: [
      "¿Cómo influye mi lenguaje en lo que siento?",
      "¿Estoy reforzando lo negativo al expresarme?"
    ],
    help: "El lenguaje refuerza tu forma de interpretar la realidad.",
    closure: "Hoy cuidaste cómo nombras lo que vives.",
    phrase: "Hablo con conciencia"
  },
  {
    day: 11,
    title: "Gratitud en perspectiva",
    purpose: "Tomar distancia para ver tu vida con más claridad.",
    activity: [
      "Imagina tu vida hace 5 años",
      "Escribe cómo era en ese momento",
      "Compárala con tu presente",
      "Identifica cambios concretos"
    ],
    questions: [
      "¿Estoy reconociendo lo que ha cambiado?",
      "¿Estoy ignorando mi progreso?"
    ],
    help: "Sin perspectiva, todo parece insuficiente.",
    closure: "Hoy viste tu proceso con amplitud.",
    phrase: "Reconozco mi proceso"
  },
  {
    day: 12,
    title: "Integración de la gratitud",
    purpose: "Consolidar una nueva forma de percibir la realidad.",
    activity: [
      "Escribe qué cambió en tu forma de ver las cosas",
      "Identifica ejercicios más impactantes",
      "Define cuándo necesitas aplicar esto con intención",
      "Establece cómo lo sostendrás"
    ],
    questions: [
      "¿Estoy viendo mi vida de forma diferente?",
      "¿Qué no quiero volver a ignorar?",
      "¿Qué voy a sostener?"
    ],
    help: "La gratitud es una forma de percepción que se entrena.",
    closure: "Este proceso termina, pero tu forma de ver continúa.",
    phrase: "Elijo ver con mayor conciencia"
  }
]
}