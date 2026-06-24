
import { Course } from "@/components/course/types";

export const alcanzaTusMetas: Course = {
  id: "alcanza-tus-metas",
  title: "Alcanza tus metas",
  section: "adultos",
  dimension: "emocional",
  price: 3,
  description:
    "Proceso práctico de 28 días para transformar metas en ejecución sostenida, desarrollar disciplina operativa, reducir procrastinación y construir una identidad basada en acción consistente.",

  days: [
    {
      day: 1,
      title: "Definición de meta",
      purpose: "Elegir una meta concreta que será el foco del proceso.",
      activity: [
        "Escribe tres metas que quieres lograr actualmente",
        "Define si depende de ti o de factores externos",
        "Descarta las que no dependan de tu acción directa",
        "Elige solo una",
        "Escríbela de forma concreta evitando ambigüedad"
      ],
      questions: [
        "¿Estoy eligiendo algo que realmente puedo ejecutar?",
        "¿Es una meta clara o una intención general?",
        "¿Estoy priorizando lo importante o lo fácil?"
      ],
      help:
        "La falta de enfoque es una de las principales razones por las que no logras resultados.",
      closure: "Hoy definiste un foco real.",
      phrase: "Tengo una meta clara"
    },

    {
      day: 2,
      title: "Concreción de resultado",
      purpose: "Definir con precisión cómo se verá la meta lograda.",
      activity: [
        "Describe cómo se ve la meta cumplida",
        "Define qué significa exactamente 'lograrlo'",
        "Establece una fecha límite realista",
        "Define un resultado medible y verificable"
      ],
      questions: [
        "¿Cómo sabré con certeza que lo logré?",
        "¿Estoy siendo específico o sigo en lo general?",
        "¿La meta tiene un resultado observable?"
      ],
      help:
        "Lo que no es claro no se ejecuta con precisión.",
      closure: "Hoy hiciste tu meta tangible.",
      phrase: "Mi meta es concreta"
    },

    {
      day: 3,
      title: "Desglose en acciones",
      purpose: "Convertir la meta en acciones ejecutables.",
      activity: [
        "Escribe todas las acciones necesarias",
        "Ordénalas en secuencia lógica",
        "Divide acciones grandes en pasos pequeños",
        "Identifica la primera acción ejecutable"
      ],
      questions: [
        "¿Sé exactamente qué tengo que hacer?",
        "¿Estoy simplificando lo suficiente para empezar?"
      ],
      help:
        "Las metas se logran en pequeños pasos, no en grandes saltos.",
      closure: "Hoy tu meta se volvió ejecutable.",
      phrase: "Sé por dónde empezar"
    },

    {
      day: 4,
      title: "Inicio de ejecución",
      purpose: "Dar el primer paso real hacia la meta.",
      activity: [
        "Ejecuta la primera acción definida",
        "Escribe pensamientos y emociones antes de empezar",
        "Ejecuta sin buscar perfección",
        "Registra tiempo y dificultades",
        "Identifica momentos de duda"
      ],
      questions: [
        "¿Qué pasó antes de empezar?",
        "¿Qué me detenía?",
        "¿Qué ocurrió al hacerlo?"
      ],
      help: "El mayor obstáculo es empezar.",
      closure: "Hoy pasaste de intención a acción.",
      phrase: "Empiezo aunque no sea perfecto"
    },

    {
      day: 5,
      title: "Patrón de ejecución",
      purpose: "Identificar cómo te comportas al ejecutar.",
      activity: [
        "Revisa lo hecho el día anterior",
        "Describe el proceso completo",
        "Identifica resistencia",
        "Describe tu reacción",
        "Nombra el patrón"
      ],
      questions: [
        "¿Qué hago antes de no avanzar?",
        "¿Cómo me justifico?",
        "¿Se repite en otras áreas?"
      ],
      help:
        "No es falta de capacidad, es repetición de patrones.",
      closure: "Empiezas a entender cómo ejecutas.",
      phrase: "Reconozco cómo ejecuto"
    },

    {
      day: 6,
      title: "Descomposición del patrón",
      purpose: "Entender la secuencia del comportamiento.",
      activity: [
        "Define secuencia situación → pensamiento → emoción → acción → resultado",
        "Usa un caso real",
        "Identifica punto de quiebre",
        "Detecta inicio de desviación"
      ],
      questions: [
        "¿Dónde pierdo el control?",
        "¿Qué pensamiento activa el patrón?",
        "¿Actúo o reacciono?"
      ],
      help:
        "Repites secuencias, no resultados.",
      closure: "Entiendes tu patrón.",
      phrase: "Entiendo cómo funciono"
    },

    {
      day: 7,
      title: "Punto de intervención",
      purpose: "Definir dónde cambiar el patrón.",
      activity: [
        "Identifica punto de intervención",
        "Define acción alternativa",
        "Hazla ejecutable"
      ],
      questions: [
        "¿Estoy interviniendo temprano?",
        "¿Es concreto?"
      ],
      help:
        "Intervenir temprano reduce esfuerzo de cambio.",
      closure: "Defines dónde cambiar.",
      phrase: "Sé dónde intervenir"
    },

    {
      day: 8,
      title: "Ejecución con intervención",
      purpose: "Aplicar cambio en situación real.",
      activity: [
        "Detecta patrón en el día",
        "Aplica intervención",
        "Registra resultado"
      ],
      questions: [
        "¿Intervine a tiempo?",
        "¿Qué cambió?"
      ],
      help:
        "El cambio se valida en la ejecución.",
      closure: "Actuaste distinto.",
      phrase: "Intervengo en el momento"
    },

    {
      day: 9,
      title: "Análisis de ejecución",
      purpose: "Evaluar intervención.",
      activity: [
        "Describe situación",
        "Detecta cambios",
        "Identifica recaídas",
        "Ajusta intervención"
      ],
      questions: [
        "¿Qué fue difícil?",
        "¿Qué mejorar?"
      ],
      help:
        "Mejorar es más importante que hacerlo perfecto.",
      closure: "Transformas experiencia en aprendizaje.",
      phrase: "Ajusto mi ejecución"
    },

    {
      day: 10,
      title: "Repetición estratégica",
      purpose: "Reforzar nueva conducta.",
      activity: [
        "Repite intervención",
        "Aplica en otra situación",
        "Registra resultado"
      ],
      questions: [
        "¿Fue más fácil?",
        "¿Qué cambió?"
      ],
      help:
        "Repetición crea automatización.",
      closure: "Consolidas cambio.",
      phrase: "Repito lo que me funciona"
    },

    {
      day: 11,
      title: "Resistencia interna",
      purpose: "Identificar resistencia al cambio.",
      activity: [
        "Detecta momentos de evitación",
        "Registra pensamientos",
        "Identifica justificaciones"
      ],
      questions: [
        "¿Qué evito?",
        "¿Por qué?"
      ],
      help:
        "La resistencia es incomodidad, no incapacidad.",
      closure: "Entiendes tu resistencia.",
      phrase: "Reconozco mi resistencia"
    },

    {
      day: 12,
      title: "Mapa de resistencia",
      purpose: "Clasificar resistencia.",
      activity: [
        "Identifica patrones",
        "Agrupa excusas",
        "Detecta frecuencia"
      ],
      questions: [
        "¿Qué excusa repito?",
        "¿Cuándo aparece?"
      ],
      help:
        "La resistencia tiene estructura.",
      closure: "Clarificas tu resistencia.",
      phrase: "Identifico cómo me resisto"
    },

    {
      day: 13,
      title: "Respuesta a la resistencia",
      purpose: "Diseñar respuestas al bloqueo.",
      activity: [
        "Define respuesta a excusas",
        "Crea acción mínima obligatoria"
      ],
      questions: [
        "¿Qué hago sin ganas?"
      ],
      help:
        "No eliminas resistencia, la gestionas.",
      closure: "Te preparas para actuar.",
      phrase: "Tengo respuesta para mi resistencia"
    },

    {
      day: 14,
      title: "Acción mínima sostenida",
      purpose: "Garantizar continuidad.",
      activity: [
        "Define acción mínima diaria",
        "Ejecuta sin negociación"
      ],
      questions: [
        "¿Es sostenible?"
      ],
      help:
        "La acción mínima elimina excusas.",
      closure: "No detienes el proceso.",
      phrase: "Avanzo incluso en pequeño"
    },

    {
      day: 15,
      title: "Disciplina operativa",
      purpose: "Actuar sin depender de emoción.",
      activity: [
        "Ejecuta acción mínima",
        "Observa emociones",
        "Registra cambios"
      ],
      questions: [
        "¿Dependí de emociones?",
        "¿Qué pasó con energía?"
      ],
      help:
        "La acción regula el estado emocional.",
      closure: "Actúas independientemente del estado.",
      phrase: "Actúo aunque no tenga ganas"
    },

    {
      day: 16,
      title: "Consistencia consciente",
      purpose: "Construir estabilidad.",
      activity: [
        "Revisa cumplimiento",
        "Analiza patrones",
        "Ajusta acción mínima"
      ],
      questions: [
        "¿Qué me hace constante?"
      ],
      help:
        "Consistencia es no detenerse.",
      closure: "Construyes estabilidad.",
      phrase: "Soy constante en mi acción"
    },

    {
      day: 17,
      title: "Medición de avance",
      purpose: "Conectar acción y resultado.",
      activity: [
        "Evalúa progreso",
        "Identifica impacto real"
      ],
      questions: [
        "¿Estoy avanzando o solo ocupado?"
      ],
      help:
        "Sin medición hay ilusión de progreso.",
      closure: "Conectas acción y resultado.",
      phrase: "Mido mi avance"
    },

    {
      day: 18,
      title: "Ajuste estratégico",
      purpose: "Corregir sin detener.",
      activity: [
        "Identifica fallas",
        "Ajusta acciones"
      ],
      questions: [
        "¿Qué cambiar?"
      ],
      help:
        "Ajustar es mejorar, no fallar.",
      closure: "Optimizas ejecución.",
      phrase: "Corrijo y continúo"
    },

    {
      day: 19,
      title: "Profundidad en acción",
      purpose: "Mejorar calidad de ejecución.",
      activity: [
        "Selecciona acción clave",
        "Ejecútala con mayor atención"
      ],
        questions: [
        "¿Hago lo suficiente?"
      ],
      help:
        "Calidad importa más que cantidad.",
      closure: "Elevas ejecución.",
      phrase: "Hago mejor lo que ya hago"
    },

    {
      day: 20,
      title: "Gestión del tiempo",
      purpose: "Analizar uso del tiempo.",
      activity: [
        "Registra tiempo",
        "Detecta fugas",
        "Ajusta agenda"
      ],
      questions: [
        "¿Mi tiempo refleja mi prioridad?"
      ],
      help:
        "El problema es dirección del tiempo.",
      closure: "Haces visible tu tiempo.",
      phrase: "Dirijo mi tiempo"
    },

    {
      day: 21,
      title: "Energía y ejecución",
      purpose: "Alinear energía con trabajo.",
      activity: [
        "Identifica picos de energía",
        "Ajusta horario",
        "Ejecuta en mejor momento"
      ],
      questions: [
        "¿Cuándo rindo mejor?"
      ],
      help:
        "El cuándo importa tanto como el qué.",
      closure: "Alineas energía y acción.",
      phrase: "Aprovecho mi mejor momento"
    },

    {
      day: 22,
      title: "Identidad de ejecución",
      purpose: "Cambiar identidad de acción.",
      activity: [
        "Compara versión anterior y actual",
        "Define nueva identidad"
      ],
      questions: [
        "¿Quién soy ahora?"
      ],
      help:
        "Identidad se construye con evidencia.",
      closure: "Te reconoces diferente.",
      phrase: "Soy alguien que ejecuta"
    },

    {
      day: 23,
      title: "Sostenibilidad del proceso",
      purpose: "Evitar abandono futuro.",
      activity: [
        "Evalúa carga",
        "Ajusta intensidad"
      ],
      questions: [
        "¿Es sostenible?"
      ],
      help:
        "Lo insostenible se abandona.",
      closure: "Aseguras continuidad.",
      phrase: "Construyo algo que puedo sostener"
    },

    {
      day: 24,
      title: "Consolidación de avance",
      purpose: "Reconocer progreso.",
      activity: [
        "Lista avances",
        "Relaciona con acciones"
      ],
      questions: [
        "¿Qué he logrado?"
      ],
      help:
        "Reconocer fortalece continuidad.",
      closure: "Haces visible tu avance.",
      phrase: "Reconozco mi avance"
    },

    {
      day: 25,
      title: "Brecha final",
      purpose: "Identificar lo que falta.",
      activity: [
        "Compara estado actual vs meta",
        "Define brecha"
      ],
      questions: [
        "¿Qué me falta?"
      ],
      help:
        "Las metas se abandonan cerca del final.",
      closure: "Identificas lo pendiente.",
      phrase: "Estoy cerca, continúo"
    },

    {
      day: 26,
      title: "Ejecución final enfocada",
      purpose: "Maximizar foco.",
      activity: [
        "Elimina distracciones",
        "Ejecuta acción clave"
      ],
      questions: [
        "¿Estoy enfocado?"
      ],
      help:
        "En la fase final, el foco es clave.",
      closure: "Diriges energía con precisión.",
      phrase: "Me enfoco en lo que importa"
    },

    {
      day: 27,
      title: "Logro consciente",
      purpose: "Reconocer resultado.",
      activity: [
        "Evalúa resultado final",
        "Identifica aprendizajes"
      ],
      questions: [
        "¿Qué aprendí?"
      ],
      help:
        "El proceso importa tanto como el resultado.",
      closure: "Reconoces logro.",
      phrase: "Logro lo que me propongo"
    },

    {
      day: 28,
      title: "Integración e identidad",
      purpose: "Cerrar proceso e integrar identidad.",
      activity: [
        "Compara antes y después",
        "Define nueva identidad",
        "Establece compromisos"
      ],
      questions: [
        "¿Quién soy ahora?"
      ],
      help:
        "La identidad es el verdadero resultado.",
      closure: "El proceso se integra a tu vida.",
      phrase: "Soy alguien que ejecuta y sostiene"
    }
  ]
};
