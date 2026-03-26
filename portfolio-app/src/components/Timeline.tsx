const careerHistory = [
  {
    period: "2022 — PRESENT",
    status: "ACTIVE",
    title: "Senior AI Architect",
    company: "NEURAL_DYNAMICS_INC // REMOTE",
    description: [
      "Engineered a multi-agent orchestration framework using Python and LangGraph, reducing manual data processing latency by 65%.",
      "Architected vector database schemas (Pinecone/Weaviate) for RAG systems serving 1M+ daily active queries.",
      "Led a team of 5 engineers in deploying secure, air-gapped LLM instances for enterprise financial compliance."
    ],
    tags: ["PYTHON_3.12", "LANGCHAIN", "FASTAPI", "PYTORCH"],
    isActive: true
  },
  {
    period: "2020 — 2022",
    status: "COMPLETED",
    title: "Python Engineer",
    company: "CORE_LOGIC_SYSTEMS // AUSTIN_TX",
    description: [
      "Developed distributed microservices handling real-time telemetry data for industrial IoT sensors.",
      "Optimized PostgreSQL query performance, achieving a 40% improvement in read-heavy dashboard loads.",
      "Implemented automated CI/CD pipelines using GitHub Actions and Docker, reducing deployment errors by 22%."
    ],
    tags: ["DJANGO", "REDIS", "DOCKER", "KUBERNETES"],
    isActive: false
  },
  {
    period: "2018 — 2020",
    status: "LEGACY",
    title: "Junior ML Specialist",
    company: "DATA_MORPH_LABS // PALO_ALTO",
    description: [
      "Maintained and tuned computer vision models for automated quality inspection lines.",
      "Cleaned and pre-processed 500GB+ datasets using NumPy and Pandas for feature engineering."
    ],
    tags: ["SCIKIT-LEARN", "TENSORFLOW", "PANDAS"],
    isActive: false
  }
];

const Timeline = () => {
  return (
    <div className="relative border-l border-[#3b4b37]/30 ml-4 md:ml-0">
      {careerHistory.map((job, index) => (
        <div 
          key={index} 
          className={`mb-20 relative pl-12 opacity-0 slide-up`}
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          {/* Timeline Node */}
          <div 
            className={`absolute -left-[5px] top-0 w-[10px] h-[10px] ${
              job.isActive 
                ? 'bg-primary-container shadow-[0_0_10px_rgba(0,255,65,0.5)]' 
                : 'bg-outline-variant'
            }`}
          />
          
          <div className={`grid grid-cols-1 md:grid-cols-12 gap-6 ${
            !job.isActive ? 'opacity-80 hover:opacity-100 transition-opacity duration-300' : ''
          }`}>
            {/* Period Column */}
            <div className="md:col-span-3">
              <span className={`font-label ${job.isActive ? 'text-primary-container' : 'text-on-surface'} text-sm font-bold`}>
                {job.period}
              </span>
              <div className="text-on-surface-variant text-[10px] mt-1 font-mono tracking-widest">
                STATUS: {job.status}
              </div>
            </div>
            
            {/* Content Column */}
            <div className={`md:col-span-9 bg-surface-container-low p-8 border ${
              job.isActive 
                ? 'border-primary-container/40 hover:border-primary-container/60 transition-colors duration-300' 
                : 'border-outline-variant/10'
            }`}>
              <h3 className="font-headline text-2xl text-primary font-bold mb-1">
                {job.title}
              </h3>
              <div className="text-on-surface font-label text-sm tracking-wide mb-6">
                {job.company}
              </div>
              <ul className="space-y-4 text-on-surface-variant text-sm leading-relaxed">
                {job.description.map((desc, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-primary-container font-mono">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-2">
                {job.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-surface-container-high text-[10px] font-label text-on-surface tracking-wider hover:bg-primary-container hover:text-on-primary-container transition-colors duration-200 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;