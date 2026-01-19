import {
  Brain,
  Home,
  Users,
  User,
  Smartphone,
  Globe,
  BarChart3,
  Shield,
  LayoutDashboard,
  CreditCard,
  Zap,
  MessageSquare,
  Calendar,
  Search,
  FileText,
  Settings,
  Briefcase,
  FileCheck,
  RefreshCw,
  Clock,
  Target,
  Languages,
  Eye,
  TrendingUp,
  Heart,
  Building2,
  UserCheck,
} from "lucide-react";

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  tags: string[];
  heroImage: string;

  // Metadata
  metadata: {
    industry: string;
    platform: string;
    techStack: string[];
    deliveryTime: string;
    teamSize: string;
    year: string;
  };

  // Key facts for side card
  keyFacts: {
    label: string;
    value: string;
  }[];

  // Sections
  overview: string;
  problemStatement: string;
  solution: string;

  // Features with icons
  features: {
    title: string;
    description: string;
    iconName: string;
  }[];

  // Design approach
  designApproach: {
    title: string;
    description: string;
  };

  // Technical architecture
  technicalArchitecture: {
    frontend: string[];
    backend: string[];
    devops: string[];
  };

  // Timeline
  timeline: {
    phase: string;
    duration: string;
    description: string;
  }[];

  earlyDelivery?: string;

  // Testing & QA
  testing: string[];

  // Results
  results: {
    metric: string;
    value: string;
    description: string;
  }[];

  // Key learnings
  keyLearnings: string[];

  // Future roadmap (optional)
  futureRoadmap?: string[];
}

