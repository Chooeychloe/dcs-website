
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";

export default function ProgramHero({ program }) {
  return (
    <section className="relative isolate overflow-hidden border-b">
      {/* Background grid */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)]
          bg-size-[48px_48px]
          opacity-35
        "
      />

      {/* Glow */}
      <div
        className="
          pointer-events-none absolute
          left-1/2 top-0 -z-10
          h-125 w-200
          -translate-x-1/2
          rounded-full
          bg-primary/10
          blur-3xl
        "
      />

      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <Link
          to="/programs"
          className="
            group
            inline-flex items-center
            text-sm font-medium
            text-muted-foreground
            transition-colors
            hover:text-primary
          "
        >
          <ArrowLeft
            className="
              mr-2 h-4 w-4
              transition-transform duration-200
              group-hover:-translate-x-1
            "
          />

          Back to Programs
        </Link>

        <div className="mt-8 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <Badge
              variant="outline"
              className="
                border-primary/20
                bg-primary/5
                text-primary
              "
            >
              {program.code}
            </Badge>

            <span className="text-sm text-muted-foreground">Official program information</span>
          </div>

          <h1
            className="
              mt-5
              text-4xl font-bold tracking-tight
              sm:text-5xl
            "
          >
            {program.title}
          </h1>

          <p
            className="
              mt-5 max-w-3xl
              text-base leading-7
              text-muted-foreground
              sm:text-lg
            "
          >
            {program.shortDescription}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="https://cvsu.edu.ph/bacoor/" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center rounded-lg border border-border px-4 text-sm font-semibold text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
              CvSU Bacoor campus information <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <Link to="/contact" className="inline-flex min-h-11 items-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Contact DCS</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
