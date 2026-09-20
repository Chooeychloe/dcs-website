

import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProgramNotFound() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24 text-center">
      <h1 className="text-3xl font-bold">
        Program Not Found
      </h1>

      <p className="mt-4 text-muted-foreground">
        The requested academic program could not be found.
      </p>

      <Link
        to="/programs"
        className="
          mt-8
          inline-flex h-11
          items-center justify-center
          rounded-lg
          bg-primary
          px-5
          text-sm font-semibold
          text-primary-foreground
          transition-colors
          hover:bg-primary/90
        "
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Programs
      </Link>
    </main>
  );
}
