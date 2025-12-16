import { ReactNode } from 'react';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    description?: string;
    centered?: boolean;
    children?: ReactNode;
}

export default function SectionTitle({
    title,
    subtitle,
    description,
    centered = true,
    children,
}: SectionTitleProps) {
    return (
        <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
            {subtitle && (
                <div className="text-sm font-semibold text-red uppercase tracking-widest mb-3">
                    {subtitle}
                </div>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
                {title}
            </h2>
            {description && (
                <p className="text-lg text-text-light max-w-2xl mx-auto">
                    {description}
                </p>
            )}
            {children}
        </div>
    );
}
