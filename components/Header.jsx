"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      id="top"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #040810 0%, var(--bg) 100%)" }}
    >
      {/* Top nav */}
      <nav className="fixed top-5 left-5 right-5 z-40">
        <div className="max-w-5xl mx-auto">
          {/* Desktop */}
          <div
            className="hidden sm:flex flex-wrap items-center gap-2 px-3 py-2 rounded-full pr-16"
            style={{
              background: "rgba(14, 21, 35, 0.65)",
              border: "1px solid var(--border)",
              boxShadow: "0 0 18px rgba(0, 229, 180, 0.12)",
              backdropFilter: "blur(10px)",
            }}
          >
            <NavItem href="#top" label="Inicio" />
            <NavItem href="#perfil" label="Perfil" />
            <NavItem href="#experiencia" label="Experiencia" />
            <NavItem href="#skills" label="Skills" />
            <NavItem href="#formacion" label="Formación" />
            <NavItem href="#contacto" label="Contacto" />
            <NavItem href="/proyectos-personales" label="Proyectos Personales" />
          </div>

          {/* Mobile */}
          <div className="sm:hidden relative inline-flex">
            <button
              type="button"
              aria-label="Abrir menú"
              aria-controls="mobile-nav"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 active:scale-95"
              style={{
                background: "rgba(14, 21, 35, 0.75)",
                border: "1px solid var(--border)",
                boxShadow: "0 0 18px rgba(0, 229, 180, 0.12)",
                backdropFilter: "blur(10px)",
                color: "var(--text)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            </button>

            {mobileMenuOpen ? (
              <div
                id="mobile-nav"
                className="absolute top-14 left-0 w-64 rounded-2xl p-2"
                style={{
                  background: "rgba(14, 21, 35, 0.92)",
                  border: "1px solid var(--border)",
                  boxShadow: "0 0 24px rgba(0, 229, 180, 0.16)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="flex flex-col gap-2">
                  <NavItem href="#top" label="Inicio" onClick={() => setMobileMenuOpen(false)} />
                  <NavItem href="#perfil" label="Perfil" onClick={() => setMobileMenuOpen(false)} />
                  <NavItem href="#experiencia" label="Experiencia" onClick={() => setMobileMenuOpen(false)} />
                  <NavItem href="#skills" label="Skills" onClick={() => setMobileMenuOpen(false)} />
                  <NavItem href="#formacion" label="Formación" onClick={() => setMobileMenuOpen(false)} />
                  <NavItem href="#contacto" label="Contacto" onClick={() => setMobileMenuOpen(false)} />
                  <NavItem
                    href="/proyectos-personales"
                    label="Proyectos Personales"
                    onClick={() => setMobileMenuOpen(false)}
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </nav>

      {/* Background hex glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(0,229,180,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Hex grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='52' viewBox='0 0 60 52'%3E%3Cpolygon points='30,2 58,17 58,47 30,52 2,47 2,17' fill='none' stroke='%2300e5b4' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-8 pt-28 pb-16 flex flex-col md:flex-row items-center gap-10">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex-shrink-0"
        >
          <div
            className="w-40 h-40 md:w-52 md:h-52 rounded-2xl overflow-hidden"
            style={{
              border: "2px solid transparent",
              backgroundImage:
                "linear-gradient(var(--bg-card), var(--bg-card)), linear-gradient(135deg, #00e5b4, #00b4e5)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
              boxShadow: "0 0 40px rgba(0, 229, 180, 0.3)",
            }}
          >
            <Image
              src="/images/photo.png"
              alt="Juan Araque Romero"
              width={208}
              height={208}
              className="w-full h-full object-cover object-top"
              priority
            />
          </div>
          {/* Logo emblem overlay */}
          <div
            className="absolute -bottom-3 -right-3 w-12 h-12 rounded-xl overflow-hidden"
            style={{
              boxShadow: "0 0 16px rgba(0, 229, 180, 0.5)",
            }}
          >
            <Image
              src="/images/logo-emblem.png"
              alt="JA Logo"
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Info */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold leading-tight mb-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Juan Araque{" "}
            <span className="gradient-text">Romero</span>
          </motion.h1>

          <motion.p
            className="text-lg mb-6"
            style={{ color: "var(--text-muted)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Técnico Senior en Sistemas Informáticos
          </motion.p>

          {/* Contact chips */}
          <motion.div
            className="flex flex-wrap gap-3 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <ContactChip icon="📞" label="676 908 947" href="tel:+34676908947" />
            <ContactChip
              icon="✉️"
              label="araqueromerojuan@gmail.com"
              href="mailto:araqueromerojuan@gmail.com"
            />
            <ContactChip icon="🚗" label="Carnet B · Vehículo propio" />
            <ContactChip icon="✈️" label="Disponible para viajar" />
          </motion.div>
        </div>
      </div>
    </header>
  );
}

function ContactChip({ icon, label, href }) {
  const El = href ? "a" : "span";
  return (
    <El
      href={href}
      className="flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-200 hover:scale-105"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        color: "var(--text)",
        textDecoration: "none",
      }}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </El>
  );
}

function NavItem({ href, label, onClick }) {
  const commonProps = {
    onClick,
    className: "px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 hover:scale-[1.03]",
    style: {
      color: "var(--text)",
      textDecoration: "none",
      background: "rgba(0, 229, 180, 0.06)",
      border: "1px solid rgba(0,229,180,0.18)",
    },
  };

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...commonProps}>
        {label}
      </Link>
    );
  }

  return (
    <a
      href={href}
      {...commonProps}
    >
      {label}
    </a>
  );
}
