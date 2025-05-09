import React from "react";
import logAnalyticsEvent from "./logAnalyticsEvent";

export default function SupportButton({ variant = "soft", style = {}, className = "", fullWidth = false }) {
  const handleClick = () => {
    logAnalyticsEvent("support_this_project_clicked");
    window.open("https://www.buymeacoffee.com/roiesh", "_blank");
  };

  // Styling based on variant
  const baseStyle = {
    padding: "12px 20px",
    borderRadius: "12px",
    fontWeight: "500",
    fontSize: "15px",
    border: "none",
    cursor: "pointer",
    display: "inline-block",
    padding: "12px 20px",
    maxWidth: "90vw",
    whiteSpace: "nowrap",
    textAlign: "center",
    transition: "all 0.2s ease",
    zindex: 1000,
    ...style,
  };

  const softStyle = {
    backgroundColor: "#f2f7fc",
    color: "var(--color-primary)",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
  };

  const modalStyle = {
    backgroundColor: "var(--color-primary)",
    color: "white",
  };

  const variantStyle = variant === "modal" ? modalStyle : softStyle;

  return (
    <button
      onClick={handleClick}
      className={`support-button ${className}`}
      style={{ ...baseStyle, ...variantStyle }}
    >
      <span
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          fontSize: "15px",
        }}
      >
        <span role="img" aria-label="heart">❤️</span> Support this project
      </span>
    </button>
  );
  
}
