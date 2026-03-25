"use client";

import SkillGroupPage from "../../components/SkillGroupPage";

export default function HardwarePage() {
  return (
    <SkillGroupPage
      slug="hardware"
      detailsBySkill={{
        "Portátiles y sobremesas": [
          {
            title: "🖥️ Portátiles y Sobremesas (Equipos HP Elite)",
            items: [
              "Gestión y despliegue de flotas corporativas HP EliteBook y ProDesk. Configuración avanzada de BIOS/UEFI, actualización de componentes y mantenimiento de hardware de alto rendimiento para entornos empresariales exigentes.",
            ],
          },
        ],
        "Routers y Switches": [
          {
            title: "🌐 Routers y Switches (Cisco Networks)",
            items: [
              "Administración de infraestructura Cisco. Configuración de routers y switches mediante CLI (IOS), gestión de protocolos de enrutamiento, seguridad de puertos y optimización de tráfico en redes de misión crítica.",
            ],
          },
        ],
        Firewalls: [
          {
            title: "🛡️ Firewalls (Palo Alto Networks)",
            items: [
              "Configuración y monitorización de seguridad perimetral con Palo Alto. Gestión de políticas de seguridad, inspección de tráfico, filtrado de contenido y administración de amenazas mediante consolas de nueva generación (NGFW).",
            ],
          },
        ],
        "Cableado estructurado": [
          {
            title: "🔌 Cableado Estructurado (Peinado de Racks)",
            items: [
              "Diseño de infraestructuras de red físicas con enfoque en la eficiencia técnica. Experiencia en peinado y organización profesional de Racks, etiquetado normativo, gestión de canaletas y optimización de flujo de aire (Airflow).",
            ],
          },
        ],
        "Diagnóstico y reparación": [
          {
            title: "🔧 Diagnóstico y Reparación",
            items: [
              "Diagnóstico de averías hardware (RAM, disco, fuente, placa, temperaturas) y software (drivers, corrupción de sistema, malware), con pruebas y verificación posterior.",
              "Sustitución y ampliación de componentes (SSD/RAM/baterías), mantenimiento preventivo, limpieza interna y optimización de rendimiento.",
              "Resolución de incidencias de arranque y recuperación de datos cuando aplica (modo seguro, restauración, herramientas de diagnóstico).",
            ],
          },
        ],
      }}
    />
  );
}