// Icon mapping for features
export const iconMap: Record<string, React.ElementType> = {
  Brain,
  Home,
  Users,
  User,
  Smartphone,
  Globe,
  BarChart3,
  Shield,
  LayoutDashboard,
  CreditCard,
  Zap,
  MessageSquare,
  Calendar,
  Search,
  FileText,
  Settings,
  Briefcase,
  FileCheck,
  RefreshCw,
  Clock,
  Target,
  Languages,
  Eye,
  TrendingUp,
  Heart,
  Building2,
  UserCheck,
};

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "amora",
    title: "Amora – AI Companion for Men 50+",
    shortDescription:
      "A privacy-first, emotionally supportive AI companion designed to reduce loneliness and provide meaningful daily connection for men aged 50 and above.",
    tags: ["AI", "Flutter", "Mobile", "SaaS", "MVP"],

    heroImage:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",

    metadata: {
      industry: "Wellness & Emotional Health",
      platform: "iOS & Android",
      techStack: ["Flutter", "Node.js", "LLM APIs", "Stripe", "Firebase"],
      deliveryTime: "2 Weeks (Early Delivery)",
      teamSize: "Small Agile Team",
      year: "2024",
    },

    keyFacts: [
      { label: "Delivery Time", value: "2 Weeks" },
      { label: "Target Audience", value: "Men 50+" },
      { label: "Platforms", value: "iOS & Android" },
      { label: "Monetization", value: "Monthly Subscription" },
    ],

    overview:
      "Amora is an AI-powered emotional companion created to support men aged 50 and above who experience loneliness, isolation, or emotional disconnect due to life transitions such as retirement, divorce, or loss. Designed as a non-sexual and ethically grounded companion, Amora focuses on empathy, consistency, and emotional warmth while maintaining strict safety and privacy boundaries. The MVP was built to validate emotional engagement, retention, and subscription willingness in a real-world market setting.",

    problemStatement:
      "Loneliness among men over 50 is a growing yet underserved issue. Many individuals in this demographic experience shrinking social circles, emotional isolation after major life changes, and difficulty forming new meaningful connections. Existing solutions often fall into two extremes: clinical mental health tools that feel impersonal, or unsafe companion platforms that prioritize explicit content. There was a clear market gap for a respectful, emotionally intelligent AI companion focused on connection rather than sexuality.",

    solution:
      "Amora delivers a single, consistent female AI persona designed to engage users through emotionally aware conversations, daily check-ins, and gentle, non-explicit romantic warmth. The MVP emphasized emotional continuity, safety guardrails, and a human-like chat experience while enabling subscription-based monetization. The solution balanced empathy and ethical boundaries to build trust, encourage recurring engagement, and validate long-term product viability.",

    features: [
      {
        title: "Real-Time AI Chat",
        description:
          "Instant messaging experience with natural conversational flow powered by cloud-based large language models, including typing indicators and timestamps.",
        iconName: "MessageSquare",
      },
      {
        title: "Single AI Persona",
        description:
          "A carefully designed, emotionally consistent AI personality to preserve trust, continuity, and emotional attachment.",
        iconName: "User",
      },
      {
        title: "Context & Memory",
        description:
          "Short-term conversational memory retaining user name, age, and preferences to create a personalized yet privacy-conscious experience.",
        iconName: "Brain",
      },
      {
        title: "Safety & Moderation",
        description:
          "Built-in guardrails, age verification (18+), and soft content filters to ensure respectful, non-sexual interactions.",
        iconName: "Shield",
      },
      {
        title: "Subscription & Payments",
        description:
          "Free tier with usage limits and a secure monthly subscription model implemented using Stripe.",
        iconName: "CreditCard",
      },
      {
        title: "Admin Dashboard",
        description:
          "Web-based admin panel for user management, subscription visibility, and moderation controls.",
        iconName: "LayoutDashboard",
      },
    ],

    designApproach: {
      title: "Emotion-First, Minimal & Accessible Design",
      description:
        "The UI/UX was designed to be calm, minimalist, and accessible for older users. Large touch targets, readable typography, and subtle animations ensured usability without overstimulation. The design prioritized emotional comfort over visual complexity, keeping interactions intuitive and reassuring across all core screens.",
    },

    technicalArchitecture: {
      frontend: [
        "Flutter single codebase for iOS & Android",
        "Reusable widgets with clean architecture",
        "Scalable state management",
        "Subtle, performance-friendly animations",
      ],
      backend: [
        "Secure authentication and user data synchronization",
        "LLM request handling and context management",
        "Stripe subscription and billing integration",
        "Privacy-first data storage practices",
      ],
      devops: [
        "GitHub repository with PR-based workflow",
        "CI/CD using GitHub Actions and Codemagic",
        "Environment-based configuration",
        "Staging and production deployments",
      ],
    },

    timeline: [
      {
        phase: "Setup & Architecture",
        duration: "Week 1",
        description:
          "Finalized requirements, application architecture, data flow, repository setup, and core navigation structure.",
      },
      {
        phase: "UI/UX & State Management",
        duration: "Week 2",
        description:
          "Completed all core screens, responsive layouts, reusable components, and state management.",
      },
      {
        phase: "API Integration",
        duration: "Week 2 (Parallel)",
        description:
          "Integrated AI services, backend APIs, and Stripe subscription flows with error handling.",
      },
      {
        phase: "Testing & Deployment",
        duration: "End of Week 2",
        description:
          "Full QA testing, performance optimization, staging setup, production deployment, and documentation handover.",
      },
    ],

    earlyDelivery:
      "Despite a planned duration of one month, the Amora MVP was successfully delivered within just two weeks through strict MVP scoping, parallel development, reusable Flutter components, and fast decision-making.",

    testing: [
      "End-to-end testing of chat and subscription flows",
      "Manual QA across multiple devices",
      "Edge case handling for network and API failures",
      "Performance and stability tuning",
    ],

    results: [
      {
        metric: "MVP Delivery",
        value: "Early",
        description: "Delivered two weeks ahead of the planned timeline",
      },
      {
        metric: "Market Readiness",
        value: "Validated",
        description: "Production-ready MVP with monetization enabled",
      },
      {
        metric: "Architecture",
        value: "Scalable",
        description: "AI-first foundation prepared for future expansion",
      },
      {
        metric: "Business Insight",
        value: "High",
        description: "Early validation of emotional AI companion demand",
      },
    ],

    keyLearnings: [
      "Emotional consistency matters more than feature volume",
      "Older users strongly prefer simplicity and clarity",
      "Safety guardrails are essential for user trust",
      "Single-persona design improves emotional attachment",
    ],

    futureRoadmap: [
      "Voice-based interaction (TTS/STT)",
      "Enhanced long-term memory",
      "Smarter sentiment detection",
      "Deeper personalization without compromising privacy",
      "Improved analytics and retention insights",
    ],
  },
  {
    id: "2",
    slug: "elegant-advisor",
    title: "Elegant Advisor – Real Estate Web Platform",
    shortDescription:
      "A bilingual real estate web platform with a powerful admin dashboard, designed to showcase premium properties and streamline internal operations.",
    tags: ["Web", "Admin Dashboard", "Real Estate", "Bilingual"],
    heroImage:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",

    metadata: {
      industry: "Real Estate",
      platform: "Web Application",
      techStack: ["Flutter Web", "Backend Services", "Database"],
      deliveryTime: "3 weeks",
      teamSize: "3 developers",
      year: "2024",
    },

    keyFacts: [
      { label: "Languages Supported", value: "English & Portuguese" },
      { label: "Admin Roles", value: "Secure Role-Based Access" },
      { label: "Property Statuses", value: "Available / Sold / Pending" },
      { label: "Delivery", value: "Ahead of Schedule" },
    ],

    overview:
      "Elegant Advisor is a professional real estate web platform designed to present property listings in a premium, trustworthy manner while offering a simple and powerful admin dashboard for internal management. The platform supports both English and Portuguese audiences, enabling local and international clients to explore listings seamlessly.",

    problemStatement:
      "The client lacked a modern digital presence capable of serving both local and international markets. Property management relied on manual or fragmented processes, and there was no bilingual platform that combined visual elegance with practical administrative control.",

    solution:
      "We delivered a fully bilingual real estate website paired with a secure admin dashboard. Visitors can browse properties with a refined, responsive UI, while administrators manage listings, statuses, inquiries, and visitor data from a centralized control panel.",

    features: [
      {
        title: "Bilingual Website",
        description:
          "Complete English and Portuguese language support with a seamless toggle across the platform.",
        iconName: "Languages",
      },
      {
        title: "Property Listings",
        description:
          "Dynamic listings with individual property pages and clear availability statuses.",
        iconName: "Home",
      },
      {
        title: "Admin Dashboard",
        description:
          "Secure admin panel with full CRUD operations for properties and status management.",
        iconName: "Settings",
      },
      {
        title: "Visitor Tracking",
        description:
          "Track property views and user engagement for better decision-making.",
        iconName: "Eye",
      },
      {
        title: "SEO-Friendly Structure",
        description:
          "Optimized page structure to improve discoverability and search visibility.",
        iconName: "Search",
      },
      {
        title: "Responsive Design",
        description:
          "Optimized layouts for desktop, tablet, and mobile devices.",
        iconName: "Smartphone",
      },
    ],

    designApproach: {
      title: "Elegant, Minimal & Trust-Building",
      description:
        "The UI was inspired by premium real estate platforms such as fantasticfrank.com, emphasizing clean layouts, refined typography, and visual storytelling. Animations were kept subtle to maintain professionalism and usability.",
    },

    technicalArchitecture: {
      frontend: [
        "Flutter Web for UI and routing",
        "Reusable UI components",
        "Responsive layout system",
      ],
      backend: [
        "Secure backend services",
        "Database-driven property management",
        "Validation and admin permissions",
      ],
      devops: [
        "Environment-based configuration",
        "Optimized builds for performance",
      ],
    },

    timeline: [
      {
        phase: "Planning & Architecture",
        duration: "1 week",
        description:
          "Scope definition, UI inspiration, and system architecture setup",
      },
      {
        phase: "UI & Frontend Development",
        duration: "1 week",
        description:
          "User-facing website, bilingual support, and responsive layouts",
      },
      {
        phase: "Admin Dashboard & QA",
        duration: "1 week",
        description: "Admin features, validation, testing, and deployment",
      },
    ],

    testing: [
      "Cross-browser testing",
      "Responsive testing across devices",
      "Admin workflow validation",
      "Data integrity and security checks",
    ],

    results: [
      {
        metric: "Delivery Time",
        value: "3 Weeks",
        description: "Delivered ahead of the planned 1-month timeline",
      },
      {
        metric: "Operational Efficiency",
        value: "+High",
        description: "Simplified daily property management for admins",
      },
      {
        metric: "Market Reach",
        value: "2x",
        description: "Expanded audience through bilingual accessibility",
      },
      {
        metric: "Brand Perception",
        value: "Premium",
        description:
          "Professional digital presence aligned with luxury real estate",
      },
    ],

    keyLearnings: [
      "Bilingual platforms significantly increase market reach",
      "Simple admin UX improves long-term adoption",
      "Clean, minimal design builds trust in high-value industries",
    ],

    futureRoadmap: [
      "Additional language support",
      "Blog or market insights section",
      "CRM integrations",
      "Advanced analytics and reporting",
    ],
  },
  {
    id: "3",
    slug: "ats",
    title: "ATS – Applicant Tracking System",
    shortDescription:
      "A web-based recruitment platform that digitizes job applications, document verification, and hiring workflows in real time.",
    tags: ["Web", "SaaS", "Admin Dashboard", "MVP"],
    heroImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",

    metadata: {
      industry: "HR Technology",
      platform: "Web Application",
      techStack: ["Flutter Web", "Firebase"],
      deliveryTime: "3 weeks",
      teamSize: "3 developers",
      year: "2024",
    },

    keyFacts: [
      { label: "User Roles", value: "Candidates & Recruiters" },
      { label: "Real-Time Updates", value: "Firestore Powered" },
      { label: "Document Handling", value: "Secure Upload & Review" },
      { label: "Delivery", value: "Ahead of Schedule" },
    ],

    overview:
      "The ATS platform was built to centralize and streamline the recruitment process. It enables candidates to apply for jobs and upload required documents, while recruiters manage applications, verify documents, and track hiring progress in real time.",

    problemStatement:
      "Recruitment teams relied on fragmented tools such as emails and spreadsheets, resulting in slow processing, poor visibility into candidate status, and inefficient document handling. The client needed a secure, centralized ATS with minimal operational overhead.",

    solution:
      "We delivered a modern ATS built with Flutter Web and Firebase, providing a candidate-facing portal and a role-based admin panel. Real-time updates, secure authentication, and structured workflows ensured efficiency, scalability, and ease of use.",

    features: [
      {
        title: "Candidate Portal",
        description:
          "Profile creation, job browsing, applications, and document uploads.",
        iconName: "User",
      },
      {
        title: "Job Management",
        description:
          "Create, update, and close job postings with application tracking.",
        iconName: "Briefcase",
      },
      {
        title: "Document Verification",
        description:
          "Upload, review, approve, or reject candidate documents securely.",
        iconName: "FileCheck",
      },
      {
        title: "Admin Panel",
        description: "Role-based dashboards for recruiters and super admins.",
        iconName: "Settings",
      },
      {
        title: "Real-Time Status Updates",
        description:
          "Live application and document status powered by Firestore.",
        iconName: "RefreshCw",
      },
      {
        title: "Secure Authentication",
        description:
          "Firebase Auth with strict access control and security rules.",
        iconName: "Shield",
      },
    ],

    designApproach: {
      title: "Clarity & Workflow Efficiency",
      description:
        "The UI was designed for recruiters handling large volumes of applications. Clear status indicators, structured layouts, and minimal visual noise ensured fast decision-making and ease of use.",
    },

    technicalArchitecture: {
      frontend: [
        "Flutter Web for candidate and admin interfaces",
        "Reusable components and responsive layouts",
      ],
      backend: [
        "Firebase Authentication",
        "Firestore for real-time data",
        "Firebase Storage for documents",
      ],
      devops: ["Firebase Hosting", "Environment-based configuration"],
    },

    timeline: [
      {
        phase: "Architecture & Setup",
        duration: "1 week",
        description: "System design, Firebase setup, and core structure",
      },
      {
        phase: "Feature Development",
        duration: "1 week",
        description: "Candidate portal, admin panel, and workflows",
      },
      {
        phase: "Testing & Deployment",
        duration: "1 week",
        description: "QA testing, optimization, and production deployment",
      },
    ],

    earlyDelivery:
      "Delivered in 3 weeks instead of the planned 1 month due to efficient architecture planning and Firebase BaaS usage.",

    testing: [
      "Authentication and role validation testing",
      "Application and document flow testing",
      "Admin permission testing",
      "Responsive UI testing",
    ],

    results: [
      {
        metric: "Recruitment Speed",
        value: "+Faster",
        description: "Significantly reduced application processing time",
      },
      {
        metric: "Operational Efficiency",
        value: "+High",
        description: "Centralized hiring workflows for recruiters",
      },
      {
        metric: "Scalability",
        value: "Future-Ready",
        description: "Architecture ready for mobile app expansion",
      },
      {
        metric: "User Experience",
        value: "Improved",
        description: "Clear visibility for both candidates and admins",
      },
    ],

    keyLearnings: [
      "BaaS platforms significantly reduce development time",
      "Real-time updates improve recruiter and candidate experience",
      "Clear role separation simplifies admin workflows",
      "Flutter Web enables fast MVPs with mobile reuse potential",
    ],

    futureRoadmap: [
      "Flutter mobile apps (iOS & Android)",
      "Advanced analytics and reporting",
      "Interview scheduling and notifications",
      "AI-assisted candidate screening",
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
