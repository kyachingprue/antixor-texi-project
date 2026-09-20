import {
  Briefcase,
  Car,
  Crown,
  Headphones,
  MousePointerClick,
  Plane,
  UserCheck,
  Users,
  Smile,
  Building2,
  Timer,
  Clock,
  ShieldCheck,
  Wallet,
} from "lucide-react";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Fleet", to: "/fleet" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const contact = {
  phone: "+1 (555) 123 4567",
  phoneHref: "tel:+15551234567",
  email: "support@antixortaxi.com",
  address: "123 Main Street, New York, NY 10001",
};

export const heroHighlights = [
  { icon: Clock, label: "24/7 Service" },
  { icon: ShieldCheck, label: "Safe & Secure" },
  { icon: Wallet, label: "Affordable Fares" },
];

export const services = [
  {
    title: "City Ride",
    text: "Quick & affordable rides around the city.",
    icon: Car,
    tint: "bg-amber-100 text-amber-500",
    car: { type: "sedan", body: "#f4f6fa" },
  },
  {
    title: "Premium Ride",
    text: "Travel in style and comfort.",
    icon: Crown,
    tint: "bg-violet-100 text-violet-600",
    car: { type: "sedan", body: "#1d2636" },
  },
  {
    title: "Airport Transfer",
    text: "On-time airport pickups & drop-offs.",
    icon: Plane,
    tint: "bg-sky-100 text-sky-600",
    car: { type: "suv", body: "#2a3140" },
  },
  {
    title: "Corporate Ride",
    text: "Reliable rides for your business needs.",
    icon: Briefcase,
    tint: "bg-emerald-100 text-emerald-600",
    car: { type: "van", body: "#232b3a" },
  },
];

export const whyChoose = [
  {
    icon: UserCheck,
    title: "Professional Drivers",
    text: "Verified & experienced drivers for your safety.",
  },
  {
    icon: Car,
    title: "Modern Fleet",
    text: "Clean, comfortable & well-maintained vehicles.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    text: "We're always here, whenever you need us.",
  },
  {
    icon: MousePointerClick,
    title: "Easy Booking",
    text: "Book in seconds, from anywhere.",
  },
];

export const fleet = [
  {
    name: "Economy",
    note: "Comfort & value",
    seats: 4,
    bags: 2,
    price: "From $1.20 / km",
    car: { type: "sedan", body: "#f4f6fa" },
  },
  {
    name: "Sedan",
    note: "Business class comfort",
    seats: 4,
    bags: 3,
    price: "From $1.60 / km",
    car: { type: "sedan", body: "#1d2636" },
  },
  {
    name: "SUV",
    note: "Space for the whole crew",
    seats: 6,
    bags: 5,
    price: "From $2.10 / km",
    car: { type: "suv", body: "#2a3140" },
  },
  {
    name: "Van",
    note: "Group travel made easy",
    seats: 10,
    bags: 8,
    price: "From $2.80 / km",
    car: { type: "van", body: "#232b3a" },
  },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Traveler",
    quote:
      "Amazing service! The driver was on time, the car was clean, and the booking process was super easy. Highly recommend!",
    avatar: "from-rose-400 to-orange-400",
  },
  {
    name: "David Miller",
    role: "Regular Customer",
    quote:
      "I use Antixor taxi.com for my daily commute. Always reliable, safe and affordable. Best taxi service in town!",
    avatar: "from-sky-400 to-indigo-500",
  },
  {
    name: "Emily Carter",
    role: "Frequent Traveler",
    quote:
      "The airport transfer service was perfect. Professional driver, no hassle, and great support. Will definitely use again!",
    avatar: "from-fuchsia-400 to-pink-500",
  },
  {
    name: "Michael Chen",
    role: "Startup Founder",
    quote:
      "Corporate rides for my whole team, one invoice at the end of the month. It saves us hours of admin every week.",
    avatar: "from-emerald-400 to-teal-500",
  },
  {
    name: "Priya Sharma",
    role: "Night-shift Nurse",
    quote:
      "Getting home at 3 AM used to worry me. Live tracking and verified drivers make every ride feel safe.",
    avatar: "from-amber-400 to-orange-500",
  },
  {
    name: "Omar Hassan",
    role: "Airport Commuter",
    quote:
      "Flight delayed by two hours and my driver was still there waiting. That is the kind of service you remember.",
    avatar: "from-violet-400 to-purple-500",
  },
];

export const stats = [
  { icon: Smile, value: 500, suffix: "K+", label: "Happy Customers" },
  { icon: Car, value: 1, suffix: "M+", label: "Rides Completed" },
  { icon: Building2, value: 100, suffix: "+", label: "Cities Covered" },
  { icon: Timer, value: 99, suffix: "%", label: "On-Time Rate" },
];

export const appFeatures = [
  "Quick Booking",
  "Live Tracking",
  "Multiple Payment Options",
  "Exclusive Offers",
];

export const steps = [
  {
    icon: MousePointerClick,
    title: "Book in seconds",
    text: "Enter pickup and drop-off, choose a car, confirm. That is all it takes.",
  },
  {
    icon: Users,
    title: "Meet your driver",
    text: "See your driver's name, photo and plate number before they arrive.",
  },
  {
    icon: ShieldCheck,
    title: "Ride with confidence",
    text: "Share your trip live and pay the way you like when you arrive.",
  },
];

export const posts = [
  {
    title: "5 tips for a stress-free airport transfer",
    excerpt:
      "Flight tracking, meeting points and luggage rules — everything to know before you head to the terminal.",
    category: "Travel",
    date: "Sep 12, 2026",
    read: "4 min read",
    cover: "from-sky-500 to-indigo-700",
    icon: Plane,
  },
  {
    title: "How we verify every driver on our platform",
    excerpt:
      "A look behind the scenes at background checks, vehicle inspections and ongoing safety training.",
    category: "Safety",
    date: "Aug 30, 2026",
    read: "6 min read",
    cover: "from-emerald-500 to-teal-700",
    icon: ShieldCheck,
  },
  {
    title: "Corporate rides: cut travel costs without cutting comfort",
    excerpt:
      "Why more teams are moving from expense claims to a single monthly invoice for business travel.",
    category: "Business",
    date: "Aug 18, 2026",
    read: "5 min read",
    cover: "from-violet-500 to-fuchsia-700",
    icon: Briefcase,
  },
  {
    title: "Rush hour, decoded: the best times to book a ride",
    excerpt:
      "Our ride data shows when demand peaks in 100+ cities and how to plan around it.",
    category: "Insights",
    date: "Aug 04, 2026",
    read: "3 min read",
    cover: "from-amber-500 to-orange-600",
    icon: Clock,
  },
  {
    title: "Choosing between Economy, Sedan, SUV and Van",
    excerpt:
      "A quick guide to picking the right vehicle for your group size, luggage and budget.",
    category: "Guides",
    date: "Jul 22, 2026",
    read: "4 min read",
    cover: "from-rose-500 to-red-700",
    icon: Car,
  },
  {
    title: "What's new in the Antixor taxi.com app",
    excerpt:
      "Live trip sharing, scheduled rides and new payment options are now available on iOS and Android.",
    category: "Product",
    date: "Jul 09, 2026",
    read: "2 min read",
    cover: "from-slate-600 to-slate-900",
    icon: MousePointerClick,
  },
];
