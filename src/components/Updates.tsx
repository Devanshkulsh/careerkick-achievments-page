import { ArrowUpRight, Building2, HeartPulse, Newspaper, Stethoscope } from "lucide-react";

const featuredUpdate = {
  category: "New Portal",
  title: "CareerKick Student Portal",
  description:
    "A central place for counselling updates, application tracking, mentor notes, and personalized next steps.",
  meta: "Launching Soon",
};

const updates = [
  {
    icon: HeartPulse,
    category: "Medical Updates",
    title: "Medical admission guidance",
    description:
      "Fresh updates around counselling rounds, documents, eligibility, and decision timelines.",
  },
  {
    icon: Stethoscope,
    category: "NEET Updates",
    title: "NEET planning alerts",
    description:
      "Preparation reminders, exam-related guidance, and post-result counselling support.",
  },
  {
    icon: Building2,
    category: "College Admissions",
    title: "Admission window tracker",
    description:
      "Important college application updates, deadlines, shortlists, and admission process notes.",
  },
  {
    icon: Newspaper,
    category: "Student Notices",
    title: "Latest counselling announcements",
    description:
      "Quick notices for upcoming sessions, portal actions, document checks, and event registrations.",
  },
];

const Updates = () => {
  return (
    <section
      id="updates"
      className="bg-background px-4 py-14 text-foreground sm:px-6 sm:py-16 lg:px-12 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl text-center sm:mb-10 lg:text-left">
          <p className="text-primary text-[10px] font-semibold uppercase tracking-[0.24em] sm:text-xs sm:tracking-[0.3em]">
            Updates
          </p>
          <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Stay Ahead With the Latest Guidance
          </h2>
          <p className="text-muted-foreground mt-3 text-sm leading-relaxed sm:text-base">
            Track portal launches, medical updates, NEET alerts, and college
            admission changes in one clean, student-first feed.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.05fr_1.4fr]">
          <article className="border-primary/20 bg-card relative overflow-hidden rounded-2xl border p-5 shadow-[0_18px_60px_rgba(0,0,0,0.25)] sm:p-7">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-primary/10" />
            <div className="relative">
              <div className="mb-8 flex items-center justify-between gap-4">
                <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {featuredUpdate.category}
                </span>
                <span className="text-xs font-semibold text-white/50">
                  {featuredUpdate.meta}
                </span>
              </div>

              <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
                <ArrowUpRight size={24} strokeWidth={2.2} />
              </div>

              <h3 className="mt-6 text-2xl font-bold leading-tight text-white sm:text-3xl">
                {featuredUpdate.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
                {featuredUpdate.description}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl border border-white/10 bg-white/3 p-4">
                  <p className="text-2xl font-extrabold text-primary">4</p>
                  <p className="mt-1 text-white/60">Update categories</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/3 p-4">
                  <p className="text-2xl font-extrabold text-primary">1</p>
                  <p className="mt-1 text-white/60">Student dashboard</p>
                </div>
              </div>
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2">
            {updates.map((update) => {
              const Icon = update.icon;

              return (
                <article
                  key={update.category}
                  className="group rounded-2xl border border-white/10 bg-[#101010] p-5 transition duration-300 hover:border-primary/35 hover:bg-[#131313] sm:p-6"
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                      <Icon size={22} strokeWidth={2.1} />
                    </div>
                    <ArrowUpRight
                      className="text-white/25 transition duration-300 group-hover:text-primary"
                      size={18}
                    />
                  </div>

                  <p className="text-primary text-[11px] font-semibold uppercase tracking-[0.2em]">
                    {update.category}
                  </p>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-white">
                    {update.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {update.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Updates;
