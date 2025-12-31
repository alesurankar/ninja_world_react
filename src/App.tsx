import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import AdminPage from "./pages/admin/AdminPage";
import LandingPage from "./pages/public/LandingPage";
import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";
import api from "./utils/api";

const App = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await api.get("/me");
        setUser(data.user || null);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      {/* Public pages */}
      <Route element={<PublicLayout user={user} setUser={setUser} />}>
        <Route path="/" element={<LandingPage />} />
      </Route>

      {/* Admin pages */}
      <Route
        path="/admin"
        element={
          <AdminLayout user={user}>
            <AdminPage />
          </AdminLayout>
        }
      />
    </Routes>
  );
};

export default App;
