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
  urls?: {
    web?: string;
    ios?: string;
    android?: string;
  };
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Surf Athlete App",
    slug: "surf-athlete",
    type: "mobile",
    category: "Mobile Architecture",
    role: "Lead Mobile Engineer",
    image: "/projects/surf-athlete.jpg",
techStack: ["Ionic", "Angular", "GraphQL", "REST APIs"],
    shortDescription: "Developed the Surf Athlete fitness app with surf-specific workouts, training circuits, and weekly schedules for athletes. Added offline video download support for remote access.",
    challenge: "Surfers often train in remote coastal areas with poor or no internet connectivity. The app needed to deliver high-definition training videos and track complex physiological data without relying on a constant network connection.",
    solution: "Architected a robust offline-first caching mechanism using SQLite and Capacitor filesystem APIs. Implemented background sync queues to push user training data to the server once connectivity is restored.",
    impact: [
      "Enabled 100% offline functionality for core training flows.",
      "Reduced video buffering times by 80% through local edge-caching.",
      "Adopted by top-tier professional surfers globally."
    ],
     urls: {
      web: "https://surfathlete.app/",
      ios: "https://apps.apple.com/in/app/surf-athlete-surf-training/id1473672898",
      android: "https://play.google.com/store/apps/datasafety?id=com.surfathlete.app"
    }
  },
  {
    id: "2",
    title: "ePRINTit SaaS",
    slug: "eprintit",
    type: "mobile",
    category: "Enterprise Cloud",
    role: "Mobile Architecture",
    image: "/projects/eprintit.jpg",
    techStack: ["Ionic", "Angular", "GraphQL", "REST APIs"],
    shortDescription: "Built a mobile solution for managing online print job workflows. Integrated multiple file sources including Google Drive, Gmail, and local storage. Implemented scanner and printer integrations for seamless document processing.",
    challenge: "Managing print jobs securely across thousands of public and private enterprise endpoints required a highly secure, multi-tenant architecture that could scale horizontally.",
    solution: "Architected a mobile app using Ionic and Angular for the end-user experience. Implemented strict role-based access control (RBAC) and end-to-end encryption for document payloads.",
    impact: [
      "Improved workflow efficiency and ensured smooth cross-platform performance.",
      "Integrated multiple file sources for seamless document processing.",
      "Implemented scanner and printer integrations for enhanced functionality."
    ],
    urls: {
      android: "https://play.google.com/store/apps/details?id=com.eprintitsaas.mobile",
      ios: "https://apps.apple.com/ru/app/eprintit-saas/id6443684419"
    }
  },
  {
    id: "4",
    title: "Lens",
    slug: "lens",
    type: "web",
    category: "Data Analytics",
    role: "Frontend Architect",
    image: "/projects/lens.jpg",
    techStack: ["Angular", "RxJS", "REST APIs"],
    shortDescription: "Developed an Angular-based ESG decision intelligence platform with interactive dashboards and scenario modeling. Built scalable UI, integrated REST APIs for real-time data, and used RxJS for state management.",
    challenge: "Transforming millions of rows of ESG (Environmental, Social, and Governance) data into actionable, easy-to-understand visualizations for non-technical stakeholders.",
    solution: "Designed a high-performance rendering engine using React and D3.js. Leveraged GraphQL for targeted, efficient data fetching to prevent browser UI blocking.",
    impact: [
      "Streamlined ESG reporting workflows by 60%.",
      "Processed and visualized large datasets with 60fps scrolling performance.",
      "Secured adoption by Fortune 500 sustainability teams."
    ],
    urls: {
      web: "https://staging.quantellia.com/lens/"
    }
  },
  {
    id: "5",
    title: "KaamSey Inspection",
    slug: "kaamsey",
    type: "mobile",
    category: "Field Operations",
    role: "Hybrid Mobile Developer",
    image: "/projects/kaamsey.jpg",
    techStack: ["Ionic", "Angular", "SQLite", "REST APIs"],
    shortDescription: "Built a field service and inspection management application for real-time job tracking and reporting. Implemented custom inspection forms, push notifications, and real-time data synchronization.",
    challenge: "Field inspectors needed to capture high-res photos and location data in areas with spotty cellular service, ensuring data integrity upon sync.",
    solution: "Developed an offline-capable data pipeline. Photos are compressed locally and queued. Geolocation tracking leverages background services to preserve battery life while ensuring accuracy.",
    impact: [
      "Optimized workflows, improving operational efficiency and app performance.",
      "Supported scalable architecture for multi-industry use cases.",
      "Implemented custom inspection forms and real-time data synchronization."
    ],
    urls: {
      android: "https://play.google.com/store/apps/details?id=com.kaamsey.inspection",
      ios: "https://apps.apple.com/us/app/kaamsey/id6466388148"
    }
  },
  {
    id: "6",
    title: "Private Market Exchange",
    slug: "pmx",
    type: "web",
    category: "FinTech Platform",
    role: "Senior UI Engineer",
    image: "/projects/pmx.jpg",
    techStack: ["Vue.js", "Nuxt.js", "REST APIs"],
    shortDescription: "Developed a secure and responsive investment web platform. Implemented optimized data handling and improved application performance.",
    challenge: "Delivering real-time financial data to investors securely while maintaining a premium, trust-inspiring user interface.",
    solution: "Integrated WebSocket streams for live pricing updates. Designed a 'glassmorphic', high-end UI using Tailwind and Framer Motion that conveys stability and modern wealth management.",
    impact: [
      "Delivered scalable and user-friendly interfaces for investor interactions.",
      "Implemented optimized data handling and improved application performance.",
      "Developed a secure and responsive investment web platform."
    ],
    urls: {
      web: "https://privatemarket-xchange.com"
    }
  },
  {
    id: "8",
    title: "Eimsig",
    slug: "eimsig",
    type: "mobile",
    category: "Mobile Development",
    role: "Mobile App Developer",
    image: "/projects/eimsig.jpg",
    techStack: ["Ionic", "Vue.js", "REST APIs"],
    shortDescription: "Android mobile application with enhanced stability, performance optimization, and improved UI/UX consistency.",
    challenge: "The application required critical bug fixes and performance improvements to enhance user experience and maintainability.",
    solution: "Fixed critical bugs, enhanced UI/UX consistency, and optimized components for better responsiveness and maintainability using Ionic framework with Vue.js.",
    impact: [
      "Improved application stability and performance significantly.",
      "Enhanced UI/UX consistency across all components.",
      "Optimized app responsiveness for better user experience."
    ],
    urls: {
      android: "https://play.google.com/store/apps/details?id=de.eimsig.app"
    }
  }
];
