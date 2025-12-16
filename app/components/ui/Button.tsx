import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    showArrow?: boolean;
    className?: string;
}

export default function Button({
    children,
    href,
    variant = 'primary',
    size = 'md',
    showArrow = false,
    className = '',
    ...props
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-blue-900 text-white hover:bg-blue-800 focus:ring-blue-900",
        secondary: "bg-white text-gray-900 hover:bg-gray-50 focus:ring-gray-900",
        outline: "border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700"
    };

    const sizes = {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-lg"
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    const content = (
        <>
            {children}
            {showArrow && <ArrowRight className="ml-2 h-4 w-4" />}
        </>
    );

    if (href) {
        return (
            <Link href={href} className={combinedClassName}>
                {content}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {content}
        </button>
    );
}
