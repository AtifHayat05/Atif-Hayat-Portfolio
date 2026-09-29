import { motion } from "framer-motion";

function Skills() {
  const skills = [
    {
      name: "HTML",
      level: "Advanced",
      percentage: 90,
    },
    {
      name: "CSS",
      level: "Advanced",
      percentage: 88,
    },
    {
      name: "JavaScript",
      level: "Intermediate",
      percentage: 80,
    },
    {
      name: "React.js",
      level: "Intermediate",
      percentage: 82,
    },
    {
      name: "Tailwind CSS",
      level: "Advanced",
      percentage: 90,
    },
    {
      name: "Git & GitHub",
      level: "Intermediate",
      percentage: 78,
    },
  ];

  return (
    <section id="skills" className="border-t border-white/5 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            My Skills
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Technologies I work with.
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-slate-400">
            My current technical skill set focuses on frontend development and
            modern web technologies.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-white">{skill.name}</h3>

                  <p className="mt-1 text-sm text-slate-500">{skill.level}</p>
                </div>

                <span className="text-sm font-bold text-blue-400">
                  {skill.percentage}%
                </span>
              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${skill.percentage}%`,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.2 + index * 0.1,
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
