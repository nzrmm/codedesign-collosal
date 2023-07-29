import {IOption} from "@/types/type";
import {IProject} from "@/types/projects";

export const categories: IOption[] = [
  {label: 'Technology', value: 'technology'},
  {label: 'Company', value: 'company'},
  {label: 'Transportation', value: 'Transportation'},
  {label: 'Binance', value: 'binance'},
]

export const projects: IProject[] = [
  {id: '1', title: 'The Mobile App Landing Page', description: 'A landing page for mobile app'},
  {id: '2', title: 'The Desktop App Landing Page', description: 'A landing page for desktop app'},
  {id: '3', title: 'The Mobile App Landing Page', description: 'A landing page for mobile app'},
  {id: '4', title: 'The Desktop App Landing Page', description: 'A landing page for desktop app'},
];