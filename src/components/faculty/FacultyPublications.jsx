import { FileText } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function FacultyPublications({ items }) {
  if (!items?.length) {
    return null;
  }

  return (
    <section className="lg:col-span-2">
      <div className="mb-5 flex items-center gap-2">
        <FileText className="h-5 w-5 text-primary" />

        <h2 className="text-lg font-semibold">
          Publications
        </h2>
      </div>

      <div className="space-y-4">
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
            <div className="flex items-start gap-4">
              <div
                className="
                  flex h-10 w-10 shrink-0
                  items-center justify-center
                  rounded-xl
                  bg-primary/10
                "
              >
                <FileText className="h-5 w-5 text-primary" />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-semibold leading-6">
                  {item.title}
                </h3>

                {item.authors?.length > 0 && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.authors.join(", ")}
                  </p>
                )}

                <div className="mt-3 flex flex-wrap gap-2">
                  {item.year && (
                    <Badge variant="secondary">
                      {item.year}
                    </Badge>
                  )}

                  {item.type && (
                    <Badge variant="outline">
                      {item.type}
                    </Badge>
                  )}
                </div>

                {item.journal && (
                  <p className="mt-3 text-sm text-muted-foreground">
                    {item.journal}
                  </p>
                )}

                {(item.url || item.doi) && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          text-sm
                          font-medium
                          text-primary
                          hover:underline
                        "
                      >
                        View Publication →
                      </a>
                    )}

                    {item.doi && (
                      <a
                        href={item.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          text-sm
                          font-medium
                          text-primary
                          hover:underline
                        "
                      >
                        DOI →
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
