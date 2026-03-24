"use client";

const jobs = [
  {
    title: "Técnico de Soporte Informático",
    company: "Mitie Facilities Services",
    period: "Febrero 2023 – Actualidad",
    current: true,
    tasks: [
      "Administración y soporte de servidores y cuentas en entornos Windows.",
      "Resolución de incidencias técnicas relacionadas con hardware, software y conectividad.",
      "Actualización constante de equipos y aplicaciones para garantizar el mejor servicio.",
      "Gestión de usuarios, mantenimiento de cableado y soporte de primer y segundo nivel.",
    ],
  },
  {
    title: "Técnico de Sistemas Informáticos",
    company: "MASA",
    period: "Febrero 2021 – Febrero 2023",
    tasks: [
      "Mantenimiento y reparación de hardware y software en portátiles y sobremesas.",
      "Instalación de sistemas Windows, gestión de licencias y administración básica de red.",
      "Soporte presencial a usuarios y mantenimiento preventivo.",
    ],
  },
  {
    title: "Técnico de Sistemas",
    company: "Acciona Servicios de Tecnología",
    period: "Junio 2019 – Febrero 2020",
    tasks: [
      "Instalación de routers, switches y puntos de acceso Wi-Fi.",
      "Administración de sistemas Windows y Linux.",
      "Configuración y mantenimiento de servidores y redes LAN/WAN.",
      "Soporte técnico directo a usuarios y gestión de incidencias.",
    ],
  },
  {
    title: "Instalador de Fibra Óptica",
    company: "COBRA S.A.",
    period: "Abril 2018 – Marzo 2019",
    tasks: [
      "Instalación de fibra óptica a clientes particulares y empresas.",
      "Configuración de routers, VPN y VLAN.",
      "Control de calidad de instalaciones.",
    ],
  },
  {
    title: "Técnico de Redes y Soporte",
    company: "FOTOPRIX S.A.",
    period: "Enero 2012 – Enero 2015",
    tasks: [
      "Instalación y configuración de redes WAN/LAN.",
      "Soporte informático, configuración de software y equipos.",
      "Resolución de incidencias y administración básica de sistemas.",
    ],
  },
  {
    title: "Especialista Técnico en Sistemas",
    company: "CARREFOUR S.A.",
    period: "Enero 2006 – Enero 2011",
    tasks: [
      "Administración de servidores y redes en entornos industriales.",
      "Instalación de software, gestión de usuarios y soporte técnico de campo.",
      "Formación básica a usuarios internos.",
    ],
  },
  {
    title: "Técnico Instalador de ADSL, RDSI, BTS",
    company: "DOMINIOM / TELECOM",
    period: "Enero 2005 – Enero 2007",
    tasks: [
      "Instalación de líneas de telecomunicaciones en cliente final.",
      "Configuración de dispositivos y comprobación de señal.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experiencia">
      <p className="section-title">Experiencia Profesional</p>
      <div className="space-y-4">
        {jobs.map((job, i) => (
          <JobCard key={i} job={job} />
        ))}
      </div>
    </section>
  );
}

function JobCard({ job }) {
  return (
    <div className="card relative pl-6" style={{ borderLeft: "2px solid var(--border)" }}>
      {/* Timeline dot */}
      <div
        className="absolute -left-[5px] top-6 hex-dot"
        style={{ width: "8px", height: "8px" }}
      />

      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
        <div>
          <h3
            className="font-bold text-lg"
            style={{ fontFamily: "Syne, sans-serif", color: "var(--text)" }}
          >
            {job.title}
          </h3>
          <p className="gradient-text font-semibold text-sm">{job.company}</p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span
            className="text-xs px-3 py-1 rounded-full"
            style={{
              background: job.current ? "rgba(0,229,180,0.12)" : "var(--bg)",
              color: job.current ? "var(--teal-start)" : "var(--text-muted)",
              border: "1px solid var(--border)",
              whiteSpace: "nowrap",
            }}
          >
            {job.current && "● "}{job.period}
          </span>
        </div>
      </div>

      <ul className="space-y-1">
        {job.tasks.map((t, i) => (
          <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-muted)" }}>
            <span className="hex-dot mt-1.5 flex-shrink-0" />
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
