import { ServiceItem, ProjectItem, ProcessStep, WhyUsFeature } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'cybersecurity',
    category: 'cybersecurity',
    title: 'Cybersecurity',
    shortDesc: 'Protect your digital assets with security-focused solutions designed to identify vulnerabilities and strengthen your digital infrastructure.',
    fullDesc: 'We safeguard your enterprise infrastructure, applications, and networks against sophisticated cyber threats. From comprehensive penetration testing to compliance audits, we ensure your business maintains an impenetrable security posture.',
    iconName: 'Shield',
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    accentColor: 'cyan',
    features: [
      'Security Assessment',
      'Vulnerability Assessment',
      'Web Security Testing',
      'Security Consulting',
      'Penetration Testing & Red Teaming',
      'Threat Modeling & Code Audits'
    ],
    deliverables: [
      'Detailed Executive & Technical Audit Reports',
      'Actionable Vulnerability Remediation Roadmap',
      'OWASP Top 10 Compliance Verification',
      'Continuous Security Posture Monitoring'
    ]
  },
  {
    id: 'web-dev',
    category: 'web-development',
    title: 'Website Development',
    shortDesc: 'Build fast, modern, responsive websites that represent your business professionally and provide an excellent user experience.',
    fullDesc: 'We engineer high-performance, secure, and SEO-optimized web platforms tailored for enterprise scale. Combining modern frontend frameworks with robust backend architectures, we turn visitors into loyal clients.',
    iconName: 'Globe',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    accentColor: 'emerald',
    features: [
      'Business Websites',
      'Landing Pages',
      'Web Applications',
      'Responsive Design',
      'E-Commerce Portals',
      'Performance & Speed Optimization'
    ],
    deliverables: [
      'Custom Responsive UI with Sub-Second Load Times',
      'Accessible & SEO-Engineered Architecture',
      'Secure Authentication & Role-Based Access',
      'CMS & Custom API Integration'
    ]
  },
  {
    id: 'app-dev',
    category: 'app-development',
    title: 'App Development',
    shortDesc: 'Develop modern and scalable applications designed around your business requirements and users.',
    fullDesc: 'We design and build native and cross-platform mobile and desktop applications with intuitive interfaces, hardened API endpoints, and scalable cloud foundations that fuel business growth.',
    iconName: 'Smartphone',
    gradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
    accentColor: 'blue',
    features: [
      'Mobile Applications (iOS & Android)',
      'Custom Applications',
      'Application UI/UX Design',
      'API Integration & Development',
      'Real-Time Cloud Synchronization',
      'Cross-Platform Architecture'
    ],
    deliverables: [
      'Production-Ready Native / Cross-Platform Apps',
      'Encrypted Local Storage & Biometric Auth',
      'Scalable Microservices & REST/GraphQL APIs',
      'App Store / Play Store Deployment Management'
    ]
  }
];

