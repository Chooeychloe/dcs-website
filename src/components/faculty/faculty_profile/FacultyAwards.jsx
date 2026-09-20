import { Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import FacultySectionHeader from "./FacultySectionHeader";

export default function FacultyAwards({ items }) {
  if (!items?.length) return null;

  return (
    <section>
      <FacultySectionHeader
        icon={Award}
        title="Awards & Recognition"
        description="Academic, professional, and institutional recognition."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item, index) => (
          <article
            key={`${item.title}-${index}`}
            className="
              group
              rounded-2xl
              border
              bg-muted/20
              p-5
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-muted/40
              hover:shadow-md
            "
          >
            <div className="flex items-start gap-4">
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-primary/10
                  text-primary
                  transition-colors
                  duration-300
                  group-hover:bg-primary
                  group-hover:text-primary-foreground
                "
              >
                <Award className="h-5 w-5" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="font-semibold leading-6">
                    {item.title}
                  </h3>

                  {item.year && (
                    <Badge variant="secondary">
                      {item.year}
                    </Badge>
                  )}
                </div>

                {item.organization && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.organization}
                  </p>
                )}

                {item.description && (
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
