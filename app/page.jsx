"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Education from "../components/Education";
import ContactFooter from "../components/ContactFooter";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
        <Header />
      </motion.div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 pb-24 space-y-16">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
          <About />
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
          <Experience />
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
          <Skills />
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}>
          <Education />
        </motion.div>
      </div>

      <ContactFooter />
    </main>
  );
}
