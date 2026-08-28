import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-slate-950 flex flex-col justify-center px-8 md:px-24">
        <div className="max-w-4xl">
          <p className="text-emerald-400 font-mono text-lg mb-4">&gt; Hello, World. My name is</p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-50 tracking-tight mb-4">Uday Gawhankar.</h1>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-8">I engineer data-driven backend systems.</h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-2xl">
            I am a Software Developer and Data Science Enthusiast focused on building scalable applications using Python, modern web frameworks, and robust database architectures.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-8 rounded-md transition-colors"
            >
              View My Work
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="border border-slate-700 hover:border-slate-500 text-slate-300 font-semibold py-3 px-8 rounded-md transition-colors flex items-center gap-2"
            >
              GitHub
            </a>
          </div>
        </div>
      </main>

      <Experience />
      <Projects />
      <Achievements />
      <Contact />
    </>
  );
}
