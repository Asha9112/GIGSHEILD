import "./Button.css";

function Button({
  children,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  icon,
  iconPosition = "left",
  className = "",
  ...props
}) {
  const buttonClasses = [
    "gs-btn",
    `gs-btn-${variant}`,
    `gs-btn-${size}`,
    fullWidth ? "gs-btn-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={buttonClasses} {...props}>
      {icon && iconPosition === "left" && (
        <span className="gs-btn-icon">{icon}</span>
      )}

      <span>{children}</span>

      {icon && iconPosition === "right" && (
        <span className="gs-btn-icon">{icon}</span>
      )}
    </button>
  );
}

export default Button;