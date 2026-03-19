import { useState } from "react";
import { X } from "lucide-react";
import type { Dentist } from "@/data/dentists";
import { useAppointments } from "@/store/appointmentStore";
import { toast } from "sonner";

interface BookingModalProps {
  dentist: Dentist;
  onClose: () => void;
}

const BookingModal = ({ dentist, onClose }: BookingModalProps) => {
  const { addAppointment } = useAppointments();
  const [form, setForm] = useState({
    patientName: "",
    age: "",
    gender: "Male" as "Male" | "Female",
    appointmentDate: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.patientName || !form.age || !form.appointmentDate) {
      toast.error("Please fill all fields");
      return;
    }
    addAppointment({
      patientName: form.patientName,
      age: Number(form.age),
      gender: form.gender,
      appointmentDate: form.appointmentDate,
      dentist: dentist.name,
      clinic: dentist.clinic,
    });
    toast.success("Appointment booked successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-card rounded-xl shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_16px_32px_rgba(0,0,0,0.12)] w-full max-w-md mx-4 p-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-lg font-semibold text-foreground tracking-tight">Book Appointment</h2>
            <p className="text-sm text-muted-foreground mt-0.5">{dentist.name} · {dentist.clinic}</p>
          </div>
          <button onClick={onClose} className="p-1.5 text-muted-foreground hover:text-foreground rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5">Patient Name</label>
            <input
              type="text"
              value={form.patientName}
              onChange={(e) => setForm({ ...form, patientName: e.target.value })}
              className="w-full px-3 py-2 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
              placeholder="Enter patient name"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5">Age</label>
              <input
                type="number"
                value={form.age}
                onChange={(e) => setForm({ ...form, age: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground tabular-nums"
                placeholder="Age"
                min="1"
                max="120"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5">Gender</label>
              <select
                value={form.gender}
                onChange={(e) => setForm({ ...form, gender: e.target.value as "Male" | "Female" })}
                className="w-full px-3 py-2 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5">Appointment Date</label>
            <input
              type="date"
              value={form.appointmentDate}
              onChange={(e) => setForm({ ...form, appointmentDate: e.target.value })}
              className="w-full px-3 py-2 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground tabular-nums"
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 px-4 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-lg shadow-sm hover:opacity-90 active:scale-[0.98] transition-all duration-150"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
