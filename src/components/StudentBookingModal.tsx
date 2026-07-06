import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, Loader2, CheckCircle2, GraduationCap, AlertCircle } from "lucide-react";

import { useBooking } from "@/lib/BookingContext";
import { categories } from "@/lib/services-data";
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

const formSchema = z.object({
  categoryId: z.string().min(1, "Please select a category"),
  serviceName: z.string().min(1, "Please select a service"),
  date: z.date({ required_error: "Please select a date" }),
  time: z.string().min(1, "Please select a time"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  contact: z.string().min(5, "Please enter your phone number or email"),
  college: z.string().min(2, "Please enter your college or university name"),
  idConfirmed: z.literal(true, {
    errorMap: () => ({ message: "You must confirm you will bring a valid student ID" }),
  }),
});

const timeSlots = [
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
  "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
  "06:00 PM", "06:30 PM", "07:00 PM",
];

export function StudentBookingModal() {
  const { isStudentOpen, closeStudentModal } = useBooking();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categoryId: "",
      serviceName: "",
      name: "",
      contact: "",
      college: "",
      time: "",
      idConfirmed: undefined,
    },
  });

  const selectedCategoryId = form.watch("categoryId");
  const selectedCategory = categories.find((c) => c.id === selectedCategoryId);
  const availableServices = selectedCategory
    ? selectedCategory.groups.flatMap((g) => g.rows)
    : [];

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      closeStudentModal();
      setTimeout(() => {
        form.reset();
        setIsSuccess(false);
      }, 300);
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    const formattedDate = format(values.date, "EEEE, MMMM do, yyyy");

    const message = `🎓 *Student Discount Booking — 10% Off*

*Name:* ${values.name}
*College / University:* ${values.college}
*Contact:* ${values.contact}
*Category:* ${selectedCategory?.title || values.categoryId}
*Service:* ${values.serviceName}
*Date:* ${formattedDate}
*Time:* ${values.time}

⚠️ Student ID will be presented at appointment.
Please confirm this booking.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/353858168625?text=${encodedMessage}`;

    const emailSubject = encodeURIComponent(`Student Discount Booking — ${values.name}`);
    const emailBody = encodeURIComponent(
      `🎓 STUDENT DISCOUNT — 10% OFF\n\nName: ${values.name}\nCollege: ${values.college}\nContact: ${values.contact}\nCategory: ${selectedCategory?.title || values.categoryId}\nService: ${values.serviceName}\nDate: ${formattedDate}\nTime: ${values.time}\n\nStudent ID will be presented at appointment.`,
    );
    const mailtoUrl = `mailto:connectwithusxx@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    await new Promise((resolve) => setTimeout(resolve, 800));

    window.open(whatsappUrl, "_blank");
    window.location.href = mailtoUrl;

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <Dialog open={isStudentOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[520px] bg-background border-border max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          {/* Badge */}
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 bg-ink text-white text-xs uppercase tracking-luxe rounded-full px-4 py-1.5 font-semibold">
              <GraduationCap size={12} />
              10% Student Discount
            </span>
          </div>

          <DialogTitle className="font-display text-2xl text-ink leading-tight">
            Book with Student Discount
          </DialogTitle>

          <DialogDescription asChild>
            <div className="mt-2 space-y-2">
              {/* ID reminder */}
              <div className="flex items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
                <AlertCircle size={15} className="text-amber-600 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-800 leading-relaxed">
                  A <strong>valid student ID must be presented</strong> at your appointment. The 10% discount will be applied after verification.
                </p>
              </div>
              <p className="text-xs text-muted-foreground">
                Fill in your details below — we'll confirm via WhatsApp.
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 text-green-500" />
            <h3 className="font-display text-xl text-ink">Booking Requested!</h3>
            <p className="text-muted-foreground">
              Your student discount appointment has been submitted. We'll confirm shortly via WhatsApp.
            </p>
            <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mt-2">
              <GraduationCap size={16} className="text-amber-600 shrink-0" />
              <p className="text-xs text-amber-800">
                Remember to bring your <strong>valid student ID</strong> to your appointment!
              </p>
            </div>
            <Button
              onClick={() => handleOpenChange(false)}
              className="mt-2 bg-ink text-white hover:bg-rose hover:text-ink transition-colors"
            >
              Close
            </Button>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Category */}
                <FormField
                  control={form.control}
                  name="categoryId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select
                        onValueChange={(val: string) => {
                          field.onChange(val);
                          form.setValue("serviceName", "");
                        }}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat.id} value={cat.id}>
                              {cat.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Service */}
                <FormField
                  control={form.control}
                  name="serviceName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        disabled={!selectedCategoryId}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {availableServices.map((service, idx) => (
                            <SelectItem key={`${service.name}-${idx}`} value={service.name}>
                              {service.name} ({service.price})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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
                      <FormLabel>Full Name</FormLabel>
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

              {/* College — full width */}
              <FormField
                control={form.control}
                name="college"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>College / University</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. DCU, UCD, TU Dublin…" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* ID confirmation checkbox */}
              <FormField
                control={form.control}
                name="idConfirmed"
                render={({ field }) => (
                  <FormItem>
                    <div
                      className={cn(
                        "flex items-start gap-3 rounded-xl border px-4 py-3 cursor-pointer transition-colors",
                        field.value
                          ? "border-ink bg-ink/5"
                          : "border-border bg-card hover:border-ink/40",
                      )}
                      onClick={() => field.onChange(field.value ? undefined : true)}
                    >
                      {/* Custom checkbox */}
                      <div
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0 rounded border-2 transition-colors flex items-center justify-center",
                          field.value ? "border-ink bg-ink" : "border-muted-foreground",
                        )}
                      >
                        {field.value && (
                          <svg viewBox="0 0 10 8" className="h-2.5 w-2.5 fill-white">
                            <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                      <p className="text-sm text-ink leading-snug select-none">
                        I confirm I will bring a <strong>valid student ID</strong> to my appointment. I understand the 10% discount is applied after verification.
                      </p>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="pt-2">
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
                    <>
                      <GraduationCap className="mr-2 h-5 w-5" />
                      Confirm Student Booking
                    </>
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
