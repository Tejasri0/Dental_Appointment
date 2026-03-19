import Navbar from "@/components/Navbar";
import AppointmentTable from "@/components/AppointmentTable";

const AdminPanel = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-foreground tracking-tight">Admin Panel</h1>
          <p className="text-sm text-muted-foreground mt-1">View and manage all booked appointments</p>
        </div>
        <AppointmentTable />
      </main>
    </div>
  );
};

export default AdminPanel;
