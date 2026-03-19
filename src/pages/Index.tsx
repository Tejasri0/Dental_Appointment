import { useState } from "react";
import Navbar from "@/components/Navbar";
import DentistCard from "@/components/DentistCard";
import BookingModal from "@/components/BookingModal";
import { dentists, type Dentist } from "@/data/dentists";

const Index = () => {
  const [selectedDentist, setSelectedDentist] = useState<Dentist | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-foreground tracking-tight">Find Your Dentist</h1>
          <p className="text-sm text-muted-foreground mt-1">Browse our qualified dental professionals and book an appointment</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dentists.map((d) => (
            <DentistCard key={d.id} dentist={d} onBook={setSelectedDentist} />
          ))}
        </div>
      </main>
      {selectedDentist && (
        <BookingModal dentist={selectedDentist} onClose={() => setSelectedDentist(null)} />
      )}
    </div>
  );
};

export default Index;
