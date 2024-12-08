export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  content: string;
  author: {
    name: string;
    role: string;
    imageUrl: string;
  };
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Step {
  id: number;
  name: string;
  description: string;
  icon: string;
}

export interface RegistrationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedIn: string;
  experience: string;
  interests: string[];
  background: string;
}