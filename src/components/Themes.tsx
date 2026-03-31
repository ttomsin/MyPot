import { motion } from 'motion/react';
import { Layers, Lightbulb, GraduationCap, Code, Smartphone, Wrench } from 'lucide-react';

const themes = [
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Full-Stack Architecture",
    description: "Full-stack development using Java for backend systems and TypeScript for frontend applications."
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "AI & Intelligent Systems",
    description: "Strong interest in AI systems, including tool-calling frameworks, vector databases, and retrieval-based architectures."
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Education & Productivity",
    description: "Focus on educational and student-centered applications that solve real-world problems."
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Backend & APIs",
    description: "Experience with APIs, backend logic, and database-driven applications."
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Cross-Platform Mobile",
    description: "Ability to build both web and mobile applications using modern frameworks like Flutter."
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Practical Problem Solving",
    description: "Interest in solving real-world problems with software rather than only building tutorial projects."
  }
];

export function Themes() {
  return (
    <section id="themes" className="py-24 bg-zinc-900 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Common Themes</h2>
          <div className="w-24 h-1 bg-zinc-700 mx-auto rounded-full mb-6" />
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            A clear theme across my repositories is solving practical problems with technology, especially in education, productivity, APIs, developer tools, and AI-assisted systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-800/50 p-8 rounded-3xl border border-zinc-700/50 hover:bg-zinc-800 transition-colors"
            >
              <div className="w-12 h-12 bg-zinc-700/50 text-emerald-400 rounded-2xl flex items-center justify-center mb-6">
                {theme.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{theme.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {theme.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
