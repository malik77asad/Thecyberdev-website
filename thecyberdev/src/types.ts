export type ServiceCategory = 'cybersecurity' | 'web-development' | 'app-development';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: 'Shield' | 'Globe' | 'Smartphone' | 'Lock' | 'Code' | 'Terminal';
  features: string[];
  deliverables: string[];
  gradient: string;
  accentColor: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Cybersecurity' | 'Web Development' | 'App Development';
  categoryKey: 'all' | 'cybersecurity' | 'web-dev' | 'app-dev';
  shortDesc: string;
  clientType: string;
  challenge: string;
  solution: string;
  keyMetrics: string[];
  tags: string[];
  visualType: 'cyber-platform' | 'business-web' | 'mobile-app' | 'security-vault' | 'ecommerce-web' | 'fintech-app';
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  activities: string[];
  duration: string;
}

export interface WhyUsFeature {
  title: string;
  description: string;
  iconName: 'ShieldCheck' | 'Cpu' | 'Sliders' | 'TrendingUp';
  highlight: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  budget?: string;
  message: string;
}
