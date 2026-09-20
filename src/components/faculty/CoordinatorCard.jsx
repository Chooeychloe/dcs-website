import FacultyCard from "./faculty_profile/FacultyCard";

export default function CoordinatorCard({
  coordinator,
  onClick,
}) {
  return (
    <FacultyCard
      faculty={coordinator}
      onClick={onClick}
    />
  );
}