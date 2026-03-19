import { Award, Building2, MapPin } from "lucide-react";
import type { Dentist } from "@/data/dentists";

interface DentistCardProps {
  dentist: Dentist;
  onBook: (dentist: Dentist) => void;
}

const DentistCard = ({ dentist, onBook }: DentistCardProps) => {
  return (
    <div className="bg-card rounded-xl shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.05)] overflow-hidden hover:shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_8px_16px_rgba(0,0,0,0.08)] transition-shadow duration-150">
      <div className="w-full h-56 overflow-hidden">
        <img
          src={dentist.image}
          alt={dentist.name}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="p-5">
        <h3 className="text-base font-semibold text-foreground tracking-tight">
          {dentist.name}
        </h3>
        <p className="text-sm text-muted-foreground mt-0.5">
          {dentist.degree}, {dentist.specialty}
        </p>

        <div className="mt-4 space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-primary/60" />
            {dentist.experience} years experience
          </div>
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-primary/60" />
            {dentist.clinic}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary/60" />
            {dentist.location}
          </div>
        </div>

        <button
          onClick={() => onBook(dentist)}
          className="w-full mt-5 px-4 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-lg shadow-sm hover:opacity-90 active:scale-[0.98] transition-all duration-150"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DentistCard;
