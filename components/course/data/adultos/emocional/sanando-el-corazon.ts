import { Course } from "@/components/course/types";

export const sanandoElCorazon: Course = {
    id: "sanando-el-corazon",
    title: "Sanando el corazón",
    section: "adultos",
    dimension: "emocional",
    price: 0, // luego será pago
    description: `<h1> <strong>Bienvenida al proceso Sanando el corazón, duelo por una ruptura amorosa</strong></h1>
Bienvenido a este espacio
Hay una diferencia entre estar solo y sentir la ausencia de alguien.
Lo que estás viviendo no es solo el final de una relación. Es el desorden que queda cuando algo que ocupaba espacio en tu vida ya no está.
No todo lo que duele es la persona. A veces duele la costumbre, la rutina, lo que compartían, lo que esperabas que pasara.
Y por eso no se resuelve solo con “seguir adelante”.
Este proceso no es para distraerte. Es para que entiendas qué estás sintiendo y dejes de quedarte atrapado en eso.
No necesitas estar bien hoy. Pero sí necesitas empezar a procesar lo que pasó.
Cómo trabajar este proceso
No intentes sentirte mejor.
Intenta ser honesto con lo que sientes.
Haz cada día sin adelantarte.
Punto clave
Evitar el dolor lo alarga. Atravesarlo lo transforma.`,
    days: [
  {
    day: 1,
    title: "Aceptar que terminó",
    purpose: "Dejar de negar o resistir el final de la relación.",
    activity: [
      "Escribe lo que pasó, sin explicaciones largas: solo qué terminó",
      "Luego escribe: sí, esto terminó"
    ],
    questions: ["¿Estoy aceptando o esperando que cambie?"],
    help: "Mientras no aceptas el final, sigues atado a la expectativa.",
    closure: "Hoy dejaste de pelear con lo que ya pasó.",
    phrase: "Acepto que esto terminó"
  },
  {
    day: 2,
    title: "Permitir sentir",
    purpose: "Dejar de bloquear o evitar las emociones.",
    activity: [
      "Durante el día, cuando sientas algo, no lo distraigas ni lo expliques, solo obsérvalo",
      "Al final del día escribe qué sentiste"
    ],
    questions: ["¿Qué estoy evitando sentir?"],
    help: "Lo que no se siente, se queda.",
    closure: "Hoy empezaste a permitir lo que está.",
    phrase: "Siento sin evitar"
  },
  {
    day: 3,
    title: "Nombrar el dolor",
    purpose: "Entender qué es lo que realmente te duele.",
    activity: [
      "Escribe todo lo que sientes que perdiste con la ruptura",
      "Incluye rutinas, planes y sensaciones"
    ],
    questions: ["¿Qué es lo que más me duele realmente?"],
    help: "El dolor es más claro cuando lo nombras.",
    closure: "Hoy entendiste mejor lo que estás procesando.",
    phrase: "Entiendo lo que duele"
  },
  {
    day: 4,
    title: "La ausencia",
    purpose: "Reconocer cómo se manifiesta la ausencia en tu día a día.",
    activity: [
      "Identifica momentos del día donde más sientes la ausencia y escríbelos",
      "Observa qué haces en esos momentos"
    ],
    questions: ["¿En qué momentos me pesa más la ausencia?"],
    help: "La ausencia no es constante, tiene momentos específicos.",
    closure: "Hoy hiciste visible cuándo más te afecta.",
    phrase: "Reconozco la ausencia"
  },
  {
    day: 5,
    title: "Lo que extrañas",
    purpose: "Diferenciar entre la persona y lo que representaba.",
    activity: [
      "Haz dos listas: lo que extrañas de la persona y lo que extrañas de la relación",
      "Obsérvalas con atención"
    ],
    questions: ["¿Extraño a la persona o lo que sentía con ella?"],
    help: "Muchas veces no extrañas a alguien, extrañas cómo te sentías.",
    closure: "Hoy empezaste a separar emoción de realidad.",
    phrase: "Distingo lo que extraño"
  },
  {
    day: 6,
    title: "Idealización",
    purpose: "Romper la visión parcial que te mantiene enganchado.",
    activity: [
      "Escribe lo bueno de la relación y también lo que no funcionaba, sin suavizar"
    ],
    questions: ["¿Estoy viendo la relación completa o solo lo que extraño?"],
    help: "Idealizar mantiene el apego.",
    closure: "Hoy empezaste a ver con más equilibrio.",
    phrase: "Veo la realidad"
  },
  {
    day: 7,
    title: "Lo que no era para ti",
    purpose: "Reconocer lo que no estaba alineado contigo.",
    activity: [
      "Escribe todo lo que en esa relación no te hacía bien: actitudes, situaciones y dinámicas"
    ],
    questions: ["¿Qué estaba tolerando?", "¿Qué no quiero repetir?"],
    help: "Recordar lo que no funcionaba te ayuda a soltar.",
    closure: "Hoy te alejaste de la idealización.",
    phrase: "Reconozco lo que no era"
  },
  {
    day: 8,
    title: "Realidad emocional",
    purpose: "Aceptar lo que sientes sin quedarte atrapado ahí.",
    activity: [
      "Cuando aparezca la emoción, nómbrala, siéntela y continúa con lo que estabas haciendo"
    ],
    questions: ["¿Me quedo en la emoción o sigo avanzando?"],
    help: "Sentir no significa detener tu vida.",
    closure: "Hoy empezaste a integrar lo que sientes con tu vida diaria.",
    phrase: "Siento y sigo"
  },
  {
    day: 9,
    title: "Ciclo mental",
    purpose: "Identificar pensamientos repetitivos que te enganchan.",
    activity: [
      "Durante el día, registra qué piensas cuando aparece la persona y qué lo activó"
    ],
    questions: ["¿Qué pensamiento no dejo de repetir?", "¿Esto me ayuda o me mantiene ahí?"],
    help: "No es la situación, es lo que repites sobre ella.",
    closure: "Hoy hiciste visible el ciclo mental.",
    phrase: "Reconozco lo que repito"
  },
  {
    day: 10,
    title: "Cortar el enganche",
    purpose: "Dejar de alimentar pensamientos que te mantienen en el pasado.",
    activity: [
      "Cuando aparezca el pensamiento repetitivo, identifícalo y vuelve a lo que estás haciendo"
    ],
    questions: ["¿Alimento el pensamiento o lo dejo pasar?"],
    help: "Pensar más no te acerca a una respuesta.",
    closure: "Hoy empezaste a soltar desde la mente.",
    phrase: "No lo sigo"
  },
  {
    day: 11,
    title: "Desapego progresivo",
    purpose: "Reducir la dependencia emocional poco a poco.",
    activity: [
      "Identifica algo que te conecta con esa persona y reduce o elimina su uso hoy"
    ],
    questions: ["¿Qué sigo haciendo que me mantiene ahí?"],
    help: "No puedes soltar si sigues alimentando el vínculo.",
    closure: "Hoy empezaste a cortar el apego en acciones.",
    phrase: "Me desapego"
  },
  {
    day: 12,
    title: "Vacío",
    purpose: "Reconocer el espacio que dejó la relación sin llenarlo de inmediato.",
    activity: [
      "Identifica momentos de vacío y obsérvalos sin llenarlos automáticamente"
    ],
    questions: ["¿De qué huyo cuando siento vacío?"],
    help: "El vacío es el espacio donde puedes reconstruir.",
    closure: "Hoy dejaste de escapar del vacío.",
    phrase: "Puedo estar conmigo"
  },
  {
    day: 13,
    title: "Volver a ti",
    purpose: "Recuperar tu atención y energía.",
    activity: [
      "Haz algo solo para ti, sin relación con la otra persona ni comparación"
    ],
    questions: ["¿Cuándo fue la última vez que hice algo solo para mí?"],
    help: "No solo se trata de soltar, también de reconstruirte.",
    closure: "Hoy empezaste a volver a ti.",
    phrase: "Vuelvo a mí"
  },
  {
    day: 14,
    title: "Nueva referencia",
    purpose: "Dejar de usar la relación pasada como comparación.",
    activity: [
      "Identifica cuándo comparas y detén ese pensamiento para volver al presente"
    ],
    questions: ["¿Estoy viviendo o comparando?"],
    help: "Comparar te mantiene en el pasado.",
    closure: "Hoy empezaste a soltar la referencia anterior.",
    phrase: "Vivo mi presente"
  },
  {
    day: 15,
    title: "Aprendizaje",
    purpose: "Extraer lo que te deja la experiencia sin quedarte en el dolor.",
    activity: [
      "Escribe qué aprendiste de la relación, de ti y qué harías diferente"
    ],
    questions: ["¿Qué me dejó esto que no quiero perder?"],
    help: "El aprendizaje transforma el dolor en crecimiento.",
    closure: "Hoy convertiste parte del dolor en claridad.",
    phrase: "Aprendo de lo vivido"
  },
  {
    day: 16,
    title: "Cierre",
    purpose: "Cerrar el proceso sin depender de la otra persona.",
    activity: [
      "Escribe qué dejas atrás, qué sueltas y qué eliges para ti desde ahora"
    ],
    questions: ["¿Estoy listo para soltar o sigo esperando algo?", "¿Qué decido hoy para mí?"],
    help: "Cerrar no es olvidar, es dejar de sostener.",
    closure: "Este proceso no borra lo que viviste, pero evita que te quedes atrapado.",
    phrase: "Suelto y continúo"
  }
]
        
}