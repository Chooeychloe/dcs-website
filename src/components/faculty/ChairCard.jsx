import FacultyCard from "./FacultyCard";

export default function ChairCard({ chair, onClick }) {
  return (
    <div className="mb-24 flex justify-center">
      <div className="w-full max-w-md">

        <div className="mb-6 text-center">
          <span
            className="
              inline-flex items-center
              rounded-full
              border border-primary/20
              bg-primary/5
              px-3 py-1
              text-xs font-medium
              uppercase tracking-[0.2em]
              text-primary
            "
          >
            Department Leadership
          </span>
        </div>

        <FacultyCard
          faculty={chair}
          featured
          onClick={onClick}
        />
      </div>
    </div>
  );
}