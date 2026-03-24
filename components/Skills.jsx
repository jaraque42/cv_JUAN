"use client";

import Link from "next/link";
import { extras, langs, skillGroups } from "./skillsData";

export default function Skills() {
  return (
    <section id="skills" className="space-y-10">
      {/* Technical Skills */}
      <div>
        <p className="section-title">Competencias Técnicas</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group) => (
            <SkillCard key={group.category} group={group} />
          ))}
        </div>
      </div>

      {/* Languages */}
      <div>
        <p className="section-title">Idiomas</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {langs.map((l) => (
            <div key={l.lang} className="card">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold" style={{ fontFamily: "Syne, sans-serif" }}>
                  {l.lang}
                </span>
                <span className="text-sm" style={{ color: "var(--text-muted)" }}>
                  {l.level}
                </span>
              </div>
              <div
                className="h-2 rounded-full overflow-hidden"
                style={{ background: "var(--bg)" }}
              >
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${l.pct}%`,
                    background: "linear-gradient(90deg, var(--teal-start), var(--teal-end))",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Extras */}
      <div>
        <p className="section-title">Otros Datos</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {extras.map((e) => (
            <div
              key={e.label}
              className="card flex items-center gap-3 py-3 text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              <span className="text-lg">{e.icon}</span>
              {e.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ group }) {
  const Container = group.slug ? Link : "div";
  const containerProps = group.slug
    ? {
        href: `/${group.slug}`,
        "aria-label": `Abrir ${group.category}`,
        style: { textDecoration: "none" },
      }
    : {};

  return (
    <Container
      {...containerProps}
      className={`card block ${group.slug ? "cursor-pointer" : ""}`}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">{group.icon}</span>
        <h4
          className="font-bold text-sm"
          style={{ fontFamily: "Syne, sans-serif", color: "var(--text)" }}
        >
          {group.category}
        </h4>
        {group.slug ? (
          <span className="ml-auto text-xs" style={{ color: "var(--text-muted)" }}>
            Ver más →
          </span>
        ) : null}
      </div>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((s) => (
          <span
            key={s}
            className="text-xs px-2 py-1 rounded-md"
            style={{
              background: "rgba(0,229,180,0.08)",
              color: "var(--teal-start)",
              border: "1px solid rgba(0,229,180,0.2)",
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </Container>
  );
}
