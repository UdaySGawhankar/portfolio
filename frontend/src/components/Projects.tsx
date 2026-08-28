export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Scalable Python Backend API",
      description: "A high-performance REST API built to handle dynamic data processing and structured database routing. Engineered with modern asynchronous practices.",
      techStack: ["Python", "FastAPI", "PostgreSQL"],
      githubLink: "https://github.com",
      liveLink: "#",
    },
    {
      id: 2,
      title: "Data Science & Analytics Pipeline",
      description: "Developed predictive models and data visualization pipelines to extract actionable insights from raw, unstructured datasets.",
      techStack: ["Python", "Pandas", "Machine Learning"],
      githubLink: "https://github.com",
      liveLink: "#",
    },
    {
      id: 3,
      title: "Cloud Infrastructure Deployment",
      description: "Deployed containerized applications utilizing cloud computing resources for robust, highly available microservices.",
      techStack: ["Google Cloud", "Docker", "CI/CD"],
      githubLink: "https://github.com",
      liveLink: "#",
    }
  ];

  return (
    <section id="projects" className="py-24 px-8 md:px-24 bg-slate-950 text-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-50">
          <span className="text-emerald-400 font-mono text-2xl mr-2">02.</span> 
          Selected Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="text-emerald-400">
                  {/* Folder Icon SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="flex gap-3">
                  <a href={project.githubLink} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">
                    {/* GitHub Icon SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-200 mb-2">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map((tech, index) => (
                  <li key={index} className="text-xs font-mono text-slate-500">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}