export const WHY_US_FEATURES: WhyUsFeature[] = [
  {
    title: 'Security First',
    description: 'We keep security at the center of our digital solutions, applying zero-trust principles and defensive coding from day one.',
    iconName: 'ShieldCheck',
    highlight: 'Zero-Trust Architecture'
  },
  {
    title: 'Modern Technology',
    description: 'We use modern tools, cloud-native frameworks, and automated CI/CD practices to build resilient, ultra-fast solutions.',
    iconName: 'Cpu',
    highlight: 'Next-Gen Stack'
  },
  {
    title: 'Tailored Solutions',
    description: 'Every project is designed according to the client\'s specific business requirements, avoiding one-size-fits-all compromises.',
    iconName: 'Sliders',
    highlight: 'Bespoke Engineering'
  },
  {
    title: 'Long-Term Focus',
    description: 'We aim to build solutions that can grow smoothly with the client\'s business, backed by clean code and scalable infrastructure.',
    iconName: 'TrendingUp',
    highlight: 'Scalable Evolution'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Cybersecurity Assessment Platform',
    category: 'Cybersecurity',
    categoryKey: 'cybersecurity',
    shortDesc: 'An automated vulnerability scanning and real-time security dashboard designed for enterprise cloud environments.',
    clientType: 'Financial Tech & Enterprise Cloud',
    challenge: 'Client needed automated security continuous auditing to identify configuration drifts and API endpoint vulnerabilities across distributed systems.',
    solution: 'Engineered a modular scanning engine with OWASP compliance mapping, real-time threat alert streams, and automated executive summary generation.',
    keyMetrics: ['99.98% Threat Detection Rate', '65% Reduction in Audit Time', 'Zero False Positives'],
    tags: ['Vulnerability Scan', 'Cloud Security', 'OWASP Hardening', 'React & Python'],
    visualType: 'cyber-platform'
  },
  {
    id: 'proj-2',
    title: 'Business Website & Client Portal',
    category: 'Web Development',
    categoryKey: 'web-dev',
    shortDesc: 'A high-speed corporate web platform featuring interactive service portfolios, dynamic client booking, and encrypted document sharing.',
    clientType: 'Global Consulting Firm',
    challenge: 'The existing legacy site suffered from slow loading speeds, poor mobile responsiveness, and zero secure file exchange capabilities.',
    solution: 'Designed and deployed a responsive Next-generation web application with modern typography, sub-500ms global TTFB, and an encrypted client portal.',
    keyMetrics: ['100/100 Lighthouse Performance', '3.4x Increase in Inquiries', 'Sub-second Load Speeds'],
    tags: ['Corporate Web', 'Client Portal', 'Tailwind CSS', 'Responsive UI'],
    visualType: 'business-web'
  },
  {
    id: 'proj-3',
    title: 'Custom Mobile Application',
    category: 'App Development',
    categoryKey: 'app-dev',
    shortDesc: 'A cross-platform mobile suite for logistics tracking, real-time telemetry streaming, and secure biometric authentication.',
    clientType: 'Logistics & Supply Chain Network',
    challenge: 'Operations teams required real-time offline-capable mobile workflows with end-to-end encrypted dispatch data and instant notifications.',
    solution: 'Developed a Flutter / React Native application featuring local SQLite caching, cryptographic token exchange, and offline sync engines.',
    keyMetrics: ['50,000+ Active Devices', '4.9/5 App Store Rating', '100% Offline Integrity'],
    tags: ['iOS & Android', 'Biometric Auth', 'Offline Sync', 'Cloud APIs'],
    visualType: 'mobile-app'
  },
  {
    id: 'proj-4',
    title: 'Cloud Security Vault & IAM System',
    category: 'Cybersecurity',
    categoryKey: 'cybersecurity',
    shortDesc: 'A multi-tenant role-based identity governance and secret management system with hardware-grade cryptographic key rotation.',
    clientType: 'Healthcare SaaS Provider',
    challenge: 'HIPAA and SOC2 compliance required granular access logging, zero-trust token isolation, and automated privilege revocation.',
    solution: 'Built an encrypted key management service with JWT/OAuth2 micro-tokenization and audit trail visualizers.',
    keyMetrics: ['SOC2 & HIPAA Compliant', 'Sub-10ms Token Validation', 'Zero Security Breaches'],
    tags: ['IAM Security', 'AES-256 Encryption', 'Compliance', 'Security Audit'],
    visualType: 'security-vault'
  },
  {
    id: 'proj-5',
    title: 'Modern E-Commerce Web Ecosystem',
    category: 'Web Development',
    categoryKey: 'web-dev',
    shortDesc: 'A scalable headless e-commerce store with AI search capabilities, PCI-DSS compliant checkout, and instant page transitions.',
    clientType: 'Direct-to-Consumer Brand',
    challenge: 'High bounce rate during peak traffic events due to server throttling and clunky mobile checkout steps.',
    solution: 'Re-architected as a headless store with edge caching, Stripe API payment gateways, and responsive touch-optimized carts.',
    keyMetrics: ['+42% Conversion Rate', '0.4s Checkout Transition', '99.99% Uptime'],
    tags: ['Headless Commerce', 'Stripe API', 'Edge CDN', 'SEO Optimized'],
    visualType: 'ecommerce-web'
  },
  {
    id: 'proj-6',
    title: 'Fintech Wealth & Asset Tracker',
    category: 'App Development',
    categoryKey: 'app-dev',
    shortDesc: 'A financial intelligence app featuring live portfolio updates, algorithmic risk analysis, and biometric authentication.',
    clientType: 'Wealth Management Syndicate',
    challenge: 'Delivering microsecond data updates while maintaining bank-grade security standards and accessible visualization on mobile screens.',
    solution: 'Constructed an encrypted mobile application leveraging WebSockets, custom D3/SVG charts, and sandboxed biometric credentials.',
    keyMetrics: ['$120M+ Tracked Assets', 'Real-Time WebSocket Stream', 'Bank-Grade AES'],
    tags: ['Fintech Mobile', 'Data Visuals', 'Secure API', 'Cross-Platform'],
    visualType: 'fintech-app'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: "Understand the client's requirements, target audience, threat model, and strategic business goals.",
    activities: [
      'Requirement gathering & stakeholder interviews',
      'Threat modeling & risk identification',
      'System scope & feasibility analysis'
    ],
    duration: 'Phase 1'
  },
  {
    number: '02',
    title: 'Plan',
    description: 'Create the technical architecture, security protocols, wireframes, and design strategy.',
    activities: [
      'System architecture & database schema blueprinting',
      'Security posture & compliance checklist',
      'UI/UX wireframes & interactive prototypes'
    ],
    duration: 'Phase 2'
  },
  {
    number: '03',
    title: 'Build',
    description: 'Develop the solution with defensive coding practices, continuous automated testing, and security auditing.',
    activities: [
      'Agile sprints with clean, modular code',
      'Unit, integration & vulnerability testing',
      'Automated CI/CD deployment pipelines'
    ],
    duration: 'Phase 3'
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'Launch the final product to production, verify security hardening, and provide ongoing support.',
    activities: [
      'Production deployment & DNS/SSL configuration',
      'Final penetration test & sign-off report',
      'Comprehensive documentation & maintenance support'
    ],
    duration: 'Phase 4'
  }
];

