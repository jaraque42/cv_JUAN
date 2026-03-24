"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { skillGroups } from "./skillsData";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function SkillGroupPage({ slug, titleOverride }) {
  const group = skillGroups.find((g) => g.slug === slug);

  if (!group) {
    return (
      <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-14">
          <div className="card">
            <p className="section-title">No encontrado</p>
            <p style={{ color: "var(--text-muted)" }}>Esta sección no existe.</p>
            <div className="mt-4">
              <Link href="/" style={{ color: "var(--teal-start)", textDecoration: "none" }}>
                Volver al CV
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const title = titleOverride ?? group.category;

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
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{group.icon}</span>
              <div>
                <p className="section-title mb-1">Competencias Técnicas</p>
                <h1 className="text-3xl font-extrabold" style={{ fontFamily: "Syne, sans-serif" }}>
                  {title}
                </h1>
              </div>
            </div>

            <p style={{ color: "var(--text-muted)" }}>
              Detalle de tecnologías y entornos en los que trabajo habitualmente.
            </p>
          </div>
        </motion.div>

        <motion.section initial="hidden" animate="visible" variants={fadeUp} className="space-y-4">
          <p className="section-title">Stack</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {group.skills.map((skill) => (
              <div key={skill} className="card">
                <p className="font-semibold" style={{ fontFamily: "Syne, sans-serif" }}>
                  {skill}
                </p>
                <p className="text-sm mt-2" style={{ color: "var(--text-muted)" }}>
                  Experiencia en instalación, configuración, soporte y mantenimiento.
                </p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}

