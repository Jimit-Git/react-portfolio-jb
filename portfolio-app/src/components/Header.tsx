import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinkClass = (path: string) => 
    `font-label uppercase tracking-tighter text-sm transition-colors ${
      isActive(path) 
        ? 'text-[#00ff41] border-b-2 border-[#00ff41] pb-1' 
        : 'text-[#e5e2e1] hover:text-[#00ff41]'
    }`;

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-[#131313] bg-opacity-90 backdrop-blur-xl border-b border-[#3b4b37]/20">
      <div className="font-headline font-bold text-xl text-[#00ff41] tracking-wider">
        JIMIT<span className="text-[#e5e2e1] font-light">BHATT</span>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <Link to="/" className={navLinkClass('/')}>HOME</Link>
        <Link to="/projects" className={navLinkClass('/projects')}>PROJECTS</Link>
        <Link to="/career" className={navLinkClass('/career')}>EXPERIENCE</Link>
        <Link to="/contact" className={navLinkClass('/contact')}>CONTACT</Link>
      </div>
      
      {/* Desktop Icons */}
      <div className="hidden md:flex items-center gap-4 text-[#00ff41]">
        <span className="material-symbols-outlined cursor-pointer hover:bg-[#1c1b1b] p-2 transition-colors">terminal</span>
        <span className="material-symbols-outlined cursor-pointer hover:bg-[#1c1b1b] p-2 transition-colors">code</span>
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2 text-[#00ff41]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="material-symbols-outlined">
          {isMenuOpen ? 'close' : 'menu'}
        </span>
      </button>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#131313] border-b border-[#3b4b37]/20 py-4 px-6 flex flex-col gap-4">
          <Link to="/" className={navLinkClass('/')} onClick={() => setIsMenuOpen(false)}>HOME</Link>
          <Link to="/projects" className={navLinkClass('/projects')} onClick={() => setIsMenuOpen(false)}>PROJECTS</Link>
          <Link to="/career" className={navLinkClass('/career')} onClick={() => setIsMenuOpen(false)}>EXPERIENCE</Link>
          <Link to="/contact" className={navLinkClass('/contact')} onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
        </div>
      )}
    </nav>
  );
};

export default Header;