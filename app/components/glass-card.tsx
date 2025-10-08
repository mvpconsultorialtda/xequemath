import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-blue-500/30 ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;
