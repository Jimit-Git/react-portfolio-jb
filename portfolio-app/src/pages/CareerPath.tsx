import Timeline from '../components/Timeline';
import TerminalSection from '../components/TerminalSection';

const CareerPath = () => {
  return (
    <main className="flex-grow pt-24 pb-20 px-6 md:px-20 page-transition">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-label text-primary-container text-xs tracking-[0.3em] uppercase mb-4 block">
            // SYSTEM.LOG / DEPLOYMENT_HISTORY
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary tracking-tighter mb-6">
            CAREER_PATH
          </h1>
          <div className="h-px w-32 bg-primary-container mb-8"></div>
          <p className="font-body text-on-surface-variant max-w-xl leading-relaxed">
            Iterative progression through the stack. Specializing in autonomous agent orchestration, 
            large language model integration, and high-performance Python architectures.
          </p>
        </div>
        
        {/* Timeline */}
        <Timeline />
        
        {/* Terminal Section */}
        <TerminalSection />
      </div>
    </main>
  );
};

export default CareerPath;