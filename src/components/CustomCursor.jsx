"use client";
import React from "react";
import dynamic from "next/dynamic";

// هنا نقدر نستخدم ssr: false براحتنا لأن الملف ده Client Component
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: false,
});

const CustomCursor = () => {
    return (
        <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={1}
            outerScale={1.7}
            outerAlpha={0}
            hasBlendMode={true}
            innerStyle={{
                backgroundColor: "#915EFF",
            }}
            outerStyle={{
                border: "3px solid #915EFF",
            }}
        />
    );
};

export default CustomCursor;