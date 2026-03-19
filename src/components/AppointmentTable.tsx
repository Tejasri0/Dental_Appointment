import { Check, X, Trash2, RotateCcw } from "lucide-react";
import { useAppointments } from "@/store/appointmentStore";
import { toast } from "sonner";

const statusStyles = {
  pending: "bg-amber-50 text-amber-700 ring-amber-600/20",
  approved: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  cancelled: "bg-muted text-muted-foreground ring-muted-foreground/10",
} as const;

const genderStyles = {
  Male: "bg-primary/10 text-primary",
  Female: "bg-purple-100 text-purple-700",
} as const;

const AppointmentTable = () => {
  const { appointments, updateStatus, deleteAppointment } = useAppointments();

  const handleUpdateStatus = (id: string, status: "pending" | "approved" | "cancelled") => {
    updateStatus(id, status);
    toast.success(`Appointment ${status}`);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this appointment?")) {
      deleteAppointment(id);
      toast.success("Appointment deleted");
    }
  };

  if (appointments.length === 0) {
    return (
      <div className="bg-card rounded-xl shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.05)] p-16 text-center text-muted-foreground">
        No appointments yet. Appointments booked from the Dentists page will appear here.
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.05)] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
              <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Patient Name</th>
              <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Age</th>
              <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Gender</th>
              <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider tabular-nums">Date</th>
              <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Dentist</th>
              <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Clinic</th>
              <th className="text-right px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((apt) => (
              <tr key={apt.id} className="border-b border-border last:border-0 hover:bg-accent/50 transition-colors duration-150">
                <td className="px-5 py-3">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${statusStyles[apt.status]}`}>
                    {apt.status.charAt(0).toUpperCase() + apt.status.slice(1)}
                  </span>
                </td>
                <td className="px-5 py-3 font-medium text-foreground">{apt.patientName}</td>
                <td className="px-5 py-3 text-muted-foreground tabular-nums">{apt.age}</td>
                <td className="px-5 py-3">
                  <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${genderStyles[apt.gender]}`}>
                    {apt.gender}
                  </span>
                </td>
                <td className="px-5 py-3 text-muted-foreground tabular-nums">{apt.appointmentDate}</td>
                <td className="px-5 py-3 text-muted-foreground">{apt.dentist}</td>
                <td className="px-5 py-3 text-muted-foreground">{apt.clinic}</td>
                <td className="px-5 py-3">
                  <div className="flex items-center justify-end gap-2">
                    {apt.status === "pending" && (
                      <button onClick={() => handleUpdateStatus(apt.id, "approved")} className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-medium rounded-lg shadow-sm hover:opacity-90 active:scale-95 transition-all duration-150">
                        <Check className="w-3.5 h-3.5" /> Approve
                      </button>
                    )}
                    {apt.status === "cancelled" && (
                      <button onClick={() => handleUpdateStatus(apt.id, "pending")} className="inline-flex items-center gap-1 px-3 py-1.5 border border-border text-primary text-xs font-medium rounded-lg hover:bg-primary/5 active:scale-95 transition-all duration-150">
                        <RotateCcw className="w-3.5 h-3.5" /> Re-activate
                      </button>
                    )}
                    {apt.status !== "cancelled" && (
                      <button onClick={() => handleUpdateStatus(apt.id, "cancelled")} className="inline-flex items-center gap-1 px-3 py-1.5 border border-border text-muted-foreground text-xs font-medium rounded-lg hover:bg-destructive/5 hover:text-destructive hover:border-destructive/20 active:scale-95 transition-all duration-150">
                        <X className="w-3.5 h-3.5" /> Cancel
                      </button>
                    )}
                    <button onClick={() => handleDelete(apt.id)} className="p-1.5 text-muted-foreground hover:text-destructive rounded-lg transition-colors duration-150" aria-label="Delete record">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentTable;
