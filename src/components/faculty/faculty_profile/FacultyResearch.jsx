import { FlaskConical } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import FacultySectionHeader from "./FacultySectionHeader";

export default function FacultyResearch({ items }) {
  if (!items?.length) return null;

  return (
    <section>
      <FacultySectionHeader
        icon={FlaskConical}
        title="Research"
        description="Research projects, areas of study, and ongoing academic activities."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item, index) => (
          <div
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
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-semibold leading-6">
                {item.title}
              </h3>

              {item.year && (
                <Badge variant="outline">
                  {item.year}
                </Badge>
              )}
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {item.type && (
                <Badge variant="secondary">
                  {item.type}
                </Badge>
              )}

              {item.status && (
                <Badge variant="outline">
                  {item.status}
                </Badge>
              )}
            </div>

            {item.description && (
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
