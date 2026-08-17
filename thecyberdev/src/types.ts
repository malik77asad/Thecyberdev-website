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
