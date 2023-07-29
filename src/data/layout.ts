import {ILink, IFooter} from '@/types/layout';

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