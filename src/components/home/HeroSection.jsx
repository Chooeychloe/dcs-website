import { ArrowRight, Code2, Cpu, Database } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">

      {/* Background grid */}
      <div
        className="
          pointer-events-none absolute inset-0
          -z-10
          bg-[linear-gradient(to_right,hsl(var(--border)/0.18)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.18)_1px,transparent_1px)]
          bg-size-[48px_48px]
        "
      />

      {/* Radial glow */}
      <div
        className="
          pointer-events-none absolute left-1/2 top-0
          -z-10
          h-150 w-225
          -translate-x-1/2
          rounded-full
          bg-primary/10
          blur-3xl
        "
      />

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">

        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Content */}
          <div>

            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Department of Computer Studies
            </div>

            {/* Heading */}
            <h1
              className="
                max-w-3xl
                text-4xl
                font-bold
                tracking-tight
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
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Empowering students with the knowledge, skills,
              and experiences needed to build meaningful
              solutions through computer science and
              information technology.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">


              <Link to="/programs">
                Explore Our Programs

                <ArrowRight
                  className="
                      ml-2 h-4 w-4
                      transition-transform
                      group-hover:translate-x-1
                    "
                />
              </Link>


              <Link to="/faculty">
                Meet Our Faculty
              </Link>


            </div>

            {/* Stats */}
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t pt-8">

              <Stat
                value="2"
                label="Programs"
              />

              <Stat
                value="20+"
                label="Faculty"
              />

              <Stat
                value="—"
                label="Students"
              />

            </div>
          </div>

          {/* Visual */}
          <div className="relative mx-auto w-full max-w-lg">

            {/* Main card */}
            <div
              className="
                relative
                aspect-square
                overflow-hidden
                rounded-3xl
                border
                bg-card/80
                shadow-2xl
                backdrop-blur-sm
              "
            >

              {/* Inner grid */}
              <div
                className="
                  absolute inset-0
                  opacity-50
                  bg-[linear-gradient(to_right,hsl(var(--primary)/0.08)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.08)_1px,transparent_1px)]
                  bg-size-[32px_32px]
                "
              />

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">

                <div className="relative">

                  {/* Glow */}
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />

                  {/* Logo */}
                  <img
                    src="/dcs-logo.svg"
                    alt="Department of Computer Studies"
                    className="h-auto w-auto"
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
                className="right-5 top-1/2 -translate-y-1/2"
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
        border
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