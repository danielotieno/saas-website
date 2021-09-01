import Abraham from '../assets/images/current/Abraham.jpg';
import AbrahamPdf from '../assets/images/current/Abraham.pdf';
import Amina from '../assets/images/current/Amina.jpg';
import AminaPdf from '../assets/images/current/Amina.pdf';
import Gloria from '../assets/images/current/Gloria.jpg';
import GloriaPdf from '../assets/images/current/Gloria.pdf';
import Grace from '../assets/images/current/Grace.jpg';
import GracePdf from '../assets/images/current/Grace.pdf';
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
import Patrick from '../assets/images/current/Patrick.jpg';
import PatrickPdf from '../assets/images/current/Patrick.pdf';
import Seline from '../assets/images/current/Seline.jpg';
import SelinePdf from '../assets/images/current/Seline.pdf';
import Sila from '../assets/images/current/Sila.jpg';
import SilaPdf from '../assets/images/current/Sila.pdf';

const CURRENT_STUDENTS = [
  {
    image: Graham,
    title: 'Graham',
    text: 'Graham is 19 years of age. He finished is high school education in March 2021 and managed to score B',
    link: GrahamPdf,
    isFeatured: false,
  },
  {
    image: Grace,
    title: 'Grace',
    text: 'Grace is 18 years old, she is currently in her final year, form 4, in High school and is a full-time boarder.',
    link: GracePdf,
    isFeatured: true,
  },
  {
    image: Kemmy,
    title: 'Kemmy',
    text: 'Kemmy is 17 years of age. Thanks to SAAS organization, She is currently in form one.',
    link: KemmyPdf,
    isFeatured: false,
  },
  {
    image: Gloria,
    title: 'Gloria',
    text: 'Gloria is 17 years of age. She is currently in form four and a full-time day scholar.',
    link: GloriaPdf,
    isFeatured: true,
  },
  {
    image: Amina,
    title: 'Amina',
    text: 'Amina is currently in form 3. She will be finishing her high school level in 2022.',
    link: AminaPdf,
    isFeatured: false,
  },
  {
    image: Abraham,
    title: 'Abraham',
    text: 'Abraham is 19 years of age. He completed his High school level in March 2021. He managed to score A-',
    link: AbrahamPdf,
    isFeatured: true,
  },
  {
    image: Iddah,
    title: 'Iddah',
    text: 'Iddah is 19 years of age. She is currently in form two, in a boarding high school.',
    link: IddahPdf,
    isFeatured: false,
  },
  {
    image: Seline,
    title: 'Seline',
    text: 'Seline is 17 years old. She is currently in form 4, in High School, is a full-time boarder.',
    link: SelinePdf,
    isFeatured: true,
  },
  {
    image: Patrick,
    title: 'Patrick',
    text: 'Patrick is 19 years old, through the help of SAAS organization, he completed high school in march 2021.',
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
    text: 'Leah is 18 years old. She is currently in form 3, in High School, is a full-time boarder.',
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
    text: 'Sila is 21 years of age. Thanks to SAAS, Sila was able to attend high school. He is currently studying bachelor in education',
    link: SilaPdf,
    isFeatured: false,
  },
];

export function getFeaturedCurrentStudents() {
  return CURRENT_STUDENTS.filter((student) => student.isFeatured);
}

export function getAllCurrentStudents() {
  return CURRENT_STUDENTS;
}
