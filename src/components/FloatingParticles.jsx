import { useEffect, useRef } from 'react';

function FloatingParticles() {
  const particlesRef = useRef(null);

  useEffect(() => {
    const createParticles = () => {
      if (!particlesRef.current) return;
      
      const particleCount = 30;
      particlesRef.current.innerHTML = '';

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
        
        // Randomly assign orange or blue color
        if (Math.random() > 0.5) {
          particle.style.setProperty('--particle-color', '#00B2FF');
          particle.style.background = '#00B2FF';
        }
        
        particlesRef.current.appendChild(particle);
      }
    };

    createParticles();

 
    const glitchInterval = setInterval(() => {
      const glitchTexts = document.querySelectorAll('.glitch-text');
      glitchTexts.forEach(text => {
        if (Math.random() > 0.95) {
          text.style.animation = 'none';
          setTimeout(() => {
            text.style.animation = '';
          }, 200);
        }
      });
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div 
      ref={particlesRef} 
      id="particles"
    />
  );
}

export default FloatingParticles;