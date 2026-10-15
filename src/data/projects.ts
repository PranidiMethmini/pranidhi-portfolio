import type { Project } from "@/types/project";

export const projects: readonly Project[] = [
  {
    slug: "valuation-document-management-crm",
    caseStudyPath: "/projects/valuation-system",
    title: "Valuation Document Management & CRM System",
    type: "Industry-Mentored Full-Stack Web Application",
    technologies: ["React", "TypeScript", "NestJS", "PostgreSQL"],
    summary: "An industry-mentored valuation management platform designed to streamline property valuation workflows through document management, OCR-assisted extraction, AI-assisted report drafting, and multi-level approvals.",
    highlights: [
      "Developed Loan Applicant and Bank modules supporting valuation requests, document uploads, payment evidence, and controlled report access.",
      "Implemented shared messaging, notifications, and email communication using Nodemailer and SMTP.",
    ],
    preview: "documents",
    featured: true,
  },
  {
    slug: "resource-reservation-management",
    caseStudyPath: "/projects/resource-reservation",
    title: "Resource Reservation Management System",
    type: "Full-Stack Web Application",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "NextAuth", "Tailwind CSS"],
    summary: "A resource reservation platform that enables users to manage bookings and prevents overlapping reservations through database-level constraints.",
    highlights: [
      "Implemented role-based authentication, resource management, booking, and cancellation workflows.",
      "Used PostgreSQL exclusion constraints and transaction-level locking for reservation consistency, with 81 automated tests documented in the CV.",
    ],
    preview: "reservations",
    featured: true,
  },
  {
    slug: "automated-object-sorting",
    caseStudyPath: "/projects/object-sorting",
    title: "Automated Object Sorting System with Robotic Arm & Conveyor",
    type: "Embedded Systems & Robotics Project",
    technologies: ["Arduino Uno", "Arduino Mega", "RFID", "Ultrasonic Sensors", "Servo Motors", "Stepper Motors", "LCD Display"],
    summary: "An automated sorting system combining RFID identification, a robotic arm, and a conveyor to support sensor-driven object sorting.",
    highlights: [
      "Integrated RFID identification and ultrasonic sensors for object detection and bin-capacity monitoring.",
      "Programmed servo and stepper motors, with LCD feedback and LED/buzzer alerts.",
    ],
    preview: "sorting",
    featured: true,
  },
];
