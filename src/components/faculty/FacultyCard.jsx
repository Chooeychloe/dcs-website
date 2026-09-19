import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function FacultyCard({
  faculty,
  featured = false,
  onClick,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className="h-full"
    >
      <Card
        onClick={() => onClick?.(faculty)}
        className={`
          group relative h-full cursor-pointer overflow-hidden
          border-border/50 bg-card
          transition-all duration-500
          hover:border-primary/40
          hover:shadow-2xl hover:shadow-primary/10
          ${featured ? "border-primary/30" : ""}
        `}
      >
        {/* Tech grid overlay */}
        <div
          className="
            pointer-events-none absolute inset-0 z-10
            opacity-0 transition-opacity duration-500
            group-hover:opacity-100
            bg-[linear-gradient(to_right,hsl(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.05)_1px,transparent_1px)]
            bg-size-[20px_20px]
          "
        />

        <CardContent className="relative z-20 p-0">
          {/* Photo */}
          <div
            className={`
              relative overflow-hidden bg-muted
              ${featured ? "aspect-4/3" : "aspect-4/5"}
            `}
          >
            <img
              src={faculty.image}
              alt={faculty.name}
              className="
                h-full w-full object-cover
                transition-transform duration-700
                group-hover:scale-105
              "
            />

            {/* Image gradient */}
            <div
              className="
                absolute inset-0
                bg-linear-to-t
                from-black/70 via-black/10 to-transparent
              "
            />

            {/* View profile */}
            <div
              className="
    absolute bottom-4 right-4
    flex items-center gap-1.5
    rounded-full
    bg-background/90
    px-3 py-1.5
    text-xs font-medium
    text-foreground
    opacity-0
    translate-y-2
    backdrop-blur-sm
    transition-all duration-300
    group-hover:opacity-100
    group-hover:translate-y-0
  "
            >
              View Profile
              <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </div>

          {/* Information */}
          <div className="space-y-3 p-5">
            <div>
              <h3
                className={`
                  font-semibold tracking-tight
                  ${featured ? "text-xl" : "text-base"}
                `}
              >
                {faculty.name}
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                {faculty.position}
              </p>
            </div>

            {faculty.program && (
              <Badge
                variant="secondary"
                className="font-normal"
              >
                {faculty.program}
              </Badge>
            )}

            {faculty.specialization?.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {faculty.specialization
                  .slice(0, 2)
                  .map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-md
                        bg-muted
                        px-2 py-1
                        text-[11px]
                        text-muted-foreground
                      "
                    >
                      {item}
                    </span>
                  ))}
              </div>
            )}
          </div>
        </CardContent>

        {/* Bottom accent */}
        <div
          className="
            absolute bottom-0 left-0 right-0
            h-0.5
            origin-left scale-x-0
            bg-primary
            transition-transform duration-500
            group-hover:scale-x-100
          "
        />
      </Card>
    </motion.div>
  );
}