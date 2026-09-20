import { ArrowUpRight } from "lucide-react";

export default function FacultySectionHeader({
  icon: Icon,
  title,
  description,
}) {
  return (
    <div className="mb-6">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold tracking-tight">
              {title}
            </h2>

            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </div>

          {description && (
            <p className="mt-1 max-w-2xl text-sm leading-6 text-muted-foreground">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
