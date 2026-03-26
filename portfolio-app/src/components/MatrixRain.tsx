import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let drops: number[] = [];
    
    const charSet = '01';
    const fontSize = 14;

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const columnsCount = Math.floor(canvas.width / fontSize);
      drops = new Array(columnsCount).fill(1);
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(19, 19, 19, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#00ff41';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = charSet.charAt(Math.floor(Math.random() * charSet.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        
        const opacity = Math.random() * 0.5 + 0.5;
        ctx.globalAlpha = opacity;
        ctx.fillText(char, x, y);
        
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      
      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(draw);
    };

    init();
    draw();

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ opacity: 0.15 }}
    />
  );
};

export default MatrixRain;