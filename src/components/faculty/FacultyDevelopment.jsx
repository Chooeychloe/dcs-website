import { BriefcaseBusiness } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function FacultyDevelopment({ items }) {
  if (!items || Object.keys(items).length === 0) {
    return null;
  }

  return (
    <section className="lg:col-span-2">
      <div className="mb-5 flex items-center gap-2">
        <BriefcaseBusiness className="h-5 w-5 text-primary" />

        <h2 className="text-lg font-semibold">
          Professional Development
        </h2>
      </div>

      <div className="relative ml-3 border-l">
        {Object.entries(items).map(
          ([year, activities]) => (
            <div
              key={year}
              className="relative pb-10 pl-8 last:pb-0"
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

              <div className="mb-4 flex items-center gap-3">
                <span className="text-xl font-bold">
                  {year}
                </span>

                {year === "2026" && (
                  <Badge variant="secondary">
                    Current
                  </Badge>
                )}
              </div>

              <div className="space-y-3">
                {activities.map(
                  (activity, index) => (
                    <div
                      key={index}
                      className="
                        rounded-xl
                        border
                        bg-muted/20
                        p-4
                        text-sm
                        leading-6
                        text-muted-foreground
                        transition-colors
                        hover:bg-muted/40
                      "
                    >
                      {activity}
                    </div>
                  )
                )}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
