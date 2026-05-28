"use client";
import { ImgHTMLAttributes, useState } from 'react';

interface ImageWithFallbackProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export default function ImageWithFallback({ src, alt, className = '', ...props }: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`bg-[#EFE7DA] flex items-center justify-center ${className}`}>
        <span className="text-[#6E6257] text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
}
