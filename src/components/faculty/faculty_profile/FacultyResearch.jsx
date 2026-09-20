import { FlaskConical } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function FacultyResearch({ items }) {
  if (!items?.length) {
    return null;
  }

  return (
    <section className="lg:col-span-2">
      <div className="mb-5 flex items-center gap-2">
        <FlaskConical className="h-5 w-5 text-primary" />

        <h2 className="text-lg font-semibold">
          Research
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className="
              rounded-2xl
              border
              bg-muted/20
              p-5
              transition-all
              duration-200
              hover:bg-muted/40
              hover:shadow-sm
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
