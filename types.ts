
export interface Contact {
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Publication {
  title: string;
  authors: string[];
  journal: string;
  year: number;
  link: string;
  description: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  link?: string;
  tags: string[];
}

export interface Blog {
  title: string;
  date: string;
  description: string;
  link: string;
  tags: string[];
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  about: string;
  contact: Contact;
  education: Education[];
  publications: Publication[];
  experiences: Experience[];
  blogs: Blog[];
  gallery: GalleryImage[];
}