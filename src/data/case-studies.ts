import { projects } from "@/data/projects";
import type { ProjectCaseStudy } from "@/types/project";

const valuationProject = projects.find((project) => project.caseStudyPath === "/projects/valuation-system");
if (!valuationProject) throw new Error("Valuation project data is missing");

export const valuationCaseStudy: ProjectCaseStudy = {
  project: valuationProject,
  overview: "A web-based platform designed to digitize and streamline property valuation workflows, including client requests, document management, report preparation, communication, and multi-level review processes.",
  problem: "Traditional valuation workflows involve manual document handling, repetitive data entry, fragmented communication, and lengthy report preparation processes.",
  solution: "The system centralizes valuation project information, document submissions, communication, and report workflows. The wider platform includes OCR-assisted data extraction, AI-assisted report drafting, and hierarchical approval workflows.",
  features: ["Loan Applicant portal", "Bank Credit Officer portal", "Valuation request and document submission", "Payment evidence upload", "Project status visibility", "In-platform messaging", "Email and notification functionality", "Controlled access to valuation reports"],
  platformFeatures: ["OCR and AI-assisted drafting", "Multi-level report approvals"],
  contributions: [
    "Developing the Loan Applicant and Bank modules",
    "Implementing valuation request and document upload workflows",
    "Building payment evidence submission and project information features",
    "Contributing to controlled report access",
    "Implementing shared in-app messaging, notifications, and email functionality using Nodemailer/SMTP",
    "Developing full-stack functionality with React, NestJS, and PostgreSQL",
    "Contributing to requirements analysis, UML diagrams, database modeling, testing, and integration",
  ],
  contributionIntroduction: "My work focused on the Loan Applicant and Bank modules, shared communication, and full-stack workflows.",
  contributionNote: "OCR and AI engines were platform-level work. I do not claim individual implementation of those engines.",
  learningIntroduction: "The work involved requirements analysis, database modeling, testing, and integration. Engineering topics reflected in these contributions include:",
  architecture: [
    { title: "React + TypeScript", description: "Frontend interfaces" },
    { title: "NestJS REST API", description: "Backend application logic" },
    { title: "PostgreSQL", description: "Relational database" },
  ],
  capabilities: ["Messaging", "Notifications", "Document Management", "Approval Workflows"],
  // Discussion topics grounded in the supplied work; no unverified outcomes.
  learningTopics: ["Translating requirements into portal workflows", "Coordinating controlled report access and shared communication", "Connecting frontend, backend, and database functionality", "Supporting database modeling, testing, and integration"],
};

const reservationProject = projects.find((project) => project.caseStudyPath === "/projects/resource-reservation");
if (!reservationProject) throw new Error("Resource reservation project data is missing");

