import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/5 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Let's build something together.
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            Have a project idea or need a modern website? Send me a message and
            let's talk about it.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <Mail size={22} />
              </div>

              <p className="mt-5 text-sm text-slate-500">Email</p>

              <a
                href="mailto:your@email.com"
                className="mt-2 block font-medium text-white transition hover:text-blue-400"
              >
                atifhayatdev@email.com
              </a>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <MapPin size={22} />
              </div>

              <p className="mt-5 text-sm text-slate-500">Location</p>

              <p className="mt-2 font-medium text-white">Pakistan</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Subject
              </label>

              <input
                type="text"
                placeholder="Project subject"
                className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Message
              </label>

              <textarea
                rows="6"
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
            >
              Send Message
              <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
