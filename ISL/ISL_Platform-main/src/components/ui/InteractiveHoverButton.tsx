import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

interface InteractiveHoverButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
}

const InteractiveHoverButton = React.forwardRef<
    HTMLButtonElement,
    InteractiveHoverButtonProps
>(({ text = "Button", className, ...props }, ref) => {
    return (
        <button
            ref={ref}
            className={cn(
                "group relative w-auto cursor-pointer overflow-hidden rounded-full border border-silver-600 bg-background p-2 px-6 text-center font-semibold",
                className,
            )}
            {...props}
        >
            <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-silver-500 transition-all duration-300 group-hover:scale-[100.8]"></div>
                <span className="inline-block whitespace-nowrap transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 text-graphite-50">
                    {text}
                </span>
            </div>
            <div className="absolute top-0 left-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-silver-100 opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
                <span className="whitespace-nowrap">{text}</span>
                <ArrowRight className="h-4 w-4" />
            </div>
        </button>
    );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export default InteractiveHoverButton;
