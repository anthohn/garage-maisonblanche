'use client';

import { useEffect, useState } from 'react';

export default function SnowEffect() {
    const [flakes, setFlakes] = useState<{ id: number; left: string; size: number; duration: string; delay: string }[]>([]);

    useEffect(() => {
        const count = 50;
        const newFlakes = Array.from({ length: count }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            size: Math.random() * 6 + 1, // 3px to 8px
            duration: `${Math.random() * 10 + 20}s`, // 5s to 10s
            delay: `-${Math.random() * 10}s`, // Start mid-animation
        }));
        setFlakes(newFlakes);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none z-[5] overflow-hidden" aria-hidden="true">
            <style jsx>{`
                @keyframes snowfall {
                    0% {
                        transform: translateY(-10vh) translateX(-10px);
                        opacity: 0;
                    }
                    20% {
                        opacity: 1;
                    }
                    50% {
                        transform: translateY(50vh) translateX(10px);
                    }
                    80% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(110vh) translateX(-10px);
                        opacity: 0;
                    }
                }
                .snowflake {
                    position: absolute;
                    top: -10vh;
                    background-color: white;
                    border-radius: 50%;
                    box-shadow: 0 0 5px rgba(255,255,255,0.8);
                    animation-name: snowfall;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                }
            `}</style>
            {flakes.map((flake) => (
                <div
                    key={flake.id}
                    className="snowflake"
                    style={{
                        left: flake.left,
                        width: `${flake.size}px`,
                        height: `${flake.size}px`,
                        animationDuration: flake.duration,
                        animationDelay: flake.delay,
                    }}
                />
            ))}
        </div>
    );
}
