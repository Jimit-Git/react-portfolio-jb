const Footer = () => {
  return (
    <footer className="w-full flex flex-col md:flex-row justify-between items-center py-8 px-10 gap-4 bg-[#0e0e0e] border-t border-[#3b4b37]/20">
      <div className="font-label text-[#00ff41] text-[10px] tracking-widest uppercase">
        // JIMIT BHATT // SYSTEM_STATUS: OPERATIONAL © 2024
      </div>
      <div className="flex gap-8">
        <a className="font-label text-[10px] tracking-widest uppercase text-[#e5e2e1]/60 hover:text-[#00ff41] underline decoration-[#00ff41] underline-offset-4" href="#">GITHUB</a>
        <a className="font-label text-[10px] tracking-widest uppercase text-[#e5e2e1]/60 hover:text-[#00ff41] underline decoration-[#00ff41] underline-offset-4" href="#">LINKEDIN</a>
      </div>
    </footer>
  );
};

export default Footer;