import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Initials */}
          <Link href="/" className="text-xl font-bold text-emerald-400 font-mono tracking-tighter">
            UG.
          </Link>
          
          {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
            <a href="#experience" className="hover:text-emerald-400 transition-colors">
                Experience
            </a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">
                Projects
            </a>
            <a href="#achievements" className="hover:text-emerald-400 transition-colors">
                Achievements
            </a>
            </div>
          {/* Contact Button */}
          <a 
            href="#contact" 
            className="px-4 py-2 rounded-md border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-slate-950 transition-colors text-sm font-semibold"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </nav>
  );
}