import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";

type Step = {
  id: number;
  tag: string;
  title: string;
  highlight: string;
  description: string;
  points: string[];
  image: string;
};

const steps: Step[] = [
  {
    id: 1,
    tag: "ABOUT",
    title: "About",
    highlight: "CareerKick",
    description:
      "CareerKick helps students and young professionals transform ambition into action through practical mentorship.",
    points: [
      "Structured guidance with clear milestone tracking",
      "Personalized strategies for academics and career goals",
      "Outcome-focused plans tailored to each learner",
    ],
    image: "/about.png",
  },
  {
    id: 2,
    tag: "FOUNDATION",
    title: "About Our",
    highlight: "Founder",
    description:
      "Our founder started CareerKick with a mission to make career growth more accessible and outcome-driven.",
    points: [
      "Built around clarity, consistency, and trust",
      "Combines mentorship with practical execution",
      "Focus on long-term student success",
    ],
    image: "/founder.png",
  },
  {
    id: 3,
    tag: "CULTURE",
    title: "About Our",
    highlight: "Culture",
    description:
      "We foster a culture of ownership, empathy, and continuous improvement where every milestone is celebrated.",
    points: [
      "Student-first thinking across every interaction",
      "Collaborative support from mentors and team",
      "Continuous progress with measurable impact",
    ],
    image: "/culture.png",
  },
];

