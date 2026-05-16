import { Calendar } from "lucide-react";
import { useBooking } from "@/lib/BookingContext";

export function MobileCallBar() {
  const { openModal } = useBooking();
  return (
    <button
      onClick={openModal}
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-ink text-white py-4 text-center text-sm font-medium tracking-wide flex items-center justify-center gap-2 shadow-[0_-10px_30px_rgba(0,0,0,0.15)] w-full"
    >
      <Calendar size={16} /> Book Appointment
    </button>
  );
}
