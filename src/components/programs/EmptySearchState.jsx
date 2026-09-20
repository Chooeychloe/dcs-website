
import { Search } from "lucide-react";

export default function EmptySearchState({
  search,
  onClear,
}) {
  return (
    <div
      className="
        rounded-2xl
        border border-dashed
        border-border
        px-6 py-14
        text-center
      "
    >
      <div
        className="
          mx-auto
          flex h-12 w-12
          items-center justify-center
          rounded-xl
          bg-muted
          text-muted-foreground
        "
      >
        <Search className="h-5 w-5" />
      </div>

      <h3 className="mt-4 font-semibold">
        No courses found
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        No course matches{" "}
        {search
          ? `"${search}"`
          : "your selected filter"}.
      </p>

      <button
        type="button"
        onClick={onClear}
        className="
          mt-5
          text-sm font-medium
          text-primary
          hover:underline
        "
      >
        Clear search and filters
      </button>
    </div>
  );
}