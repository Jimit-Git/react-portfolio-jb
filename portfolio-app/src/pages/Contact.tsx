import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="flex-grow pt-24 pb-20 px-6 md:px-20 relative page-transition">
      {/* Asymmetric Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-[#3b4b37]/20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
        {/* Left Header Column */}
        <div className="col-span-12 md:col-span-4 flex flex-col space-y-4">
          <div className="inline-flex items-center space-x-2 text-primary-container font-label text-[10px] tracking-[0.3em] uppercase">
            <span className="w-2 h-2 bg-primary-container animate-pulse"></span>
            <span>System Status: Ready</span>
          </div>
          <h1 className="font-headline text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none text-primary">
            Secure<br/>Connection
          </h1>
          <p className="text-on-surface-variant font-body text-sm max-w-xs pt-4 border-t border-outline-variant/30">
            Hi, I'm <span className="text-primary-container font-bold">Jimit Bhatt</span>. Let's connect to discuss Python architecture and Agentic AI deployment opportunities.
          </p>
          <div className="pt-12 hidden md:block">
            <div className="bg-surface-container-lowest p-6 border border-outline-variant/20 font-label text-[10px] leading-relaxed opacity-60">
              <p className="text-primary-fixed">// ENCRYPTION_LAYER: ACTIVE</p>
              <p className="text-on-surface">// PROTOCOL: SECURE_POST_V1</p>
              <p className="text-on-surface">// ORIGIN: 127.0.0.1</p>
              <p className="text-on-surface">// HANDSHAKE: PENDING...</p>
            </div>
          </div>
        </div>
        
        {/* Right Form Column */}
        <div className="col-span-12 md:col-span-6 md:col-start-7">
          <div className="bg-surface-container-high p-8 md:p-12 relative">
            {/* Geometric Accent Corner */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary-container"></div>
            
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Field: Name */}
              <div className="relative group">
                <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant group-focus-within:text-primary-container mb-2 transition-colors duration-200">
                  Full Name_
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-surface-container-low border-0 border-b border-outline-variant focus:ring-0 focus:border-primary-container text-primary font-headline py-3 px-0 placeholder:text-on-surface/20 transition-all duration-200"
                  placeholder="ENTER_IDENTITY"
                  type="text"
                />
              </div>
              
              {/* Field: Email */}
              <div className="relative group">
                <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant group-focus-within:text-primary-container mb-2 transition-colors duration-200">
                  Email_
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-surface-container-low border-0 border-b border-outline-variant focus:ring-0 focus:border-primary-container text-primary font-headline py-3 px-0 placeholder:text-on-surface/20 transition-all duration-200"
                  placeholder="USER@DOMAIN.TLD"
                  type="email"
                />
              </div>
              
              {/* Field: Message */}
              <div className="relative group">
                <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant group-focus-within:text-primary-container mb-2 transition-colors duration-200">
                  Message_
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-surface-container-low border-0 border-b border-outline-variant focus:ring-0 focus:border-primary-container text-primary font-headline py-3 px-0 placeholder:text-on-surface/20 transition-all duration-200 resize-none"
                  placeholder="INPUT_DATA_STREAM"
                  rows={4}
                />
              </div>
              
              {/* Submit Button */}
              <div className="pt-4">
                <button 
                  type="submit"
                  className="group relative inline-flex items-center justify-between w-full md:w-auto px-10 py-4 bg-primary-container text-on-primary-container font-headline font-bold uppercase tracking-widest text-sm hover:bg-primary-fixed transition-all duration-200 active:scale-95 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Send Transmission
                    <span className="material-symbols-outlined ml-3 text-lg group-hover:translate-x-1 transition-transform">send</span>
                  </span>
                  {/* Glitch effect background on hover */}
                  <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-200"></div>
                </button>
              </div>
            </form>
            
            {/* Technical Meta Info */}
            <div className="mt-12 flex items-center justify-between border-t border-outline-variant/20 pt-6">
              <div className="flex items-center space-x-4">
                <div className="flex flex-col">
                  <span className="font-label text-[8px] uppercase text-on-surface-variant opacity-50 tracking-tighter">Connection Stability</span>
                  <div className="flex space-x-0.5 mt-1">
                    <div className="w-3 h-1 bg-primary-container"></div>
                    <div className="w-3 h-1 bg-primary-container"></div>
                    <div className="w-3 h-1 bg-primary-container"></div>
                    <div className="w-3 h-1 bg-primary-container"></div>
                    <div className="w-3 h-1 bg-primary-container/20"></div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className="font-label text-[8px] uppercase text-on-surface-variant opacity-50 tracking-tighter">Latency</span>
                <div className="text-primary-container font-headline text-xs">24ms</div>
              </div>
            </div>
          </div>
          
          {/* Auxiliary Contact Details */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-surface-container-low p-4 border border-outline-variant/10 hover:border-primary-container/30 transition-colors duration-200">
              <span className="block font-label text-[9px] text-on-surface-variant uppercase mb-1">Email</span>
              <span className="font-headline text-sm text-primary lowercase">jimit@example.com</span>
            </div>
            <div className="bg-surface-container-low p-4 border border-outline-variant/10 hover:border-primary-container/30 transition-colors duration-200">
              <span className="block font-label text-[9px] text-on-surface-variant uppercase mb-1">Location</span>
              <span className="font-headline text-sm text-primary uppercase">India</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;