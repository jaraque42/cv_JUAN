"use client";

import SkillGroupPage from "../../components/SkillGroupPage";

export default function RedesPage() {
  return (
    <SkillGroupPage
      slug="redes"
      detailsBySkill={{
        "LAN / WAN": [
          {
            title: "🌐 LAN / WAN",
            items: [
              "Diseño y despliegue de infraestructuras de red local y extendida. Gestión de topologías, segmentación de tráfico y optimización de ancho de banda para asegurar la conectividad empresarial.",
            ],
          },
        ],
        VPN: [
          {
            title: "🔐 VPN (Virtual Private Network)",
            items: [
              "Implementación y administración de túneles seguros (IPsec, SSL/TLS, OpenVPN). Configuración de accesos remotos seguros para teletrabajo y conexiones Site-to-Site entre sucursales.",
            ],
          },
        ],
        VLAN: [
          {
            title: "📂 VLAN (Virtual LAN)",
            items: [
              "Segmentación lógica de redes para mejorar la seguridad y reducir dominios de colisión. Configuración de VLAN Tagging (802.1Q) y gestión de comunicación mediante Inter-VLAN Routing.",
            ],
          },
        ],
        Routers: [
          {
            title: "🚥 Routers",
            items: [
              "Configuración avanzada de enrutamiento estático y dinámico. Gestión de tablas de ruteo, NAT/PAT, apertura de puertos y políticas de calidad de servicio (QoS) para priorizar tráfico crítico.",
            ],
          },
        ],
        Switches: [
          {
            title: "🔌 Switches",
            items: [
              "Administración de switching Capa 2 y Capa 3. Configuración de Port-Security, agregación de enlaces (LACP/EtherChannel) y prevención de bucles mediante protocolos Spanning Tree (STP).",
            ],
          },
        ],
        "Fibra Óptica": [
          {
            title: "🧵 Fibra Óptica",
            items: [
              "Instalación y mantenimiento de enlaces de fibra. Conocimiento en tipos de conectores, transceptores (SFP/SFP+), diagnóstico de atenuación y tendido de infraestructura de alta velocidad.",
            ],
          },
        ],
      }}
    />
  );
}
