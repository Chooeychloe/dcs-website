import { ArrowRight, Code2, Cpu, Database } from "lucide-react";
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

      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-10 lg:py-10">
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
              Empowering students with the knowledge, skills,
              and experiences needed to build meaningful
              solutions through computer science and
              information technology.
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

            {/* Stats */}
            <div
              className="
                mt-12 grid max-w-xl grid-cols-3
                gap-6
                border-t border-border
                pt-8
              "
            >
              <Stat value="2" label="Programs" />
              <Stat value="20+" label="Faculty" />
              <Stat value="1000+" label="Students" />
            </div>
          </div>

          {/* Visual */}
          <div className="relative mx-auto w-full max-w-lg">
            {/* Main card */}
            <div
              className="
                relative aspect-square
                overflow-hidden
                rounded-3xl
                border border-border
                bg-card/80
                shadow-2xl
                backdrop-blur-sm
              "
            >
              {/* Inner grid */}
              <div
                className="
                  absolute inset-0
                  bg-[linear-gradient(to_right,var(--primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--primary)_1px,transparent_1px)]
                  bg-size-[32px_32px]
                  opacity-[0.08]
                "
              />

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Glow */}
                  <div
                    className="
                      absolute inset-0
                      rounded-full
                      bg-primary/20
                      blur-3xl
                    "
                  />

                  {/* Logo */}
                  <img
                    src="/dcs-logo.svg"
                    alt="Department of Computer Studies"
                    className="relative h-auto w-auto"
                  />
                </div>
              </div>

              {/* Floating cards */}
              <TechCard
                icon={Code2}
                label="Software"
                className="left-5 top-5"
              />

              <TechCard
                icon={Database}
                label="Data"
                className="bottom-5 left-5"
              />

              <TechCard
                icon={Cpu}
                label="Technology"
                className="right-1.5 top-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <p className="text-2xl font-bold tracking-tight">
        {value}
      </p>

      <p className="mt-1 text-xs text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

function TechCard({
  icon: Icon,
  label,
  className,
}) {
  return (
    <div
      className={`
        absolute
        flex items-center gap-2
        rounded-xl
        border border-border
        bg-background/90
        px-3 py-2
        text-xs font-medium
        shadow-lg
        backdrop-blur
        ${className}
      `}
    >
      <Icon className="h-4 w-4 text-primary" />
      {label}
    </div>
  );
}
