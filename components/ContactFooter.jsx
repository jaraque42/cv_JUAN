"use client";

export default function ContactFooter() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34676908947";
  const message = encodeURIComponent("Hola Juan, me gustaría consultarte sobre una oportunidad profesional.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <footer
      id="contacto"
      className="text-center py-16 px-4 relative overflow-hidden"
      style={{
        background: "linear-gradient(0deg, #040810 0%, var(--bg) 100%)",
      }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 100%, rgba(0,229,180,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative">
        <p className="section-title justify-center" style={{ justifyContent: "center" }}>
          Contacto
        </p>
        <h2
          className="text-3xl font-extrabold mb-4"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          ¿Hablamos?
        </h2>
        <p className="mb-8" style={{ color: "var(--text-muted)" }}>
          Disponible para nuevas oportunidades profesionales.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="tel:+34676908947"
            className="px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, var(--teal-start), var(--teal-end))",
              color: "#0a0f1a",
            }}
          >
            📞 676 908 947
          </a>
          <a
            href="mailto:araqueromerojuan@gmail.com"
            className="px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              color: "var(--text)",
            }}
          >
            ✉️ araqueromerojuan@gmail.com
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(37, 211, 102, 0.14)",
              border: "1px solid rgba(37, 211, 102, 0.35)",
              color: "#25D366",
            }}
            aria-label="Contactar por WhatsApp"
          >
            WhatsApp
          </a>
        </div>

        <div className="mt-5 flex flex-wrap gap-3 justify-center">
          <a
            href="https://www.instagram.com/juanaraqueai/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(228, 64, 95, 0.12)",
              border: "1px solid rgba(228, 64, 95, 0.3)",
              color: "#ff6b8b",
              textDecoration: "none",
            }}
            aria-label="Ir a Instagram"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(0, 119, 181, 0.12)",
              border: "1px solid rgba(0, 119, 181, 0.28)",
              color: "#4bb3ff",
              textDecoration: "none",
            }}
            aria-label="Ir a LinkedIn"
          >
            LinkedIn
          </a>
        </div>

        <p className="mt-12 text-xs" style={{ color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} Juan Araque Romero · Técnico de Sistemas
        </p>
      </div>
    </footer>
  );
}
