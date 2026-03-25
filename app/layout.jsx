import { ThemeProvider } from "next-themes";
import ThemeToggle from "../components/ThemeToggle";
import CookieBanner from "../components/CookieBanner";
import "./globals.css";

export const metadata = {
  title: "Juan Araque Romero | Técnico de Sistemas",
  description:
    "Técnico en Sistemas Informáticos con más de 10 años de experiencia en soporte, mantenimiento y administración de infraestructuras TI.",
  openGraph: {
    title: "Juan Araque Romero | Técnico de Sistemas",
    description: "Portfolio y CV online de Juan Araque Romero.",
    url: "https://nextjs-boilerplate-ivory-theta-38.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div
            aria-hidden="true"
            className="fixed inset-0 -z-10 pointer-events-none opacity-50"
            style={{
              backgroundImage: "url(/images/logo-unified.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center 120px",
              backgroundSize: "clamp(320px, 90vw, 900px)",
            }}
          />
          <ThemeToggle />
          {children}
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
