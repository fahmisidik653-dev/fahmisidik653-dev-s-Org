import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img 
      src="https://i.imgur.com/uq6GD90.png" 
      alt="JournAI Logo"
      className={className}
    />
  );
};

export default Logo;