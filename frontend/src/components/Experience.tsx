export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Software Development Intern",
      company: "Cognifyz Technologies",
      date: "Month Year – Present",
      description: "Engineered scalable backend solutions using Python. [Add specific achievements, e.g., Optimized database queries reducing load time by 20%].",
      techStack: ["Python", "Backend Architecture", "Data Structures"],
    },
    {
      id: 2,
      role: "Technical Intern",
      company: "Internvision",
      date: "Month Year – Month Year",
      description: "Collaborated on technical projects and developed functional application modules. [Add a specific project or metric here].",
      techStack: ["Web Development", "Problem Solving", "Git"],
    }
  ];

  return (
   <section id="experience" className="py-24 px-8 md:px-24 bg-slate-900 text-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-50">
          <span className="text-emerald-400 font-mono text-2xl mr-2">01.</span> 
          Professional Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-0">
              {/* Timeline Line (Desktop only) */}
              <div className="hidden md:block absolute left-[8.5rem] top-2 bottom-0 w-[1px] bg-slate-700"></div>
              
              <div className="md:flex md:gap-12">
                {/* Date Side */}
                <div className="md:w-32 flex-shrink-0 mt-1 mb-2 md:mb-0">
                  <span className="text-sm font-mono text-slate-400">{exp.date}</span>
                </div>
                
                {/* Content Side */}
                <div className="md:flex-grow relative">
                  {/* Timeline Dot (Desktop only) */}
                  <div className="hidden md:block absolute -left-[3.45rem] top-2 w-3 h-3 rounded-full bg-emerald-400 outline outline-4 outline-slate-900"></div>
                  
                  <h3 className="text-xl font-bold text-slate-200">
                    {exp.role} <span className="text-emerald-400">@ {exp.company}</span>
                  </h3>
                  <p className="mt-4 text-slate-400 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <ul className="flex flex-wrap gap-3 mt-4">
                    {exp.techStack.map((tech, index) => (
                      <li 
                        key={index} 
                        className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}