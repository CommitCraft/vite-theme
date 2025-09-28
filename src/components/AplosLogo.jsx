import React from "react";

const AplosLogo = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    logoText: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    brace: {
      fontSize: "clamp(18px, 6vw, 30px)", // min 18px, scales, max 30px
      fontWeight: "bold",
      color: "#1d9bf0", // blue
    },
    aplos: {
      fontSize: "clamp(18px, 6vw, 30px)",
      fontFamily: "Georgia, serif",
      fontWeight: "bold",
      color: "#e6782f", // orange
      letterSpacing: "2px",
    },
    tagline: {
      fontSize: "clamp(6px, 3vw, 16px)", // responsive tagline
      fontWeight: "300",
      color: "#fff",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.logoText}>
        <span style={styles.brace}>{"{"}</span>
        <span style={styles.aplos}>APLÓS</span>
        <span style={styles.brace}>{"}"}</span>
      </div>
      <p style={styles.tagline}>Let’s keep it simple.</p>
    </div>
  );
};

export default AplosLogo;
