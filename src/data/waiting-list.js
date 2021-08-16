import Alyssa from '../assets/images/waiting/alyssa.jpg';
import AlyssaPdf from '../assets/images/waiting/alyssa.pdf';
import Gilbert from '../assets/images/waiting/gilbert.jpg';
import GilbertPdf from '../assets/images/waiting/gilbert.pdf';
import Kiko from '../assets/images/waiting/kiko.jpg';
import KikoPdf from '../assets/images/waiting/kiko.pdf';
import Moraa from '../assets/images/waiting/moraa.jpg';
import MoraaPdf from '../assets/images/waiting/moraa.pdf';
import Rhoda from '../assets/images/waiting/rhoda.jpg';
import RhodaPdf from '../assets/images/waiting/rhoda.pdf';

const WAITING_STUDENTS = [
  {
    image: Kiko,
    title: 'Johnson',
    text: 'Johnson is 15 years of age. He is looking forward to joining High school this July.',
    link: KikoPdf,
    isFeatured: true,
  },
  {
    image: Alyssa,
    title: 'Alyssa',
    text: 'Alyssa is 15 years of age. She completed her secondary education in march 2021.',
    link: AlyssaPdf,
    isFeatured: true,
  },
  {
    image: Moraa,
    title: 'Maximilla',
    text: 'Maximilla is 15 years of age. She is looking forward to joining secondary school.',
    link: MoraaPdf,
    isFeatured: true,
  },
  {
    image: Gilbert,
    title: 'Gilbert',
    text: 'Gilbert is 16years of age. He is looking forward to joining a High school in July.',
    link: GilbertPdf,
    isFeatured: false,
  },
  {
    image: Rhoda,
    title: 'Rhoda',
    text: 'Rhoda is 15 years of age. She is looking forward to joining a secondary school in July 2021.',
    link: RhodaPdf,
    isFeatured: false,
  },
];

export function getFeaturedWaitingStudents() {
  return WAITING_STUDENTS.filter((student) => student.isFeatured);
}

export function getAllWaitingStudents() {
  return WAITING_STUDENTS;
}
