import Amina from '../assets/images/current/Amina.jpg';
import AminaPdf from '../assets/images/current/Amina.pdf';
import Graham from '../assets/images/current/Graham.jpg';
import GrahamPdf from '../assets/images/current/Graham.pdf';
import Halima from '../assets/images/current/Halima.jpg';
import HalimaPdf from '../assets/images/current/Halima.pdf';
import Kelvin from '../assets/images/current/Kelvin.jpg';
import KelvinPdf from '../assets/images/current/Kelvin.pdf';
import Kemmy from '../assets/images/current/Kemmy.jpg';
import KemmyPdf from '../assets/images/current/Kemmy.pdf';
import Leah from '../assets/images/current/Leah.jpg';
import LeahPdf from '../assets/images/current/Leah.pdf';
import Josephat from '../assets/images/current/Josephat.png';
import JosephatPdf from '../assets/images/current/Josephat.pdf';
import Zilpa from '../assets/images/current/Zilpa.jpeg';
import ZilpaPdf from '../assets/images/current/Zilpa.pdf';
import Idd from '../assets/images/current/Idd.jpeg';
import IddPdf from '../assets/images/current/Idd.pdf';
import Patrick from '../assets/images/current/Patrick.jpg';
import PatrickPdf from '../assets/images/current/Patrick.pdf';

const CURRENT_STUDENTS = [
  {
    image: Graham,
    title: 'Graham',
    text: 'He is currently at Chuka University pursuing a degree in Computer Science. He is now in his final semester and is expected to graduate in December.',
    link: GrahamPdf,
    isFeatured: true,
  },
  {
    image: Zilpa,
    title: 'Zilpa',
    text: 'Zilpa completed her primary school in 2023. Currently, she is in form one at Nyakach Girls Secondary School.',
    link: ZilpaPdf,
    isFeatured: false,
  },
  {
    image: Idd,
    title: 'Idd',
    text: 'He is now in form two and will complete his secondary school education in 2027. The scholarship opportunity he secured from SAAS has made this possible.',
    link: IddPdf,
    isFeatured: true,
  },

  {
    image: Kemmy,
    title: 'Kemmy',
    text: 'Kemmy, a remarkable and promising 18-year-old, is currently in Form 4 as a full-time high school border student',
    link: KemmyPdf,
    isFeatured: true,
  },
  {
    image: Josephat,
    title: 'Josephat',
    text: 'Josephat is 23 years old. He is undertaking Bachelor of Science in public management and development.',
    link: JosephatPdf,
    isFeatured: false,
  },
  {
    image: Amina,
    title: 'Amina',
    text: 'Amina is 22 years old. She is currently a student at Pwani University pursuing a Bachelor of Arts in Literature.',
    link: AminaPdf,
    isFeatured: true,
  },

  {
    image: Patrick,
    title: 'Patrick',
    text: 'Patrick is 21 years old. He is a final year student at Moi University pursuing a Bachelor of Science in Computer Science.',
    link: PatrickPdf,
    isFeatured: false,
  },
  {
    image: Kelvin,
    title: 'Kelvin',
    text: 'Kelvin is 24 years old. He is studying for a Diploma in Telecommunications at the Kenya Coast National Polytechnic and will graduate in December.',
    link: KelvinPdf,
    isFeatured: true,
  },
  {
    image: Leah,
    title: 'Leah',
    text: 'Leah is 22 years old. She is a second-year student pursuing a Bachelor of Arts degree in Education.',
    link: LeahPdf,
    isFeatured: false,
  },

  {
    image: Halima,
    title: 'Halima',
    text: 'Halima is 23 years old. She is a final-year student at Mount Kenya University pursuing a Diploma in Education (special needs).',
    link: HalimaPdf,
    isFeatured: true,
  },
];

export function getFeaturedCurrentStudents() {
  return CURRENT_STUDENTS.filter((student) => student.isFeatured);
}

export function getAllCurrentStudents() {
  return CURRENT_STUDENTS;
}