const About = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [active, setActive] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);
  const sectionHeightRef = useRef(0);

  const stepCount = useMemo(() => steps.length, []);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const track = trackRef.current;
    if (!section || !sticky || !track) return;

    let ticking = false;

    const measure = () => {
      const containerWidth =
        track.parentElement?.offsetWidth || window.innerWidth;
      const trackWidth = track.scrollWidth;
      const maxTranslate = Math.max(0, trackWidth - containerWidth);

      // Force a minimum scroll distance so desktop users can comfortably scroll through 
      // the active states even if the cards fit almost entirely on the screen.
      const minScroll = window.innerHeight * 1.5;
      const scrollDistance = Math.max(maxTranslate, minScroll);

      // Calculate how tall the section needs to be to accommodate the scroll
      const nextHeight = window.innerHeight + scrollDistance;
      sectionHeightRef.current = nextHeight;
      setSectionHeight(nextHeight);
    };

    const update = () => {
      const containerWidth =
        track.parentElement?.offsetWidth || window.innerWidth;
      const viewportHeight = window.innerHeight;
      const trackWidth = track.scrollWidth;
      const maxTranslate = Math.max(0, trackWidth - containerWidth);

      const rect = section.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;

      const scrollable = Math.max(
        1,
        (sectionHeightRef.current || viewportHeight) - viewportHeight,
      );

      // Calculate progress (0 to 1) based on vertical scroll
      const raw = (window.scrollY - sectionTop) / scrollable;
      const progress = Math.min(1, Math.max(0, raw));

      // Translate vertical progress into horizontal movement
      const nextX = progress * maxTranslate;
      setTranslateX(nextX);

      // Determine which step is active based on scroll progress
      const nextActive = Math.min(
        stepCount - 1,
        Math.max(0, Math.round(progress * (stepCount - 1))),
      );
      setActive(nextActive);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    const onResize = () => {
      measure();
      update();
    };

    measure();
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [stepCount]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-background text-foreground relative"
      style={{ height: sectionHeight || "300vh" }}
    >
      <div
        ref={stickyRef}
        className="sticky top-0 h-dvh overflow-hidden py-3 sm:py-4 md:py-6 lg:py-6"
      >
        <div className="mx-auto h-full px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col w-full">
          {/* Header */}
          <div className="mb-2 sm:mb-4 text-center shrink-0">
            <p className="text-primary text-[10px] font-semibold uppercase tracking-[0.3em] sm:text-xs">
              About Us
            </p>
            <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Our Journey and Values
            </h2>
            <p className="text-muted-foreground mx-auto mt-1 max-w-2xl text-xs sm:mt-2 sm:text-sm md:text-base hidden sm:block">
              Learn how CareerKick was built, what drives our mission, and the
              culture behind our results.
            </p>
          </div>

          {/* Active Image Window - Centered perfect square */}
          <div className="mb-3 lg:mb-5 flex flex-col flex-1 min-h-62.5 sm:min-h-75 lg:min-h-[40vh] w-full items-center justify-center overflow-hidden">
            <div className="border-primary/20 bg-black/40 relative flex-1 overflow-hidden rounded-2xl border shadow-[0_10px_40px_rgba(90,194,13,0.1)] aspect-square max-w-full">
              {steps.map((step, idx) => (
                <img
                  key={step.id}
                  src={step.image}
                  alt={step.title}
                  className={clsx(
                    "absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ease-in-out",
                    active === idx ? "opacity-100 z-10" : "opacity-0 z-0",
                  )}
                />
              ))}
            </div>
            <div className="text-foreground/60 mt-2 text-center text-[11px] sm:text-sm font-medium shrink-0">
              Step {active + 1} of {steps.length}
            </div>
          </div>

          {/* Horizontal Scrolling Timeline */}
          <div className="relative shrink-0 h-65 sm:h-70 lg:h-75 w-full">
            {/* Infinite Background Line - Spans the entire screen perfectly behind the circles */}
            <div className="bg-primary/25 pointer-events-none absolute top-8 sm:top-8.5 h-0.5 w-screen left-1/2 -translate-x-1/2 z-0" />

            {/* Removed overflow-hidden so the cards and shadow-glow smoothly glide through the gutters */}
            <div className="h-full pt-4 pb-2 sm:pb-4 z-10 relative">
              <div
                ref={trackRef}
                className="flex gap-6 h-full will-change-transform transition-transform duration-250 ease-out"
                style={{ transform: `translate3d(-${translateX}px, 0, 0)` }}
              >
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    /* MATHEMATICALLY PERFECT MOBILE WIDTH: Exact container width so only 1 card shows */
                    className="w-[calc(100vw-32px)] min-w-[calc(100vw-32px)] sm:w-[85vw] sm:min-w-105 lg:max-w-125 lg:min-w-125 shrink-0 flex flex-col h-full"
                  >
                    {/* Timeline Node */}
                    <div className="mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3 shrink-0 relative z-10">
                      <div
                        className={clsx(
                          "z-10 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border transition-all duration-300",
                          active === index
                            ? "border-primary bg-primary text-black shadow-[0_0_0_6px_rgba(90,194,13,0.2)] scale-110"
                            : "border-primary/35 bg-card text-primary scale-100",
                        )}
                      >
                        <span className="text-[10px] sm:text-xs font-bold">
                          {step.id}
                        </span>
                      </div>
                      <span className="bg-primary/10 text-primary rounded-full px-2 py-1 sm:px-3 sm:py-1 text-[10px] sm:text-xs uppercase tracking-wide font-semibold shadow-sm">
                        {step.tag}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div
                      className={clsx(
                        "border-primary/20 bg-card rounded-2xl border p-4 pb-8 sm:p-5 sm:pb-10 transition-all duration-500 h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
                        active === index
                          ? "translate-y-0 opacity-100 shadow-[0_8px_30px_rgba(90,194,13,0.1)]"
                          : "translate-y-4 opacity-40",
                      )}
                    >
                      <h3 className="text-[17px] leading-snug font-semibold sm:text-xl md:text-2xl">
                        {step.title}{" "}
                        <span className="text-primary">{step.highlight}</span>
                      </h3>

                      <p className="text-muted-foreground mt-2 text-[13px] leading-relaxed sm:text-sm sm:leading-6">
                        {step.description}
                      </p>

                      <ul className="mt-3 space-y-2 sm:space-y-3 sm:mt-4">
                        {step.points.map((point, i) => (
                          <li
                            key={i}
                            className="text-foreground/80 flex items-start gap-2 sm:gap-3 text-left text-[12px] leading-tight sm:text-[14px] sm:leading-6"
                          >
                            <span className="border-primary/40 bg-primary/10 text-primary mt-px sm:mt-0.5 flex h-3.5 w-3.5 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-full border text-[8px] sm:text-[10px] font-bold">
                              {i + 1}
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
