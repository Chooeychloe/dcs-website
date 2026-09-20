import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import FacultyProfileHero from "@/components/faculty/FacultyProfileHero";
import FacultySectionNavigator from "@/components/faculty/FacultySectionNavigator";

import FacultySpecialization from "@/components/faculty/FacultySpecialization";
import FacultySkills from "@/components/faculty/FacultySkills";
import FacultySubjects from "@/components/faculty/FacultySubjects";
import FacultyResearchInterests from "@/components/faculty/FacultyResearchInterests";

import FacultyEducation from "@/components/faculty/FacultyEducation";
import FacultyExperience from "@/components/faculty/FacultyExperience";
import FacultyResearch from "@/components/faculty/FacultyResearch";
import FacultyPublications from "@/components/faculty/FacultyPublications";
import FacultyCertifications from "@/components/faculty/FacultyCertifications";
import FacultyAwards from "@/components/faculty/FacultyAwards";
import FacultyAffiliations from "@/components/faculty/FacultyAffiliations";
import FacultyExtension from "@/components/faculty/FacultyExtension";
import FacultyDevelopment from "@/components/faculty/FacultyDevelopment";

import {
  departmentChair,
  coordinators,
  facultyMembers,
} from "@/data/faculty";

import { getEducation } from "@/data/education";
import { getExperience } from "@/data/experience";
import { getSkills } from "@/data/skills";
import { getCertifications } from "@/data/certifications";
import { getAwards } from "@/data/awards";
import { getAffiliations } from "@/data/affiliations";
import { getFacultyExtension } from "@/data/facultyExtension";
import { getProfessionalDevelopment } from "@/data/professionalDevelopment";
import { getFacultyResearch } from "@/data/facultyResearch";
import { getPublications } from "@/data/publications";

const allFaculty = [
  departmentChair,
  ...coordinators,
  ...facultyMembers,
];

export default function FacultyProfile() {
  const { id } = useParams();

  const [activeSection, setActiveSection] =
    useState("education");

  const faculty = allFaculty.find(
    (member) => member.id === id
  );

  if (!faculty) {
    return <FacultyNotFound />;
  }

  // Faculty data
  const educationItems = getEducation(faculty.id);
  const experienceItems = getExperience(faculty.id);
  const skillsItems = getSkills(faculty.id);
  const certificationItems = getCertifications(faculty.id);
  const awardItems = getAwards(faculty.id);
  const affiliationItems = getAffiliations(faculty.id);
  const extensionItems = getFacultyExtension(faculty.id);
  const developmentItems = getProfessionalDevelopment(faculty.id);
  const researchItems = getFacultyResearch(faculty.id);
  const publicationItems = getPublications(faculty.id);

  return (
    <main className="min-h-screen bg-background">
      {/* Profile Header */}
      <FacultyProfileHero faculty={faculty} />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="space-y-16">

          {/* Basic Information */}
          <div className="grid gap-12 lg:grid-cols-2">
            <FacultySpecialization
              items={faculty.specialization}
            />

            <FacultySkills
              items={skillsItems}
            />

            <FacultySubjects
              items={faculty.subjects}
            />

            <FacultyResearchInterests
              items={faculty.researchInterests}
            />
          </div>

          {/* Section Navigator */}
          <FacultySectionNavigator
            activeSection={activeSection}
            onSelect={setActiveSection}
          />

          {/* Selected Section */}
          <section>
            {activeSection === "education" && (
              <FacultyEducation
                items={educationItems}
              />
            )}

            {activeSection === "experience" && (
              <FacultyExperience
                items={experienceItems}
              />
            )}

            {activeSection === "research" && (
              <FacultyResearch
                items={researchItems}
              />
            )}

            {activeSection === "publications" && (
              <FacultyPublications
                items={publicationItems}
              />
            )}

            {activeSection === "certifications" && (
              <FacultyCertifications
                items={certificationItems}
              />
            )}

            {activeSection === "awards" && (
              <FacultyAwards
                items={awardItems}
              />
            )}

            {activeSection === "affiliations" && (
              <FacultyAffiliations
                items={affiliationItems}
              />
            )}

            {activeSection === "extension" && (
              <FacultyExtension
                items={extensionItems}
              />
            )}

            {activeSection === "development" && (
              <FacultyDevelopment
                items={developmentItems}
              />
            )}
          </section>

        </div>
      </section>
    </main>
  );
}

function FacultyNotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold">
          Faculty Member Not Found
        </h1>

        <p className="mt-3 text-muted-foreground">
          The faculty profile you are looking for does not exist.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="
              group inline-flex items-center gap-2
              rounded-full border
              bg-background/80
              px-4 py-2
              text-sm font-medium
              text-muted-foreground
              shadow-sm
              backdrop-blur
              transition-all duration-200
              hover:bg-muted
              hover:text-foreground
              hover:shadow-md
            "
          >
            <ArrowLeft
              className="
                h-4 w-4
                transition-transform duration-200
                group-hover:-translate-x-1
              "
            />

            Back to Faculty
          </Link>
        </div>
      </div>
    </main>
  );
}
