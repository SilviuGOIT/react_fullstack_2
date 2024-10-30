import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import UniversitiesPage from "./pages/universities/UniversitiesPage";
// import FacultiesPage from "./pages/faculties/FacultiesPage";
// import FacultyPage from "./pages/faculties/components/faculty/FacultyPage";
// import FacultyDescription from "./pages/faculties/components/faculty/components/FacultyDescription";
// import FacultyHistory from "./pages/faculties/components/faculty/components/FacultyHistory";
import NotFoundPage from "./pages/NotFoundPage";
import { lazy } from "react";

// Importurile dinamice ( lazy ) trebuie sa fie dupa importurile normale
const FacultiesPage = lazy(() => import("./pages/faculties/FacultiesPage"));
const FacultyPage = lazy(() =>
  import("./pages/faculties/components/faculty/FacultyPage")
);
const FacultyDescription = lazy(() =>
  import("./pages/faculties/components/faculty/components/FacultyDescription")
);
const FacultyHistory = lazy(() =>
  import("./pages/faculties/components/faculty/components/FacultyHistory")
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<UniversitiesPage />}></Route>
          <Route path="faculties" element={<FacultiesPage />} />
          <Route path="faculties/:id" element={<FacultyPage />}>
            <Route index element={<FacultyDescription />} />
            <Route path="description" element={<FacultyDescription />} />
            <Route path="history" element={<FacultyHistory />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
