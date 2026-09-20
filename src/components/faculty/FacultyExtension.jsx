import { HeartHandshake } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function FacultyExtension({ items }) {
  if (!items?.length) {
    return null;
  }

  return (
    <section className="lg:col-span-2">
      <div className="mb-5 flex items-center gap-2">
        <HeartHandshake className="h-5 w-5 text-primary" />

        <h2 className="text-lg font-semibold">
          Extension & Community Engagement
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

            {item.role && (
              <div className="mt-3">
                <Badge variant="secondary">
                  {item.role}
                </Badge>
              </div>
            )}

            {item.organization && (
              <p className="mt-3 text-sm font-medium">
                {item.organization}
              </p>
            )}

            {item.description && (
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
