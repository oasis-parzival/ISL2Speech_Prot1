import React, { useRef, useState } from "react";
import type { MouseEvent } from "react";
import { cn } from "../../lib/utils";

interface CardSpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
    gradientSize?: number;
    gradientColor?: string;
    gradientOpacity?: number;
    slotClassName?: string;
}

const CardSpotlight = ({
    children,
    className,
    slotClassName,
    gradientSize = 200,
    gradientColor = "#8c8573", // default silver-500
    gradientOpacity = 0.8,
    ...props
}: CardSpotlightProps) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: -gradientSize * 10, y: -gradientSize * 10 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            className={cn(
                "group relative flex size-full overflow-hidden rounded-xl border border-graphite-800 bg-graphite-900 text-graphite-50",
                className
            )}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            <div className={cn("relative z-10", slotClassName)}>
                {children}
            </div>
            <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(${gradientSize}px circle at ${position.x}px ${position.y}px, ${gradientColor}, transparent 40%)`,
                }}
            />
        </div>
    );
};

export default CardSpotlight;