export const reservationCaseStudy: ProjectCaseStudy = {
  project: reservationProject,
  overview: "A resource reservation platform designed to manage resource availability, reservations, and cancellations while maintaining data consistency and preventing overlapping bookings.",
  problemTitle: "Accurate availability under concurrency",
  problem: "Resource booking systems must handle availability accurately, especially when multiple users attempt to reserve the same resource at overlapping times.",
  solutionTitle: "Consistent reservation workflows",
  solution: "The application provides role-based authentication, resource management, booking and cancellation workflows, and database-level protections against conflicting reservations.",
  features: ["Role-based authentication and authorization", "Resource management", "Resource availability and reservation workflows", "Booking cancellation", "PostgreSQL exclusion constraints to prevent overlapping reservations", "Transaction locking for concurrency handling", "Automated testing"],
  platformFeatures: [],
  technicalHighlights: [
    { title: "Database integrity", description: "PostgreSQL exclusion constraints enforce a rule against conflicting rows. Combining resource identity with overlapping time ranges lets the database reject overlapping reservations for the same resource, rather than relying only on an application availability check." },
    { title: "Concurrency handling", description: "Transaction locking coordinates conflicting operations so concurrent requests do not rely on the same stale availability state. Relevant operations can wait for locks held by another transaction; exclusion constraints remain the database-level safeguard against overlapping reservations." },
    { title: "Automated testing", description: "The existing project information records 81 automated tests documented in the CV. This is a test count, without a claim about measured coverage or performance." },
  ],
  contributionTitle: "Academic project implementation",
  contributionIntroduction: "This academic full-stack project includes the following established implementation details:",
  contributions: ["Role-based authentication, resource management, booking, and cancellation workflows", "PostgreSQL exclusion constraints and transaction-level locking for reservation consistency", "A Next.js and TypeScript application using Prisma, PostgreSQL, NextAuth, and Tailwind CSS"],
  architecture: [
    { title: "Next.js application", description: "TypeScript interfaces styled with Tailwind CSS" },
    { title: "Authentication & reservation logic", description: "NextAuth, authorization, resource availability, booking, and cancellation" },
    { title: "Prisma ORM", description: "Application database access" },
    { title: "PostgreSQL", description: "Reservation data, exclusion constraints, and transaction locking" },
  ],
  capabilities: ["Authentication", "Resource Management", "Reservations", "Cancellation"],
  learningIntroduction: "The implementation brings together application workflows and database safeguards. Relevant engineering topics include:",
  learningTopics: ["Modeling resource availability and overlapping time ranges", "Maintaining reservation consistency under concurrent requests", "Connecting authentication, authorization, and booking workflows", "Using automated tests to check application behavior"],
};

const sortingProject = projects.find((project) => project.caseStudyPath === "/projects/object-sorting");
if (!sortingProject) throw new Error("Object sorting project data is missing");

export const sortingCaseStudy: ProjectCaseStudy = {
  project: sortingProject,
  period: { start: "2024-05", end: "2025-05" },
  overview: "An automated object sorting prototype integrating a conveyor mechanism, robotic arm, sensors, and microcontrollers to identify objects and support automated sorting operations. The project combines embedded programming, sensor integration, motor control, and physical hardware components.",
  problemTitle: "Exploring repetitive sorting tasks",
  problem: "Manual object sorting can require repetitive human effort. The project explores how microcontroller-based automation can support object identification, sorting, and monitoring.",
  solutionTitle: "A sensor-driven physical prototype",
  solution: "The prototype combines RFID-based identification, conveyor-based object movement, a robotic arm, and ultrasonic sensing. Servo and stepper motor control supports the hardware mechanisms, while bin capacity monitoring, an LCD status display, and LED and buzzer alerts provide feedback.",
  features: ["RFID-based object identification", "Robotic arm and conveyor integration", "Ultrasonic sensor-based monitoring", "Bin capacity indication", "LCD status display", "LED and buzzer alerts", "Microcontroller-based hardware control"],
  platformFeatures: [],
  contributionTitle: "Hardware–software integration experience",
  contributionIntroduction: "The project brings together microcontroller programming, sensing, and physical actuation. Established implementation details include:",
  contributions: ["RFID identification and ultrasonic sensing for object detection and bin-capacity monitoring", "Servo and stepper motor programming", "LCD feedback and LED/buzzer alerts", "Integrating the robotic arm, conveyor, sensors, and microcontrollers"],
  architecture: [
    { title: "Input & sensing", description: "RFID reader + Ultrasonic sensors" },
    { title: "Processing", description: "Arduino Uno / Arduino Mega" },
    { title: "Outputs & actuators", description: "Servo motors + Stepper motors + Robotic arm + Conveyor + LCD + LED/Buzzer" },
  ],
  architectureCaption: "Illustrative high-level system diagram, not a wiring schematic or project photograph. No specific pin assignments, protocols, or mechanical sequence are represented.",
  capabilitiesLabel: "Prototype capabilities",
  capabilities: ["Object Identification", "Motor Control", "Bin Monitoring", "Status & Alerts"],
  learningIntroduction: "This hardware–software integration experience connects embedded programming with physical components. Relevant learning areas include:",
  learningTopics: ["Microcontroller programming", "Integrating sensors and actuators", "Coordinating hardware components", "Testing and troubleshooting a physical prototype", "Understanding real-world automation workflows"],
};
