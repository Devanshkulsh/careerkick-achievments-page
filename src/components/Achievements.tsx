import { useEffect, useRef, useState } from "react";
import BorderGlow from "./BorderGlow";

const achievements = [
  {
    value: "500+",
    label: "Students Mentored",
    detail: "Guided through academic and career milestones.",
  },
  {
    value: "95%",
    label: "Success Rate",
    detail: "Learners moving forward with clearer next steps.",
  },
  {
    value: "120+",
    label: "Workshops",
    detail: "Practical sessions for skills, planning, and growth.",
  },
  {
    value: "50+",
    label: "Career Paths",
    detail: "Personalized roadmaps across multiple domains.",
  },
  {
    value: "300+",
    label: "Applications Reviewed",
    detail: "Profiles improved with focused feedback.",
  },
  {
    value: "80+",
    label: "Partner Mentors",
    detail: "Experienced voices helping students make decisions.",
  },
  {
    value: "40+",
    label: "Institutions",
    detail: "Students supported from schools and colleges.",
  },
  {
    value: "24/7",
    label: "Guidance Access",
    detail: "Resources and support available when learners need it.",
  },
];

const Achievements = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const cards = cardRefs.current.filter((card): card is HTMLDivElement => Boolean(card));
    if (!cards.length) return;

    const updateActiveCard = () => {
      if (window.innerWidth >= 768) {
        setActiveCard(null);
        return;
      }

      const viewportCenter = window.innerHeight / 2;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (isVisible && distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveCard(closestIndex);
    };

    updateActiveCard();
    window.addEventListener("scroll", updateActiveCard, { passive: true });
    window.addEventListener("resize", updateActiveCard);

    return () => {
      window.removeEventListener("scroll", updateActiveCard);
      window.removeEventListener("resize", updateActiveCard);
    };
  }, []);

  return (
    <section
      id="achievements"
      className="bg-background px-4 py-14 text-foreground sm:px-6 sm:py-16 lg:px-12 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
          <p className="text-primary text-[10px] font-semibold uppercase tracking-[0.24em] sm:text-xs sm:tracking-[0.3em]">
            Achievements
          </p>
          <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Milestones That Matter
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-2xl text-sm leading-relaxed sm:text-base">
            A quick look at the outcomes, programs, and learner progress built
            through CareerKick.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.label}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
            >
              <BorderGlow
                active={activeCard === index}
                className="min-h-45 sm:min-h-52.5 lg:min-h-55"
                edgeSensitivity={30}
                glowColor="105 85 55"
                backgroundColor="#101010"
                borderRadius={20}
                glowRadius={28}
                glowIntensity={0.65}
                coneSpread={25}
                animated={activeCard === index}
                colors={["#5ac20d", "#38bdf8", "#f472b6"]}
                fillOpacity={0.28}
              >
                <article className="flex h-full min-h-45 flex-col justify-between p-4 sm:min-h-52.5 sm:p-5 lg:min-h-55 lg:p-6">
                  <div>
                    <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-xs font-bold text-primary sm:mb-5 sm:h-11 sm:w-11 sm:text-sm">
                      {achievement.value.replace("+", "")}
                    </div>
                    <h3 className="text-2xl font-extrabold leading-none tracking-tight text-white sm:text-3xl">
                      {achievement.value}
                    </h3>
                    <p className="mt-2 text-sm font-semibold leading-snug text-white sm:text-base">
                      {achievement.label}
                    </p>
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-white/65 sm:mt-5 sm:text-sm">
                    {achievement.detail}
                  </p>
                </article>
              </BorderGlow>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
