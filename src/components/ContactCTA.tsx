import { ArrowUpRight, CalendarCheck, Mail, Phone } from "lucide-react";

const contactOptions = [
  {
    icon: Phone,
    label: "Call for counselling",
    value: "+91 9198350984",
    href: "tel:+919198350984",
  },
  {
    icon: Mail,
    label: "Send an enquiry",
    value: "info@careerkick.in",
    href: "mailto:info@careerkick.in",
  },
];

const whatsappHref =
  "https://wa.me/919198350984?text=Hi%20CareerKick%2C%20I%20want%20to%20know%20more%20about%20counselling.";

const ContactCTA = () => {
  return (
    <section
      id="contact"
      className="bg-background px-4 pb-14 pt-6 text-foreground sm:px-6 sm:pb-16 lg:px-12 lg:pb-24"
    >
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-primary/20 bg-card">
        <div className="grid gap-0 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="relative overflow-hidden p-6 sm:p-8 lg:p-10">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-primary/10" />
            <div className="relative max-w-3xl">
              <p className="text-primary text-[10px] font-semibold uppercase tracking-[0.24em] sm:text-xs sm:tracking-[0.3em]">
                Contact
              </p>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Ready to Plan the Next Step?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base lg:text-lg">
                Connect with CareerKick for counselling, admission guidance,
                event registrations, or a quick review of your student roadmap.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+919198350984"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-black! transition hover:opacity-90 sm:text-base"
                >
                  <CalendarCheck size={19} />
                  Book Counselling
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/4 px-5 py-3 text-sm font-bold text-white transition hover:border-primary/35 hover:bg-primary/10 sm:text-base"
                >
                  Write to Us
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-3 border-t border-white/10 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-8">
            {contactOptions.map((option) => {
              const Icon = option.icon;

              return (
                <a
                  key={option.href}
                  href={option.href}
                  className="group rounded-2xl border border-white/10 bg-white/3 p-5 transition hover:border-primary/35 hover:bg-primary/10"
                >
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                      <Icon size={21} />
                    </div>
                    <ArrowUpRight
                      className="text-white/30 transition group-hover:text-primary"
                      size={18}
                    />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {option.label}
                  </p>
                  <p className="mt-2 text-lg font-bold text-white">
                    {option.value}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
