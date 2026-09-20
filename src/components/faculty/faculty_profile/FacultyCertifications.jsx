import { BadgeCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function FacultyCertifications({ items }) {
  if (!items?.length) {
    return null;
  }

  return (
    <section>
      <div className="mb-5 flex items-center gap-2">
        <BadgeCheck className="h-5 w-5 text-primary" />

        <h2 className="text-lg font-semibold">
          Certifications & Training
        </h2>
      </div>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className="
              rounded-xl
              border
              bg-muted/20
              p-4
            "
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-medium">
                  {item.title}
                </h3>

                {item.issuer && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.issuer}
                  </p>
                )}
              </div>

              {item.year && (
                <Badge variant="secondary">
                  {item.year}
                </Badge>
              )}
            </div>

            {item.type && (
              <div className="mt-3">
                <Badge variant="outline">
                  {item.type}
                </Badge>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

