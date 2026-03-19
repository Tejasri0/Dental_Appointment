import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

export type AppointmentStatus = "pending" | "approved" | "cancelled";

export interface Appointment {
  id: string;
  patientName: string;
  age: number;
  gender: "Male" | "Female";
  appointmentDate: string;
  dentist: string;
  clinic: string;
  status: AppointmentStatus;
}

interface AppointmentContextType {
  appointments: Appointment[];
  addAppointment: (apt: Omit<Appointment, "id" | "status">) => void;
  updateStatus: (id: string, status: AppointmentStatus) => void;
  deleteAppointment: (id: string) => void;
}

const AppointmentContext = createContext<AppointmentContextType | null>(null);

export const AppointmentProvider = ({ children }: { children: ReactNode }) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const addAppointment = useCallback((apt: Omit<Appointment, "id" | "status">) => {
    setAppointments((prev) => [
      ...prev,
      { ...apt, id: crypto.randomUUID(), status: "pending" as const },
    ]);
  }, []);

  const updateStatus = useCallback((id: string, status: AppointmentStatus) => {
    setAppointments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status } : a))
    );
  }, []);

  const deleteAppointment = useCallback((id: string) => {
    setAppointments((prev) => prev.filter((a) => a.id !== id));
  }, []);

  return (
    <AppointmentContext.Provider value={{ appointments, addAppointment, updateStatus, deleteAppointment }}>
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointments = () => {
  const ctx = useContext(AppointmentContext);
  if (!ctx) throw new Error("useAppointments must be used within AppointmentProvider");
  return ctx;
};
