export const site = {
  url: "https://avixzon.com",
  name: "Avixzon Inc.",
  phone: "(437) 775-2592",
  tel: "+14377752592",
  whatsapp: "https://wa.me/14377752592",
  email: "avixzon@gmail.com",
  address: "617–1050 Markham Road, Scarborough, ON M1H 2Y7",
  cities: ["Scarborough", "Toronto", "Mississauga", "Brampton", "Markham", "Vaughan"],
  socials: [
    ["Instagram", "https://www.instagram.com/avixzon.ca/"],
    ["Facebook", "https://www.facebook.com/avixzon.canada/"],
    ["YouTube", "https://www.youtube.com/@AvixzonCanada"],
  ],
};

export type Service = {
  slug: string; name: string; label: string; lead: string; image: string; alt: string;
  includes: string[]; brief: string; faq: [string, string]; related?: string[]; position?: string;
};
export const services: Service[] = [
  {
    slug: "cleaning-services", name: "Commercial Cleaning", label: "Cleaning",
    lead: "Avixzon provides commercial cleaning for offices and workplaces across the Greater Toronto Area. Tell us which areas need attention, when the site is accessible, and whether it’s a one-time clean or a recurring schedule.",
    image: "/operations/cleaning.jpg", alt: "Janitorial worker mopping a commercial facility floor", position: "50% 42%",
    includes: ["Office and workplace cleaning", "Common areas and washrooms", "Move-in and move-out cleaning", "One-time and recurring service enquiries"],
    brief: "Share the site address, approximate floor area, surfaces and rooms, access hours, and any areas that need extra attention.",
    faq: ["Can I request recurring office cleaning?", "Yes. Tell us how often the site needs cleaning and when our crew can access it. We’ll confirm the scope and available scheduling when we quote."],
    related: ["manpower-services", "moving-services"],
  },
  {
    slug: "manpower-services", name: "Manpower & Labour Support", label: "Manpower",
    lead: "Avixzon provides on-site labour support for loading, unloading, packing, and warehouse tasks in the GTA. Share the work, shift, and site requirements so we can confirm the crew and availability.",
    image: "/services/manpower.jpg", alt: "Warehouse workers carrying a carton together beside industrial shelves",
    includes: ["Loading and unloading crews", "Warehouse and material-handling support", "Packing and staging assistance", "Extra crew for scheduled projects"],
    brief: "Include the worksite, date and shift, crew size, expected loads, and any site orientation, equipment or safety requirements.",
    faq: ["Can I book crew support without booking a vehicle?", "Yes, you can ask for labour support on its own. Tell us the tasks, required crew size and shift so we can confirm availability."],
    related: ["transportation", "packing-crating"],
  },
  {
    slug: "freight", name: "Freight Forwarding", label: "Freight",
    lead: "Avixzon coordinates air and ocean freight for international shipments. From the Toronto area, we help you compare routes and shipping modes and coordinate the handoffs and documentation your shipment needs.",
    image: "/operations/freight-poster.webp", alt: "Container vessels and cargo handling at a shipping terminal",
    includes: ["Air cargo for time-sensitive shipments", "Ocean freight for larger loads", "Shipment routing and coordination", "Customs brokerage enquiries"],
    brief: "Tell us the origin, destination, commodity, number of pieces, dimensions, weight and required delivery date.",
    faq: ["Should I use air freight or ocean freight?", "Air is generally faster for urgent or smaller shipments. Ocean freight is usually the better starting point for larger loads or flexible schedules. We can compare options once we know the cargo dimensions and deadline."],
    related: ["air-freight", "ocean-freight", "customs-brokerage"],
  },
  {
    slug: "transportation", name: "Local Transport & Delivery", label: "Transport",
    lead: "Avixzon arranges local transport and delivery across the GTA. Ask about compact vehicle options for smaller loads and share your pickup, delivery window and access details so we can match the vehicle to the job.",
    image: "/operations/transport.jpg", alt: "Compact white Isuzu box truck parked outdoors in Ontario",
    includes: ["GTA pickup and delivery", "Compact-vehicle enquiries for smaller loads", "Business and personal transport", "Loading and unloading coordination"],
    brief: "Provide both addresses, time windows, the load’s dimensions and weight, and any dock, elevator, parking or curbside access restrictions.",
    faq: ["Can I request a small truck for a local delivery?", "Yes. Include the load dimensions and weight plus access at both stops. Avixzon will confirm an appropriate vehicle and its availability before booking."],
    related: ["manpower-services", "freight", "car-rentals"],
  },
  {
    slug: "air-freight", name: "Air Freight", label: "Air freight",
    lead: "Avixzon coordinates air cargo for urgent and time-sensitive international shipments. We review cargo dimensions, weight, destination and deadline before discussing routing and handoffs.",
    image: "/operations/air.jpg", alt: "Ground crew using cargo-loading equipment at an aircraft",
    includes: ["Time-sensitive cargo enquiries", "International routing", "Cargo documentation coordination", "Pickup and delivery coordination on request"],
    brief: "Include the commodity, packaging, dimensions, gross weight, origin, destination and time the cargo will be ready.",
    faq: ["What information is needed to quote air cargo?", "Start with piece count, outer dimensions, gross weight, commodity, origin, destination and deadline. Tell us if the cargo has special handling requirements."],
    related: ["freight", "ocean-freight", "customs-brokerage"],
  },
  {
    slug: "ocean-freight", name: "Ocean Freight", label: "Ocean freight",
    lead: "Avixzon coordinates international ocean freight for palletized, packaged and larger-volume shipments. Ask about shared-container or full-container options based on the size of your load and route.",
    image: "/operations/freight-poster.webp", alt: "Container ship alongside cranes at a marine freight terminal",
    includes: ["Full-container enquiries", "Shared-container enquiries", "Origin and destination coordination", "Shipping document coordination"],
    brief: "Share the pickup and delivery locations, port details if known, cargo type, dimensions, volume, weight and ready date.",
    faq: ["Do I need to fill a whole shipping container?", "No. A shared container may be suitable for smaller loads, depending on the route and cargo. Share your shipment dimensions so we can discuss the options."],
    related: ["freight", "air-freight", "customs-brokerage"],
  },
  {
    slug: "customs-brokerage", name: "Customs Brokerage", label: "Customs brokerage",
    lead: "Contact Avixzon for customs brokerage and documentation coordination for cross-border shipments. We’ll review your route and cargo details and confirm the scope, the parties involved, and the paperwork needed.",
    image: "/operations/customs.jpg", alt: "Logistics workers reviewing and signing shipment paperwork beside cartons",
    includes: ["Import and export enquiries", "Commercial document review coordination", "Border handoff coordination", "Support alongside air and ocean freight"],
    brief: "Provide the origin and destination, commodity, shipment value and available commercial documents; flag anything that may need special clearance.",
    faq: ["Can I ask for customs help with an existing shipment?", "Yes. Share the current shipment stage, route, commodity and any paperwork you have. The team can confirm which next steps it can support."],
    related: ["freight", "air-freight", "ocean-freight"],
  },
  {
    slug: "moving-services", name: "Residential & Commercial Moving", label: "Moving",
    lead: "Avixzon coordinates home, condo and office moves in the GTA and on longer routes by enquiry. Plan loading, transport and unloading together, with packing help available when needed.",
    image: "/services/moving.jpg", alt: "Movers carrying wrapped furniture into a moving truck",
    includes: ["Home and condo moves", "Office and commercial moves", "Loading and unloading", "Local and longer-route enquiries"],
    brief: "Share your date, both addresses, a rough inventory, any heavy items and whether there are stairs, elevators or parking restrictions.",
    faq: ["Can you help with an office move?", "Yes. Share the inventory, move window, elevator access and whether you need packing or staging support so we can plan the scope."],
    related: ["packing-crating", "cleaning-services", "warehousing"],
  },
  {
    slug: "packing-crating", name: "Packing & Crating", label: "Packing & crating",
    lead: "Avixzon provides packing and crating for moves and shipments. We can discuss full or partial packing and extra protection for large, fragile or unusual items.",
    image: "/services/packing.jpg", alt: "Hands arranging a paper-wrapped item in a cardboard packing box",
    includes: ["Full and partial packing", "Fragile-item protection", "Custom crating enquiries", "Unpacking support"],
    brief: "List the items, measurements, fragility and destination. Photos help the team understand access and packing requirements.",
    faq: ["Can I request packing for only a few items?", "Yes. Tell us what you want packed and flag any fragile, oversized or heavy pieces so we can quote the right materials and labour."],
    related: ["moving-services", "freight"],
  },
  {
    slug: "warehousing", name: "Warehousing & Storage", label: "Warehousing",
    lead: "Ask Avixzon about short- and long-term warehousing for inventory or goods in transit. Availability and handling depend on the goods, footprint, dates and access needs.",
    image: "/services/warehousing.jpg", alt: "Warehouse aisles with industrial pallet racking",
    includes: ["Short-term storage enquiries", "Long-term storage enquiries", "Inventory and goods in transit", "Inbound and outbound handling coordination"],
    brief: "Let us know the goods, packaging, number of pallets or pieces, desired dates, access frequency and special handling needs.",
    faq: ["Can I store freight between shipments?", "Ask us about interim storage. Share the cargo, storage window and inbound and outbound dates so we can confirm suitable options."],
    related: ["freight", "transportation", "manpower-services"],
  },
  {
    slug: "car-rentals", name: "Car Rentals", label: "Car rentals",
    lead: "Ask Avixzon about car rental availability in the GTA. Share your dates and preferred vehicle type so the team can confirm options, rates and terms.",
    image: "/operations/rental.jpg", alt: "A person handing over vehicle keys",
    includes: ["Short-term rental enquiries", "Daily and weekly enquiries", "Vehicle class preferences", "Availability and terms confirmed before booking"],
    brief: "Share your pickup and return dates, preferred vehicle category and any specific requirements.",
    faq: ["Where can I check car rental prices and availability?", "Contact Avixzon with your dates and vehicle preference. The team will confirm available options and applicable rental terms."],
    related: ["transportation"],
  },
];

export const core = services.slice(0, 4);
export const serviceBySlug = (slug: string) => services.find((service) => service.slug === slug);
export const faqs: [string, string][] = [
  ["What does Avixzon do?", "Avixzon is a Canadian provider of commercial cleaning, manpower and labour support, freight forwarding, and local transport. We also offer moving, packing and crating, warehousing, customs brokerage and car rental enquiries."],
  ["Where does Avixzon operate?", "Avixzon is based in Canada. Local service availability depends on the job address, and air and ocean freight routes are confirmed for each shipment. See our Service Area page for local coverage."],
  ["Can I book a single service?", "Yes. You can request one service or tell us where you need several services coordinated, such as labour and transport or freight and customs brokerage."],
  ["What do I need to request a quote?", "Start with the service, location, date or deadline and a short description of the work. For freight or transport, include the origin, destination, weight and dimensions if you know them."],
  ["How do I speak to Avixzon?", "Call (437) 775-2592 or email avixzon@gmail.com. Our Scarborough address is 617–1050 Markham Road, Scarborough, ON M1H 2Y7."],
];
