"use client";

const education = [
  {
    title: "Técnico Superior en Administración de Sistemas Informáticos en Red",
    center: "IES Red",
    period: "Septiembre 2006 – Junio 2008",
    icon: "🎓",
  },
  {
    title: "Certificado Profesional: Construcción de Páginas Web",
    center: "SEI Colón",
    period: "Enero 2022 – Junio 2022",
    icon: "🌐",
  },
];

export default function Education() {
  return (
    <section id="formacion">
      <p className="section-title">Formación Académica</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {education.map((e) => (
          <div key={e.title} className="card flex gap-4">
            <span className="text-3xl flex-shrink-0">{e.icon}</span>
            <div>
              <h3
                className="font-bold text-base leading-snug mb-1"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {e.title}
              </h3>
              <p className="gradient-text text-sm font-semibold">{e.center}</p>
              <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                {e.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
