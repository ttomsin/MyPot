import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-950 py-12 px-6 border-t border-zinc-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-zinc-400 font-medium">
            © {new Date().getFullYear()} Oretan Thompson Bolaji.
          </p>
          <p className="text-zinc-500 text-sm mt-1">
            Software Developer | Adeleke University
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/ttomsin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="mailto:jvmmonster1@gmail.com" 
            className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
