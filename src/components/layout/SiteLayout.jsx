import SiteNavbar from "./SiteNavbar";
import SiteFooter from "./SiteFooter";

export default function SiteLayout({ children }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNavbar />

      <div>
        {children}
      </div>

      <SiteFooter />
    </div>
  );
}