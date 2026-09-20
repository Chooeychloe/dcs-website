import { ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";

export default function FacultyProfileHero({ faculty }) {
  return (
    <section className="relative overflow-hidden border-b">
      {/* Background grid */}
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-40
          bg-[linear-gradient(to_right,hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.2)_1px,transparent_1px)]
          bg-size-[40px_40px]
        "
      />

      <div className="relative mx-auto max-w-6xl px-6 py-12 sm:py-20">
        {/* Back button */}
        <div className="mb-10">
          <Link
            to="/"
            className="
              group inline-flex items-center gap-2
              rounded-full border
              bg-background/80
              px-4 py-2
              text-sm font-medium
              text-muted-foreground
              shadow-sm
              backdrop-blur
              transition-all duration-200
              hover:bg-muted
              hover:text-foreground
              hover:shadow-md
            "
          >
            <ArrowLeft
              className="
                h-4 w-4
                transition-transform duration-200
                group-hover:-translate-x-1
              "
            />
            Back to Faculty
          </Link>
        </div>

        {/* Profile */}
        <div className="grid items-center gap-10 md:grid-cols-[260px_1fr]">
          {/* Profile image */}
          <div className="mx-auto w-full max-w-65">
            <div className="aspect-square overflow-hidden rounded-3xl border bg-muted shadow-xl">
              <img
                src={faculty.image}
                alt={faculty.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Profile information */}
          <div>
            <Badge variant="secondary">
              {faculty.position}
            </Badge>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              {faculty.name}
            </h1>

            <p className="mt-3 text-lg text-muted-foreground">
              {faculty.program || "Department of Computer Studies"}
            </p>

            {faculty.email && (
              <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                {faculty.email}
              </div>
            )}

            {faculty.bio && (
              <p className="mt-6 max-w-2xl leading-7 text-muted-foreground">
                {faculty.bio}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
