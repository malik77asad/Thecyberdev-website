import { ServiceItem, WhyUsFeature } from '../types';

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
