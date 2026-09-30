import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "Butt Karahi",
      category: "Restaurant Website",
      description:
        "A modern restaurant website featuring menu information, locations, reviews and responsive navigation.",
      technologies: ["JavaScript", "React", "Tailwind CSS"],
      image: "/Images/butt-karahi.png",
      liveLink: "https://buttkarahi1.vercel.app/",
      githubLink: "https://github.com/AtifHayat05/butt-karahi",
    },

    {
      title: "Midnight Whisking",
      category: "Bakery Website",
      description:
        "A modern bakery website featuring cakes, treats, amenities, pricing and contact information.",
      technologies: ["React", "Tailwind CSS", "Vite"],
      image: "/Images/midnight-whisking.png",
      liveLink: "https://midnight-whisking.vercel.app/",
      githubLink: "https://github.com/AtifHayat05/Midnight-Whisking",
    },

    {
      title: "Atif Hayat Portfolio",
      category: "Web Application",
      description:
        "A modern responsive portfolio showcasing my skills, projects, resume and frontend development work.",
      technologies: ["React", "Tailwind CSS", "Vite"],
      image: "/Images/AtifHayat-portfolio.png",
      liveLink: "https://atifhayat.vercel.app/",
      githubLink: "https://github.com/AtifHayat05/Atif-Hayat-Portfolio",
    },
  ];

  return (
    <section
      id="projects"
      className="border-t border-white/5 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            My Projects
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Things I've built.
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-slate-400">
            A selection of websites and applications I've developed while
            practicing modern frontend development.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/70 transition duration-300 hover:-translate-y-2 hover:border-blue-500/40"
            >
              {/* Screenshot */}
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-500">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs text-slate-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-6 flex items-center gap-3 border-t border-slate-800 pt-5">
                  <a
                    href={project.liveLink}
                    className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
                  >
                    Live Demo
                    <ExternalLink size={15} />
                  </a>

                  <a
                    href={project.githubLink}
                    className="flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-blue-500 hover:text-blue-400"
                  >
                    <span className="text-xs font-bold">GitHub</span>
                    Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
