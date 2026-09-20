import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import ProgramHero from "@/components/programs/ProgramHero";
import CurriculumStats from "@/components/programs/CurriculumStats";
import CurriculumFilters from "@/components/programs/CurriculumFilters";
import CurriculumSection from "@/components/programs/CurriculumSection";
import EmptySearchState from "@/components/programs/EmptySearchState";
import ProgramNotFound from "@/components/programs/ProgramNotFound";

import { getProgramById } from "@/data/programs";

export default function ProgramDetails() {
  const { programId } = useParams();

  const program = getProgramById(programId);

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const curriculum = useMemo(() => program?.curriculum ?? [], [program]);

  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(
        curriculum.map((course) => course.category)
      ),
    ];
  }, [curriculum]);

  const filteredCourses = useMemo(() => {
    const query = search.trim().toLowerCase();

    return curriculum.filter((course) => {
      const matchesCategory =
        activeCategory === "All" ||
        course.category === activeCategory;

      const matchesSearch =
        !query ||
        course.code.toLowerCase().includes(query) ||
        course.title.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [curriculum, search, activeCategory]);

  const groupedCourses = useMemo(() => {
    return filteredCourses.reduce((groups, course) => {
      const key = course.section
        ? `${course.category} — ${course.section}`
        : course.category;

      if (!groups[key]) {
        groups[key] = [];
      }

      groups[key].push(course);

      return groups;
    }, {});
  }, [filteredCourses]);

  if (!program) {
    return <ProgramNotFound />;
  }

  const totalUnits = curriculum.reduce(
    (total, course) => total + Number(course.units || 0),
    0
  );

  return (
    <main>
      <ProgramHero program={program} />

      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <CurriculumStats
          totalCourses={curriculum.length}
          totalUnits={totalUnits}
          totalCategories={categories.length - 1}
        />
      </section>

      <section className="border-y bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="mb-8">
            <p className="text-sm font-semibold text-primary">
              Curriculum
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Course Contents
            </h2>

            <p className="mt-4 max-w-2xl text-muted-foreground">
              Browse the courses included in the {program.code} curriculum.
              Search by course code or title, or filter by curriculum area.
            </p>
          </div>

          <CurriculumFilters
            search={search}
            onSearchChange={setSearch}
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            resultCount={filteredCourses.length}
            totalCount={curriculum.length}
          />

          {filteredCourses.length === 0 ? (
            <EmptySearchState
              search={search}
              onClear={() => {
                setSearch("");
                setActiveCategory("All");
              }}
            />
          ) : (
            <div className="space-y-12">
              {Object.entries(groupedCourses).map(
                ([category, courses]) => (
                  <CurriculumSection
                    key={category}
                    category={category}
                    courses={courses}
                    programId={program.id}
                  />
                )
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
