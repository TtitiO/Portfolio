import React, { useState, useRef } from 'react';
import { GalleryImage } from '../types';

interface GalleryProps {
  images: GalleryImage[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [hoveredImage, setHoveredImage] = useState<GalleryImage | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const handleMouseLeave = () => {
    // Do not hide the preview if a gallery item is currently focused via keyboard.
    if (galleryRef.current && !galleryRef.current.contains(document.activeElement)) {
      setHoveredImage(null);
    }
  };
  
  return (
    <div 
      ref={galleryRef}
      className="relative"
      onMouseLeave={handleMouseLeave}
    >
      <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-1">
        {images.map((image, index) => (
          <div
            key={index}
            tabIndex={0}
            onMouseEnter={() => setHoveredImage(image)}
            onFocus={() => setHoveredImage(image)}
            onBlur={() => setHoveredImage(null)}
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background dark:focus:ring-offset-dark-background focus:ring-mauve rounded-md cursor-pointer"
            aria-label={`View larger image for ${image.alt}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="rounded-md aspect-square object-cover transition-transform hover:scale-110"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      {hoveredImage && (
        <div
          className="absolute bottom-full left-0 right-0 mb-4 z-20 hidden lg:flex justify-center animate-fade-in pointer-events-none"
          aria-hidden="true"
        >
          <div 
            className="relative p-1 bg-surface dark:bg-dark-surface rounded-lg shadow-2xl"
          >
            <img
              src={hoveredImage.src.replace('/100/100', '/600/375')}
              alt={hoveredImage.alt}
              className="rounded-md max-w-full h-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;