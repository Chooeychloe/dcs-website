import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "@/pages/Home";
import FacultyProfile from "@/pages/FacultyProfile";

import SiteLayout from "@/components/layout/SiteLayout";
import Faculty from "./pages/Faculty";
import Programs from "./pages/Programs";
import About from "./pages/About";
import Research from "./pages/Research";

function App() {
  return (
    <BrowserRouter>
      <SiteLayout>
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/faculty/:id"
            element={<FacultyProfile />}
          />
          <Route
            path="/faculty"
            element={<Faculty />}
          />
          <Route
            path="/programs"
            element={<Programs />}
          />
            <Route
            path="/research"
            element={<Research />}
          />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  );
}

export default App;