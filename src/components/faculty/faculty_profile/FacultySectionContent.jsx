import { useEffect, useState } from "react";

export default function FacultySectionContent({
  activeSection,
  children,
}) {
  const [visibleSection, setVisibleSection] =
    useState(activeSection);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (activeSection === visibleSection) {
      return;
    }

    setIsVisible(false);

    const timeout = setTimeout(() => {
      setVisibleSection(activeSection);
      setIsVisible(true);
    }, 150);

    return () => clearTimeout(timeout);
  }, [activeSection, visibleSection]);

  return (
    <div
      className={`
        transition-all duration-300 ease-out
        ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-2 opacity-0"
        }
      `}
    >
      {children(visibleSection)}
    </div>
  );
}
