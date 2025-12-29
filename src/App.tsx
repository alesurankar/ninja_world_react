import { Routes, Route } from "react-router-dom";
import AdminPage from "./pages/admin/AdminPage";
import LandingPage from "./pages/public/LandingPage";
import AdminLayout from "./layouts/AdminLayout";
import PublicLayout from "./layouts/PublicLayout";

const App = () => {
  return (
    <Routes>
      {/* Public pages wrapped in PublicLayout */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>

      {/* Admin pages wrapped in AdminLayout */}
      <Route element={<AdminLayout />}>
        <Route path="/admin" element={<AdminPage />} />
      </Route>
    </Routes>
  );
};

export default App;
