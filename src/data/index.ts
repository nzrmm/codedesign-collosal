import {
  ILink,
  IFooter,
  IOption,
  IFeature,
  IProject,
  IService,
  IContact,
  ICompanyLogo,
  ITestimonial,
} from '@/types';

export const links: ILink[] = [
  {href: '/services', label: 'Services'},
  {href: '/how-we-work', label: 'How We Work'},
  {href: '/projects', label: 'Projects'},
  {href: '/About', label: 'About'},
]

export const footer: IFooter = {
  services: [
    {label: 'Web Development', href: '/'},
    {label: 'App Development', href: '/'},
    {label: 'UI Design', href: '/'},
    {label: 'Consultation', href: '/'},
    {label: 'Maintenance', href: '/'},
  ],
  company: [
    {label: 'About', href: '/'},
    {label: 'Contact', href: '/'},
    {label: 'Send Quote', href: '/'},
    {label: 'Privacy Policy', href: '/'},
    {label: 'Term of Service', href: '/'},
    {label: 'Jobs', href: '/'},
  ],
  resources: [
    {label: 'Support', href: '/'},
    {label: 'Documentation', href: '/'},
    {label: 'License', href: '/'},
    {label: 'Sitemap', href: '/'},
  ]
}


export const features: IFeature[] = [
  {
    icon: '/svgs/figma.svg',
    title: 'Design',
    description: 'The project interface will be designed first, our favorite tool is Figma.',
  },
  {
    icon: '/svgs/code.svg',
    title: 'Develop',
    description: 'Transform design and write business logic here. Choose the technology you want.',
  },
  {
    icon: '/svgs/box.svg',
    title: 'Ship',
    description: 'After the work is complete, we will send the project and all its assets to you.',
  }
];

export const companyLogos: ICompanyLogo[] = [
  {src: '/images/github-logo.png', alt: 'github-logo'},
  {src: '/images/forbes-logo.png', alt: 'forbes-logo'},
  {src: '/images/google-logo.png', alt: 'google-logo'},
  {src: '/images/microsoft-logo.png', alt: 'microsoft-logo'},
  {src: '/images/facebook-logo.png', alt: 'facebook-logo'},
];

export const services: IService[] = [
  {
    name: 'UI Design',
    price: '1200$',
    descriptions: ['10 design pages', 'Well-documented', '4 revisions', '$100/additional page'],
    textColor: '!text-primary05',
    backgroundColor: 'bg-primary05',
  },
  {
    name: 'Development',
    price: '5000$',
    descriptions: ['Web & Mobile', 'Well-documented', '8 revisions', '$1000/additional feature'],
    textColor: '!text-primary06',
    backgroundColor: 'bg-primary06'
  },
  {
    name: 'Maintenance',
    price: '3000$',
    descriptions: ['Daily backup', '3 hourse of maintenance', 'Including fixing', '$50/additional hour'],
    textColor: '!text-primary07',
    backgroundColor: 'bg-primary07'
  },
];

export const testimonials: ITestimonial[] = [
  {
    name: 'Courtney Henry',
    company: 'Biffco Enterprises Ltd.',
    photo: '/images/avatar-01.png',
    description: `"Very easy to use. I made back the purchase price in just 48 hours! It's great. It's is both attractive and highly adaptable."`
  },
  {
    name: 'Esther Howard',
    company: 'Abstergo Ltd.',
    photo: '/images/avatar-02.png',
    description: `"Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business."`
  },
  {
    name: 'Ronald Richards',
    company: 'Barone LLC.',
    photo: '/images/avatar-03.png',
    description: `"I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. "`
  },
];

export const categories: IOption[] = [
  {label: 'Technology', value: 'technology'},
  {label: 'Company', value: 'company'},
  {label: 'Transportation', value: 'Transportation'},
  {label: 'Binance', value: 'binance'},
]

export const projects: IProject[] = [
  {
    id: '1',
    slug: 'the-mobile-app-landing-page-01',
    title: 'The Mobile App Landing Page 01',
    description: 'A landing page for mobile app 01',
    category: 'Development',
    client: 'Acme, Inc',
    technologies: ['Flutter', 'Bloc'],
  },
  {
    id: '2',
    slug: 'the-desktop-app-landing-page-02',
    title: 'The Desktop App Landing Page 02',
    description: 'A landing page for desktop app 02',
    category: 'UI Design',
    client: 'Inahs, Corp',
    technologies: ['Figma', 'Sketch'],
  },
  {
    id: '3',
    slug: 'the-mobile-app-landing-page-03',
    title: 'The Mobile App Landing Page 03',
    description: 'A landing page for mobile app 03',
    category: 'UI Design',
    client: 'Dira, Inc',
    technologies: ['Figma', 'Sketch'],
  },
  {
    id: '4',
    slug: 'the-desktop-app-landing-page-04',
    title: 'The Desktop App Landing Page 04',
    description: 'A landing page for desktop app 04',
    category: 'Development',
    client: 'Mars, Inc',
    technologies: ['Next JS', 'Tailwind', 'CSS'],
  },
];

export const contacts: IContact[] = [
  {
    icon: '/svgs/phone.svg',
    type: 'Phone',
    value: '+62 1234 8921'
  },
  {
    icon: '/svgs/mail.svg',
    type: 'Email',
    value: 'support@collosal.tld'
  }
]