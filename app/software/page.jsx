"use client";

import SkillGroupPage from "../../components/SkillGroupPage";

export default function SoftwarePage() {
  return (
    <SkillGroupPage
      slug="software"
      detailsBySkill={{
        Virtualización: [
          {
            title: "📦 Virtualización",
            items: [
              "Administración avanzada de entornos virtualizados (Hyper‑V, VMware, VirtualBox). Creación y optimización de máquinas virtuales, gestión de recursos (vCPU/RAM), instantáneas y migración de sistemas en entornos de prueba y producción.",
            ],
          },
        ],
        "Docker & Docker Compose": [
          {
            title: "🐳 Docker & Docker Compose",
            items: [
              "Despliegue de aplicaciones mediante contenedores. Gestión de imágenes, volúmenes de datos y redes virtuales. Orquestación de servicios multicontenedor con Docker Compose para entornos de desarrollo y microservicios.",
            ],
          },
        ],
        "Instalación de software": [
          {
            title: "⚙️ Instalación de Software (Windows & Linux)",
            items: [
              "Despliegue y configuración de software multiplataforma. Gestión de repositorios en Linux y automatización de instalaciones en Windows.",
              "Resolución de conflictos de dependencias y librerías, asegurando compatibilidad y estabilidad del sistema.",
            ],
          },
        ],
        "Microsoft Office": [
          {
            title: "📊 Paquete Office",
            items: [
              "Uso intermedio‑avanzado de la suite ofimática para documentación, reporting y soporte a operativa.",
            ],
          },
        ],
        Excel: [
          {
            title: "📈 Excel",
            items: [
              "Análisis de datos con funciones lógicas, tablas dinámicas y elaboración de reportes para la toma de decisiones técnicas.",
            ],
          },
        ],
        "Control de versiones": [
          {
            title: "🐙 Control de Versiones (Git & GitHub)",
            items: [
              "Uso de Git para control de versiones distribuido y trabajo colaborativo en GitHub.",
              "Gestión de ramas (branching), resolución de conflictos, PRs y buenas prácticas de versionado.",
              "Aplicación de Git en despliegues de configuración, automatización de scripts y mantenimiento de infraestructura como código.",
            ],
          },
        ],
        "Entornos de desarrollo": [
          {
            title: "💻 Entornos de Desarrollo y Editores de Código",
            items: [
              "Uso de editores/IDEs para gestión de scripts, configuraciones y desarrollo diario.",
              "Experiencia con Visual Studio, Eclipse y flujos de trabajo en editores ligeros como Sublime Text.",
              "Edición rápida de archivos de sistema y soporte en entornos Windows con Notepad++.",
            ],
          },
        ],
      }}
    />
  );
}
