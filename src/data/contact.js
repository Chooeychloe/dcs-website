import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
export const contactInfo = [
  {
    title: "Email",
    value: "dcs@example.edu.ph",
    description: "For academic and departmental inquiries",
    icon: Mail,
    href: "mailto:dcs@example.edu.ph",
  },
  {
    title: "Phone",
    value: "+63 XXX XXX XXXX",
    description: "Department office",
    icon: Phone,
    href: "tel:+63XXXXXXXXXX",
  },
  {
    title: "Office",
    value: "Department of Computer Studies",
    description: "CvSU – Bacoor City Campus",
    icon: MapPin,
    href: "https://maps.app.goo.gl/fffkFCMjaYhPNn9LA",
  },
];

export const officeHours = [
  {
    day: "Monday – Thursday",
    hours: "7:00 AM – 6:00 PM",
  },

  {
    day: "Friday - Saturday",
    hours: "Instructor's Office Hours Only",
  },
  {
    day: "Sunday",
    hours: "Closed",
  },
];

export const socialLinks = [
  {
    name: "Facebook",
    label: "Follow the Department of Computer Studies",
    href: "https://www.facebook.com/CvSUBacoorDCS",
    icon: FaFacebookF,
  },
];
