export interface ProductItem {
  id: string;
  name: string;
  description: string;
  tag: string;
  image: string;
  highlights: string[];
  unitHint?: string;
}

export interface AnimalCardItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  features: string[];
}

export interface FeedFodderItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
}

export interface InfrastructureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
  badge: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  productInterest?: string;
}
