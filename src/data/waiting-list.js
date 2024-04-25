import George from '../assets/images/waiting/george.jpeg';
import GeorgePdf from '../assets/images/waiting/george.pdf';
import Helton from '../assets/images/waiting/helton.jpg';
import HeltonPdf from '../assets/images/waiting/helton.pdf';
import Alvin from '../assets/images/waiting/alvin.jpg';
import AlvinPdf from '../assets/images/waiting/alvin.pdf';
import Rukia from '../assets/images/waiting/rukia.jpeg';
import RukiaPdf from '../assets/images/waiting/rukia.pdf';
import Prilly from '../assets/images/waiting/prilly.jpeg';
import PrillyPdf from '../assets/images/waiting/prilly.pdf';

const WAITING_STUDENTS = [
  {
    image: George,
    title: 'George',
    text: 'George is in form 3. He will be completing his secondary school education in the year 2023.',
    link: GeorgePdf,
    isFeatured: true,
  },

  {
    image: Helton,
    title: 'Helton',
    text: 'Helton is 15 years of age. He is in form 2 and a full-time border at Oriwo Boys High school.',
    link: HeltonPdf,
    isFeatured: true,
  },
  {
    image: Alvin,
    title: 'Alvin',
    text: 'Alvin is 15 years of age. he is a very hardworking young boy. Currently, he is in form 1 and he will be completing her secondary level in 2025.',
    link: AlvinPdf,
    isFeatured: true,
  },
  {
    image: Rukia,
    title: 'Rukia',
    text: 'Rukia is in form two at Butere Girls Secondary School and will complete her high school level in 2026',
    link: RukiaPdf,
    isFeatured: true,
  },
  {
    image: Prilly,
    title: 'Prilly',
    text: 'Prilly is 14 years of age and the last born in a family of 3 children: two girls and a boy',
    link: PrillyPdf,
    isFeatured: true,
  },
];

export function getFeaturedWaitingStudents() {
  return WAITING_STUDENTS.filter((student) => student.isFeatured);
}

export function getAllWaitingStudents() {
  return WAITING_STUDENTS;
}
