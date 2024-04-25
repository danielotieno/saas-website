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
    text: 'Graham is 21 years of age. He is in his 3rd year, semester 2, at Chuka University. He is undertaking a degree in Computer Science.',
    link: GrahamPdf,
    isFeatured: true,
  },
  {
    image: Zilpa,
    title: 'Zilpa',
    text: 'Zilpa completed her primary school in 2023. Currently, she is in form one at Nyakach Girls Secondary School.',
    link: ZilpaPdf,
    isFeatured: true,
  },
  {
    image: Idd,
    title: 'Idd',
    text: 'Idd is 14 years of age. He aspires to become a Doctor in the future.',
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
    text: 'Josephat, a resilient and determined 22-year-old. He is undertaking Bachelor of Science in public management and development.',
    link: JosephatPdf,
    isFeatured: false,
  },
  {
    image: Amina,
    title: 'Amina',
    text: 'Amina, a resilient and diligent student, is currently a first-year student at Pwani University pursuing a Bachelor of Arts in Literature.',
    link: AminaPdf,
    isFeatured: false,
  },

  {
    image: Patrick,
    title: 'Patrick',
    text: 'Patrick is 19 years of age, He is currently in university and undertaking a Bachelor of Science.',
    link: PatrickPdf,
    isFeatured: false,
  },
  {
    image: Kelvin,
    title: 'Kelvin',
    text: 'Kelvin is 23 years old. He is currently studying telecommunications and hopes to finish his course in December 2024',
    link: KelvinPdf,
    isFeatured: true,
  },
  {
    image: Leah,
    title: 'Leah',
    text: 'Leah is 22 years old and a first-year student pursuing a Bachelor of Arts in Education. She is hardworking and has a bright future.',
    link: LeahPdf,
    isFeatured: false,
  },

  {
    image: Halima,
    title: 'Halima',
    text: 'Halima completed high school in March 2022. She is currently at university pursuing a diploma in special needs education.',
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
