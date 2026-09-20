import { areas, programs } from "@/data/programs";

import AreaCard from "@/components/programs/AreaCard";
import FacultyCTA from "@/components/programs/FacultyCTA";
import ProgramCard from "@/components/programs/ProgramCard";
import ProgramsHero from "@/components/programs/ProgramsHero";
import SectionIntro from "@/components/programs/SectionIntro";

export default function Programs() {
  return (
    <main>
      <ProgramsHero />

      {/* Programs */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <SectionIntro
          eyebrow="Our Programs"
          title="Choose Your Path in Computing"
          description="Build a strong foundation in computing while developing practical skills for today's technology industry."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {programs.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
            />
          ))}
        </div>
      </section>

      {/* Areas */}
      <section className="border-y bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <SectionIntro
            eyebrow="What You'll Learn"
            title="Explore the Computing Landscape"
            description="Our programs expose students to a broad range of computing disciplines and technologies."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => (
              <AreaCard
                key={area.title}
                area={area}
              />
            ))}
          </div>
        </div>
      </section>

      <FacultyCTA />
    </main>
  );
}
