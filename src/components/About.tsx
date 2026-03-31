import { motion } from 'motion/react';
import { BookOpen, Code2, GraduationCap } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-white px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-zinc-200 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 space-y-6 text-lg text-zinc-600 leading-relaxed"
          >
            <p>
              My name is Thompson, and I am a software developer with strong interests in backend engineering, artificial intelligence, mobile applications, web development, and developer tools. I enjoy building practical software solutions that solve real-world problems, especially in education, productivity, automation, and intelligent systems.
            </p>
            <p>
              I am currently a student and actively building projects both for learning and for real-world use cases. Over time, I have developed skills in Java, TypeScript, Dart, Flutter, Go, REST APIs, database systems, and AI-powered applications.
            </p>
            <p>
              My goal as a developer is to continue building software that is useful, scalable, and impactful while improving my knowledge in backend systems, AI, distributed systems, and full-stack application development.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900">Current School</h3>
                  <p className="text-sm text-zinc-500">Adeleke University</p>
                </div>
              </div>
              <p className="text-sm text-zinc-600">
                Improving technical and problem-solving skills through academic work and personal projects.
              </p>
            </div>

            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900">Profile Overview</h3>
                  <p className="text-sm text-zinc-500">60+ Repositories</p>
                </div>
              </div>
              <p className="text-sm text-zinc-600">
                Spanning Java, TypeScript, Dart, Go, and experimental AI-related projects.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
