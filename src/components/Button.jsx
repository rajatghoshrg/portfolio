const Button = ({
  children,
  variant = "primary",
  to,
  onClick,
  className = "",
}) => {

  const baseStyles =
    "px-6 py-3 rounded-full font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg hover:scale-105 hover:shadow-cyan-500/30",
    outline:
      "border border-gray-600 text-gray-300 hover:border-purple-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/20",
  };

  const handleClick = () => {
    if (to) {
      const element = document.getElementById(to);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;