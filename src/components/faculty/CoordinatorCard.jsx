import FacultyCard from "./FacultyCard";

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