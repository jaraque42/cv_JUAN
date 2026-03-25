"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CONSENT_COOKIE = "cookie_consent";
const CONSENT_MAX_AGE_DAYS = 180;

function getCookie(name) {
  if (typeof document === "undefined") return null;
  const parts = document.cookie.split(";").map((p) => p.trim());
  const match = parts.find((p) => p.startsWith(`${name}=`));
  if (!match) return null;
  return decodeURIComponent(match.slice(name.length + 1));
}

function setCookie(name, value, maxAgeDays) {
  if (typeof document === "undefined") return;
  const maxAge = Math.floor(maxAgeDays * 24 * 60 * 60);
  document.cookie = `${name}=${encodeURIComponent(value)}; Max-Age=${maxAge}; Path=/; SameSite=Lax`;
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getCookie(CONSENT_COOKIE);
    setVisible(!consent);
  }, []);

  if (!visible) return null;

  const accept = () => {
    setCookie(CONSENT_COOKIE, "accepted", CONSENT_MAX_AGE_DAYS);
    setVisible(false);
  };

  const reject = () => {
    setCookie(CONSENT_COOKIE, "rejected", CONSENT_MAX_AGE_DAYS);
    setVisible(false);
  };

  return (
    <div
      className="fixed inset-x-0 bottom-4 z-[60] px-4"
      style={{ pointerEvents: "none" }}
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
    >
      <div
        className="max-w-3xl mx-auto card"
        style={{
          pointerEvents: "auto",
          backdropFilter: "blur(10px)",
          background: "rgba(14, 21, 35, 0.85)",
        }}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-sm font-semibold" style={{ fontFamily: "Syne, sans-serif" }}>
              Cookies y almacenamiento local
            </p>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Usamos almacenamiento local para recordar preferencias (p. ej. tema) y una cookie para guardar tu elección.
              No usamos cookies de analítica.
            </p>
            <div className="text-xs">
              <Link
                href="/politica-de-cookies"
                style={{ color: "var(--teal-start)", textDecoration: "none" }}
              >
                Ver política de cookies
              </Link>
            </div>
          </div>

          <div className="flex gap-3 flex-wrap sm:flex-nowrap">
            <button
              type="button"
              onClick={reject}
              className="px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-95"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid var(--border)",
                color: "var(--text)",
              }}
            >
              Rechazar
            </button>
            <button
              type="button"
              onClick={accept}
              className="px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-95"
              style={{
                background: "linear-gradient(135deg, var(--teal-start), var(--teal-end))",
                color: "#0a0f1a",
              }}
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

