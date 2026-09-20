import { ExternalLink, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import FacultySectionHeader from "./FacultySectionHeader";

export default function FacultyPublications({ items }) {
  if (!items?.length) return null;

  return (
    <section>
      <FacultySectionHeader
        icon={FileText}
        title="Publications"
        description="Published works, research papers, and academic contributions."
      />

      <div className="space-y-4">
        {items.map((item, index) => (
          <article
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
            <div className="flex items-start gap-4">
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-primary/10
                  text-primary
                  transition-colors
                  duration-300
                  group-hover:bg-primary
                  group-hover:text-primary-foreground
                "
              >
                <FileText className="h-5 w-5" />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-semibold leading-6">
                  {item.title}
                </h3>

                {item.authors?.length > 0 && (
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
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
                  <p className="mt-3 text-sm italic text-muted-foreground">
                    {item.journal}
                  </p>
                )}

                {(item.url || item.doi) && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-lg
                          border
                          bg-background
                          px-3
                          py-2
                          text-sm
                          font-medium
                          transition-all
                          duration-200
                          hover:border-primary/40
                          hover:bg-primary/5
                          hover:text-primary
                        "
                      >
                        View Publication
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}

                    {item.doi && (
                      <a
                        href={item.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-lg
                          border
                          bg-background
                          px-3
                          py-2
                          text-sm
                          font-medium
                          transition-all
                          duration-200
                          hover:border-primary/40
                          hover:bg-primary/5
                          hover:text-primary
                        "
                      >
                        DOI
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
