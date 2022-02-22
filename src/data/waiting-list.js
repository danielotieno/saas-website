import Braxton from '../assets/images/waiting/Braxton.jpg';
import BraxtonPdf from '../assets/images/waiting/braxton.pdf';
import Collins from '../assets/images/waiting/collins.jpg';
import CollinsPdf from '../assets/images/waiting/collins.pdf';
import Daviana from '../assets/images/waiting/daviana.jpeg';
import DavianaPdf from '../assets/images/waiting/daviana.pdf';
import Esther from '../assets/images/waiting/esther.jpg';
import EstherPdf from '../assets/images/waiting/esther.pdf';
import Fadhili from '../assets/images/waiting/Fadhili.jpeg';
import FadhiliPdf from '../assets/images/waiting/fadhili.pdf';
import George from '../assets/images/waiting/George.jpeg';
import GeorgePdf from '../assets/images/waiting/George.pdf';
import Happiness from '../assets/images/waiting/Happiness.jpg';
import HappinessPdf from '../assets/images/waiting/happiness.pdf';
import Lydia from '../assets/images/waiting/lydia.jpg';
import LydiaPdf from '../assets/images/waiting/lydia.pdf';
import Mwanamisi from '../assets/images/waiting/mwanamisi.jpg';
import MwanamisiPdf from '../assets/images/waiting/mwanamisi.pdf';
import Omar from '../assets/images/waiting/omar.jpg';
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
    image: Esther,
    title: 'Esther',
    text: 'Esther is in form 2. She will be completing her secondary school level in the year 2023.',
    link: EstherPdf,
    isFeatured: true,
  },

  {
    image: Lydia,
    title: 'Lydia',
    text: 'Lydia is in form 3. She will be completing her secondary school level in the year 2022',
    link: LydiaPdf,
    isFeatured: true,
  },

  {
    image: Omar,
    title: 'Omar',
    text: 'Omar is in form 1. He will be completing his secondary school education in the year 2024',
    link: OmarPdf,
    isFeatured: true,
  },

  {
    image: Mwanamisi,
    title: 'Mwanamisi',
    text: 'She is currently in form three bording school and will finish in December 2022',
    link: MwanamisiPdf,
    isFeatured: true,
  },

  {
    image: Daviana,
    title: 'Daviana',
    text: 'She is currently in form 1.She will be completing her education in the year 2024',
    link: DavianaPdf,
    isFeatured: false,
  },

  {
    image: Collins,
    title: 'Collins',
    text: 'Collins is currently in form 4 . He will be completing his high school education next year.',
    link: CollinsPdf,
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
    image: Happiness,
    title: 'Happiness',
    text: 'Happiness is a full-time border and a Form 1 student. She will be finishing high school in 2024.',
    link: HappinessPdf,
    isFeatured: false,
  },
  {
    image: George,
    title: 'George',
    text: 'George is 17 years of age, he is in form 2 and a full-time border in High school.',
    link: GeorgePdf,
    isFeatured: true,
  },
];

export function getFeaturedWaitingStudents() {
  return WAITING_STUDENTS.filter((student) => student.isFeatured);
}

export function getAllWaitingStudents() {
  return WAITING_STUDENTS;
}
