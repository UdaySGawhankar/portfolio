export default function Achievements() {
  const achievements = [
    {
      id: 1,
      category: "Competition",
      title: "TCS CodeVita",
      organization: "Tata Consultancy Services",
      description: "Participated in global competitive programming challenges focusing on advanced algorithmic problem-solving and optimization.",
    },
    {
      id: 2,
      category: "Certification",
      title: "Data Science Workshop",
      organization: "Brainovision Solutions",
      description: "Completed an international student workshop focused on practical Data Science applications and earned an e-certificate.",
    },
    {
      id: 3,
      category: "Fellowship",
      title: "YouStarT Fellowship",
      organization: "Polygnan Foundation",
      description: "Selected for and participated in application tasks for an intensive ten-week entrepreneurship and leadership program.",
    },
    {
      id: 4,
      category: "Cloud Skills",
      title: "Google Cloud Arcade",
      organization: "Google Cloud Skills Boost",
      description: "Engaged in gamified learning paths to build and validate hands-on cloud infrastructure and deployment skills.",
    },
    {
      id: 5,
      category: "Continuous Learning",
      title: "Infosys Springboard",
      organization: "Infosys",
      description: "Completed technical masterclasses and webinars to stay updated on modern software engineering practices.",
    }
  ];

  return (
    <section id="achievements" className="py-24 px-8 md:px-24 bg-slate-900 text-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-50">
          <span className="text-emerald-400 font-mono text-2xl mr-2">03.</span> 
          Achievements & Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item) => (
            <div 
              key={item.id} 
              className="bg-slate-950 border border-slate-800 p-6 rounded-lg hover:border-emerald-500/50 transition-colors"
            >
              <div className="text-emerald-400 text-sm font-mono mb-2">
                {item.category}
              </div>
              <h3 className="text-xl font-bold text-slate-200">
                {item.title}
              </h3>
              <div className="text-slate-400 text-sm font-semibold mb-4">
                {item.organization}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}