import Braxton from '../assets/images/waiting/Braxton.jpg';
import BraxtonPdf from '../assets/images/waiting/braxton.pdf';
import Collins from '../assets/images/waiting/collins.jpg';
import CollinsPdf from '../assets/images/waiting/collins.pdf';
import David from '../assets/images/waiting/David.jpg';
import DavidPdf from '../assets/images/waiting/david.pdf';
import Fadhili from '../assets/images/waiting/Fadhili.jpeg';
import FadhiliPdf from '../assets/images/waiting/fadhili.pdf';
import George from '../assets/images/waiting/George.jpeg';
import GeorgePdf from '../assets/images/waiting/George.pdf';
import Hajra from '../assets/images/waiting/Hajra.jpg';
import HajraPdf from '../assets/images/waiting/hajra.pdf';
import Happiness from '../assets/images/waiting/Happiness.jpg';
import HappinessPdf from '../assets/images/waiting/happiness.pdf';
import Mbarak from '../assets/images/waiting/mbarak.jpg';
import MbarakPdf from '../assets/images/waiting/mbarak.pdf';
import Omar from '../assets/images/waiting/Omar.jpg';
import OmarPdf from '../assets/images/waiting/omar.pdf';

const WAITING_STUDENTS = [
  {
    image: Braxton,
    title: 'Braxton',
    text: 'Braxton is currently in form 2 . He will be completing his high school education in 2024.',
    link: BraxtonPdf,
    isFeatured: true,
  },
  {
    image: Collins,
    title: 'Collins',
    text: 'Collins is currently in form 4 . He will be completing his high school education next year.',
    link: CollinsPdf,
    isFeatured: false,
  },
  {
    image: David,
    title: 'David',
    text: 'David is a full-time border and currently in form 2. He will finish secondary school in 2024.',
    link: DavidPdf,
    isFeatured: false,
  },
  {
    image: Fadhili,
    title: 'Fadhili',
    text: 'Fadhili is 15 years of age. He is looking forward to joining the high school this august if he gets a donor.',
    link: FadhiliPdf,
    isFeatured: false,
  },
  {
    image: Hajra,
    title: 'Hajra',
    text: 'Hajra is 15 years of age. She is in form 1 and a full-time day scholar. Hajra is an intelligent young girl.',
    link: HajraPdf,
    isFeatured: true,
  },
  {
    image: Happiness,
    title: 'Happiness',
    text: 'Happiness is a full-time border and a Form 1 student. She will be finishing high school in 2024.',
    link: HappinessPdf,
    isFeatured: false,
  },
  {
    image: Mbarak,
    title: 'Mbarak',
    text: 'Mbarak is 16 years old. He finished his primary education in a government school.',
    link: MbarakPdf,
    isFeatured: false,
  },
  {
    image: Omar,
    title: 'Mohammad',
    text: 'Mohammad is 14 years of age.He is a very hardworking young boy. He will finish secondary school in 2024.',
    link: OmarPdf,
    isFeatured: true,
  },
  {
    image: George,
    title: 'George',
    text: 'George is 17 years of age, he is in form 2 and a full-time border in High school.',
    link: GeorgePdf,
    isFeatured: false,
  },
];

export function getFeaturedWaitingStudents() {
  return WAITING_STUDENTS.filter((student) => student.isFeatured);
}

export function getAllWaitingStudents() {
  return WAITING_STUDENTS;
}
