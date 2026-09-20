import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import FacultySectionHeader from "./FacultySectionHeader";

export default function FacultyEducation({ items }) {
  if (!items?.length) return null;

  return (
    <section>
      <FacultySectionHeader
        icon={GraduationCap}
        title="Educational Background"
        description="Academic degrees and educational qualifications."
      />

      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={`${item.degree}-${index}`}
            className="rounded-2xl border bg-muted/20 p-5 transition-all duration-200 hover:bg-muted/40 hover:shadow-sm"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-medium">
                  {item.degree}
                </h3>

                {item.institution && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.institution}
                  </p>
                )}
              </div>

              {item.status && (
                <Badge variant="secondary">
                  {item.status}
                </Badge>
              )}
            </div>

            {item.year && (
              <p className="mt-2 text-sm text-muted-foreground">
                {item.year}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
