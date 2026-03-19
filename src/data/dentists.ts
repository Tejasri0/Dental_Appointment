import dentistSarah from "@/assets/dentist-sarah.jpg";
import dentistJames from "@/assets/dentist-james.jpg";
import dentistEmily from "@/assets/dentist-emily.jpg";
import dentistDavid from "@/assets/dentist-david.jpg";
import dentistPriya from "@/assets/dentist-priya.jpg";
import dentistMichael from "@/assets/dentist-michael.jpg";

export interface Dentist {
  id: string;
  name: string;
  degree: string;
  specialty: string;
  experience: number;
  clinic: string;
  location: string;
  image: string;
}

export const dentists: Dentist[] = [
  {
    id: "1",
    name: "Dr. Sarah Mitchell",
    degree: "DDS",
    specialty: "Cosmetic Dentistry",
    experience: 12,
    clinic: "Bright Smile Dental",
    location: "New York, NY",
    image: dentistSarah,
  },
  {
    id: "2",
    name: "Dr. James Chen",
    degree: "DMD",
    specialty: "Orthodontics",
    experience: 8,
    clinic: "Perfect Align Clinic",
    location: "San Francisco, CA",
    image: dentistJames,
  },
  {
    id: "3",
    name: "Dr. Emily Watson",
    degree: "DMD",
    specialty: "Pediatric Dentistry",
    experience: 6,
    clinic: "Kids Smile Hub",
    location: "Houston, TX",
    image: dentistEmily,
  },
  {
    id: "4",
    name: "Dr. David Park",
    degree: "DDS",
    specialty: "Oral Surgery",
    experience: 15,
    clinic: "City Dental Center",
    location: "Chicago, IL",
    image: dentistDavid,
  },
  {
    id: "5",
    name: "Dr. Priya Sharma",
    degree: "BDS",
    specialty: "Endodontics",
    experience: 10,
    clinic: "Root Care Dental",
    location: "Austin, TX",
    image: dentistPriya,
  },
  {
    id: "6",
    name: "Dr. Michael Roberts",
    degree: "DDS",
    specialty: "Periodontics",
    experience: 9,
    clinic: "Gum Health Clinic",
    location: "Seattle, WA",
    image: dentistMichael,
  },
];
