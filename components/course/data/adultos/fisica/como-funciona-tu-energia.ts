import { Course } from "@/components/course/types";

export const comoFuncionaTuEnergia: Course = {
    id: "como-funciona-tu-energia",
    title: "Cómo funciona tu energía",
    section: "adultos",
    dimension: "fisica",
    price: 0, // luego se ajustará a pago
    description: `<h1> Bienvenido a este espacio </h1> 
Tu energía no es constante.
Y no debería serlo.
Hay momentos del día donde rindes mejor
otros donde te cuesta todo
y otros donde simplemente tu cuerpo pide parar
pero la mayoría de las personas viven ignorando eso
se exigen igual todo el día
se fuerzan cuando están cansadas
y se desconectan cuando podrían aprovechar mejor su energía
Este proceso no es para que tengas más energía
es para que entiendas cómo funciona la que ya tienes
y dejes de usarla mal
<h2> Cómo trabajar este proceso </h2>
No intentes cambiar todo desde el primer día
primero observa
luego entiende
después ajusta
<h2> Punto clave </h2>
No necesitas más energía
necesitas aprender a usar mejor la que ya tienes.
Cuando entiendes tu energía
dejas de pelear con tu cuerp`,
    days: [
  {
    day: 1,
    title: "Tu energía no es plana",
    purpose: "Aceptar que tu energía cambia a lo largo del día",
    activity: [
      "Durante el día detente 3 veces y registra tu nivel de energía (alta, media o baja)",
      "Observa qué estás haciendo en cada momento",
      "Evita juzgar si tienes más o menos energía"
    ],
    questions: [
      "¿Espero rendir igual durante todo el día?",
      "¿En qué momentos noto más cambios en mi energía?"
    ],
    help: "Tu energía funciona en ciclos, no de forma constante",
    closure: "Hoy empezaste a observar cómo cambia tu energía durante el día",
    phrase: "Mi energía cambia"
  },
  {
    day: 2,
    title: "Tus momentos de mayor rendimiento",
    purpose: "Identificar cuándo tu energía es más alta y estable",
    activity: [
      "Detecta en qué momento del día tienes más energía",
      "Registra qué estás haciendo en ese momento",
      "Observa qué tipo de tareas realizas mejor"
    ],
    questions: [
      "¿Cuándo me siento más enfocado y activo?",
      "¿Qué condiciones acompañan mis picos de energía?"
    ],
    help: "No todas las personas rinden mejor en el mismo horario",
    closure: "Hoy identificaste tus momentos de mayor rendimiento",
    phrase: "Reconozco mis picos"
  },
  {
    day: 3,
    title: "Tus momentos de baja energía",
    purpose: "Reconocer los momentos de menor energía sin juicio",
    activity: [
      "Identifica el momento del día donde tu energía baja más",
      "Observa qué sueles hacer en ese estado",
      "Registra sin juzgar ni interpretar"
    ],
    questions: [
      "¿Qué hago normalmente cuando mi energía baja?",
      "¿Intento forzarme en esos momentos?"
    ],
    help: "La baja energía no es un problema, es información del cuerpo",
    closure: "Hoy dejaste de interpretar el cansancio como falla",
    phrase: "Mi cuerpo me habla"
  },
  {
    day: 4,
    title: "Qué drena tu energía",
    purpose: "Identificar factores que reducen tu energía sin que lo notes",
    activity: [
      "Haz una lista de actividades, personas o hábitos que te agotan",
      "Incluye tanto lo físico como lo mental",
      "Observa patrones repetidos"
    ],
    questions: [
      "¿Mi cansancio es solo físico o también mental?",
      "¿Qué cosas me drenan sin que me dé cuenta?"
    ],
    help: "No todo el desgaste es visible, pero sí acumulativo",
    closure: "Hoy viste con claridad lo que te drena energía",
    phrase: "Identifico lo que me drena"
  },
  {
    day: 5,
    title: "Qué te recarga",
    purpose: "Reconocer qué actividades restauran tu energía",
    activity: [
      "Haz una lista de actividades que te hacen sentir mejor",
      "Incluye cosas simples y cotidianas",
      "Observa cuáles son más efectivas para ti"
    ],
    questions: [
      "¿Qué actividades realmente me recargan?",
      "¿Estoy incluyendo esas actividades en mi rutina?"
    ],
    help: "Recuperar energía también es una acción activa",
    closure: "Hoy identificaste lo que te ayuda a recuperarte",
    phrase: "Sé cómo recargarme"
  },
  {
    day: 6,
    title: "Ajustar tu día con conciencia",
    purpose: "Hacer pequeños cambios basados en tu observación de energía",
    activity: [
      "Introduce un ajuste pequeño en tu rutina",
      "Puede ser una pausa, descanso o cambio de actividad",
      "Observa el efecto en tu energía"
    ],
    questions: [
      "¿Qué pequeño cambio mejora mi energía?",
      "¿Estoy respetando mis niveles reales de energía?"
    ],
    help: "No necesitas cambios grandes, solo ajustes conscientes",
    closure: "Hoy aplicaste un ajuste basado en tu energía real",
    phrase: "Ajusto mi día"
  },
  {
    day: 7,
    title: "Integración de tu energía",
    purpose: "Consolidar lo aprendido sobre tu energía diaria",
    activity: [
      "Escribe cuándo tienes más energía",
      "Escribe cuándo baja tu energía",
      "Identifica qué te drena y qué te recarga",
      "Define cambios concretos en tu rutina"
    ],
    questions: [
      "¿Estoy dispuesto a respetar cómo funciona mi energía?",
      "¿Qué cambiaría si organizo mi vida según mi energía?"
    ],
    help: "Tu cuerpo no necesita ser corregido, necesita ser escuchado",
    closure: "Hoy integraste cómo funciona tu energía en la vida diaria",
    phrase: "Uso mejor mi energía"
  }
]
};
