import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background grid */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)]
          bg-size-[48px_48px]
          opacity-40
        "
      />

      {/* Radial glow */}
      <div
        className="
          pointer-events-none absolute left-1/2 top-0 -z-10
          h-150 w-225
          -translate-x-1/2
          rounded-full
          bg-primary/10
          blur-3xl
        "
      />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Content */}
          <div>
            {/* Eyebrow */}
            <div
              className="
                mb-6 inline-flex items-center gap-2
                rounded-full
                border border-primary/20
                bg-primary/5
                px-3 py-1.5
                text-xs font-medium
                text-primary
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Department of Computer Studies
            </div>

            {/* Heading */}
            <h1
              className="
                max-w-3xl
                text-4xl font-bold tracking-tight
                sm:text-5xl
                lg:text-6xl
              "
            >
              Shaping the Future
              <span className="block text-primary">
                Through Computing.
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-6 max-w-2xl
                text-base leading-7
                text-muted-foreground
                sm:text-lg
              "
            >
              Explore Computer Science and Information Technology at the
              Department of Computer Studies, and discover the faculty,
              research, and community work behind our programs.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {/* Primary CTA */}
              <Link
                to="/programs"
                className="
                  group inline-flex h-11
                  items-center justify-center
                  rounded-lg
                  bg-primary
                  px-5
                  text-sm font-semibold
                  text-primary-foreground
                  shadow-sm
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:bg-primary/90
                  hover:shadow-md
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-primary
                  focus-visible:ring-offset-2
                "
              >
                Explore Our Programs

                <ArrowRight
                  className="
                    ml-2 h-4 w-4
                    transition-transform duration-200
                    group-hover:translate-x-1
                  "
                />
              </Link>

              {/* Secondary CTA */}
              <Link
                to="/faculty"
                className="
                  inline-flex h-11
                  items-center justify-center
                  rounded-lg
                  border border-border
                  bg-background
                  px-5
                  text-sm font-semibold
                  text-foreground
                  shadow-sm
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:border-primary/40
                  hover:bg-primary/5
                  hover:text-primary
                  hover:shadow-md
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-primary
                  focus-visible:ring-offset-2
                "
              >
                Meet Our Faculty
              </Link>
            </div>

          </div>

          {/* Visual */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
              <a href="https://cvsu.edu.ph/bacoor/" target="_blank" rel="noreferrer" aria-label="View the CvSU Bacoor City Campus website">
                <img
                  src="https://cvsu.edu.ph/wp-content/uploads/2022/08/Bacoor-Campus-scaled.jpg"
                  alt="Cavite State University Bacoor City Campus, where the Department of Computer Studies is based"
                  className="aspect-[4/3] w-full object-cover"
                  fetchPriority="high"
                />
              </a>
              <div className="p-7 sm:p-9">
                <div className="flex items-center gap-3">
                  <img src="/dcs-logo.svg" alt="Department of Computer Studies logo" className="h-12 w-12 shrink-0 object-contain" />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Department of Computer Studies<br />CvSU Bacoor City Campus</p>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">The Department of Computer Studies is part of Cavite State University – Bacoor City Campus.</p>
                <a href="https://cvsu.edu.ph/bacoor/" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center text-xs font-medium text-muted-foreground underline-offset-4 hover:text-primary hover:underline">CvSU Bacoor campus information <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

