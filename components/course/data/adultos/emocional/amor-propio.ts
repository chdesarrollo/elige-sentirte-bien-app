import { Course } from "@/components/course/types"; 

export const amorPropio: Course = {
    id: "amor-propio",
    title: "Amor propio",
    section: "adultos",
    dimension: "emocional",
    price: 7, // luego será pago
    description: `<h1> <strong>Bienvenida al proceso Amor propio</strong></h1>
Este proceso no es para sentirte bien contigo por momentos. Es para cambiar la 
forma en que te relacionas contigo misma.
El amor propio no es lo que dices de ti, es cómo te tratas en lo cotidiano.
Muchas personas creen que se quieren, pero se exigen en exceso, se hablan 
mal, se abandonan o se ponen en último lugar.
Este proceso está diseñado para que puedas ver eso con claridad y empezar a 
transformarlo.
Vas a observarte, confrontarte, decidir y actuar distinto contigo.
No se trata de pensar bonito. Se trata de tratarte mejor de forma real.
<h2><strong>¿De qué se trata este proceso?</strong></h2>
Es un proceso práctico donde identificas cómo es tu relación contigo misma, 
reconoces tus patrones de autoabandono y empiezas a construir una forma más 
consciente de tratarte.
Aquí el objetivo no es sentirte mejor por un momento. Es dejar de relacionarte 
contigo desde la exigencia, la culpa o el descuido.
<h2><strong>¿Para quién es este proceso?</strong></h2>
Para quien se exige demasiado.
Para quien se pone en último lugar.
Para quien siente que podría tratarse mejor, pero no sabe cómo hacerlo en la 
práctica.

<h2><strong>¿Cómo se va a vivir el proceso?</strong></h2>
Día a día, observando y actuando distinto contigo.
No es lo que escribes, es cómo empiezas a tratarte.
Compromiso consciente
Si haces este proceso, hazlo con honestidad.
No para verte bien, sino para verte de verdad`,
    days: [
    {
      day: 1,
      title: "Relación contigo misma",
      purpose: "Hacer consciente cómo es realmente tu relación contigo, más allá de lo que crees",
      activity: [
        "Escribe cómo dirías que es tu relación contigo misma",
        "Describe cómo te tratas en un día normal (pensamientos, decisiones y prioridades)",
        "Compara ambas descripciones",
        "Identifica si hay coherencia o contradicción"
      ],
      questions: [
        "¿Me trato como digo que me trato?",
        "¿Hay diferencia entre lo que pienso de mí y cómo actúo conmigo?",
        "¿Estoy siendo honesta o idealizando?"
      ],
      help: "El amor propio no se define por lo que crees, sino por cómo actúas contigo",
      closure: "Hoy empezaste a ver tu relación contigo con más claridad",
      phrase: "Me observo con honestidad"
    },
    {
      day: 2,
      title: "Diálogo interno",
      purpose: "Identificar cómo te hablas a ti misma en lo cotidiano",
      activity: [
        "Durante el día observa tus pensamientos hacia ti",
        "Registra frases exactas que te dices, especialmente en error o exigencia",
        "Escribe al final del día esos pensamientos sin filtro",
        "Identifica el tono (crítico, exigente, descalificador, indiferente o respetuoso)"
      ],
      questions: [
        "¿Me hablo con respeto o con juicio?",
        "¿Me digo cosas que no le diría a alguien más?",
        "¿Qué tipo de voz predomina en mí?"
      ],
      help: "La forma en que te hablas influye directamente en cómo te sientes y actúas",
      closure: "Hoy hiciste visible tu diálogo interno",
      phrase: "Escucho cómo me hablo"
    },
    {
      day: 3,
      title: "Exigencia interna",
      purpose: "Reconocer el nivel de exigencia con el que te relacionas contigo",
      activity: [
        "Identifica tres situaciones recientes donde te exigiste",
        "Escribe qué esperabas de ti en cada una",
        "Describe cómo te sentiste al no cumplirlo",
        "Evalúa si era una exigencia realista o excesiva"
      ],
      questions: [
        "¿Mi exigencia me impulsa o me desgasta?",
        "¿Estoy esperando de mí más de lo que puedo sostener?",
        "¿Qué pasa conmigo cuando no cumplo?"
      ],
      help: "La exigencia mal gestionada desgasta la relación contigo",
      closure: "Hoy viste cómo te presionas",
      phrase: "Reconozco mi nivel de exigencia"
    },
    {
      day: 4,
      title: "Autoabandono",
      purpose: "Identificar cuándo te dejas en segundo lugar",
      activity: [
        "Identifica tres situaciones donde priorizaste a otros sobre ti",
        "Describe qué necesitabas en ese momento",
        "Explica por qué no te diste ese espacio",
        "Reconoce el patrón detrás de esa decisión"
      ],
      questions: [
        "¿En qué momentos me dejo para después?",
        "¿Qué me digo para justificarlo?",
        "¿Qué costo tiene para mí hacerlo?"
      ],
      help: "El amor propio también es lo que dejas de postergar de ti",
      closure: "Hoy viste cómo te abandonas en lo cotidiano",
      phrase: "Reconozco cuando me dejo de lado"
    },
    {
      day: 5,
      title: "Coherencia contigo",
      purpose: "Identificar la distancia entre lo que necesitas y lo que haces",
      activity: [
        "Escribe tres necesidades actuales",
        "Describe qué haces normalmente en su lugar",
        "Compara ambas respuestas",
        "Define una acción concreta para atender una necesidad hoy",
        "Ejecútala"
      ],
      questions: [
        "¿Estoy escuchando lo que necesito o ignorándolo?",
        "¿Qué me impide actuar a favor mío?",
        "¿Qué cambia cuando sí lo hago?"
      ],
      help: "El amor propio empieza cuando respondes a lo que necesitas",
      closure: "Hoy actuaste a favor tuyo",
      phrase: "Actúo en coherencia conmigo"
    },
    {
      day: 6,
      title: "Patrón de autoabandono",
      purpose: "Identificar cómo se repite tu forma de dejarte en segundo lugar",
      activity: [
        "Revisa situaciones de los días anteriores",
        "Describe la secuencia: situación → pensamiento → decisión → acción → resultado",
        "Hazlo con dos ejemplos",
        "Identifica el punto donde te abandonas",
        "Nombra el patrón"
      ],
      questions: [
        "¿En qué momento me dejo de elegir?",
        "¿Es automático o consciente?",
        "¿Qué me digo para hacerlo?"
      ],
      help: "No es casualidad, es un patrón repetido",
      closure: "Hoy entendiste cómo ocurre tu autoabandono",
      phrase: "Reconozco mi patrón"
    },
    {
      day: 7,
      title: "Justificación interna",
      purpose: "Hacer consciente el discurso que sostiene tu autoabandono",
      activity: [
        "Identifica frases que usas para no priorizarte",
        "Escríbelas textualmente",
        "Clasifícalas como excusas, creencias o hábitos",
        "Analiza su efecto en ti"
      ],
      questions: [
        "¿Qué me digo para no elegirme?",
        "¿Es verdad o evitación?",
        "¿Qué pasaría si no me lo dijera?"
      ],
      help: "Lo que te dices define cómo te tratas",
      closure: "Hoy viste tu discurso interno",
      phrase: "Cuestiono lo que me digo"
    },
    {
      day: 8,
      title: "Punto de decisión",
      purpose: "Identificar el momento donde puedes actuar distinto contigo",
      activity: [
        "Toma tu patrón identificado",
        "Identifica el punto de decisión",
        "Define qué harías diferente",
        "Escríbelo de forma ejecutable"
      ],
      questions: [
        "¿Dónde puedo decidir distinto?",
        "¿Estoy viendo ese momento claramente?"
      ],
      help: "El cambio ocurre en el punto de decisión",
      closure: "Hoy identificaste dónde intervenir",
      phrase: "Reconozco el momento de decidir"
    },
    {
      day: 9,
      title: "Primera acción consciente",
      purpose: "Actuar a tu favor en una situación real",
      activity: [
        "Identifica una situación donde te abandonarías",
        "Detecta el punto de decisión",
        "Actúa diferente priorizándote",
        "Registra qué ocurrió"
      ],
      questions: [
        "¿Qué sentí al elegirme?",
        "¿Qué cambió en el resultado?",
        "¿Qué apareció en mí?"
      ],
      help: "El amor propio se construye con acción, no intención",
      closure: "Hoy te elegiste en una situación real",
      phrase: "Me elijo en la acción"
    },
    {
      day: 10,
      title: "Incomodidad del cambio",
      purpose: "Reconocer emociones al empezar a priorizarte",
      activity: [
        "Revisa la experiencia del día anterior",
        "Identifica emociones que aparecieron",
        "Describe cuándo surgieron",
        "Analiza tu reacción"
      ],
      questions: [
        "¿Qué me incomoda de elegirme?",
        "¿Esa emoción justifica abandonarme?",
        "¿Qué evito al no priorizarme?"
      ],
      help: "El cambio suele generar incomodidad",
      closure: "Hoy entendiste la incomodidad del cambio",
      phrase: "Tolero la incomodidad de elegirme"
    },
    {
      day: 11,
      title: "Reafirmación de elección",
      purpose: "Sostener la decisión de priorizarte",
      activity: [
        "Identifica una situación para elegirte",
        "Anticipa pensamientos o emociones",
        "Define cómo actuarás",
        "Ejecútalo",
        "Registra el resultado"
      ],
      questions: [
        "¿Estoy sosteniendo mi decisión?",
        "¿Qué me ayuda a mantenerme firme?"
      ],
      help: "El cambio se sostiene con repetición",
      closure: "Hoy reforzaste tu elección",
      phrase: "Sostengo elegirme"
    },
    {
      day: 12,
      title: "Límites contigo y otros",
      purpose: "Reconocer cómo la falta de límites afecta tu relación contigo",
      activity: [
        "Identifica tres situaciones sin límites",
        "Describe lo que necesitabas hacer",
        "Explica por qué no lo hiciste",
        "Identifica el patrón"
      ],
      questions: [
        "¿Qué pierdo al no poner límites?",
        "¿A quién priorizo cuando no me respeto?"
      ],
      help: "No poner límites también es no respetarte",
      closure: "Hoy viste cómo te dejas de lado",
      phrase: "Reconozco donde no me respeto"
    },
    {
      day: 13,
      title: "Decisión de respetarte",
      purpose: "Tomar la decisión consciente de priorizarte",
      activity: [
        "Elige una situación donde necesitas un límite",
        "Define qué dirás o harás",
        "Escríbelo claramente",
        "Comprométete a ejecutarlo"
      ],
      questions: [
        "¿Qué me impide respetarme?",
        "¿Qué voy a cambiar desde hoy?"
      ],
      help: "El respeto propio es una decisión activa",
      closure: "Hoy decidiste tratarte distinto",
      phrase: "Decido respetarme"
    },
    {
      day: 14,
      title: "Acción con límite",
      purpose: "Ejecutar un límite real como amor propio",
      activity: [
        "Aplica el límite definido",
        "Hazlo sin excesiva justificación",
        "Observa emociones",
        "Registra lo ocurrido"
      ],
      questions: [
        "¿Qué sentí al poner el límite?",
        "¿Qué cambió después?"
      ],
      help: "Poner límites es dejar de abandonarte",
      closure: "Hoy te respetaste en acción",
      phrase: "Me respeto en la acción"
    },
    {
      day: 15,
      title: "Culpa y autoafirmación",
      purpose: "Gestionar la culpa al priorizarte",
      activity: [
        "Identifica si apareció culpa",
        "Escribe lo que te dijiste",
        "Cuestiona su origen",
        "Define una respuesta firme"
      ],
      questions: [
        "¿Por qué me siento culpable al elegirme?",
        "¿Es egoísmo o autocuidado?"
      ],
      help: "La culpa puede aparecer al cambiar patrones",
      closure: "Hoy empiezas a soltar la culpa",
      phrase: "No me culpo por elegirme"
    },
    {
      day: 16,
      title: "Coherencia sostenida",
      purpose: "Alinear pensamiento, emoción y acción contigo",
      activity: [
        "Identifica coherencia e incoherencia recientes",
        "Compáralas",
        "Define qué necesitas para sostener coherencia"
      ],
      questions: [
        "¿Cuándo actúo en coherencia conmigo?",
        "¿Qué la rompe?"
      ],
      help: "El amor propio es consistencia en acción",
      closure: "Hoy entiendes tu coherencia",
      phrase: "Actúo en coherencia conmigo"
    },
    {
      day: 17,
      title: "Nueva forma de relación contigo",
      purpose: "Reconocer el cambio en cómo te tratas",
      activity: [
        "Describe cómo te tratabas antes",
        "Describe cómo te tratas ahora",
        "Identifica cambios concretos",
        "Define lo que no repetirás"
      ],
      questions: [
        "¿Qué cambió en mí?",
        "¿Qué ya no permito?"
      ],
      help: "El cambio se consolida al hacerlo consciente",
      closure: "Hoy te ves diferente",
      phrase: "Me trato distinto"
    },
    {
      day: 18,
      title: "Integración e identidad",
      purpose: "Cerrar el proceso integrando amor propio como identidad",
      activity: [
        "Define quién eres ahora contigo",
        "Escribe tres compromisos",
        "Define qué harás si vuelves al patrón anterior",
        "Establece continuidad"
      ],
      questions: [
        "¿Quién soy ahora conmigo?",
        "¿Qué voy a sostener?",
        "¿Qué no repito?"
      ],
      help: "El amor propio es una práctica continua",
      closure: "Este proceso termina, pero tu relación contigo continúa",
      phrase: "Me elijo y me sostengo"
    }
  ]
};