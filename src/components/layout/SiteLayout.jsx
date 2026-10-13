import SiteNavbar from "./SiteNavbar";
import SiteFooter from "./SiteFooter";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pages = {
  "/": ["Department of Computer Studies | CvSU Bacoor", "Explore Computer Science and Information Technology at CvSU Bacoor, meet faculty, and find official campus information."],
  "/about": ["About | Department of Computer Studies", "Learn about the Department of Computer Studies at Cavite State University Bacoor City Campus."],
  "/faculty": ["Faculty | Department of Computer Studies", "Search faculty and coordinators by name, role, program, or specialization."],
  "/programs": ["Programs | Department of Computer Studies", "Explore the Computer Science and Information Technology programs and curricula at CvSU Bacoor."],
  "/research": ["Research | Department of Computer Studies", "Explore computing research areas and published department projects."],
  "/extension": ["Extension | Department of Computer Studies", "Learn about community extension areas and featured outreach activities."],
  "/contact": ["Contact | Department of Computer Studies", "Find CvSU Bacoor campus contact details, location, and official information."],
};

export default function SiteLayout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const [title, description] = pages[pathname] ?? (pathname.startsWith("/faculty/")
      ? ["Faculty Profile | Department of Computer Studies", "Faculty profile at the CvSU Bacoor Department of Computer Studies."]
      : pathname.startsWith("/programs/")
        ? ["Program Curriculum | Department of Computer Studies", "Browse course information for a Department of Computer Studies program at CvSU Bacoor."]
        : ["Page Not Found | Department of Computer Studies", "The requested page could not be found."]);
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      description
    );
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteNavbar />

      <div id="main-content" tabIndex={-1}>
        {children}
      </div>

      <SiteFooter />
    </div>
  );
}
