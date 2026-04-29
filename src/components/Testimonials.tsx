import { useEffect } from "react";
import ChromaGrid from "./ChromaGrid";

const items = [
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Aarav Sharma",
    subtitle: "Student success: Admitted to a top CS program",
    handle: "@student",
    borderColor: "#5ac20d",
    gradient: "linear-gradient(145deg, #5ac20d, #000)",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Neha Verma",
    subtitle: "Parent story: Clear roadmap for Class 12 planning",
    handle: "@parent",
    borderColor: "#5ac20d",
    gradient: "linear-gradient(180deg, #5ac20d, #000)",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Riya Gupta",
    subtitle: "Student success: Strong profile and interview outcomes",
    handle: "@student",
    borderColor: "#5ac20d",
    gradient: "linear-gradient(160deg, #5ac20d, #000)",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Rahul Singh",
    subtitle: "Parent story: Measurable progress through mentorship",
    handle: "@parent",
    borderColor: "#5ac20d",
    gradient: "linear-gradient(180deg, #5ac20d, #000)",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Ishita Mehta",
    subtitle: "Student success: Scholarship through better applications",
    handle: "@student",
    borderColor: "#5ac20d",
    gradient: "linear-gradient(145deg, #5ac20d, #000)",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Sandeep Nair",
    subtitle: "Parent story: Improved focus and discipline",
    handle: "@parent",
    borderColor: "#5ac20d",
    gradient: "linear-gradient(180deg, #5ac20d, #000)",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Devika Rao",
    subtitle: "Student success: Transitioned to product design",
    handle: "@student",
    borderColor: "#5ac20d",
    gradient: "linear-gradient(165deg, #5ac20d, #000)",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Priya Khanna",
    subtitle: "Parent story: Lower stress with structured guidance",
    handle: "@parent",
    borderColor: "#5ac20d",
    gradient: "linear-gradient(180deg, #5ac20d, #000)",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Karan Malhotra",
    subtitle: "Student success: Built portfolio and landed first offer",
    handle: "@student",
    borderColor: "#5ac20d",
    gradient: "linear-gradient(145deg, #5ac20d, #000)",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Anita Das",
    subtitle: "Parent story: Consistent mentorship for higher studies",
    handle: "@parent",
    borderColor: "#5ac20d",
    gradient: "linear-gradient(180deg, #5ac20d, #000)",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Anita Das",
    subtitle: "Parent story: Consistent mentorship for higher studies",
    handle: "@parent",
    borderColor: "#5ac20d",
    gradient: "linear-gradient(180deg, #5ac20d, #000)",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Anita Das",
    subtitle: "Parent story: Consistent mentorship for higher studies",
    handle: "@parent",
    borderColor: "#5ac20d",
    gradient: "linear-gradient(180deg, #5ac20d, #000)",
  },
];

const Testimonials = () => {
  useEffect(() => {
    // Simulate pointer movement in the center of the viewport on scroll
    // This naturally triggers the spotlight effect on mobile devices without modifying ChromaGrid
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        const x = window.innerWidth / 2;
        const y = window.innerHeight / 2;
        const target = document.elementFromPoint(x, y);

        if (target) {
          target.dispatchEvent(
            new PointerEvent("pointermove", {
              clientX: x,
              clientY: y,
              bubbles: true,
            }),
          );
          target.dispatchEvent(
            new MouseEvent("mousemove", {
              clientX: x,
              clientY: y,
              bubbles: true,
            }),
          );
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount to establish initial focus state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="testimonials"
      style={{ position: "relative" }}
      className="px-4 py-12 sm:px-6 md:px-12 md:py-24"
    >
      <p className="text-primary mb-1 sm:mb-2 text-center text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase">
        Testimonials
      </p>
      <h2 className="mb-1 sm:mb-2 text-center text-2xl sm:text-3xl font-semibold text-foreground md:text-4xl">
        Success Stories
      </h2>
      <p className="mx-auto mb-8 sm:mb-10 max-w-2xl text-center text-xs sm:text-sm leading-relaxed text-muted-foreground md:text-base">
        Hear from learners and professionals who accelerated their growth with
        CareerKick.
      </p>

      <div className="mx-auto w-full max-w-7xl">
        <ChromaGrid
          items={items}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </div>
    </section>
  );
};

export default Testimonials;
