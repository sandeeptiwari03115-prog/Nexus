export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  feature?: 'chart' | 'ai-demo' | 'steps' | 'none';
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  service: string;
  message: string;
}
