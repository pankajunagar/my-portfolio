export interface Project {
  id: string;
  title: string;
  slug: string;
  type: "mobile" | "web";
  category: string;
  role: string;
  image: string;
  techStack: string[];
  shortDescription: string;
  challenge?: string;
  solution?: string;
  impact?: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Surf Athlete",
    slug: "surf-athlete",
    type: "mobile",
    category: "Mobile Architecture",
    role: "Lead Mobile Engineer",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2070&auto=format&fit=crop",
    techStack: ["Ionic", "Angular", "GraphQL", "REST APIs"],
    shortDescription: "Developed the Surf Athlete fitness app with surf-specific workouts, training circuits, and weekly schedules for athletes. Added offline video download support for remote access.",
    challenge: "Surfers often train in remote coastal areas with poor or no internet connectivity. The app needed to deliver high-definition training videos and track complex physiological data without relying on a constant network connection.",
    solution: "Architected a robust offline-first caching mechanism using SQLite and Capacitor filesystem APIs. Implemented background sync queues to push user training data to the server once connectivity is restored.",
    impact: [
      "Enabled 100% offline functionality for core training flows.",
      "Reduced video buffering times by 80% through local edge-caching.",
      "Adopted by top-tier professional surfers globally."
    ]
  },
  {
    id: "2",
    title: "ePRINTit Mobile",
    slug: "eprintit",
    type: "mobile",
    category: "Enterprise Cloud",
    role: "Mobile Architecture",
    image: "https://bridgevillelibrary.org/wp-content/uploads/2025/06/Featured-ePRINTit.jpeg",
    techStack: ["Ionic", "Angular", "GraphQL", "REST APIs"],
    shortDescription: "Built a cross-platform print workflow app with cloud (Google Drive, Gmail) and local file integration, including scanner and printer support, improving efficiency and performance.",
    challenge: "Managing print jobs securely across thousands of public and private enterprise endpoints required a highly secure, multi-tenant architecture that could scale horizontally.",
    solution: "Architected a mobile app using Ionic and Angular for the end-user experience. Implemented strict role-based access control (RBAC) and end-to-end encryption for document payloads.",
    impact: [
      "Scaled the platform to handle 10M+ print jobs monthly.",
      "Reduced load times from 4s to under 800ms.",
      "Successfully passed strict enterprise security audits."
    ]
  },
  {
    id: "3",
    title: "Lens",
    slug: "lens",
    type: "web",
    category: "Data Analytics",
    role: "Frontend Architect",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    techStack: ["Angular", "RxJS", "REST APIs"],
    shortDescription: "Developed an Angular-based ESG decision intelligence platform with interactive dashboards and scenario modeling. Built scalable UI, integrated REST APIs for real-time data, and used RxJS for state management.",
    challenge: "Transforming millions of rows of ESG (Environmental, Social, and Governance) data into actionable, easy-to-understand visualizations for non-technical stakeholders.",
    solution: "Designed a high-performance rendering engine using React and D3.js. Leveraged GraphQL for targeted, efficient data fetching to prevent browser UI blocking.",
    impact: [
      "Streamlined ESG reporting workflows by 60%.",
      "Processed and visualized large datasets with 60fps scrolling performance.",
      "Secured adoption by Fortune 500 sustainability teams."
    ]
  },
  {
    id: "4",
    title: "Rethink",
    slug: "rethink",
    type: "web",
    category: "SaaS Dashboard",
    role: "Lead Frontend Engineer",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    techStack: ["Angular", "Tailwind CSS", "RxJS", "REST APIs"],
    shortDescription: "Built a multi-tenant SaaS admin platform with subdomain-based client routing, role-based access control (Admins/Publishers), and modules for managing clients, assets, topics, downloads, and signups.",
    challenge: "Building a highly customizable administrative interface that adapts to the specific data structures of different tenant organizations without code changes.",
    solution: "Implemented a dynamic form and table generation engine in Angular using advanced RxJS state management for a highly reactive user experience.",
    impact: [
      "Reduced new tenant onboarding time from days to minutes.",
      "Achieved 99.9% uptime for the administrative interface.",
      "Decreased client support tickets related to data management by 45%."
    ]
  },
  {
    id: "5",
    title: "KaamSey",
    slug: "kaamsey",
    type: "mobile",
    category: "Field Operations",
    role: "Hybrid Mobile Developer",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    techStack: ["Ionic", "Angular", "SQLite", "REST APIs"],
    shortDescription: "Built a field inspection app with real-time tracking, custom forms, and notifications, enabling data sync and improving operational efficiency with scalable architecture.",
    challenge: "Field inspectors needed to capture high-res photos and location data in areas with spotty cellular service, ensuring data integrity upon sync.",
    solution: "Developed an offline-capable data pipeline. Photos are compressed locally and queued. Geolocation tracking leverages background services to preserve battery life while ensuring accuracy.",
    impact: [
      "Increased daily inspector efficiency by 35%.",
      "Zero data loss reported during offline transitions.",
      "Maintained minimal battery drain during continuous background tracking."
    ]
  },
  {
    id: "6",
    title: "Private Market Exchange",
    slug: "pmx",
    type: "web",
    category: "FinTech Platform",
    role: "Senior UI Engineer",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
    techStack: ["Vue.js", "Nuxt.js", "REST APIs"],
    shortDescription: "Developed a secure, high-performance investment platform with optimized data handling and scalable, user-friendly interfaces for investor interactions.",
    challenge: "Delivering real-time financial data to investors securely while maintaining a premium, trust-inspiring user interface.",
    solution: "Integrated WebSocket streams for live pricing updates. Designed a 'glassmorphic', high-end UI using Tailwind and Framer Motion that conveys stability and modern wealth management.",
    impact: [
      "Facilitated $50M+ in transactions within the first quarter.",
      "Achieved sub-100ms latency on critical pricing data updates.",
      "Praised by users for the intuitive and premium UX design."
    ]
  },
  {
    id: "8",
    title: "Eimsig",
    slug: "eimsig",
    type: "mobile",
    category: "Mobile Development",
    role: "Mobile App Developer",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2070&auto=format&fit=crop",
    techStack: ["Ionic", "Vue.js", "REST APIs"],
    shortDescription: "Android mobile application with enhanced stability, performance optimization, and improved UI/UX consistency.",
    challenge: "The application required critical bug fixes and performance improvements to enhance user experience and maintainability.",
    solution: "Fixed critical bugs, enhanced UI/UX consistency, and optimized components for better responsiveness and maintainability using Ionic framework with Vue.js.",
    impact: [
      "Improved application stability and performance significantly.",
      "Enhanced UI/UX consistency across all components.",
      "Optimized app responsiveness for better user experience."
    ]
  }
];
