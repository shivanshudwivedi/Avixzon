"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { quoteFormSchema, type QuoteFormValues } from "@/lib/quote-schema";
import { CalendarIcon, Truck, MapPin, Mail, Phone, User, Package, ChevronDown, Check } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Select from "@radix-ui/react-select";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import * as Popover from "@radix-ui/react-popover";

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
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          pickupAddress: data.pickupAddress,
          destinationAddress: data.destinationAddress,
          moveDate: data.moveDate.toISOString(),
          moveSize: data.moveSize,
          website: data.website ?? "",
        }),
      });
      const payload = (await res.json().catch(() => ({}))) as {
        error?: string;
        ok?: boolean;
      };
      if (!res.ok) {
        setSubmitError(payload.error ?? "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
      reset({ website: "" });
    } catch {
      setSubmitError("Network error. Check your connection and try again.");
    }
  };

  const inputClasses = "flex h-14 w-full rounded-2xl border border-input bg-background/50 px-4 py-2 pl-12 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 hover:border-primary/50 hover:bg-background/80 shadow-sm";
  const labelClasses = "text-base font-semibold ml-1 mb-2 block text-foreground/80";
  const iconClasses = "absolute left-4 top-4 h-6 w-6 text-muted-foreground transition-colors group-focus-within:text-primary";

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-4xl mx-auto p-6 sm:p-10 md:p-12 bg-card rounded-3xl shadow-2xl border border-border/50 text-center"
      >
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 motion-safe:animate-bounce">
          <Truck className="h-10 w-10 sm:h-12 sm:w-12" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-display">Quote Request Received!</h2>
        <p className="text-muted-foreground text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-lg mx-auto px-1">
          Thank you for choosing Avixzon. Our team will review your details and send a customized estimate to your email shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-10 text-lg font-medium text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-105"
        >
          Submit Another Request
        </button>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="mb-10 sm:mb-16 text-center px-1">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 pb-2 font-display">
          Get a Free Quote
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
          Fill out the form below for a fast and accurate estimate. We respect your privacy and will never share your information.
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card rounded-[2rem] shadow-2xl border border-border/50 overflow-hidden"
      >
        <div className="grid lg:grid-cols-5 h-full">
          {/* Decorative Side Panel */}
          <div className="hidden lg:block lg:col-span-2 bg-primary p-12 text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-8">Why Avixzon?</h3>
                <ul className="space-y-8">
                  <motion.li 
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm shadow-inner">
                      <Truck className="h-6 w-6" />
                    </div>
                    <span className="text-lg font-medium">Reliable Fleet</span>
                  </motion.li>
                  <motion.li 
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm shadow-inner">
                      <Package className="h-6 w-6" />
                    </div>
                    <span className="text-lg font-medium">Expert Packing</span>
                  </motion.li>
                  <motion.li 
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm shadow-inner">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <span className="text-lg font-medium">GTA Wide Coverage</span>
                  </motion.li>
                </ul>
              </div>
              <div className="text-base opacity-90 bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                Need immediate assistance? <br />
                Call us at <span className="font-bold text-xl block mt-2">(437) 775 2592</span>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-3 p-8 md:p-12 lg:p-16">
            <form onSubmit={handleSubmit(onSubmit)} className="relative space-y-10">
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
                {...register("website")}
              />
              {/* Personal Details */}
              <div className="space-y-8">
                <h3 className="text-xl font-bold flex items-center text-primary">
                  <User className="w-6 h-6 mr-3" /> Personal Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2 group">
                    <label htmlFor="fullName" className={labelClasses}>Full Name</label>
                    <div className="relative">
                      <input
                        id="fullName"
                        {...register("fullName")}
                        className={cn(inputClasses, errors.fullName && "border-red-500 focus-visible:ring-red-500")}
                        placeholder="John Doe"
                      />
                      <User className={iconClasses} />
                    </div>
                    {errors.fullName && <p className="text-sm text-red-500 font-medium ml-1 animate-pulse">{errors.fullName.message}</p>}
                  </div>

                  <div className="space-y-2 group">
                    <label htmlFor="phone" className={labelClasses}>Phone Number</label>
                    <div className="relative">
                      <input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        className={cn(inputClasses, errors.phone && "border-red-500 focus-visible:ring-red-500")}
                        placeholder="(555) 123-4567"
                      />
                      <Phone className={iconClasses} />
                    </div>
                    {errors.phone && <p className="text-sm text-red-500 font-medium ml-1 animate-pulse">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="space-y-2 group">
                  <label htmlFor="email" className={labelClasses}>Email Address</label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      className={cn(inputClasses, errors.email && "border-red-500 focus-visible:ring-red-500")}
                      placeholder="john@example.com"
                    />
                    <Mail className={iconClasses} />
                  </div>
                  {errors.email && <p className="text-sm text-red-500 font-medium ml-1 animate-pulse">{errors.email.message}</p>}
                </div>
              </div>

              {/* Move Details */}
              <div className="space-y-8">
                <h3 className="text-xl font-bold flex items-center text-primary border-t border-border pt-10">
                  <Truck className="w-6 h-6 mr-3" /> Move Details
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2 group">
                    <label htmlFor="pickupAddress" className={labelClasses}>Pickup Address</label>
                    <div className="relative">
                      <input
                        id="pickupAddress"
                        {...register("pickupAddress")}
                        className={cn(inputClasses, errors.pickupAddress && "border-red-500 focus-visible:ring-red-500")}
                        placeholder="123 Origin St"
                      />
                      <MapPin className={iconClasses} />
                    </div>
                    {errors.pickupAddress && <p className="text-sm text-red-500 font-medium ml-1 animate-pulse">{errors.pickupAddress.message}</p>}
                  </div>

                  <div className="space-y-2 group">
                    <label htmlFor="destinationAddress" className={labelClasses}>Destination Address</label>
                    <div className="relative">
                      <input
                        id="destinationAddress"
                        {...register("destinationAddress")}
                        className={cn(inputClasses, errors.destinationAddress && "border-red-500 focus-visible:ring-red-500")}
                        placeholder="456 Destination Ave"
                      />
                      <MapPin className={iconClasses} />
                    </div>
                    {errors.destinationAddress && <p className="text-sm text-red-500 font-medium ml-1 animate-pulse">{errors.destinationAddress.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2 group">
                    <label className={labelClasses}>Estimated Date</label>
                    <Popover.Root>
                      <Popover.Trigger asChild>
                        <button
                          type="button"
                          className={cn(
                            inputClasses,
                            "text-left flex items-center",
                            !date && "text-muted-foreground",
                            errors.moveDate && "border-red-500 focus-visible:ring-red-500"
                          )}
                        >
                          <CalendarIcon className="mr-3 h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </button>
                      </Popover.Trigger>
                      <Popover.Portal>
                        <Popover.Content className="z-50 p-4 bg-popover text-popover-foreground rounded-xl shadow-xl border border-border animate-in fade-in zoom-in duration-200" align="start">
                          <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={(day) => setValue("moveDate", day as Date, { shouldValidate: true })}
                            initialFocus
                            disabled={(date) => date < new Date()}
                            modifiersClassNames={{
                              selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                              today: "text-primary font-bold bg-primary/10",
                            }}
                            className="p-3 bg-popover text-popover-foreground rounded-lg"
                          />
                        </Popover.Content>
                      </Popover.Portal>
                    </Popover.Root>
                    {errors.moveDate && <p className="text-sm text-red-500 font-medium ml-1 animate-pulse">{errors.moveDate.message}</p>}
                  </div>

                  <div className="space-y-2 group">
                    <label className={labelClasses}>Move Size</label>
                    <Select.Root onValueChange={(val) => setValue("moveSize", val, { shouldValidate: true })}>
                      <Select.Trigger 
                        className={cn(
                          inputClasses,
                          "flex items-center justify-between",
                          !moveSize && "text-muted-foreground",
                          errors.moveSize && "border-red-500 focus-visible:ring-red-500"
                        )}
                      >
                        <div className="flex items-center">
                          <Package className="mr-3 h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                          <Select.Value placeholder="Select move size" />
                        </div>
                        <Select.Icon>
                          <ChevronDown className="h-5 w-5 opacity-50" />
                        </Select.Icon>
                      </Select.Trigger>
                      <Select.Portal>
                        <Select.Content className="z-50 overflow-hidden bg-popover text-popover-foreground rounded-xl shadow-xl border border-border animate-in fade-in zoom-in duration-200 min-w-[var(--radix-select-trigger-width)]">
                          <Select.Viewport className="p-2">
                            {["Studio", "1 Bedroom", "2 Bedrooms", "3+ Bedrooms", "Office", "Other"].map((item) => (
                              <Select.Item 
                                key={item} 
                                value={item}
                                className="relative flex w-full cursor-default select-none items-center rounded-lg py-3 pl-8 pr-2 text-base outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-muted transition-colors cursor-pointer"
                              >
                                <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
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
                    {errors.moveSize && <p className="text-sm text-red-500 font-medium ml-1 animate-pulse">{errors.moveSize.message}</p>}
                  </div>
                </div>
              </div>

              {submitError && (
                <p
                  role="alert"
                  className="rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive"
                >
                  {submitError}
                </p>
              )}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex h-16 items-center justify-center rounded-2xl bg-primary px-10 text-xl font-bold text-primary-foreground shadow-xl transition-all hover:bg-primary/90 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 mt-8"
              >
                {isSubmitting ? "Sending…" : "Get My Free Quote"}
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
