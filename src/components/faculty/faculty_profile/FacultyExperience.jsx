import { BriefcaseBusiness } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import FacultySectionHeader from "./FacultySectionHeader";

export default function FacultyExperience({ items }) {
  if (!items?.length) return null;

  return (
    <section>
      <FacultySectionHeader
        icon={BriefcaseBusiness}
        title="Professional Experience"
        description="Professional roles, responsibilities, and experience."
      />

      <div className="relative ml-3 border-l">
        {items.map((item, index) => (
          <div
            key={`${item.position}-${index}`}
            className="relative pb-8 pl-8 last:pb-0"
          >
            {/* Timeline dot */}
            <div className="absolute -left-2.25 top-1 h-4 w-4 rounded-full border-4 border-background bg-primary" />

            {/* Experience card */}
            <div className="rounded-2xl border bg-muted/20 p-5 transition-all duration-200 hover:bg-muted/40 hover:shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold">
                    {item.position}
                  </h3>

                  {item.institution && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.institution}
                    </p>
                  )}
                </div>

                {item.period && (
                  <Badge variant="secondary">
                    {item.period}
                  </Badge>
                )}
              </div>

              {item.description && (
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
