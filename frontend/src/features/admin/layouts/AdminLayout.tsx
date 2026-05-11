import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/sidebar/AdminSidebar";
import AdminTopbar from "../components/topbar/AdminTopbar";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <AdminSidebar />

      <div className="ml-sidebar min-h-screen">
        <AdminTopbar />

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;