import { motion } from "framer-motion";
import { ArrowRight, Download, Mouse } from "lucide-react";
import profileImage from "../assets/Profile.JPG";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20 lg:px-8"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

      {/* Grid Background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Status */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
            Available for freelance work
          </div>

          <p className="text-lg font-medium text-slate-400">Hello, I'm</p>

          <h1 className="mt-3 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Atif{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Hayat
            </span>
          </h1>

          <h2 className="mt-6 text-2xl font-bold text-slate-200 sm:text-3xl">
            Frontend Web Developer
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            I create modern, responsive and user-friendly websites using React,
            JavaScript and Tailwind CSS. I focus on clean interfaces, smooth
            interactions and practical web experiences.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
            >
              View My Work
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="/CV.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/50 px-6 py-3.5 font-semibold text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400"
            >
              Download Resume
              <Download size={18} />
            </a>
          </div>

          {/* Social */}
          <div className="mt-9 flex items-center gap-3">
            <span className="mr-2 text-sm text-slate-600">Find me on</span>

            <a
              href="https://github.com/AtifHayat05"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 text-slate-400 transition hover:border-blue-500 hover:text-blue-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.49.5.092.682-.217.682-.483 0-.237-.009-1.027-.014-1.863-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.465-1.11-1.465-.908-.621.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.529 2.341 1.087 2.91.831.091-.646.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.337-.012 2.415-.012 2.744 0 .269.18.58.688.482A10.002 10.002 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
              </svg>
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 text-slate-400 transition hover:border-blue-500 hover:text-blue-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative h-[330px] w-[330px] sm:h-[420px] sm:w-[420px]">
            {/* Glow */}
            <div className="absolute inset-8 rounded-full bg-blue-600/20 blur-[70px]" />

            {/* Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-2 rounded-full border border-dashed border-blue-500/30"
            />

            {/* Profile Image */}
            <div className="absolute inset-8 overflow-hidden rounded-full border border-blue-500/30 bg-black shadow-2xl shadow-blue-950/50">
              <img
                src={profileImage}
                alt="Mohammad Atif"
                className="h-full w-full object-cover"
              />
            </div>

            {/* React Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute left-0 top-16 rounded-xl border border-slate-800 bg-slate-950/90 px-4 py-3 shadow-xl backdrop-blur-xl"
            >
              <p className="text-xs text-slate-500">Frontend</p>

              <p className="mt-1 font-bold text-blue-400">React.js</p>
            </motion.div>

            {/* Tailwind Card */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 1,
              }}
              className="absolute bottom-16 right-0 rounded-xl border border-slate-800 bg-slate-950/90 px-4 py-3 shadow-xl backdrop-blur-xl"
            >
              <p className="text-xs text-slate-500">Styling</p>

              <p className="mt-1 font-bold text-cyan-400">Tailwind CSS</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-600 transition hover:text-blue-400 sm:flex"
      >
        <Mouse size={20} />
        <span className="text-xs">Scroll down</span>
      </motion.a>
    </section>
  );
}

export default Hero;
