"use client";

import React from "react";

interface AnimateBtnProps {
  children: React.ReactNode;
  classNameButton?: string;
  classNameSpan?: string;
}

export default function AnimatedBtn({
  children,
  classNameButton,
  classNameSpan,
}: AnimateBtnProps) {
  return (
    <>
      <button
        type="button"
        className={`
          relative overflow-hidden min-w-[130px] px-2 sm:px-4 md:px-6 py-2
          rounded-md text-white text-sm sm:text-base md:text-lg lg:text-lg font-semibold
          bg-gradient-to-br ${classNameButton}
          transition-all duration-300
          focus:outline-none cursor-pointer 
          group
          active:top-[2px] border-2
        `}
      >
        <span
          className="
            absolute left-[-50%] top-[-50%] w-[200%] h-[200%] -z-10
            bg-gradient-to-tl from-gray-400/10 to-white/0
            rotate-45
            transition-all duration-500
            group-hover:left-[-100%] group-hover:top-[-100%]
          "
        />
        <span
          className={`
            absolute top-0 right-0 h-full rounded-lg 
            w-0 bg-gradient-to-br ${classNameSpan}
            z-0
            transition-all duration-300
            group-hover:w-full group-hover:left-0
          `}
        />
        <span className="relative z-10 font-medium flex items-center gap-2">
          {children}
        </span>
      </button>
    </>
  );
}
