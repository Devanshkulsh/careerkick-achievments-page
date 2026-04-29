import CardSwap, { Card } from "./ui/CardSwap";

const events = [
  {
    tag: "Flagship Event",
    title: "Shiksha Samagam 1.0",
    description:
      "The first edition bringing students, parents, and mentors together for career clarity.",
  },
  {
    tag: "Flagship Event",
    title: "Shiksha Samagam 2.0",
    description:
      "A bigger platform for guidance, expert sessions, and practical academic planning.",
  },
  {
    tag: "Flagship Event",
    title: "Shiksha Samagam 3.0",
    description:
      "The latest edition focused on stronger outcomes, exposure, and student confidence.",
  },
  {
    tag: "Knowledge Session",
    title: "Seminar",
    description:
      "In-person learning sessions with focused conversations around admissions and careers.",
  },
  {
    tag: "Online Session",
    title: "Webinar",
    description:
      "Accessible digital sessions for students and parents to learn from expert mentors.",
  },
  {
    tag: "Career Expo",
    title: "NEET Expo",
    description:
      "A dedicated experience for medical aspirants exploring NEET preparation and options.",
  },
  {
    tag: "Counselling",
    title: "Walk-in Counselling Drive",
    description:
      "Direct one-on-one counselling support for students looking for immediate guidance.",
  },
];

const Events = () => {
  return (
    <section
      id="events"
      className="relative overflow-hidden bg-background px-4 py-12 text-foreground sm:px-6 sm:py-16 lg:min-h-160 lg:px-12 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 sm:gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        {/* Left Content */}
        <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
          <p className="text-primary text-[10px] font-semibold uppercase tracking-[0.24em] sm:text-xs sm:tracking-[0.3em]">
            Events
          </p>
          <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Moments That Move Careers Forward
          </h2>
          <p className="text-muted-foreground mt-4 text-sm leading-relaxed sm:text-base lg:text-lg">
            From expert-led workshops to student showcases, CareerKick events
            create practical spaces for learning, networking, and confident next
            steps.
          </p>
        </div>

        {/* Right Content - Card Swap Container */}
        <div className="relative mx-auto flex h-87.5 w-full max-w-130 items-start justify-center sm:h-120 lg:mx-0 lg:h-135 lg:max-w-none lg:items-center">
          <CardSwap
            // Adjusted dimensions for mobile to prevent overlap
            width="min(90vw, 480px)"
            height="min(70vw, 340px)"
            // Using items-start and adjusting translation to push cards down on mobile
            className="right-1/2! top-4 translate-x-1/2! translate-y-0! scale-100! lg:top-auto lg:right-20! lg:translate-x-0! lg:translate-y-[15%]!"
            animateInViewOnly
            // Set distances to 0 on mobile to make cards straight
            cardDistance={typeof window !== 'undefined' && window.innerWidth < 640 ? 0 : 60}
            verticalDistance={typeof window !== 'undefined' && window.innerWidth < 640 ? 0 : 70}
            delay={2000}
            pauseOnHover={false}
          >
            {events.map((event, index) => (
              <Card
                key={event.title}
                className="border-primary/25 bg-card p-5 shadow-[0_15px_50px_rgba(0,0,0,0.5)] sm:p-7"
              >
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-[10px] font-bold text-primary sm:mb-5 sm:h-10 sm:w-10 sm:text-sm">
                      {index + 1}
                    </div>
                    <p className="text-primary text-[9px] font-semibold uppercase tracking-[0.18em] sm:text-xs sm:tracking-[0.22em]">
                      {event.tag}
                    </p>
                    <h3 className="mt-2 text-lg font-bold leading-tight text-white sm:mt-4 sm:text-2xl">
                      {event.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-[11px] leading-relaxed text-white/70 sm:mt-6 sm:text-sm">
                    {event.description}
                  </p>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
  );
};

export default Events;