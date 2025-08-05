import React, { useEffect, useRef } from 'react';

export default function ClientLogos() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const clients = [
    {
      name: 'Microsoft',
      logo: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&q=80&w=150'
    },
    {
      name: 'Google',
      logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80&w=150'
    },
    {
      name: 'Amazon',
      logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&q=80&w=150'
    },
    {
      name: 'IBM',
      logo: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=150'
    },
    {
      name: 'Oracle',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=150'
    }
  ];

  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;

    const scrollWidth = scroll.scrollWidth;
    const clientWidth = scroll.clientWidth;
    let scrollPos = 0;

    const animate = () => {
      scrollPos += 1;
      if (scrollPos >= scrollWidth / 2) {
        scrollPos = 0;
      }
      scroll.scrollLeft = scrollPos;
      requestAnimationFrame(animate);
    };

    const animation = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Trusted by Industry Leaders
        </h2>
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex space-x-12 overflow-x-hidden whitespace-nowrap"
          >
            {/* Double the logos for seamless infinite scroll */}
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[150px] h-20 bg-gray-50 rounded-lg p-4"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
}