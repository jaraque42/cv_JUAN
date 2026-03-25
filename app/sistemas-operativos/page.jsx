"use client";

import SkillGroupPage from "../../components/SkillGroupPage";

export default function SistemasOperativosPage() {
  return (
    <SkillGroupPage
      slug="sistemas-operativos"
      detailsBySkill={{
        "Windows Server": [
          {
            title: "Gestión de Identidad y Accesos (Active Directory)",
            items: [
              "Administración de Active Directory (AD DS): gestión de usuarios, grupos, unidades organizativas y objetos de red.",
              "Implementación de GPO (Group Policy Objects): políticas de seguridad y configuración automatizada en entornos corporativos.",
              "Mantenimiento de dominios: promoción de Controladores de Dominio (DC) y gestión de niveles funcionales de bosque y dominio.",
            ],
          },
          {
            title: "Servicios de Red e Infraestructura",
            items: [
              "Configuración de servicios core: DNS (resolución de nombres), DHCP (asignación de IPs) y WINS.",
              "Servicios de archivos y almacenamiento: cuotas, permisos NTFS, carpetas compartidas y DFS (Distributed File System).",
              "Servicios de impresión: gestión centralizada de colas y despliegue de controladores por red.",
            ],
          },
          {
            title: "Virtualización y Alta Disponibilidad",
            items: [
              "Hyper‑V: creación, configuración y mantenimiento de máquinas virtuales, checkpoints y conmutadores virtuales.",
              "Failover Clustering: configuración de entornos de alta disponibilidad para minimizar tiempos de inactividad en servicios críticos.",
            ],
          },
          {
            title: "Seguridad y Mantenimiento",
            items: [
              "Gestión de parches (WSUS): distribución controlada de actualizaciones de seguridad.",
              "Seguridad y auditoría: hardening, revisión de logs de eventos y gestión de certificados (Active Directory Certificate Services).",
              "Backup y recuperación: planes de respaldo y disaster recovery con herramientas nativas o de terceros (Veeam, Veritas, etc.).",
            ],
          },
        ],
        Linux: [
          {
            title: "Administración y Gestión de Distribuciones Linux",
            items: [
              "Gestión de paquetes y repositorios: apt (Debian/Ubuntu/Parrot), dnf/yum (Fedora) y pacman (Manjaro/Arch).",
              "Mantenimiento del ciclo de vida: instalación, actualización de kernel, gestión de dependencias y resolución de conflictos de arranque (GRUB/systemd).",
              "Administración de usuarios y permisos: sudoers, gestión de grupos y permisos (chmod/chown).",
            ],
          },
          {
            title: "Personalización y Entorno de Escritorio (Desktop Experience)",
            items: [
              "Optimización de interfaz (rice/dotfiles): personalización del entorno gráfico y compositores (ej. Picom).",
              "Configuración de entornos: puesta a punto de GNOME, KDE Plasma, XFCE y gestores de ventanas dinámicos.",
              "Automatización de despliegue: scripts en Bash para instalación de software y configuración post-instalación.",
            ],
          },
          {
            title: "Seguridad y Análisis (Perfil Parrot/Debian)",
            items: [
              "Hardening del sistema: firewalls básicos (ufw, iptables) y auditoría de servicios activos.",
              "Entornos de pentesting: herramientas de Parrot OS y configuración de redes seguras (VPN, Proxychains).",
            ],
          },
        ],
        "Windows Desktop": [
          {
            title: "Soporte y Administración de Sistemas Windows (10/11)",
            items: [
              "Gestión de ciclo de vida: instalación limpia, actualización de versiones (in‑place upgrades) y migración de perfiles de usuario.",
              "Administración de discos y archivos: particiones (GPT/MBR), sistemas de archivos NTFS/FAT32 y recuperación de datos.",
              "Mantenimiento preventivo y correctivo: diagnóstico de fallos HW/SW, optimización de arranque y limpieza de registros.",
            ],
          },
          {
            title: "Configuración Avanzada y Herramientas Administrativas",
            items: [
              "Gestión del registro (Regedit): modificación de claves para personalización y resolución de errores críticos.",
              "Consola y automatización: PowerShell y CMD para scripts, procesos y tareas administrativas.",
              "Visor de eventos y monitor de rendimiento: análisis de logs y diagnóstico de fallos de drivers (BSOD).",
            ],
          },
          {
            title: "Seguridad y Redes en el Cliente",
            items: [
              "Hardening de escritorio: Windows Defender, Firewall de Windows y políticas de ejecución de software.",
              "Gestión de cuentas: usuarios locales, grupos y permisos de archivos (ACLs).",
              "Conectividad de red: interfaces, troubleshooting DNS/IP y accesos remotos (RDP).",
            ],
          },
        ],
      }}
    />
  );
}
