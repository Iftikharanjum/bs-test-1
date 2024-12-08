import { Benefit, FAQ, Step, Testimonial } from '../types';

export const benefits: Benefit[] = [
  {
    title: 'AI-Powered Learning',
    description: 'Personalized learning paths adapted to your pace and style using advanced AI algorithms.',
    icon: 'SparklesIcon',
  },
  {
    title: 'Industry-Ready Skills',
    description: 'Curriculum designed with industry experts to ensure relevant, up-to-date knowledge.',
    icon: 'AcademicCapIcon',
  },
  {
    title: 'Live Mentorship',
    description: 'Direct access to experienced mentors for guidance and support throughout your journey.',
    icon: 'UserGroupIcon',
  },
  {
    title: 'Career Support',
    description: 'Comprehensive career services including resume review, interview prep, and job placement.',
    icon: 'BriefcaseIcon',
  },
];

export const steps: Step[] = [
  {
    id: 1,
    name: 'Assessment',
    description: 'Take our AI-powered assessment to determine your current skill level and learning goals.',
    icon: 'ClipboardDocumentCheckIcon',
  },
  {
    id: 2,
    name: 'Customized Path',
    description: 'Receive a personalized learning path tailored to your goals and current abilities.',
    icon: 'MapIcon',
  },
  {
    id: 3,
    name: 'Learn & Practice',
    description: 'Engage with interactive content, complete projects, and get real-time feedback.',
    icon: 'ComputerDesktopIcon',
  },
  {
    id: 4,
    name: 'Career Launch',
    description: 'Graduate with a portfolio of projects and connect with our hiring partners.',
    icon: 'RocketLaunchIcon',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "BukhSchool transformed my career. The AI-driven approach helped me learn at my own pace, and the mentorship was invaluable.",
    author: {
      name: "Sarah Chen",
      role: "Software Engineer at Google",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    content: "The practical projects and industry connections helped me land my dream job. The community support is amazing!",
    author: {
      name: "Michael Rodriguez",
      role: "Data Scientist at Microsoft",
      imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    content: "The AI-powered learning system adapted perfectly to my schedule. I could learn while working full-time.",
    author: {
      name: "Emily Johnson",
      role: "Product Manager at Amazon",
      imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export const faqs: FAQ[] = [
  {
    question: "How does the AI-powered learning system work?",
    answer: "Our AI system analyzes your learning style, pace, and goals to create a personalized curriculum. It continuously adapts based on your progress and performance, ensuring optimal learning outcomes.",
  },
  {
    question: "What kind of support do students receive?",
    answer: "Students receive comprehensive support including 1-on-1 mentorship, technical guidance, career counseling, and access to our active community of learners and alumni.",
  },
  {
    question: "How long does it take to complete a program?",
    answer: "Program duration varies based on your chosen path and time commitment. Most students complete their programs in 4-6 months with 15-20 hours per week of study.",
  },
  {
    question: "What are the career prospects after graduation?",
    answer: "Our graduates have been placed at leading tech companies worldwide. We offer career support, including resume building, interview preparation, and direct connections to our hiring partners.",
  },
  {
    question: "Is prior experience required?",
    answer: "No prior experience is required for our beginner tracks. We have programs suitable for all skill levels, from complete beginners to advanced practitioners.",
  },
];