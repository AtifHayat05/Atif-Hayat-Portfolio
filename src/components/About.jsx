import { motion } from "framer-motion";
import { Code2, Layout, Rocket } from "lucide-react";

function About() {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      text: "I build organized and maintainable frontend applications.",
    },
    {
      icon: Layout,
      title: "Modern UI",
      text: "I create responsive interfaces that look great on every screen.",
    },
    {
      icon: Rocket,
      title: "Performance",
      text: "I focus on fast, smooth and practical web experiences.",
    },
  ];

  return (
    <section
      id="about"
      className="relative border-t border-white/5 px-6 py-24 lg:px-8"
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
            About Me
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Building websites with{" "}
            <span className="text-blue-500">purpose.</span>
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            I'm a frontend web developer focused on creating modern, responsive
            and visually engaging websites. I enjoy turning ideas and designs
            into functional digital experiences.
          </p>

          <p className="mt-5 leading-8 text-slate-400">
            My main focus is React development, JavaScript, Tailwind CSS and
            creating interfaces that are simple to use while still looking
            professional.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <Icon size={24} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-500">{feature.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
