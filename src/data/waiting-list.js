import George from '../assets/images/waiting/george.jpeg';
import GeorgePdf from '../assets/images/waiting/george.pdf';
import Happiness from '../assets/images/waiting/happiness.jpg';
import HappinessPdf from '../assets/images/waiting/happiness.pdf';
import Naomi from '../assets/images/waiting/naomi.png';
import NaomiPdf from '../assets/images/waiting/naomi.pdf';
import Lewis from '../assets/images/waiting/lewis.jpg';
import LewisPdf from '../assets/images/waiting/lewis.pdf';
import Lucia from '../assets/images/waiting/lucia.jpg';
import LuciaPdf from '../assets/images/waiting/lucia.pdf';
import Leah from '../assets/images/waiting/leah.png';
import LeahPdf from '../assets/images/waiting/leah.pdf';
import Helton from '../assets/images/waiting/helton.jpg';
import HeltonPdf from '../assets/images/waiting/helton.pdf';
import Alvin from '../assets/images/waiting/alvin.jpg';
import AlvinPdf from '../assets/images/waiting/alvin.pdf';
import Ali from '../assets/images/waiting/ali.jpg';
import AliPdf from '../assets/images/waiting/ali.pdf';
import Nickson from '../assets/images/waiting/nickson.jpg';
import NicksonPdf from '../assets/images/waiting/nickson.pdf';
import Yvonne from '../assets/images/waiting/yvonne.jpg';
import YvonnePdf from '../assets/images/waiting/yvonne.pdf';
import Omar from '../assets/images/waiting/omar.jpg';
import OmarPdf from '../assets/images/waiting/omar.pdf';

const WAITING_STUDENTS = [
  {
    image: George,
    title: 'George',
    text: 'George is in form 3. He will be completing his secondary school education in the year 2023.',
    link: GeorgePdf,
    isFeatured: true,
  },

  {
    image: Happiness,
    title: 'Happiness',
    text: 'Happiness is a full-time border and a Form 2 student. She will be finishing high school in 2024.',
    link: HappinessPdf,
    isFeatured: true,
  },
  {
    image: Naomi,
    title: 'Naomi',
    text: 'Naomi is a very hardworking young girl. She completed her primary level in 2021. She is yet to join high school due to a lack of fees.',
    link: NaomiPdf,
    isFeatured: false,
  },
  {
    image: Lucia,
    title: 'Lucia',
    text: 'Lucia is 18 years of age. She is a currently a form 4 in a day school. She will be sitting for her national exams in December 2022.',
    link: LuciaPdf,
    isFeatured: true,
  },
  {
    image: Lewis,
    title: 'Lewis',
    text: 'Lewis is 15 years of age. He is currently in form one and has a full-time border.',
    link: LewisPdf,
    isFeatured: true,
  },
  {
    image: Leah,
    title: 'Leah',
    text: 'Leah is a very hardworking young girl. Currently, she is in form 2. She will be completing her secondary level in 2024',
    link: LeahPdf,
    isFeatured: false,
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
    isFeatured: false,
  },
  {
    image: Ali,
    title: 'Ali',
    text: 'Ali is 17 years of age. He is a very hardworking young boy. Currently, he is in form 2 in high school.',
    link: AliPdf,
    isFeatured: true,
  },
  {
    image: Nickson,
    title: 'Nickson',
    text: 'Nickson is 17 years of age. He is in form 3 and a full-time day scholar.',
    link: NicksonPdf,
    isFeatured: true,
  },
  {
    image: Yvonne,
    title: 'Yvonne',
    text: 'Yvonne is a very hardworking young girl. She is currently in form 4 and she will be sitting on her final examination this year.',
    link: YvonnePdf,
    isFeatured: false,
  },
  {
    image: Omar,
    title: 'Omar',
    text: 'Omar is in form 2. He will be completing his secondary school education in the year 2024.',
    link: OmarPdf,
    isFeatured: true,
  },
];

export function getFeaturedWaitingStudents() {
  return WAITING_STUDENTS.filter((student) => student.isFeatured);
}

export function getAllWaitingStudents() {
  return WAITING_STUDENTS;
}
