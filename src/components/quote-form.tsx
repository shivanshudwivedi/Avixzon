"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { quoteFormSchema, type QuoteFormValues } from "@/lib/quote-schema";
import {
  CalendarIcon,
  Truck,
  MapPin,
  Mail,
  Phone,
  User,
  Package,
  ChevronDown,
  Check,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import * as Select from "@radix-ui/react-select";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import * as Popover from "@radix-ui/react-popover";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: { website: "" },
  });

  const date = watch("moveDate");
  const moveSize = watch("moveSize");

  const onSubmit = async (data: QuoteFormValues) => {
    setSubmitError(null);

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setSubmitError(
        "Email service is not configured. Please contact us directly at avixzon@gmail.com or call (437) 775 2592."
      );
      return;
    }

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: data.fullName,
          from_email: data.email,
          phone: data.phone,
          pickup_address: data.pickupAddress,
          destination_address: data.destinationAddress,
          move_date: format(data.moveDate, "MMMM d, yyyy"),
          move_size: data.moveSize,
        },
        PUBLIC_KEY
      );
      setSubmitted(true);
      reset({ website: "" });
    } catch {
      setSubmitError(
        "Could not send your request. Please try again or contact us directly at avixzon@gmail.com."
      );
    }
  };

  const inputClasses =
    "flex h-14 w-full rounded-2xl border border-input bg-background/50 px-4 py-2 pl-12 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 hover:border-primary/50 hover:bg-background/80 shadow-sm";
  const labelClasses = "text-base font-semibold ml-1 mb-2 block text-foreground/80";
  const iconClasses =
    "absolute left-4 top-4 h-6 w-6 text-muted-foreground transition-colors group-focus-within:text-primary";

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-2xl mx-auto p-6 sm:p-10 md:p-12 bg-card rounded-3xl shadow-2xl border border-border/50 text-center"
      >
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 motion-safe:animate-bounce">
          <Truck className="h-10 w-10 sm:h-12 sm:w-12" />
        </div>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
          Quote Request Sent!
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-md mx-auto">
          Thank you for choosing Avixzon. We have received your request and will send a customised
          estimate to your email shortly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-10 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Submit Another Request
        </button>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="mb-10 sm:mb-14 text-center px-1">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
          Free Estimate
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 pb-2">
          Get a Free Quote
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
          Fill out the form below for a fast and accurate estimate. We respect your privacy and will
          never share your information.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="bg-card rounded-[2rem] shadow-2xl border border-border/50 overflow-hidden"
      >
        <div className="grid lg:grid-cols-5">
          {/* Side panel */}
          <div className="hidden lg:flex lg:col-span-2 bg-primary p-10 xl:p-12 text-primary-foreground flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            <div className="relative z-10">
              <h3 className="font-display text-3xl font-bold mb-8">Why Avixzon?</h3>
              <ul className="space-y-7">
                {[
                  { icon: Truck, label: "Reliable Fleet" },
                  { icon: Package, label: "Expert Packing" },
                  { icon: MapPin, label: "GTA Wide Coverage" },
                ].map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm shadow-inner shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-lg font-medium">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative z-10 text-sm bg-white/10 p-5 rounded-xl backdrop-blur-sm mt-8">
              Need immediate assistance?
              <br />
              <a
                href="tel:+14377752592"
                className="font-bold text-xl block mt-1 hover:underline"
              >
                (437) 775 2592
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Honeypot */}
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
                {...register("website")}
              />

              {/* Personal Details */}
              <section className="space-y-6">
                <h3 className="text-lg font-bold flex items-center gap-2 text-primary">
                  <User className="w-5 h-5" /> Personal Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5 group">
                    <label htmlFor="fullName" className={labelClasses}>
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        id="fullName"
                        {...register("fullName")}
                        className={cn(
                          inputClasses,
                          errors.fullName && "border-destructive focus-visible:ring-destructive"
                        )}
                        placeholder="John Doe"
                      />
                      <User className={iconClasses} />
                    </div>
                    {errors.fullName && (
                      <p className="text-sm text-destructive font-medium ml-1">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5 group">
                    <label htmlFor="phone" className={labelClasses}>
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        className={cn(
                          inputClasses,
                          errors.phone && "border-destructive focus-visible:ring-destructive"
                        )}
                        placeholder="(437) 555 0100"
                      />
                      <Phone className={iconClasses} />
                    </div>
                    {errors.phone && (
                      <p className="text-sm text-destructive font-medium ml-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5 group">
                  <label htmlFor="email" className={labelClasses}>
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      className={cn(
                        inputClasses,
                        errors.email && "border-destructive focus-visible:ring-destructive"
                      )}
                      placeholder="john@example.com"
                    />
                    <Mail className={iconClasses} />
                  </div>
                  {errors.email && (
                    <p className="text-sm text-destructive font-medium ml-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </section>

              {/* Move Details */}
              <section className="space-y-6 pt-2 border-t border-border">
                <h3 className="text-lg font-bold flex items-center gap-2 text-primary pt-6">
                  <Truck className="w-5 h-5" /> Move Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5 group">
                    <label htmlFor="pickupAddress" className={labelClasses}>
                      Pickup Address
                    </label>
                    <div className="relative">
                      <input
                        id="pickupAddress"
                        {...register("pickupAddress")}
                        className={cn(
                          inputClasses,
                          errors.pickupAddress && "border-destructive focus-visible:ring-destructive"
                        )}
                        placeholder="123 Origin St"
                      />
                      <MapPin className={iconClasses} />
                    </div>
                    {errors.pickupAddress && (
                      <p className="text-sm text-destructive font-medium ml-1">
                        {errors.pickupAddress.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5 group">
                    <label htmlFor="destinationAddress" className={labelClasses}>
                      Destination Address
                    </label>
                    <div className="relative">
                      <input
                        id="destinationAddress"
                        {...register("destinationAddress")}
                        className={cn(
                          inputClasses,
                          errors.destinationAddress &&
                            "border-destructive focus-visible:ring-destructive"
                        )}
                        placeholder="456 Destination Ave"
                      />
                      <MapPin className={iconClasses} />
                    </div>
                    {errors.destinationAddress && (
                      <p className="text-sm text-destructive font-medium ml-1">
                        {errors.destinationAddress.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Date picker */}
                  <div className="space-y-1.5 group">
                    <label className={labelClasses}>Estimated Move Date</label>
                    <Popover.Root>
                      <Popover.Trigger asChild>
                        <button
                          type="button"
                          className={cn(
                            inputClasses,
                            "text-left flex items-center gap-3",
                            !date && "text-muted-foreground",
                            errors.moveDate && "border-destructive focus-visible:ring-destructive"
                          )}
                        >
                          <CalendarIcon className="h-6 w-6 text-muted-foreground shrink-0" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </button>
                      </Popover.Trigger>
                      <Popover.Portal>
                        <Popover.Content
                          className="z-50 p-3 bg-popover text-popover-foreground rounded-xl shadow-xl border border-border"
                          align="start"
                          sideOffset={4}
                        >
                          <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={(day) =>
                              setValue("moveDate", day as Date, { shouldValidate: true })
                            }
                            disabled={(d) => d < new Date()}
                            modifiersClassNames={{
                              selected:
                                "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
                              today: "text-primary font-bold",
                            }}
                          />
                        </Popover.Content>
                      </Popover.Portal>
                    </Popover.Root>
                    {errors.moveDate && (
                      <p className="text-sm text-destructive font-medium ml-1">
                        {errors.moveDate.message}
                      </p>
                    )}
                  </div>

                  {/* Size selector */}
                  <div className="space-y-1.5 group">
                    <label className={labelClasses}>Move Size</label>
                    <Select.Root
                      onValueChange={(val) =>
                        setValue("moveSize", val, { shouldValidate: true })
                      }
                    >
                      <Select.Trigger
                        className={cn(
                          inputClasses,
                          "flex items-center justify-between gap-2",
                          !moveSize && "text-muted-foreground",
                          errors.moveSize && "border-destructive focus-visible:ring-destructive"
                        )}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <Package className="h-6 w-6 text-muted-foreground shrink-0" />
                          <Select.Value placeholder="Select size" />
                        </div>
                        <Select.Icon>
                          <ChevronDown className="h-5 w-5 opacity-50 shrink-0" />
                        </Select.Icon>
                      </Select.Trigger>
                      <Select.Portal>
                        <Select.Content className="z-50 overflow-hidden bg-popover text-popover-foreground rounded-xl shadow-xl border border-border min-w-[var(--radix-select-trigger-width)]">
                          <Select.Viewport className="p-2">
                            {[
                              "Studio",
                              "1 Bedroom",
                              "2 Bedrooms",
                              "3+ Bedrooms",
                              "Office",
                              "Other",
                            ].map((item) => (
                              <Select.Item
                                key={item}
                                value={item}
                                className="relative flex w-full cursor-pointer select-none items-center rounded-lg py-3 pl-8 pr-3 text-base outline-none focus:bg-accent focus:text-accent-foreground hover:bg-muted transition-colors"
                              >
                                <span className="absolute left-2 flex h-4 w-4 items-center justify-center">
                                  <Select.ItemIndicator>
                                    <Check className="h-4 w-4 text-primary" />
                                  </Select.ItemIndicator>
                                </span>
                                <Select.ItemText>{item}</Select.ItemText>
                              </Select.Item>
                            ))}
                          </Select.Viewport>
                        </Select.Content>
                      </Select.Portal>
                    </Select.Root>
                    {errors.moveSize && (
                      <p className="text-sm text-destructive font-medium ml-1">
                        {errors.moveSize.message}
                      </p>
                    )}
                  </div>
                </div>
              </section>

              {submitError && (
                <p
                  role="alert"
                  className="rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive"
                >
                  {submitError}
                </p>
              )}

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex h-14 items-center justify-center rounded-2xl bg-primary px-10 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    Sending…
                  </span>
                ) : (
                  "Get My Free Quote"
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
