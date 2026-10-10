import { useEffect, useState, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { heroSlides } from '@/lib/guesthouse';

export function HeroCarousel({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (paused || focused || reducedMotion) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive(index => (index + 1) % heroSlides.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [paused, focused, reducedMotion, active]);

  const move = (direction: number) => setActive(index => (index + direction + heroSlides.length) % heroSlides.length);

  return (
    <section className="hero hero-carousel" aria-label="Guest house photographs" aria-roledescription="carousel"
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
      {heroSlides.map((slide, index) => (
        <div key={slide.src} className={`hero-slide${index === active ? ' is-active' : ''}`} role="group"
          aria-roledescription="slide" aria-label={`${index + 1} of ${heroSlides.length}`} aria-hidden={index !== active}>
          <img className="hero-photo" src={slide.src} alt={slide.alt} fetchPriority={index === 0 ? 'high' : 'auto'} />
        </div>
      ))}
      {children}
      <div className="hero-carousel-controls">
        <Button variant="heroOutline" size="icon" className="hero-carousel-arrow" onClick={() => move(-1)} aria-label="Previous photograph" title="Previous photograph"><ChevronLeft /></Button>
        <div className="hero-carousel-dots" aria-label="Choose a photograph">
          {heroSlides.map((slide, index) => (
            <Button key={slide.src} variant="ghost" size="icon" className="hero-carousel-dot" aria-label={`Show photograph ${index + 1}`}
              aria-pressed={index === active} onClick={() => setActive(index)}><span /></Button>
          ))}
        </div>
        <Button variant="heroOutline" size="icon" className="hero-carousel-arrow" onClick={() => move(1)} aria-label="Next photograph" title="Next photograph"><ChevronRight /></Button>
        {!reducedMotion && <Button variant="heroOutline" size="icon" className="hero-carousel-arrow" onClick={() => setPaused(value => !value)}
          aria-label={paused ? 'Resume slideshow' : 'Pause slideshow'} title={paused ? 'Resume slideshow' : 'Pause slideshow'}>{paused ? <Play /> : <Pause />}</Button>}
      </div>
    </section>
  );
}