"use client";

import SkillGroupPage from "../../components/SkillGroupPage";

export default function AdministracionPage() {
  return (
    <SkillGroupPage
      slug="administracion"
      detailsBySkill={{
        "Active Directory": [
          {
            title: "🔑 Active Directory",
            items: [
              "Administración de identidades y servicios de dominio (AD DS). Gestión de Unidades Organizativas, creación de objetos y despliegue de GPOs para la estandarización de políticas de seguridad.",
            ],
          },
        ],
        "Office 365": [
          {
            title: "☁️ Office 365 (Microsoft 365)",
            items: [
              "Administración del centro de control de M365. Gestión de licencias, configuración de buzones en Exchange Online, entornos colaborativos en Teams y almacenamiento en OneDrive/SharePoint.",
            ],
          },
        ],
        "Gestión de usuarios": [
          {
            title: "👥 Gestión de Usuarios",
            items: [
              "Administración del ciclo de vida de identidades (altas, bajas y modificaciones). Control de accesos mediante RBAC (Control de Acceso Basado en Roles) y auditoría de permisos en sistemas críticos.",
            ],
          },
        ],
        "Software de ticketing": [
          {
            title: "🎫 Software de Ticketing",
            items: [
              "Gestión eficiente de incidentes y requerimientos bajo marcos de trabajo ITIL. Priorización de tareas según SLA, documentación técnica de soluciones y escalado de tickets a niveles superiores.",
            ],
          },
        ],
      }}
    />
  );
}
