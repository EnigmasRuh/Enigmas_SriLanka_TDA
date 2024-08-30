import React from "react";

const Button = ({ handleClick, className = "", text, disabled = false, variant = "primary" }) => {
    const baseClasses = "px-12 py-2 font-semibold rounded-md mb-4 cursor-pointer";
    const primaryClasses = "bg-primary text-white hover:bg-primary-dark";
    const secondaryClasses = "bg-secondary text-white hover:bg-secondary-dark";

    return (
        <button
            onClick={(e) => handleClick(e)}
            className={`${baseClasses} ${variant === "primary" ? primaryClasses : secondaryClasses} ${className}`}
            disabled={disabled}
        >
            {text}
        </button>
    );
};

export default Button;

// To use this component
{/* <Button handleClick={yourFunction} text="Primary Button" variant="primary" />
<Button handleClick={yourFunction} text="Secondary Button" variant="secondary" /> */}
