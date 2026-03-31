import { motion } from 'motion/react';
import { Database, Layout, Server, Smartphone, Terminal, BrainCircuit } from 'lucide-react';

const skills = [
  {
    category: "Backend Engineering",
    icon: <Server className="w-6 h-6" />,
    items: ["Java", "Go", "REST APIs", "Full-stack architecture"]
  },
  {
    category: "Frontend Development",
    icon: <Layout className="w-6 h-6" />,
    items: ["TypeScript", "React", "Web Applications", "UI/UX Design"]
  },
  {
    category: "Mobile Development",
    icon: <Smartphone className="w-6 h-6" />,
    items: ["Dart", "Flutter", "Cross-platform Apps"]
  },
  {
    category: "Data & Infrastructure",
    icon: <Database className="w-6 h-6" />,
    items: ["Database Systems", "PostgreSQL", "Docker", "Vector Databases (ChromaDB)"]
  },
  {
    category: "Artificial Intelligence",
    icon: <BrainCircuit className="w-6 h-6" />,
    items: ["AI Tooling", "RAG Systems", "Embeddings", "AI-assisted systems"]
  },
  {
    category: "Developer Tools",
    icon: <Terminal className="w-6 h-6" />,
    items: ["CLI / TUI Tools", "Reflection (Java)", "Annotations", "Networking"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-zinc-50 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-zinc-200 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-zinc-100 text-zinc-700 rounded-2xl flex items-center justify-center mb-6">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">{skill.category}</h3>
              <ul className="space-y-3">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center text-zinc-600">
                    <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
