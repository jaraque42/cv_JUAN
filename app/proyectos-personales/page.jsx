"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ProyectosPersonalesPage() {
  const projects = [
    {
      name: "Landing Psicotécnico San Fernando",
      url: "https://landing-san-fernando-psicotecnico-s.vercel.app/",
      summary: "Landing enfocada a conversión y SEO para renovación de carné DGT.",
      preview: { type: "blocked", reason: "El sitio bloquea iframes (X-Frame-Options: DENY)." },
      tech: [
        "HTML + CSS (estáticos)",
        "Google Fonts (DM Sans, DM Serif Display)",
        "Hosting: Vercel",
      ],
      database: "No aplica (landing estática).",
    },
    {
      name: "Next.js Boilerplate / Web de negocio",
      url: "https://nextjs-boilerplate-ivory-theta-38.vercel.app/",
      summary: "Plantilla base para web de negocio con UI moderna y secciones reutilizables.",
      preview: { type: "iframe" },
      tech: ["Next.js (App Router)", "Tailwind CSS", "Hosting: Vercel"],
      database: "Supabase.",
    },
    {
      name: "Helpdesk / Incidencias IT",
      url: "https://web-pruebas-hepldesk.vercel.app/",
      summary: "Portal de incidencias IT con acceso (login/registro) y foco en operativa interna.",
      preview: { type: "iframe" },
      tech: ["Next.js (App Router)", "UI con utilidades tipo Tailwind", "Hosting: Vercel"],
      database: "Supabase.",
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-14 space-y-10">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm"
            style={{ color: "var(--text-muted)", textDecoration: "none" }}
          >
            <span aria-hidden="true">←</span>
            Volver al CV
          </Link>

          <div className="card">
            <p className="section-title mb-1">Sección</p>
            <h1 className="text-3xl font-extrabold" style={{ fontFamily: "Syne, sans-serif" }}>
              Proyectos Personales
            </h1>
            <p className="mt-3" style={{ color: "var(--text-muted)" }}>
              Selección de proyectos web con vista previa y resumen de tecnologías.
            </p>
          </div>
        </motion.div>

        <motion.section initial="hidden" animate="visible" variants={fadeUp} className="space-y-4">
          <p className="section-title">Proyectos Web</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {projects.map((p) => (
              <ProjectCard key={p.url} project={p} />
            ))}
          </div>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            Nota: si alguna vista previa no carga, es por restricciones del propio sitio (bloqueo de iframes). En ese
            caso, abre el enlace.
          </p>
        </motion.section>
      </div>
    </main>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="card space-y-4">
      <div className="space-y-2">
        <h2 className="text-lg font-extrabold" style={{ fontFamily: "Syne, sans-serif" }}>
          {project.name}
        </h2>
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          {project.summary}
        </p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold"
          style={{ color: "var(--teal-start)", textDecoration: "none" }}
          aria-label={`Abrir ${project.name} en una nueva pestaña`}
        >
          Ver proyecto <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div
        className="rounded-xl overflow-hidden"
        style={{ border: "1px solid var(--border)", background: "var(--bg)" }}
      >
        {project.preview?.type === "blocked" ? (
          <div className="p-4" style={{ height: 240, display: "grid", placeItems: "center" }}>
            <div className="text-center space-y-2">
              <p className="font-semibold" style={{ fontFamily: "Syne, sans-serif" }}>
                Vista previa no disponible
              </p>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                {project.preview.reason}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: "var(--teal-start)", textDecoration: "none" }}
              >
                Abrir en nueva pestaña <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        ) : (
          <iframe
            title={`Vista previa: ${project.name}`}
            src={project.url}
            loading="lazy"
            referrerPolicy="no-referrer"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
            className="w-full"
            style={{ height: 240, border: "0" }}
          />
        )}
      </div>

      <div className="space-y-2">
        <p className="text-xs font-semibold" style={{ color: "var(--text)" }}>
          Tecnologías
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-md"
              style={{
                background: "rgba(0,229,180,0.08)",
                color: "var(--teal-start)",
                border: "1px solid rgba(0,229,180,0.2)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          <span style={{ color: "var(--text)" }}>Base de datos:</span> {project.database}
        </p>
      </div>
    </div>
  );
}
