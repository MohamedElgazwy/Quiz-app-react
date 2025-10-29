import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  onClick,
  className = "",
  ...props
}) => {
  const baseClasses =
    "font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none";

  // استخدام الألوان المباشرة بدلاً من المخصصة
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-200",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-200",
    success: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-200",
    warning:
      "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-200",
    error: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-200",
    outline:
      "border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-200",
    ghost: "text-gray-600 hover:bg-gray-100 focus:ring-gray-200",
  };

  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
    xlarge: "px-10 py-5 text-xl",
  };

  const classes = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `.trim();

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
