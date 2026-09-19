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

function App() {
  return (
    <BrowserRouter>
      <SiteLayout>
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

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
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  );
}

export default App;