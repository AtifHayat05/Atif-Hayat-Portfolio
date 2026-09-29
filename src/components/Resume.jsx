import { motion } from "framer-motion";
import { Download, FileText, ExternalLink } from "lucide-react";

function Resume() {
  return (
    <section id="resume" className="border-t border-white/5 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-950/40 via-slate-950 to-black p-8 text-center sm:p-12"
        >
          {/* Background Glow */}
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[100px]" />

          <div className="relative">
            {/* Icon */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
              <FileText size={30} />
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Resume
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              My professional background
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-500">
              Learn more about my education, technical skills, projects and
              professional interests through my CV.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {/* View CV */}
              <a
                href="/CV.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
              >
                View CV
                <ExternalLink size={18} />
              </a>

              {/* Download CV */}
              <a
                href="/CV.html"
                download="Atif-Hayat-CV.html"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/50 px-6 py-3.5 font-semibold text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400"
              >
                Download CV
                <Download size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;