export const TECH_STACK = [
  { name: 'Cybersecurity', items: ['OWASP Top 10', 'Penetration Testing', 'NIST Framework', 'SSL/TLS & AES-256', 'Burp Suite & Nmap', 'Cloudflare WAF'] },
  { name: 'Web Development', items: ['React 19', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js / Express', 'REST & GraphQL APIs'] },
  { name: 'App Development', items: ['React Native', 'Flutter', 'iOS (Swift)', 'Android (Kotlin)', 'SQLite & Realm', 'Firebase / Supabase'] },
  { name: 'Cloud & DevOps', items: ['Docker & Containers', 'AWS & Cloudflare', 'CI/CD Pipelines', 'PostgreSQL', 'Redis', 'Vercel / GitHub Actions'] }
];

export const STATS = [
  { value: '100%', label: 'Security-First Focus', sub: 'Zero-trust architecture' },
  { value: '99.9%', label: 'Infrastructure Reliability', sub: 'High-availability builds' },
  { value: '< 12h', label: 'Response Guarantee', sub: 'Dedicated business support' },
  { value: '3 in 1', label: 'Full Digital Stack', sub: 'Security, Web & App' }
];

export const FAQS = [
  {
    question: 'How does TheCyberDev combine cybersecurity with web & app development?',
    answer: 'Unlike traditional software agencies that treat security as an afterthought, we integrate defensive engineering, input sanitization, threat modeling, and vulnerability audits directly into every stage of development.'
  },
  {
    question: 'Can you perform a security audit on our existing website or app?',
    answer: 'Yes! We offer standalone Cybersecurity Assessments and Vulnerability Testing. We examine your web application, server configurations, and API endpoints, delivering a clear technical report with remediation steps.'
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary based on scope: a focused security assessment or high-performance business website typically takes 2–4 weeks, while complex full-scale custom web and mobile applications range from 4–10 weeks.'
  },
  {
    question: 'Do you provide ongoing maintenance and security monitoring?',
    answer: 'Absolutely. We offer dedicated post-launch support, continuous dependency updates, security patches, performance tuning, and server health monitoring.'
  }
];
