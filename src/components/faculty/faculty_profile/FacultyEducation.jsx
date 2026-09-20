import { GraduationCap } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function FacultyEducation({ items }) {
  if (!items?.length) {
    return null;
  }

  return (
    <section>
      <div className="mb-5 flex items-center gap-2">
        <GraduationCap className="h-5 w-5 text-primary" />

        <h2 className="text-lg font-semibold">
          Educational Background
        </h2>
      </div>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={`${item.degree}-${index}`}
            className="
              rounded-xl
              border
              bg-muted/20
              p-4
            "
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
