import { Course } from "@/components/course/types";

export const claridadEmocionalYMental : Course = {
    id : "claridad-emocional-y-mental", 
    title : "Claridad Emocional y Mental", 
    section : "adultos", 
    dimension: "emocional", 
    price: 8, 
    description: `<h1>Bienvenido</h1>

La mayoría de las personas no tiene falta de respuestas
tiene exceso de ruido
pensamientos cruzados
emociones mezcladas
dudas constantes
y desde ahí intenta decidir
por eso se confunde
se bloquea
o toma decisiones que luego no sostiene
este proceso no es para pensar más
es para algo más útil:
ordenar lo que sientes
aclarar lo que piensasy decidir desde mayor coherencia interna
<h2> Cómo trabajar este proceso </h2>
No lo hagas solo en la mente
usa las herramientas por escrito o en situaciones reales
<h2>Punto clave</h2>
No puedes tomar buenas decisiones
desde un estado interno desordenado
Primero ordenas
luego decides
`,


days: [
  {
    day: 1,
    title: "Sacar el ruido de la mente",
    purpose: "Vaciar la mente para reducir saturación cognitiva y recuperar claridad inicial.",
    activity: [
      "Escribe todo lo que tienes en la cabeza (pendientes, preocupaciones, ideas, dudas) sin ordenar",
      "Luego clasifica cada elemento en: depende de mí / no depende de mí"
    ],
    questions: [
      "¿Cuánto de lo que pienso realmente puedo controlar?"
    ],
    help: "Una mente saturada no prioriza correctamente. Primero se vacía, luego se ordena.",
    closure: "Hoy dejaste de cargar todo en la cabeza y lo externalizaste.",
    phrase: "Saco lo que tengo"
  },
  {
    day: 2,
    title: "Separar emoción de pensamiento",
    purpose: "Distinguir entre estados emocionales y construcciones mentales.",
    activity: [
      "Elige una situación que te afecte",
      "Escribe por separado: qué siento / qué pienso"
    ],
    questions: [
      "¿Estoy confundiendo lo que siento con lo que pienso?"
    ],
    help: "Mezclar emoción y pensamiento genera confusión y decisiones poco claras.",
    closure: "Hoy comenzaste a diferenciar lo emocional de lo cognitivo.",
    phrase: "Separo lo que siento"
  },
  {
    day: 3,
    title: "Nombrar la emoción real",
    purpose: "Profundizar en la identificación emocional más allá de la superficie.",
    activity: [
      "Identifica la emoción principal",
      "Pregunta si hay una emoción más profunda debajo",
      "Refina hasta llegar a la base emocional"
    ],
    questions: [
      "¿Qué emoción está en la base de lo que siento?"
    ],
    help: "La claridad emocional aparece cuando se deja la etiqueta superficial y se busca la raíz.",
    closure: "Hoy fuiste más preciso con lo que sientes.",
    phrase: "Voy a la raíz"
  },
  {
    day: 4,
    title: "Ordenar pensamientos caóticos",
    purpose: "Estructurar el flujo mental para reducir confusión cognitiva.",
    activity: [
      "Escribe lo que piensas",
      "Organiza en: qué pasó / qué pienso / qué concluyo"
    ],
    questions: [
      "¿Estoy confundiendo hechos con interpretaciones?"
    ],
    help: "El desorden mental surge de pensamientos sin estructura lógica.",
    closure: "Hoy ordenaste lo que antes era confusión.",
    phrase: "Organizo lo que pienso"
  },
  {
    day: 5,
    title: "Detectar distorsión mental",
    purpose: "Cuestionar la validez de los pensamientos automáticos.",
    activity: [
      "Toma un pensamiento fuerte",
      "Evalúa: evidencia real / exageración / suposición"
    ],
    questions: [
      "¿Esto es completamente cierto o parcialmente interpretado?"
    ],
    help: "No todo pensamiento refleja la realidad; sin cuestionamiento se toma como verdad.",
    closure: "Hoy redujiste la distorsión cognitiva.",
    phrase: "Cuestiono lo que pienso"
  },
  {
    day: 6,
    title: "Priorizar lo importante",
    purpose: "Reducir sobrecarga mental mediante jerarquización.",
    activity: [
      "Lista preocupaciones",
      "Selecciona 3 importantes y 1 urgente"
    ],
    questions: [
      "¿Estoy dando el mismo peso a todo lo que pienso?"
    ],
    help: "La falta de claridad muchas veces es falta de priorización.",
    closure: "Hoy simplificaste tu enfoque mental.",
    phrase: "Priorizar mejor"
  },
  {
    day: 7,
    title: "Reducir sobrepensamiento",
    purpose: "Limitar el análisis excesivo para favorecer la acción.",
    activity: [
      "Define una decisión pequeña",
      "Limita el análisis a 10 minutos",
      "Decide con la información disponible"
    ],
    questions: [
      "¿Necesitaba más análisis o más decisión?"
    ],
    help: "Pensar más no siempre mejora la calidad de la decisión.",
    closure: "Hoy evitaste el bucle de análisis excesivo.",
    phrase: "Decido sin alargar"
  },
  {
    day: 8,
    title: "Alinear emoción y pensamiento",
    purpose: "Detectar coherencia interna entre lo emocional y lo cognitivo.",
    activity: [
      "Analiza si emoción y pensamiento están alineados",
      "Identifica cuál domina si hay conflicto"
    ],
    questions: [
      "¿Estoy actuando desde emoción o desde claridad?"
    ],
    help: "La incoherencia entre emoción y pensamiento genera confusión y decisiones inestables.",
    closure: "Hoy detectaste desalineación interna.",
    phrase: "Alineo dentro"
  },
  {
    day: 9,
    title: "Bajar ruido antes de decidir",
    purpose: "Reducir activación mental antes de tomar decisiones.",
    activity: [
      "Respira 2 minutos",
      "Escribe lo que sientes",
      "Escribe lo que piensas",
      "Luego decide"
    ],
    questions: [
      "¿Decido diferente cuando reduzco el ruido interno?"
    ],
    help: "Decidir en estados de ruido mental produce decisiones menos consistentes.",
    closure: "Hoy decidiste con mayor claridad interna.",
    phrase: "Bajo antes de decidir"
  },
  {
    day: 10,
    title: "Primera decisión consciente",
    purpose: "Aplicar un proceso estructurado para decidir con claridad.",
    activity: [
      "Elige una decisión pendiente",
      "Responde: qué quiero / qué me conviene / qué temo / qué pasa si no hago nada",
      "Toma la decisión final"
    ],
    questions: [
      "¿Me siento más claro al decidir de esta forma?"
    ],
    help: "La claridad no elimina el miedo, pero reduce la confusión decisional.",
    closure: "Hoy tomaste una decisión desde orden interno.",
    phrase: "Decido con claridad"
  },
  {
    day: 11,
    title: "Identificar lo que ya sabes",
    purpose: "Reducir confusión reconociendo verdades evitadas.",
    activity: [
      "Elige una situación confusa",
      "Completa: si soy honesto conmigo, ya sé que ______",
      "Escríbelo sin suavizar"
    ],
    questions: [
      "¿Estoy confundido o evitando una verdad?"
    ],
    help: "La falta de claridad muchas veces es evitación de una conclusión incómoda.",
    closure: "Hoy reconociste lo que ya sabías internamente.",
    phrase: "Sé lo que sé"
  },
  {
    day: 12,
    title: "Diferenciar deseo vs conveniencia",
    purpose: "Separar impulso emocional de criterio racional.",
    activity: [
      "Escribe qué quieres",
      "Escribe qué te conviene",
      "Compara ambas respuestas"
    ],
    questions: [
      "¿Estoy decidiendo por impulso o por coherencia?"
    ],
    help: "Confundir deseo con conveniencia debilita la calidad de decisión.",
    closure: "Hoy separaste impulso de criterio.",
    phrase: "Veo ambas partes"
  },
  {
    day: 13,
    title: "Detectar miedo disfrazado de duda",
    purpose: "Identificar el miedo detrás de la indecisión.",
    activity: [
      "Cuando dudes, pregunta: si esto es miedo, ¿miedo a qué?",
      "Especifica el miedo concreto"
    ],
    questions: [
      "¿Qué miedo está detrás de mi duda?"
    ],
    help: "Muchas dudas son miedo no reconocido.",
    closure: "Hoy pusiste nombre al miedo subyacente.",
    phrase: "Veo el miedo"
  },
  {
    day: 14,
    title: "Reducir escenarios mentales",
    purpose: "Disminuir sobreanálisis de futuros posibles.",
    activity: [
      "Lista todos los escenarios que imaginas",
      "Quédate solo con: el más probable y el peor realista"
    ],
    questions: [
      "¿Estaba generando escenarios innecesarios?"
    ],
    help: "El exceso de escenarios produce parálisis decisional.",
    closure: "Hoy simplificaste tu estructura mental.",
    phrase: "Reduzco el ruido"
  },
  {
    day: 15,
    title: "Tomar decisión incómoda",
    purpose: "Actuar con claridad incluso en presencia de incomodidad.",
    activity: [
      "Elige una decisión evitada",
      "Acepta la incomodidad",
      "Decide igualmente"
    ],
    questions: [
      "¿Estoy esperando sentirme listo para decidir?"
    ],
    help: "La claridad no elimina la incomodidad, la hace manejable.",
    closure: "Hoy decidiste sin esperar condiciones ideales.",
    phrase: "Decido igual"
  },
  {
    day: 16,
    title: "Cerrar decisiones pendientes",
    purpose: "Reducir carga mental por decisiones abiertas.",
    activity: [
      "Lista decisiones pendientes",
      "Elige una y ciérrala (sí o no)"
    ],
    questions: [
      "¿Cuánta energía mental consume no decidir?"
    ],
    help: "Las decisiones abiertas generan ruido cognitivo constante.",
    closure: "Hoy liberaste espacio mental.",
    phrase: "Cierro lo pendiente"
  },
  {
    day: 17,
    title: "Sostener la decisión tomada",
    purpose: "Evitar la reactivación constante de decisiones ya tomadas.",
    activity: [
      "Después de decidir, evita reanalizar continuamente",
      "Recuerda: ya está decidido"
    ],
    questions: [
      "¿Tengo tendencia a reabrir mentalmente decisiones?"
    ],
    help: "Reanalizar decisiones debilita la estabilidad interna.",
    closure: "Hoy fortaleciste tu decisión.",
    phrase: "No lo reabro"
  },
  {
    day: 18,
    title: "Actuar en coherencia",
    purpose: "Alinear acción con decisión previa.",
    activity: [
      "Toma una decisión previa",
      "Realiza una acción concreta coherente con ella"
    ],
    questions: [
      "¿Estoy actuando según lo que decidí?"
    ],
    help: "La claridad sin acción no produce cambio real.",
    closure: "Hoy conectaste decisión con acción.",
    phrase: "Actúo en coherencia"
  },
  {
    day: 19,
    title: "Evaluar sin sobrepensar",
    purpose: "Revisar decisiones de forma objetiva y sin juicio excesivo.",
    activity: [
      "Evalúa: qué funcionó / qué no / qué ajustar"
    ],
    questions: [
      "¿Puedo evaluar sin castigarme?"
    ],
    help: "Evaluar es ajustar, no rumiar.",
    closure: "Hoy revisaste con objetividad.",
    phrase: "Ajusto sin juzgar"
  },
  {
    day: 20,
    title: "Orden interno real",
    purpose: "Integrar el proceso de toma de decisiones claras y coherentes.",
    activity: [
      "Responde: cómo decido ahora, qué hago diferente, qué ya no hago",
      "Completa: cuando necesito claridad, ahora ______"
    ],
    questions: [
      "¿Qué cambió en mi forma de decidir?"
    ],
    help: "La claridad no elimina la complejidad, pero permite actuar dentro de ella.",
    closure: "Hoy consolidaste un nuevo orden interno.",
    phrase: "Tengo claridad interna"
  }
]


}