import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Customers from './components/Customers';
import Industries from './components/Industries';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';
import FloatingParticles from './components/FloatingParticles';

function App() {
  useEffect(() => {

    function createParticles() {
      const particlesContainer = document.getElementById('particles');
      if (!particlesContainer) return;

      const particleCount = 30;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';


        if (Math.random() > 0.5) {
          particle.style.setProperty('--particle-color', '#00B2FF');
          particle.style.background = '#00B2FF';
        }

        particlesContainer.appendChild(particle);
      }
    }


    const textSets = document.querySelectorAll('.text-set');
    let currentIndex = 0;
    let isAnimating = false;

    function wrapTextInSpans(element) {
      const text = element.textContent;
      element.innerHTML = text.split('').map((char, i) =>
        `<span class="char" style="animation-delay: ${i * 0.05}s">${char === ' ' ? '&nbsp;' : char}</span>`
      ).join('');
    }

    function animateTextIn(textSet) {
      const glitchText = textSet.querySelector('.glitch-text');
      const subtitle = textSet.querySelector('.subtitle');


      wrapTextInSpans(glitchText);


      glitchText.setAttribute('data-text', glitchText.textContent);


      setTimeout(() => {
        subtitle.classList.add('visible');
      }, 800);
    }

    function animateTextOut(textSet) {
      const chars = textSet.querySelectorAll('.char');
      const subtitle = textSet.querySelector('.subtitle');


      chars.forEach((char, i) => {
        char.style.animationDelay = `${i * 0.02}s`;
        char.classList.add('out');
      });


      subtitle.classList.remove('visible');
    }

    function rotateText() {
      if (isAnimating) return;
      isAnimating = true;

      const currentSet = textSets[currentIndex];
      const nextIndex = (currentIndex + 1) % textSets.length;
      const nextSet = textSets[nextIndex];


      animateTextOut(currentSet);


      setTimeout(() => {
        currentSet.classList.remove('active');
        nextSet.classList.add('active');
        animateTextIn(nextSet);

        currentIndex = nextIndex;
        isAnimating = false;
      }, 600);
    }


    setTimeout(() => {
      if (textSets.length > 0) {
        textSets[0].classList.add('active');
        animateTextIn(textSets[0]);


        setTimeout(() => {
          setInterval(rotateText, 5000); 
        }, 4000);
      }
    }, 100);


    setTimeout(createParticles, 100);


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
    <div>
      <BackgroundEffects />
      <FloatingParticles />
      <Navbar />
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Industries />
      <Customers />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
