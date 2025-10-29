import React from "react";

const Card = ({
  children,
  variant = "default",
  padding = "p-6",
  className = "",
  hover = false,
  ...props
}) => {
  const variants = {
    default: "bg-white border border-gray-200",
    elevated: "bg-white shadow-lg",
    outlined: "border-2 border-primary-200 bg-white",
    filled: "bg-gray-50 border border-gray-200",
  };

  const hoverEffects = hover
    ? "transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
    : "";

  const classes = `
    rounded-2xl
    ${variants[variant]}
    ${padding}
    ${hoverEffects}
    ${className}
  `.trim();

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
