"use client";

import SkillGroupPage from "../../components/SkillGroupPage";

export default function NuevasTecnologiasPage() {
  return (
    <SkillGroupPage
      slug="nuevas-tecnologias"
      detailsBySkill={{
        "Web Development & AI Design": [
          {
            title: "🌐 Web Development & AI Design",
            items: [
              "Desarrollo de sitios web asistido por IA, integrando herramientas de generación de código y diseño automatizado. Creación de interfaces modernas y funcionales, aprovechando ecosistemas de IA para acelerar el despliegue y la optimización de activos web.",
            ],
          },
        ],
        "IA & Modelos Generativos (LLMs)": [
          {
            title: "🤖 IA & Modelos Generativos (LLMs)",
            items: [
              "Implementación avanzada de flujos de trabajo con LLMs utilizando Claude, ChatGPT y Gemini Flow. Experiencia en el despliegue de soluciones mediante Google AI Studio, optimización de prompts y uso de modelos de vanguardia como Nano Banana para la generación de contenido y automatización de tareas.",
            ],
          },
        ],
        "Web Development & Multimedia IA": [
          {
            title: "🌐 Web Development & Multimedia IA",
            items: [
              "Desarrollo web moderno asistido por Inteligencia Artificial, integrando herramientas de generación de código y diseño automatizado. Experiencia en la creación de contenido audiovisual de alta fidelidad mediante Veo y sistemas de síntesis de video/audio para la producción de activos digitales dinámicos.",
            ],
          },
        ],
        "Big Data & Análisis": [
          {
            title: "📊 Big Data & Análisis (Nivel Inicial)",
            items: [
              "Exploración y gestión de grandes volúmenes de datos. Conocimientos fundamentales en arquitecturas de datos, limpieza de datasets y uso de herramientas de visualización para la identificación de patrones y tendencias.",
            ],
          },
        ],
        "Web Development": [
          {
            title: "🧩 Web Development",
            items: [
              "Desarrollo de aplicaciones con Next.js/React: componentes reutilizables, routing, estados y UX centrada en rendimiento.",
              "Maquetación responsive con Tailwind CSS y diseño consistente mediante variables/temas (dark/light).",
              "Integración de APIs y servicios (auth, formularios, CRUD) y despliegue continuo en Vercel con entornos configurables.",
            ],
          },
        ],
      }}
    />
  );
}
