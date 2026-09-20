import FacultyEducation from "@/components/faculty/faculty_profile/FacultyEducation";
import FacultyExperience from "@/components/faculty/faculty_profile/FacultyExperience";
import FacultyResearch from "@/components/faculty/faculty_profile/FacultyResearch";
import FacultyPublications from "@/components/faculty/faculty_profile/FacultyPublications";
import FacultyCertifications from "@/components/faculty/faculty_profile/FacultyCertifications";
import FacultyAwards from "@/components/faculty/faculty_profile/FacultyAwards";
import FacultyAffiliations from "@/components/faculty/faculty_profile/FacultyAffiliations";
import FacultyExtension from "@/components/faculty/faculty_profile/FacultyExtension";
import FacultyDevelopment from "@/components/faculty/faculty_profile/FacultyDevelopment";

export const facultySectionConfig = {
  education: {
    component: FacultyEducation,
    getItems: (data) => data.education,
  },

  experience: {
    component: FacultyExperience,
    getItems: (data) => data.experience,
  },

  research: {
    component: FacultyResearch,
    getItems: (data) => data.research,
  },

  publications: {
    component: FacultyPublications,
    getItems: (data) => data.publications,
  },

  certifications: {
    component: FacultyCertifications,
    getItems: (data) => data.certifications,
  },

  awards: {
    component: FacultyAwards,
    getItems: (data) => data.awards,
  },

  affiliations: {
    component: FacultyAffiliations,
    getItems: (data) => data.affiliations,
  },

  extension: {
    component: FacultyExtension,
    getItems: (data) => data.extension,
  },

  development: {
    component: FacultyDevelopment,
    getItems: (data) => data.development,
  },
};
