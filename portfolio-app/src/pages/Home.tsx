import { Link } from 'react-router-dom';
import MatrixRain from '../components/MatrixRain';

const strengths = [
  {
    title: "LLM Orchestration",
    description: "Building resilient, multi-agent reasoning loops. Leveraging graph-based state management for non-linear task execution.",
    icon: "neurology",
    code: `from langgraph.graph import StateGraph
graph.add_node("agent", call_model)
graph.set_entry_point("agent")`,
    label: "STRENGTH_01"
  },
  {
    title: "Neural Frameworks",
    description: "Fine-tuning transformer architectures and implementing efficient inference pipelines. Expertise in PyTorch ecosystem.",
    icon: "memory",
    code: `precision: "bf16"
optimizer: "AdamW"
scheduler: "cosine_decay"`,
    label: "STRENGTH_02"
  },
  {
    title: "Scalable Backends",
    description: "Hardened distributed systems. Asynchronous processing with FastAPI, Redis caching strategies, and Docker orchestration.",
    icon: "database",
    code: `docker-compose up -d
curl -X GET "/v1/health"
system_status: OK`,
    label: "STRENGTH_03"
  }
];

const techStack = [
  { icon: "terminal", label: "PYTHON_CORE", subtext: "High-Performance Runtime" },
  { icon: "hub", label: "LANGGRAPH", subtext: "Agentic State Control" },
  { icon: "bolt", label: "FASTAPI", subtext: "Async API Framework" },
  { icon: "storage", label: "POSTGRES_REDIS", subtext: "Persistent Memory Systems" }
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <main className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center pt-32 pb-20 px-6 md:px-20 overflow-hidden">
        {/* Matrix Rain Background */}
        <MatrixRain />
        
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none"></div>
        <div className="scanline top-0"></div>
        
        <div className="relative z-10 max-w-5xl page-transition">
          <div className="mb-4 inline-block px-3 py-1 bg-surface-container-low border border-outline-variant/30 text-primary-container font-label text-[10px] tracking-[0.2em] uppercase">
            // JIMIT BHATT // SYSTEM_READY
          </div>
          
          <h1 className="font-headline text-5xl md:text-8xl font-bold text-on-surface leading-tight tracking-tighter mb-8 max-w-4xl">
            ARCHITECTING_<span className="text-primary-container">AUTONOMOUS</span>_SYSTEMS
          </h1>
          
          <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl border-l-2 border-primary-container pl-6 leading-relaxed mb-12">
            Hi, I'm <span className="text-primary-container font-bold">Jimit Bhatt</span> — Python Engineer specializing in LLM orchestration, agentic workflows, and high-scale backends. Translating complex reasoning into production-grade infrastructure.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/projects" className="bg-primary-container text-on-primary-container font-label font-bold px-8 py-4 uppercase tracking-widest text-sm hover:bg-primary transition-all duration-200 active:scale-95 flex items-center gap-3 group">
              PROJECT_HUB
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
            <button className="border border-primary-container text-primary-container font-label font-bold px-8 py-4 uppercase tracking-widest text-sm hover:bg-primary-container/10 transition-all duration-200 flex items-center gap-3">
              VIEW_DOCUMENTATION
              <span className="material-symbols-outlined text-sm">terminal</span>
            </button>
          </div>
        </div>
      </main>
      
      {/* Technical Highlights */}
      <section className="bg-surface-container-lowest py-24 px-6 md:px-20 relative">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="max-w-md">
            <h2 className="font-headline text-3xl font-bold text-on-surface uppercase tracking-tighter flex items-center gap-4">
              <span className="text-primary-container font-mono text-xl">01.</span> CORE_STRENGTHS
            </h2>
            <div className="h-1 w-20 bg-primary-container mt-4"></div>
          </div>
          <p className="text-on-surface-variant font-body max-w-lg leading-relaxed">
            Expertise built at the intersection of traditional backend stability and the emergent frontier of cognitive computing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/20 border border-outline-variant/20">
          {strengths.map((item, index) => (
            <div key={index} className="bg-background p-8 group hover:bg-surface-container-low transition-colors duration-300">
              <div className="flex justify-between items-start mb-8">
                <span className="material-symbols-outlined text-primary-container text-4xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                <span className="font-label text-xs text-outline tracking-widest uppercase">{item.label}</span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-4 uppercase tracking-tighter group-hover:text-primary-container transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-on-surface-variant font-body text-sm mb-6 leading-relaxed">
                {item.description}
              </p>
              <div className="bg-surface-container-lowest p-4 font-mono text-[11px] border border-outline-variant/10">
                <div className="text-outline mb-1">// code snippet</div>
                <div className="whitespace-pre-wrap text-primary-container text-[10px]">{item.code}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Tech Stack Section */}
      <section className="py-24 px-6 md:px-20 bg-background border-y border-outline-variant/10 overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline text-3xl font-bold text-on-surface uppercase tracking-tighter mb-16 text-center">
            FOUNDATIONAL_TECH_STACK
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center group cursor-default">
                <div className="w-16 h-16 bg-surface-container flex items-center justify-center mb-6 group-hover:border group-hover:border-primary-container transition-all duration-300 group-hover:scale-110">
                  <span className="material-symbols-outlined text-primary-container text-2xl">{item.icon}</span>
                </div>
                <span className="font-label font-bold text-xs tracking-widest mb-2">{item.label}</span>
                <span className="text-on-surface-variant text-[10px] font-body uppercase">{item.subtext}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-32 px-6 text-center bg-surface-container-lowest relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-headline text-4xl md:text-6xl font-bold mb-8 uppercase tracking-tighter">
            READY_TO_<span className="text-primary-container">DEPLOY</span>?
          </h2>
          <p className="font-body text-on-surface-variant text-lg mb-12">
            Currently available for specialized agentic AI consultancy and senior backend architecture roles.
          </p>
          <Link to="/contact" className="bg-primary-container text-on-primary-container font-label font-bold px-12 py-5 uppercase tracking-[0.2em] text-sm hover:bg-primary transition-all duration-200 active:scale-95 border-none inline-block">
            INITIALIZE_PROJECT
          </Link>
        </div>
        
        {/* Decorative Border accents */}
        <div className="absolute top-0 left-10 w-px h-full bg-outline-variant/20"></div>
        <div className="absolute top-0 right-10 w-px h-full bg-outline-variant/20"></div>
      </section>
    </>
  );
};

export default Home;