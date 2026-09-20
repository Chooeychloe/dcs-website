
import { Search } from "lucide-react";

export default function CurriculumFilters({
  search,
  onSearchChange,
  categories,
  activeCategory,
  onCategoryChange,
  resultCount,
  totalCount,
}) {
  return (
    <div
      className="
        sticky top-16 z-30
        mb-10
        rounded-2xl
        border border-border/70
        bg-background/95
        p-4
        shadow-sm
        backdrop-blur
      "
    >
      <div className="flex flex-col gap-4 lg:flex-row">
        {/* Search */}
        <div className="relative flex-1">
          <Search
            className="
              pointer-events-none
              absolute left-3 top-1/2
              h-4 w-4
              -translate-y-1/2
              text-muted-foreground
            "
          />

          <input
            type="search"
            value={search}
            onChange={(event) =>
              onSearchChange(event.target.value)
            }
            placeholder="Search courses..."
            className="
              h-10
              w-full
              rounded-lg
              border border-border
              bg-background
              pl-9 pr-4
              text-sm
              outline-none
              transition-colors
              placeholder:text-muted-foreground
              focus:border-primary
              focus:ring-2
              focus:ring-primary/20
            "
          />
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-1 lg:max-w-[65%]">
          {categories.map((category) => {
            const isActive =
              activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() =>
                  onCategoryChange(category)
                }
                className={`
                  whitespace-nowrap
                  rounded-lg
                  border
                  px-3 py-2
                  text-xs font-medium
                  transition-colors
                  ${
                    isActive
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-muted-foreground hover:border-primary/30 hover:text-primary"
                  }
                `}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-3 text-xs text-muted-foreground">
        Showing{" "}
        <span className="font-medium text-foreground">
          {resultCount}
        </span>{" "}
        of{" "}
        <span className="font-medium text-foreground">
          {totalCount}
        </span>{" "}
        courses
      </div>
    </div>
  );
}