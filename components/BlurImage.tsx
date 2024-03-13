"use client";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function BlurImage({ src, alt, zoomIn, className, ...rest }: any) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Image
      src={src}
      alt={alt}
      {...rest}
      className={clsx(`w-full h-full object-cover ${zoomIn && "hover:scale-110"} transition-all duration-300
    ${isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"}, ${className}`)}
      onLoad={() => setIsLoading(false)}
    />
  );
}
