
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "-1");
            setActiveIndex(index);
          }
        });
      },
      {
        rootMargin: "-100px 0px -100px 0px",
        threshold: 0.5,
      }
    );

    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      timelineItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, [data]);

  return (
    <div
      className="w-full font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 max-w-4xl">
          Our cosmic journey
        </h2>
        <p className="text-white/70 text-sm md:text-base max-w-sm">
          Explore the evolution of Cosmos and how we're revolutionizing mental wellness through innovation.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            data-index={index}
            className={`timeline-item flex justify-start pt-10 md:pt-40 md:gap-10 transition-all duration-700 
            ${activeIndex >= index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-cosmos-purple/20 flex items-center justify-center">
                <div className={`h-4 w-4 rounded-full bg-cosmos-coral border border-cosmos-lightCoral p-2 
                ${activeIndex === index ? "animate-pulse-slow" : ""}`} />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-cosmos-coral">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-cosmos-coral">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-white/20 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <div
            style={{
              height: `${activeIndex >= 0 ? (height * (activeIndex + 1) / data.length) : 0}px`,
              opacity: 0.8,
              transition: "height 1s ease-in-out",
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-cosmos-coral via-cosmos-purple to-transparent from-[0%] via-[50%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
