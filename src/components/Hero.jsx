import { useState, useEffect } from "react";
import handImage from "../assets/hand.webp";
import targetImage from "../assets/target.webp";
import checkCircleImage from "../assets/check-circle.webp";
import coinsImage from "../assets/cost.webp";

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Screen size check
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // ✅ Text sets
  const textSets = [
    {
      title: "SMART IIOT SOLUTIONS",
      subtitle: "Simplifying Industrial Innovation with Industry 4.0",
    },
    {
      title: "NEXT-GEN INDUSTRIAL",
      subtitle: "Cutting-edge IIoT-driven solutions for modern industries",
    },
    {
      title: "TRANSFORM YOUR FACTORY",
      subtitle: "Real-time monitoring and scalable automation",
    },
  ];

  // ✅ Features
  const features = [
    {
      icon: handImage,
      title: "Simple, Easy, Fast",
      description: "No technological jargon, no fuss.",
    },
    {
      icon: targetImage,
      title: "To the Point",
      description: "Everything that's needed—no fancy frills.",
    },
    {
      icon: checkCircleImage,
      title: "Accurate & Reliable",
      description: "High focus on accuracy & reliability.",
    },
    {
      icon: coinsImage,
      title: "Cost Effective",
      description: "Simplicity saves money.",
    },
  ];

  // ✅ Text rotation effect
  useEffect(() => {
    const domTextSets = document.querySelectorAll(".text-set");
    let localIndex = 0;
    let localAnimating = false;

    function wrapTextInSpans(element) {
      const text = element.textContent;
      element.innerHTML = text
        .split("")
        .map(
          (char, i) =>
            `<span class="char" style="animation-delay: ${
              i * 0.05
            }s">${char === " " ? "&nbsp;" : char}</span>`
        )
        .join("");
    }

    function animateTextIn(textSet) {
      const glitchText = textSet.querySelector(".glitch-text");
      const subtitle = textSet.querySelector(".subtitle");

      wrapTextInSpans(glitchText);
      glitchText.setAttribute("data-text", glitchText.textContent);

      setTimeout(() => {
        subtitle.classList.add("visible");
      }, 800);
    }

    function animateTextOut(textSet) {
      const chars = textSet.querySelectorAll(".char");
      const subtitle = textSet.querySelector(".subtitle");

      chars.forEach((char, i) => {
        char.style.animationDelay = `${i * 0.05}s`;
        char.classList.add("out");
      });

      subtitle.classList.remove("visible");
    }

    function rotateText() {
      if (localAnimating) return;
      localAnimating = true;

      const currentSet = domTextSets[localIndex];
      const nextIndex = (localIndex + 1) % domTextSets.length;
      const nextSet = domTextSets[nextIndex];

      animateTextOut(currentSet);

      setTimeout(() => {
        currentSet.classList.remove("active");
        nextSet.classList.add("active");
        animateTextIn(nextSet);

        localIndex = nextIndex;
        setCurrentIndex(nextIndex);
        localAnimating = false;
      }, 600);
    }

    // ✅ Init first
    if (domTextSets.length > 0) {
      domTextSets[0].classList.add("active");
      animateTextIn(domTextSets[0]);

      setTimeout(() => {
        setInterval(rotateText, 5000);
      }, 4000);
    }

    // ✅ Glitch effect
    const glitchInterval = setInterval(() => {
      const glitchTexts = document.querySelectorAll(".glitch-text");
      glitchTexts.forEach((text) => {
        if (Math.random() > 0.95) {
          text.style.animation = "none";
          setTimeout(() => {
            text.style.animation = "";
          }, 200);
        }
      });
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  // ✅ Scroll helper
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="text-rotator">
          {textSets.map((textSet, index) => (
            <div
              key={index}
              className={`text-set ${index === 0 ? "active" : ""}`}
            >
              <h1 className="glitch-text" data-text={textSet.title}>
                {textSet.title}
              </h1>
              <p className="subtitle">{textSet.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="hero-tagline">
          <p className="company-intro">
            We provide cutting-edge IIoT-driven solutions that seamlessly connect
            and simplify industrial systems. Our intelligent platform enables
            smart automation, real-time monitoring, and scalable Industry 4.0
            transformation.
          </p>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="cta-container">
        <a
          href="#features"
          className="cta-button cta-primary"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("features");
          }}
        >
          Explore Our Solutions
        </a>
        <a
          href="#about"
          className="cta-button cta-secondary"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
        >
          How It Works
        </a>
      </div>

      {/* Features */}
      <div className="hero-features">
        {features.map((feature, index) => (
          <div key={index} className="hero-feature-card ">
            <img src={feature.icon} alt={feature.title} className="feature-icon " />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
