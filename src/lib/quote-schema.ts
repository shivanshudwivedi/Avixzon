import { z } from "zod";

/** Shared validation for quote requests (client forms + API body). */
export const quoteFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  pickupAddress: z.string().min(5, "Pickup address is required"),
  destinationAddress: z.string().min(5, "Destination address is required"),
  moveDate: z.date().refine((date) => date > new Date(), {
    message: "Move date must be in the future",
  }),
  moveSize: z.string().min(1, "Please select a move size"),
  parkingAvailable: z.boolean().optional(),
  /** Honeypot — must stay empty */
  website: z.string().max(0).optional(),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;

/** API accepts ISO date string for `moveDate`. */
export const quoteApiBodySchema = z
  .object({
    fullName: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(10),
    pickupAddress: z.string().min(5),
    destinationAddress: z.string().min(5),
    moveDate: z.union([z.string(), z.number(), z.date()]),
    moveSize: z.string().min(1),
    website: z.string().max(0).optional(),
  })
  .transform((data) => {
    const moveDate =
      data.moveDate instanceof Date ? data.moveDate : new Date(data.moveDate as string);
    return {
      ...data,
      moveDate,
    };
  })
  .pipe(
    z.object({
      fullName: z.string().min(2),
      email: z.string().email(),
      phone: z.string().min(10),
      pickupAddress: z.string().min(5),
      destinationAddress: z.string().min(5),
      moveSize: z.string().min(1),
      website: z.string().max(0).optional(),
      moveDate: z
        .date()
        .refine((d) => !Number.isNaN(d.getTime()), { message: "Invalid date" })
        .refine((d) => d > new Date(), { message: "Move date must be in the future" }),
    })
  );

export type QuoteApiPayload = z.infer<typeof quoteApiBodySchema>;
