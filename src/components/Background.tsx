import React from "react";

interface FullBackgroundProps {
    children: React.ReactNode;
}

export default function Background({
    children,
}: FullBackgroundProps) {
    return (
        <div
            className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("/assets/common/background.webp")` }}
        >
            <div
                className={`absolute inset-0 bg-black/50 pointer-events-none`}
            ></div>
            <div className="relative z-10">{children}</div>
        </div>
    );
}
