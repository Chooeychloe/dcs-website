import { BriefcaseBusiness } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import FacultySectionHeader from "./FacultySectionHeader";

export default function FacultyDevelopment({ items }) {
  if (!items || Object.keys(items).length === 0) {
    return null;
  }

  return (
    <section>
      <FacultySectionHeader
        icon={BriefcaseBusiness}
        title="Professional Development"
        description="Continuing education, training, workshops, and professional growth activities."
      />

      <div className="relative ml-3 border-l">
        {Object.entries(items).map(
          ([year, activities]) => (
            <div
              key={year}
              className="relative pb-10 pl-8 last:pb-0"
            >
              {/* Timeline marker */}
              <div
                className="
                  absolute
                  -left-2.25
                  top-1
                  h-4
                  w-4
                  rounded-full
                  border-4
                  border-background
                  bg-primary
                "
              />

              {/* Year */}
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

              {/* Activities */}
              <div className="space-y-3">
                {activities.map(
                  (activity, index) => (
                    <div
                      key={index}
                      className="
                        rounded-2xl
                        border
                        bg-muted/20
                        p-5
                        text-sm
                        leading-6
                        text-muted-foreground
                        transition-all
                        duration-200
                        hover:bg-muted/40
                        hover:shadow-sm
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
