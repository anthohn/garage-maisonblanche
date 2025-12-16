import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  className = '',
  hover = true,
  onClick,
}: CardProps) {
  const baseClasses = `
    bg-white rounded-xl border border-border
    p-6 transition-all duration-300
    ${hover ? 'hover:shadow-lg hover:-translate-y-1 hover:border-navy-lighter cursor-pointer' : 'shadow-md'}
  `;

  return (
    <div
      className={`${baseClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
