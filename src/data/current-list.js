import Amina from '../assets/images/current/Amina.jpg';
import AminaPdf from '../assets/images/current/Amina.pdf';
import Graham from '../assets/images/current/Graham.jpg';
import GrahamPdf from '../assets/images/current/Graham.pdf';
import Halima from '../assets/images/current/Halima.jpg';
import HalimaPdf from '../assets/images/current/Halima.pdf';
import Iddah from '../assets/images/current/Iddah.jpg';
import IddahPdf from '../assets/images/current/Iddah.pdf';
import Kelvin from '../assets/images/current/Kelvin.jpg';
import KelvinPdf from '../assets/images/current/Kelvin.pdf';
import Kemmy from '../assets/images/current/Kemmy.jpg';
import KemmyPdf from '../assets/images/current/Kemmy.pdf';
import Leah from '../assets/images/current/Leah.jpg';
import LeahPdf from '../assets/images/current/Leah.pdf';
import Sila from '../assets/images/current/Sila.jpg';
import SilaPdf from '../assets/images/current/Sila.pdf';
import Josephat from '../assets/images/current/Josephat.png';
import JosephatPdf from '../assets/images/current/Josephat.pdf';
import Juma from '../assets/images/current/Juma.png';
import JumaPdf from '../assets/images/current/Juma.pdf';
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
    text: 'Kemmy is 18 years of age. Thanks to the SAAS organization, She is in form 2 and full-time border in high school.',
    link: KemmyPdf,
    isFeatured: true,
  },
  {
    image: Josephat,
    title: 'Josephat',
    text: 'Josephat is 20 years of age. Josephat complete his secondary school in March 2022 and scored a C+',
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
    image: Iddah,
    title: 'Iddah',
    text: 'Idah is 19 years of age. She is currently in form 3 in a boarding school. Iddah is a hardworking young lady',
    link: IddahPdf,
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
    text: 'Kelvin is 21 years of age, he is currently studying telecommunication engineering.',
    link: KelvinPdf,
    isFeatured: true,
  },
  {
    image: Leah,
    title: 'Leah',
    text: 'Leah is 18 years old, she is currently a Form 4 full-time boarder at Kingwede Girl’s High School. She will be completing her secondary education in December 2022.',
    link: LeahPdf,
    isFeatured: false,
  },

  {
    image: Halima,
    title: 'Halima',
    text: 'Halima is currently in form 4. She is an above average young lady with a bright future ahead.',
    link: HalimaPdf,
    isFeatured: true,
  },
  {
    image: Sila,
    title: 'Sila',
    text: 'Sila is 22 years of age. Thanks to SAAS, Sila was able to attend high school and he is currently university, studying bachelor in commerce.',
    link: SilaPdf,
    isFeatured: false,
  },
  {
    image: Juma,
    title: 'Juma',
    text: 'Juma is 18 years of age. He is currently in form 4 and has a full-time border in high school.',
    link: JumaPdf,
    isFeatured: false,
  },
];

export function getFeaturedCurrentStudents() {
  return CURRENT_STUDENTS.filter((student) => student.isFeatured);
}

export function getAllCurrentStudents() {
  return CURRENT_STUDENTS;
}
