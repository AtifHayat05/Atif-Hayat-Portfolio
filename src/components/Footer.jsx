function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-slate-600">
          © {new Date().getFullYear()} Mohammad Atif. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="#home"
            className="text-sm text-slate-500 transition hover:text-blue-400"
          >
            Home
          </a>

          <a
            href="#projects"
            className="text-sm text-slate-500 transition hover:text-blue-400"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-sm text-slate-500 transition hover:text-blue-400"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
