import { motion } from 'motion/react';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

const projects = [
  {
    title: "utter-pdgs-api",
    tech: "Java",
    description: "Backend API for the Utter Fresh Production Data Gathering System. Handles production-related data collection, management, and system operations. Demonstrates backend engineering skills, API design, database handling, and enterprise-style Java development."
  },
  {
    title: "utter-pdgs-web",
    tech: "TypeScript",
    description: "Frontend application for the Utter Fresh Production Data Gathering System. Works alongside the backend API and demonstrates skills in frontend engineering, user interface design, API integration, and full-stack application development."
  },
  {
    title: "ai_tool_calling",
    tech: "Java",
    description: "Java-based tool invocation system inspired by modern AI tool-calling protocols. Allows annotated Java methods to be called dynamically using JSON-like inputs. Highlights understanding of reflection, annotations, dynamic execution, and AI agent architecture."
  },
  {
    title: "SafeRoute",
    tech: "Go, Flutter, AI APIs",
    description: "Safety-focused application helping users navigate routes with better awareness of potential risks. Includes backend services, geolocation handling, mapping integrations, route processing, and AI-assisted safety analysis."
  },
  {
    title: "Smart Search Engine",
    tech: "Go, Docker, ChromaDB / pgvector",
    description: "Experimental offline search engine using embeddings and vector search to help users search files and content on their local system. Demonstrates knowledge of retrieval systems, vector databases, offline AI applications, and semantic search."
  },
  {
    title: "chromadb-java-client",
    tech: "Java",
    description: "Java client for Chroma Vector Database. A thin client implementation for interacting with vector storage systems used in AI applications such as semantic search, embeddings, retrieval-augmented generation (RAG), and AI memory systems."
  },
  {
    title: "SafeRoute News API",
    tech: "Go, PostgreSQL",
    description: "News aggregation API focused on Nigerian news sources. Collects, processes, and serves news content in a structured format. Demonstrates web scraping, backend engineering, data pipelines, API design, and scalable content platforms."
  },
  {
    title: "student-social-website",
    tech: "TypeScript",
    description: "Platform designed for students and learners. Includes user profiles, communication, collaboration, and social interaction features. Demonstrates frontend architecture, authentication systems, and community-oriented software design."
  },
  {
    title: "studypal",
    tech: "Dart",
    description: "Study-related mobile application built with Dart, likely using Flutter. Suggests an interest in educational technology, productivity, and cross-platform mobile development."
  },
  {
    title: "My-Idea-Management-App",
    tech: "Dart",
    description: "Mobile application for managing and organizing ideas. Demonstrates mobile UI development, local data handling, productivity-focused design, and structured content organization."
  },
  {
    title: "NewsApp",
    tech: "Dart",
    description: "News-focused mobile application that fetches and displays current news content. Demonstrates API integration, state management, responsive UI design, and content presentation within a Flutter-based application."
  },
  {
    title: "Hotel-Booking-System",
    tech: "Java",
    description: "Hotel booking and reservation management system. Demonstrates understanding of object-oriented programming, business logic implementation, user management, reservation workflows, and possibly database integration."
  },
  {
    title: "Weather-App",
    tech: "TypeScript",
    description: "Weather application that integrates with weather APIs to display forecasts and current conditions. Demonstrates API consumption, frontend design, asynchronous programming, and user-focused interface development."
  },
  {
    title: "Expense-Tracker",
    tech: "TypeScript",
    description: "Financial tracking application for recording expenses and managing budgets. Highlights CRUD operations, data visualization, frontend engineering, and productivity-focused software design."
  },
  {
    title: "Portfolio-Website",
    tech: "TypeScript",
    description: "Personal portfolio website used to showcase projects, skills, and achievements. Demonstrates frontend design, responsive layouts, branding, and professional presentation."
  },
  {
    title: "Chat-App",
    tech: "TypeScript",
    description: "Real-time messaging or chat application. Demonstrates experience with user authentication, real-time communication, frontend state handling, and interactive application development."
  },
  {
    title: "Quiz-App",
    tech: "JavaScript / TypeScript",
    description: "Educational quiz platform that allows users to answer questions and track performance. Demonstrates frontend logic, user interaction design, educational software development, and score tracking."
  },
  {
    title: "Developer CLI / TUI Tools",
    tech: "Go",
    description: "Terminal-based applications and command-line tools. Demonstrates experience with low-level systems, terminal interfaces, developer productivity, and creating lightweight utilities for real-world use."
  },
  {
    title: "File Sharing / Campus Network Tools",
    tech: "Go, Networking",
    description: "Software that can operate on local networks, including campus or school environments. Demonstrates understanding of networking concepts, local deployment, static IP usage, server-client communication, and software distribution."
  },
  {
    title: "AI and RAG Experiments",
    tech: "Java, Go, Vector Databases",
    description: "Experimentation with retrieval-augmented generation, embeddings, tool calling, and local AI systems. Highlights curiosity and hands-on experience with modern AI workflows and intelligent software design."
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Key Repositories</h2>
          <div className="w-24 h-1 bg-zinc-200 mx-auto rounded-full mb-6" />
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            A selection of my 60+ repositories spanning Java, TypeScript, Dart, Go, and experimental AI-related projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="group bg-zinc-50 border border-zinc-200 rounded-2xl p-6 hover:border-zinc-300 hover:shadow-md transition-all flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-white border border-zinc-200 rounded-xl flex items-center justify-center text-zinc-700 shadow-sm">
                  <FolderGit2 className="w-5 h-5" />
                </div>
                <a 
                  href={`https://github.com/ttomsin/${project.title.replace(/ /g, '-')}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-zinc-900 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
              
              <h3 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              
              <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-zinc-200/50 text-zinc-700 text-xs font-mono font-medium mb-4 w-fit">
                {project.tech}
              </div>
              
              <p className="text-zinc-600 text-sm leading-relaxed flex-grow">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
