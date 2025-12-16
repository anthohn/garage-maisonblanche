interface BadgeProps {
    children: React.ReactNode;
    variant?: 'filled' | 'outlined';
    color?: string;
    className?: string;
}

export default function Badge({ 
    children, 
    variant = 'outlined', 
    color = '#303F9F',
    className = '' 
}: BadgeProps) {
    const baseClasses = "inline-block px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wide";
    
    const variantClasses = {
        filled: `bg-[${color}] text-white`,
        outlined: `border-2 border-[${color}] text-[${color}]`
    };
    
    return (
        <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
            {children}
        </div>
    );
}
