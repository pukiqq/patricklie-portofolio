import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  alt: string;
  height?: string;
}

export default function ImageCarousel({ images, alt, height = 'h-96' }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (images.length === 0) {
    return (
      <div className={`${height} flex items-center justify-center rounded-xl border border-white/[0.06] bg-ink-800/60`}>
        <p className="font-mono text-xs text-mist-500">No images available</p>
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className={`${height} overflow-hidden rounded-xl border border-white/[0.07] bg-ink-850`}>
        <img src={images[0]} alt={alt} loading="lazy" className="h-full w-full object-contain" />
      </div>
    );
  }

  return (
    <div className={`${height} group relative overflow-hidden rounded-xl border border-white/[0.07] bg-ink-850`}>
      <img
        src={images[currentIndex]}
        alt={`${alt} - Image ${currentIndex + 1} of ${images.length}`}
        loading="lazy"
        className="h-full w-full object-contain transition-opacity duration-300"
      />

      <button
        onClick={goToPrevious}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-ink-950/85 p-2 text-mist-200 opacity-0 transition-all duration-500 ease-out hover:border-copper-500/40 hover:text-copper-300 focus-visible:opacity-100 group-hover:opacity-100"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-ink-950/85 p-2 text-mist-200 opacity-0 transition-all duration-500 ease-out hover:border-copper-500/40 hover:text-copper-300 focus-visible:opacity-100 group-hover:opacity-100"
        aria-label="Next image"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
              index === currentIndex ? 'w-5 bg-copper-400' : 'w-1.5 bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute right-3 top-3 rounded-full border border-white/10 bg-ink-950/85 px-2.5 py-0.5 font-mono text-[11px] text-mist-300">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
