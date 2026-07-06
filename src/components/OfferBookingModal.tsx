import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, Loader2, CheckCircle2, Sparkles } from "lucide-react";

import { useBooking } from "@/lib/BookingContext";
import { cn } from "@/lib/utils";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

const OFFER_NAME = "VIP Summer Beauty Package — Deluxe Pedicure + BIAB with French Tips";
const OFFER_PRICE = "€85 (Save €25)";

const formSchema = z.object({
  date: z.date({ required_error: "Please select a date" }),
  time: z.string().min(1, "Please select a time"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  contact: z.string().min(5, "Please enter your phone number or email"),
});

const timeSlots = [
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
  "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
  "06:00 PM", "06:30 PM", "07:00 PM",
];

export function OfferBookingModal() {
  const { isOfferOpen, closeOfferModal } = useBooking();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", contact: "", time: "" },
  });

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      closeOfferModal();
      setTimeout(() => {
        form.reset();
        setIsSuccess(false);
      }, 300);
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    const formattedDate = format(values.date, "EEEE, MMMM do, yyyy");

    const message = `🌟 *VIP Offer Booking Request*

*Package:* ${OFFER_NAME}
*Price:* ${OFFER_PRICE}

*Name:* ${values.name}
*Contact:* ${values.contact}
*Date:* ${formattedDate}
*Time:* ${values.time}

Please confirm this appointment.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/353858168625?text=${encodedMessage}`;

    const emailSubject = encodeURIComponent(`VIP Offer Booking — ${values.name}`);
    const emailBody = encodeURIComponent(
      `Package: ${OFFER_NAME}\nPrice: ${OFFER_PRICE}\n\nName: ${values.name}\nContact: ${values.contact}\nDate: ${formattedDate}\nTime: ${values.time}`,
    );
    const mailtoUrl = `mailto:connectwithusxx@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    await new Promise((resolve) => setTimeout(resolve, 800));

    window.open(whatsappUrl, "_blank");
    window.location.href = mailtoUrl;

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <Dialog open={isOfferOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[480px] bg-background border-border max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          {/* Offer badge */}
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 bg-rose text-ink text-xs uppercase tracking-luxe rounded-full px-4 py-1.5 font-semibold">
              <Sparkles size={12} />
              Limited Time Offer
            </span>
          </div>

          <DialogTitle className="font-display text-2xl text-ink leading-tight">
            Book This Offer
          </DialogTitle>

          <DialogDescription asChild>
            <div className="mt-2 space-y-2">
              {/* Pre-filled service highlight */}
              <div className="rounded-xl border border-rose/25 bg-rose/8 px-4 py-3">
                <p className="text-xs text-muted-foreground uppercase tracking-luxe mb-1">Your Package</p>
                <p className="text-sm font-medium text-ink leading-snug">{OFFER_NAME}</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-base text-muted-foreground line-through opacity-60">€110</span>
                  <span className="font-display text-xl text-rose">€85</span>
                  <span className="text-xs text-muted-foreground">· Save €25</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Just pick your date &amp; time — we'll confirm via WhatsApp.
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 text-green-500" />
            <h3 className="font-display text-xl text-ink">Offer Booked!</h3>
            <p className="text-muted-foreground">
              Your VIP package request has been submitted. We'll confirm shortly via WhatsApp.
            </p>
            <Button
              onClick={() => handleOpenChange(false)}
              className="mt-4 bg-ink text-white hover:bg-rose hover:text-ink transition-colors"
            >
              Close
            </Button>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Date */}
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col justify-end">
                      <FormLabel>Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Time */}
                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Time</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Contact */}
                <FormField
                  control={form.control}
                  name="contact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone / Email</FormLabel>
                      <FormControl>
                        <Input placeholder="How can we reach you?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-ink text-white hover:bg-rose hover:text-ink transition-colors h-12 text-base rounded-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Confirm Offer Booking"
                  )}
                </Button>
              </div>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}
