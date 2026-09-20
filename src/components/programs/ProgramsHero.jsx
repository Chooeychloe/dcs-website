import { Badge } from "@/components/ui/badge";

export default function ProgramsHero() {
  return (
    <section className="relative overflow-hidden border-b">
      {/* Background grid */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)]
          bg-size-[48px_48px]
          opacity-40
        "
      />

      {/* Glow */}
      <div
        className="
          pointer-events-none absolute
          left-1/2 top-0
          h-125 w-200
          -translate-x-1/2
          rounded-full
          bg-primary/10
          blur-3xl
        "
      />

      <div
        className="
          relative mx-auto max-w-5xl
          px-6 py-20
          text-center
          sm:py-28
        "
      >
        <Badge
          variant="secondary"
          className="bg-primary/10 text-primary"
        >
          Academic Programs
        </Badge>

        <h1
          className="
            mt-5
            text-4xl font-bold tracking-tight
            sm:text-5xl
            lg:text-6xl
          "
        >
          Programs That Build
          <span className="block text-primary">
            Future-Ready Professionals.
          </span>
        </h1>

        <p
          className="
            mx-auto mt-6
            max-w-2xl
            text-base leading-7
            text-muted-foreground
            sm:text-lg
          "
        >
          Explore the computing programs offered by the
          Department of Computer Studies and discover
          opportunities to develop skills in technology,
          software, systems, and innovation.
        </p>
      </div>
    </section>
  );
}
