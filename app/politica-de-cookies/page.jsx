"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function PoliticaCookiesPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-14 space-y-8">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm"
            style={{ color: "var(--text-muted)", textDecoration: "none" }}
          >
            <span aria-hidden="true">←</span>
            Volver al CV
          </Link>

          <div className="card space-y-4">
            <div>
              <p className="section-title mb-1">Legal</p>
              <h1 className="text-3xl font-extrabold" style={{ fontFamily: "Syne, sans-serif" }}>
                Política de cookies
              </h1>
            </div>

            <div className="space-y-3 text-sm" style={{ color: "var(--text-muted)" }}>
              <p>
                Este sitio utiliza únicamente tecnologías necesarias para su funcionamiento y para recordar preferencias
                del usuario.
              </p>
              <p>
                <span style={{ color: "var(--text)" }}>Preferencias (tema):</span> se guarda la preferencia de tema en el
                almacenamiento local del navegador para recordar modo claro/oscuro.
              </p>
              <p>
                <span style={{ color: "var(--text)" }}>Consentimiento:</span> se guarda una cookie llamada{" "}
                <code style={{ color: "var(--text)" }}>cookie_consent</code> para registrar tu elección (aceptar o
                rechazar) y no volver a mostrar el aviso durante un tiempo.
              </p>
              <p>
                <span style={{ color: "var(--text)" }}>Analítica y terceros:</span> no se instalan cookies de analítica
                ni de terceros.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

