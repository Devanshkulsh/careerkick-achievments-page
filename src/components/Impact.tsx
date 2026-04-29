import { BarChart3, Building2, GraduationCap, TrendingUp } from "lucide-react";

const workStats = [
  { value: "500+", label: "Students guided", detail: "Across counselling, applications, and career planning." },
  { value: "300+", label: "Profiles reviewed", detail: "Documents, preferences, college lists, and next steps." },
  { value: "120+", label: "Sessions delivered", detail: "Workshops, seminars, webinars, and personal counselling." },
  { value: "50+", label: "Career paths mapped", detail: "Medical, management, technology, design, and more." },
];

const progress = [
  { label: "Counselling completion", value: 92 },
  { label: "Application readiness", value: 86 },
  { label: "College preference planning", value: 78 },
  { label: "Follow-up support", value: 95 },
];

const allotments = [
  {
    student: "Medical Aspirant",
    college: "Top medical college allotment",
    stream: "NEET Counselling",
    result: "Improved preference strategy and document readiness.",
  },
  {
    student: "Engineering Aspirant",
    college: "Preferred technical institute",
    stream: "College Admissions",
    result: "Shortlisted colleges aligned with score, budget, and goals.",
  },
  {
    student: "Management Aspirant",
    college: "Best-fit management program",
    stream: "Application Support",
    result: "Profile positioning and admission timeline managed end to end.",
  },
];

const Impact = () => {
  return (
    <section
      id="impact"
      className="bg-background px-4 py-14 text-foreground sm:px-6 sm:py-16 lg:px-12 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl text-center sm:mb-10 lg:text-left">
          <p className="text-primary text-[10px] font-semibold uppercase tracking-[0.24em] sm:text-xs sm:tracking-[0.3em]">
            Our Work
          </p>
          <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Work Done, Results Delivered
          </h2>
          <p className="text-muted-foreground mt-3 text-sm leading-relaxed sm:text-base">
            A results-focused view of counselling work, student progress, and
            strong college allotments made possible through structured guidance.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="grid gap-5">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {workStats.map((stat) => (
                <article
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-[#101010] p-5"
                >
                  <p className="text-3xl font-extrabold leading-none text-primary">
                    {stat.value}
                  </p>
                  <h3 className="mt-4 text-sm font-semibold text-white sm:text-base">
                    {stat.label}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/55 sm:text-sm">
                    {stat.detail}
                  </p>
                </article>
              ))}
            </div>

            <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <article className="rounded-2xl border border-primary/20 bg-card p-5 sm:p-6">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                    <BarChart3 size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      Work Graph
                    </p>
                    <h3 className="text-lg font-bold text-white">
                      Progress Snapshot
                    </h3>
                  </div>
                </div>

                <div className="space-y-5">
                  {progress.map((item) => (
                    <div key={item.label}>
                      <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                        <span className="text-white/75">{item.label}</span>
                        <span className="font-semibold text-primary">{item.value}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-primary"
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#101010] p-5 sm:p-6">
                <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-primary/10" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                    <TrendingUp size={24} />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold leading-tight text-white">
                    From guidance to allotment
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/60">
                    Every student journey is tracked through counselling,
                    eligibility checks, preference filling, application support,
                    and post-allotment follow-up. This section can expand with
                    images, detailed reports, or live data whenever needed.
                  </p>
                </div>
              </article>
            </div>
          </div>

          <aside className="rounded-2xl border border-primary/20 bg-card p-5 sm:p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                <GraduationCap size={23} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Allotments
                </p>
                <h3 className="text-lg font-bold text-white">
                  Best College Outcomes
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              {allotments.map((allotment) => (
                <article
                  key={allotment.college}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Building2 size={19} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {allotment.college}
                      </p>
                      <p className="text-xs text-primary">{allotment.stream}</p>
                    </div>
                  </div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/35">
                    {allotment.student}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {allotment.result}
                  </p>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Impact;
