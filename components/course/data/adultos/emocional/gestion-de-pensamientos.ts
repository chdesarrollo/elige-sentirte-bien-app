import { Course } from "@/components/course/types";

export const gestionDePensamientos: Course = {
    id: "gestion-de-pensamientos",
    title: "Gestión de pensamientos",
    section: "adultos",
    dimension: "emocional",
    price: 0, // luego será pago
    description: `<h1> <strong>Bienvenida al proceso Gestión de pensamientos</strong></h1>
    No es lo que pasa. Es lo que te dices sobre lo que pasa.
Un mismo hecho puede generar calma o estrés, seguridad o duda, acción o bloqueo.
La diferencia no está en la situación. Está en el pensamiento que aparece… y en si lo sigues o no.
Este proceso no es para que dejes de tener pensamientos negativos.
Es para que dejes de creértelos todos.
Porque no todo lo que piensas es verdad. Y no todo lo que piensas necesita ser obedecido.
Aquí vas a aprender algo muy práctico:
detectar lo que te dices darte cuenta cuando eso te afecta y decidir cómo actuar sin dejarte llevar automáticamente
Sin teoría complicada. Sin ejercicios irreales.
Esto lo haces en tu día, mientras trabajas, hablas, decides y vives.
<h2><strong>¿De qué se trata este proceso?</strong></h2>
De aprender a manejar lo que pasa por tu mente para que no dirija tu vida sin darte cuenta.
<h2><strong>¿Para quién es este proceso?</strong></h2>
Para quien piensa demasiado Para quien se llena de dudas Para quien se bloquea por lo que piensa
<h2><strong>¿Cómo se va a vivir el proceso?</strong></h2>
En situaciones reales.
No necesitas tiempo extra. Solo atención.
Compromiso consciente
Hoy no vas a creer todo lo que piensas.`,
    days: [
  {
    day: 1,
    title: "Becoming aware",
    purpose: "Start noticing what you tell yourself during the day.",
    activity: [
      "Whenever something bothers you, ask: what am I telling myself right now?",
      "Do this at least 3 times during the day"
    ],
    questions: [
      "What do I tell myself when things don’t go as I expect?",
      "Am I harsh or flexible with myself?"
    ],
    help: "It’s not only what happens that affects you, but what you think about it.",
    closure: "Today you started listening to yourself.",
    phrase: "I notice what I tell myself"
  },
  {
    day: 2,
    title: "Real impact",
    purpose: "See how your thoughts change your emotions and actions.",
    activity: [
      "When you feel bad, stop and complete: I am thinking… / That makes me feel… / And therefore I do…",
      "Do this at least twice today"
    ],
    questions: [
      "Did what I thought help me or stop me?",
      "Did I act from clarity or from that thought?"
    ],
    help: "A single thought can change your entire reaction.",
    closure: "Today you saw the effect of your thoughts.",
    phrase: "What I think moves me"
  },
  {
    day: 3,
    title: "Thoughts that block you",
    purpose: "Identify the thoughts that most limit you.",
    activity: [
      "Identify at least 2 thoughts that made you doubt or stop today",
      "Write them exactly as they appear"
    ],
    questions: [
      "Which thought repeats the most?",
      "In what situations does it appear?"
    ],
    help: "Not all thoughts affect you in the same way.",
    closure: "Today you identified what blocks you most.",
    phrase: "I recognize what stops me"
  },
  {
    day: 4,
    title: "Not everything is true",
    purpose: "Question your thoughts in the moment.",
    activity: [
      "When a thought affects you, ask: is this a fact or an assumption?",
      "Do not overthink it, just answer and continue"
    ],
    questions: [
      "How many things do I assume as true without checking?"
    ],
    help: "Thinking something does not make it true.",
    closure: "Today you started questioning.",
    phrase: "Not everything I think is true"
  },
  {
    day: 5,
    title: "Not following thoughts",
    purpose: "Stop acting automatically based on your thoughts.",
    activity: [
      "When a limiting thought appears: recognize it and do what you needed to do anyway",
      "Even if you don’t feel like it or feel doubt"
    ],
    questions: [
      "What happened when I acted anyway?",
      "Did the thought disappear or stay?"
    ],
    help: "You don’t need to stop thinking to move forward.",
    closure: "Today you stopped obeying automatically.",
    phrase: "I don’t stop"
  },
  {
    day: 6,
    title: "Changing focus",
    purpose: "Learn to think in a more useful way without overcomplicating it.",
    activity: [
      "When a negative thought appears, replace it with a more useful and realistic one",
      "Example: 'I can’t' → 'I can try and see what happens'",
      "Do this at least 3 times"
    ],
    questions: [
      "Did the new thought help me move forward?"
    ],
    help: "It’s not about positive thinking, but useful thinking.",
    closure: "Today you started adjusting your thoughts.",
    phrase: "I choose a better focus"
  },
  {
    day: 7,
    title: "Think less, act more",
    purpose: "Avoid getting stuck in your mind.",
    activity: [
      "When you notice overthinking, stop thinking",
      "Choose a small action",
      "Do it immediately"
    ],
    questions: [
      "How often do I think instead of act?",
      "What happened when I acted quickly?"
    ],
    help: "Overthinking often blocks action instead of solving problems.",
    closure: "Today you moved into action.",
    phrase: "I act without overthinking"
  },
  {
    day: 8,
    title: "Taking control",
    purpose: "Feel that you can manage your thoughts instead of being controlled by them.",
    activity: [
      "Choose a situation where you usually get carried away by thoughts",
      "Detect the thought",
      "Question it",
      "Act differently"
    ],
    questions: [
      "What did I do differently today?",
      "Did I feel more control?"
    ],
    help: "Change is not about stopping thoughts, but changing actions.",
    closure: "Today you started taking real control.",
    phrase: "I decide"
  },
  {
    day: 9,
    title: "Detecting earlier",
    purpose: "Notice thoughts as soon as they start.",
    activity: [
      "When you feel a shift in emotion, ask: what did I just tell myself?",
      "Do it immediately, before it grows"
    ],
    questions: [
      "Did I catch it before reacting?",
      "What changed when I saw it early?"
    ],
    help: "The key moment is the beginning, not after.",
    closure: "Today you arrived before the reaction.",
    phrase: "I detect it in time"
  },
  {
    day: 10,
    title: "Breaking the cycle",
    purpose: "Avoid repeating the same thought loop.",
    activity: [
      "When you notice repetition: stop, say 'I got it', and shift to a small action"
    ],
    questions: [
      "How long do I stay in the same thought?",
      "What happened when I broke the cycle?"
    ],
    help: "Repeating a thought does not solve it.",
    closure: "Today you stopped looping.",
    phrase: "I cut and move on"
  },
  {
    day: 11,
    title: "No need for certainty",
    purpose: "Act without waiting to feel fully ready.",
    activity: [
      "Do something you’ve been postponing due to doubt",
      "Start without overthinking"
    ],
    questions: [
      "What did I think before acting?",
      "Did I need certainty or just action?"
    ],
    help: "Certainty often comes after action, not before.",
    closure: "Today you acted without waiting.",
    phrase: "I start anyway"
  },
  {
    day: 12,
    title: "Reducing intensity",
    purpose: "Lower the emotional weight of exaggerated thoughts.",
    activity: [
      "When a strong thought appears, ask: is this as serious as I think?",
      "Answer honestly and continue"
    ],
    questions: [
      "Am I seeing reality or exaggerating?"
    ],
    help: "The mind tends to amplify perceived threats.",
    closure: "Today you lowered mental volume.",
    phrase: "It’s not that serious"
  },
  {
    day: 13,
    title: "Choosing what to follow",
    purpose: "Consciously choose which thoughts to follow.",
    activity: [
      "When multiple thoughts appear, choose the one that helps you act",
      "Follow it, ignore the rest"
    ],
    questions: [
      "Which thoughts did I ignore?",
      "Which one did I follow?"
    ],
    help: "Not all thoughts deserve your attention.",
    closure: "Today you chose with more clarity.",
    phrase: "I choose what to follow"
  },
  {
    day: 14,
    title: "Closure and real control",
    purpose: "Integrate everything learned and recognize your ability to manage thoughts.",
    activity: [
      "Throughout the day: notice thoughts, question them if needed, don’t get stuck, act",
      "At the end of the day reflect on what changed"
    ],
    questions: [
      "What changed in how I think and act?",
      "When did I manage my mind better?",
      "What will I keep doing?"
    ],
    help: "Change is not stopping thoughts, but stopping automatic reactions.",
    closure: "This process ends, but your mental control continues.",
    phrase: "I decide"
  }
]
}
