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
      const containerWidth = window.innerWidth;
      const trackWidth = track.scrollWidth;
      const maxTranslate = trackWidth - containerWidth;

      // Increased scroll distance to ensure the last card "rests" in place
      const scrollDistance = Math.max(maxTranslate, window.innerHeight * 3);

      const nextHeight = window.innerHeight + scrollDistance;
      sectionHeightRef.current = nextHeight;
      setSectionHeight(nextHeight);
    };

    const update = () => {
      const viewportHeight = window.innerHeight;
      const containerWidth = window.innerWidth;
      const trackWidth = track.scrollWidth;
      const maxTranslate = Math.max(0, trackWidth - containerWidth);

      const rect = section.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;

      const scrollable = Math.max(
        1,
        (sectionHeightRef.current || viewportHeight) - viewportHeight,
      );

      // We use a "clamped" progress for the horizontal movement
      const raw = (window.scrollY - sectionTop) / scrollable;
      const progress = Math.min(1, Math.max(0, raw));

      // Translate slightly faster than the scroll to ensure we finish
      // horizontal movement before the section unlocks
      const moveProgress = Math.min(1, progress * 1.1);
      const nextX = moveProgress * maxTranslate;
      setTranslateX(nextX);

      // Logic to determine active card with a buffer at the end
      const activeProgress = progress * (stepCount - 0.2);
      const nextActive = Math.min(stepCount - 1, Math.floor(activeProgress));

      setActive(nextActive >= 0 ? nextActive : 0);
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
      style={{ height: sectionHeight || "400vh" }}
    >
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen overflow-hidden flex flex-col py-4 sm:py-6"
      >
        <div className="mx-auto flex flex-col h-full w-full max-w-7xl px-4 sm:px-6 lg:px-12">
          {/* Header */}
          <div className="mb-4 text-center shrink-0">
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

          {/* Active Image Window - Larger on Desktop */}
          <div className="mb-4 flex flex-1 items-center justify-center overflow-hidden min-h-0">
            <div className="border-primary/20 bg-black/40 relative h-full aspect-square max-h-[45vh] sm:max-h-[55vh] lg:max-h-[62vh] overflow-hidden rounded-2xl border shadow-[0_10px_40px_rgba(90,194,13,0.1)]">
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
          </div>

          <div className="text-foreground/60 mb-2 text-center text-[11px] sm:text-sm font-medium shrink-0">
            Step {active + 1} of {steps.length}
          </div>

          {/* Horizontal Scrolling Timeline */}
          <div className="relative shrink-0 h-fit w-full mb-6">
            <div className="bg-primary/25 pointer-events-none absolute top-8 sm:top-8.5 h-0.5 w-screen left-1/2 -translate-x-1/2 z-0" />

            <div className="h-full pt-4 relative">
              <div
                ref={trackRef}
                className="flex will-change-transform transition-transform duration-500 ease-out"
                style={{ transform: `translate3d(-${translateX}px, 0, 0)` }}
              >
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className="w-screen min-w-screen sm:w-screen sm:min-w-screen lg:w-screen lg:min-w-screen shrink-0 flex flex-col items-center"
                  >
                    <div className="w-full max-w-[calc(100vw-32px)] sm:max-w-xl lg:max-w-2xl flex flex-col">
                      {/* Timeline Node */}
                      <div className="mb-4 flex items-center gap-2 sm:gap-3 shrink-0 relative z-10 justify-start sm:justify-center">
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
                          "border-primary/20 bg-card rounded-2xl border p-5 sm:p-8 transition-all duration-700 h-auto",
                          active === index
                            ? "translate-y-0 opacity-100 shadow-[0_8px_30px_rgba(90,194,13,0.1)] scale-100"
                            : "translate-y-8 opacity-0 scale-95",
                        )}
                      >
                        <h3 className="text-[18px] leading-snug font-semibold sm:text-2xl">
                          {step.title}{" "}
                          <span className="text-primary">{step.highlight}</span>
                        </h3>

                        <p className="text-muted-foreground mt-2 text-[14px] leading-relaxed sm:text-base">
                          {step.description}
                        </p>

                        <ul className="mt-4 space-y-3">
                          {step.points.map((point, i) => (
                            <li
                              key={i}
                              className="text-foreground/80 flex items-start gap-3 text-left text-[13px] sm:text-sm"
                            >
                              <span className="border-primary/40 bg-primary/10 text-primary mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold">
                                {i + 1}
                              </span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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
