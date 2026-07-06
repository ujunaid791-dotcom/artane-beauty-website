import { createContext, useContext, useState, type ReactNode } from "react";

type BookingContextType = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  isOfferOpen: boolean;
  openOfferModal: () => void;
  closeOfferModal: () => void;
  isStudentOpen: boolean;
  openStudentModal: () => void;
  closeStudentModal: () => void;
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOfferOpen, setIsOfferOpen] = useState(false);
  const [isStudentOpen, setIsStudentOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const openOfferModal = () => setIsOfferOpen(true);
  const closeOfferModal = () => setIsOfferOpen(false);
  const openStudentModal = () => setIsStudentOpen(true);
  const closeStudentModal = () => setIsStudentOpen(false);

  return (
    <BookingContext.Provider
      value={{
        isOpen, openModal, closeModal,
        isOfferOpen, openOfferModal, closeOfferModal,
        isStudentOpen, openStudentModal, closeStudentModal,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
