import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function ProgramCard({ program }) {
  const Icon = program.icon;

  return (
    <Card
      className="
        group relative overflow-hidden
        border-border/50
        bg-card
        transition-all duration-500
        hover:-translate-y-2
        hover:border-primary/40
        hover:shadow-2xl
        hover:shadow-primary/10
      "
    >
      {/* Grid overlay */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[linear-gradient(to_right,var(--primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--primary)_1px,transparent_1px)]
          bg-size-[24px_24px]
          opacity-0
          transition-opacity duration-500
          group-hover:opacity-[0.04]
        "
      />

      <CardContent className="relative p-8 sm:p-10">
        {/* Icon + code */}
        <div className="flex items-start justify-between">
          <div
            className="
              flex h-14 w-14
              items-center justify-center
              rounded-2xl
              bg-primary/10
              text-primary
              transition-transform duration-500
              group-hover:scale-110
            "
          >
            <Icon className="h-7 w-7" />
          </div>

          <Badge variant="outline">
            {program.code}
          </Badge>
        </div>

        {/* Title */}
        <h3 className="mt-8 text-2xl font-bold tracking-tight">
          {program.title}
        </h3>

        {/* Description */}
        <p className="mt-4 leading-7 text-muted-foreground">
          {program.shortDescription}
        </p>

        {/* Highlights */}
        <div className="mt-8">
          <p
            className="
              mb-3
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-muted-foreground
            "
          >
            Areas of Focus
          </p>

          <div className="grid gap-2 sm:grid-cols-2">
            {program.highlights.map((highlight) => (
              <div
                key={highlight}
                className="
                  rounded-lg
                  border border-border/50
                  bg-muted/30
                  px-3 py-2.5
                  text-sm
                "
              >
                {highlight}
              </div>
            ))}
          </div>
        </div>

        {/* Curriculum */}
        <Link
          to={`/programs/${program.id}`}
          className="
            group/curriculum
            mt-8
            inline-flex
            h-11
            w-full
            items-center
            justify-center
            rounded-lg
            bg-primary
            px-5
            text-sm
            font-semibold
            text-primary-foreground
            shadow-sm
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:bg-primary/90
            hover:shadow-md
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-primary
            focus-visible:ring-offset-2
          "
        >
          View Curriculum

          <ArrowRight
            className="
              ml-2
              h-4 w-4
              transition-transform
              duration-200
              group-hover/curriculum:translate-x-1
            "
          />
        </Link>

        {/* Bottom accent */}
        <div
          className="
            absolute
            bottom-0 left-0 right-0
            h-0.5
            origin-left
            scale-x-0
            bg-primary
            transition-transform duration-500
            group-hover:scale-x-100
          "
        />
      </CardContent>
    </Card>
  );
}
