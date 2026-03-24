# CV Web — Juan Araque Romero

Portfolio y CV online construido con **Next.js 14**, **Tailwind CSS**, **Framer Motion** y **next-themes**.

---

## 🚀 Instalación rápida

### Opción A (recomendado): usar este repo directamente
```bash
npm install
npm run dev
```
Abre http://localhost:3000 🎉

> Nota: si estás usando un entorno sandbox (como algunos asistentes), puede bloquear el puerto y mostrar `EPERM`.

### 1. Crea el proyecto Next.js
```bash
npx create-next-app@latest mi-cv
cd mi-cv
```
Opciones recomendadas:
- TypeScript → **No**
- Tailwind CSS → **Sí**
- App Router → **Sí**
- ESLint → **Sí**

### 2. Instala dependencias
```bash
npm install framer-motion next-themes react-to-pdf
```

### 3. Copia los archivos de este proyecto
Copia todas las carpetas y archivos en tu proyecto:
- `app/` → reemplaza el contenido existente
- `components/` → copia la carpeta entera
- `tailwind.config.js` → reemplaza el existente

### 4. Añade tus imágenes
Crea la carpeta `public/images/` y añade:
- `photo.png` → tu foto profesional
- `logo-emblem.png` → el emblema hexagonal JA
- `logo-text.png` → el logo con texto "JUAN — ARAQUE"

### 5. Inicia el servidor de desarrollo
```bash
npm run dev
```
Abre http://localhost:3000 🎉

---

## 📦 Despliegue en Vercel

```bash
# Opción A: CLI de Vercel
npm install -g vercel
vercel

# Opción B: Conecta tu repositorio de GitHub en vercel.com
# Cada git push despliega automáticamente
```

---

## 🎨 Personalización

### Colores
Edita las variables CSS en `app/globals.css`:
```css
--teal-start: #00e5b4;   /* Color principal */
--teal-end:   #00b4e5;   /* Color secundario */
```

### Contenido
- **Perfil**: `components/About.jsx`
- **Experiencia**: `components/Experience.jsx` → edita el array `jobs`
- **Habilidades**: `components/Skills.jsx` → edita `skillGroups`
- **Formación**: `components/Education.jsx` → edita el array `education`

---

## 📄 Descarga de PDF
El botón "Descargar CV" en la esquina inferior derecha genera un PDF
de la página completa usando `react-to-pdf`.

---

## 🌙 Modo oscuro / claro
El botón ☀️/🌙 en la esquina superior derecha alterna entre temas.
El modo oscuro es el predeterminado y coincide con tu identidad visual.
