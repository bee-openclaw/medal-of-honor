"use client";

import { useState } from "react";

const gradients = [
  "from-amber-500 to-orange-600",
  "from-blue-500 to-indigo-600",
  "from-emerald-500 to-teal-600",
  "from-rose-500 to-pink-600",
  "from-violet-500 to-purple-600",
  "from-cyan-500 to-blue-600",
];

function getGradient(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return gradients[Math.abs(hash) % gradients.length];
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

export function Avatar({
  name,
  src,
  size = "md",
  className = "",
}: {
  name: string;
  src?: string;
  size?: "sm" | "md" | "lg" | "xl" | "fill";
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const initials = getInitials(name);
  const gradient = getGradient(name);

  const sizeClasses = {
    sm: "h-12 w-12 text-sm",
    md: "h-24 w-24 text-2xl",
    lg: "h-40 w-40 text-5xl",
    xl: "h-44 w-44 text-5xl",
    fill: "absolute inset-0 h-full w-full text-6xl",
  };

  if (src && !failed) {
    if (size === "fill") {
      return (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={`Portrait of ${name}`}
            className={`absolute inset-0 h-full w-full object-cover ${className}`}
            onError={() => setFailed(true)}
          />
        </>
      );
    }
    return (
      <div className={`relative overflow-hidden ${sizeClasses[size]} ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={`Portrait of ${name}`}
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br ${gradient} ${size === "fill" ? sizeClasses.fill : sizeClasses[size]} ${className}`}
    >
      <span className="font-bold text-white/90 drop-shadow-sm">
        {initials}
      </span>
    </div>
  );
}
