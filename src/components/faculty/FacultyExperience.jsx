import { BriefcaseBusiness } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function FacultyExperience({ items }) {
  if (!items?.length) {
    return null;
  }

  return (
    <section className="lg:col-span-2">
      <div className="mb-5 flex items-center gap-2">
        <BriefcaseBusiness className="h-5 w-5 text-primary" />

        <h2 className="text-lg font-semibold">
          Professional Experience
        </h2>
      </div>

      <div className="relative ml-3 border-l">
        {items.map((item, index) => (
          <div
            key={`${item.position}-${index}`}
            className="relative pb-8 pl-8 last:pb-0"
          >
            <div
              className="
                absolute -left-[9px] top-1
                h-4 w-4
                rounded-full
                border-4
                border-background
                bg-primary
              "
            />

            <div className="rounded-2xl border bg-muted/20 p-5">
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
