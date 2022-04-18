import React from 'react';

const Button = ({onClick, className, outline, children}) => {
    return (
        <button
            onClick={onClick}
            className={`
                button 
                ${className} 
                ${outline ? 'button--outline' : ''}
            `}
        >
            {children}
        </button>
    );
};

export default Button;