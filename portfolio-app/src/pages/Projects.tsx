import { Link } from 'react-router-dom';

const projects = [
  {
    title: "NEURAL_SWARM V2.0",
    description: "A decentralized orchestration layer for multi-agent systems utilizing asynchronous Python kernels to handle swarm intelligence tasks across distributed nodes.",
    icon: "hub"
  },
  {
    title: "VOX_KERN_OS",
    description: "Custom micro-kernel implementation for voice-operated agentic systems. Optimized for low-latency inference and real-time state management.",
    icon: "settings_voice"
  },
  {
    title: "GHOST_TRAFFIC",
    description: "Predictive traffic simulation using transformer-based models to forecast urban movement patterns. Built for high-dimensional data streams.",
    icon: "traffic"
  },
  {
    title: "AGENT_SCRYER",
    description: "A visual debugger for agentic decision trees. Allows developers to step through the \"thought process\" of an LLM agent in real-time.",
    icon: "account_tree"
  }
];

const Projects = () => {
  return (
    <main className="flex-grow pt-24 pb-24 px-6 md:px-20 max-w-6xl mx-auto w-full page-transition">
      {/* Section Header */}
      <div className="mb-24">
        <span className="font-label text-primary-container text-[10px] tracking-[0.5em] uppercase block mb-6">// SELECTED_WORKS</span>
        <h1 className="font-headline text-6xl md:text-8xl font-bold uppercase tracking-tighter text-primary mb-6">PROJECT_LOG</h1>
        <p className="text-on-surface-variant max-w-xl text-sm leading-relaxed opacity-80">
          A showcase of autonomous systems and neural frameworks optimized for high-performance AI environments.
        </p>
      </div>
      
      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {projects.map((project, index) => (
          <div key={index} className="group flex flex-col opacity-0 slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
            <div className="aspect-video bg-surface-container-low border border-outline-variant/10 mb-8 overflow-hidden relative group-hover:border-primary-container/30 transition-colors duration-300">
              <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <span className="material-symbols-outlined text-8xl">{project.icon}</span>
              </div>
              <div className="absolute inset-0 bg-primary-container/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="font-headline text-3xl font-bold text-primary mb-4 tracking-tight group-hover:text-primary-container transition-colors duration-300">{project.title}</h3>
            <p className="text-sm text-on-surface-variant mb-8 leading-relaxed flex-grow opacity-70">
              {project.description}
            </p>
            <div className="flex gap-4">
              <button className="font-label text-[10px] uppercase tracking-[0.2em] py-3 px-6 border border-outline-variant text-on-surface hover:border-primary-container hover:text-primary-container transition-all duration-200 flex items-center gap-2 group/btn">
                SOURCE
              </button>
              <Link to="/contact" className="font-label text-[10px] uppercase tracking-[0.2em] py-3 px-6 bg-primary-container text-on-primary-container hover:bg-primary transition-all duration-200 flex items-center gap-2">
                DETAILS <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {/* Terminal Footer Control */}
      <div className="mt-32 pt-12 border-t border-outline-variant/10 flex justify-between items-center font-label text-[10px] tracking-[0.3em] text-outline/50 uppercase">
        <div className="flex items-center gap-8">
          <span className="text-primary-container/50 hover:text-primary-container cursor-pointer transition-colors">PREV_ARCHIVE</span>
          <span className="text-primary-container/50 hover:text-primary-container cursor-pointer transition-colors">NEXT_ARCHIVE</span>
        </div>
        <div className="hidden md:block">
          END_OF_LIST // 04_RECORDS_SHOWN
        </div>
      </div>
    </main>
  );
};

export default Projects;