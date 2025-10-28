"use client";

import React from "react";
import { CircleStar } from "lucide-react";

interface PremiumButtonProps {
  children: React.ReactNode;
}

export default function PremiumButton({ children }: PremiumButtonProps) {
  return (
    <button className="brightness-150 dark:brightness-100 group hover:shadow-lg hover:shadow-rose-700/60 transition ease-in-out hover:scale-105 p-1 rounded-xl bg-gradient-to-br from-rose-800 via-rose-600 to-rose-800 hover:from-rose-700 hover:via-rose-800 hover:to-rose-600">
      <div className="px-6 py-2 backdrop-blur-xl bg-black/80 rounded-xl font-bold w-full h-full">
        <div className="group-hover:scale-100 flex items-center group-hover:text-rose-500 text-rose-600 gap-1">
          <CircleStar className="w-6 h-6 stroke-rose-600 group-hover:stroke-rose-500 group-hover:stroke-{1.99}" />
          {children}
        </div>
      </div>
    </button>
  );
}
