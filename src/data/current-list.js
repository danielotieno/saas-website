import Amina from '../assets/images/current/Amina.jpg';
import AminaPdf from '../assets/images/current/Amina.pdf';
import Gloria from '../assets/images/current/Gloria.jpg';
import GloriaPdf from '../assets/images/current/Gloria.pdf';
import Grace from '../assets/images/current/Grace.jpg';
import GracePdf from '../assets/images/current/Grace.pdf';
import Halima from '../assets/images/current/Halima.jpg';
import HalimaPdf from '../assets/images/current/Halima.pdf';
import Leah from '../assets/images/current/Leah.jpg';
import LeahPdf from '../assets/images/current/Leah.pdf';
import Seline from '../assets/images/current/Seline.jpg';
import SelinePdf from '../assets/images/current/Seline.pdf';

const CURRENT_STUDENTS = [
  {
    image: Grace,
    title: 'Grace',
    text: 'Grace is 18 years of age, she is currently in her final year in High school and a full-time boarder at Ushindi Baptist high school.',
    link: GracePdf,
    isFeatured: true,
  },
  {
    image: Gloria,
    title: 'Gloria',
    text: 'Gloria is 17 years of age. She is currently in form four and a full-time day scholar at St Francis day star high school.',
    link: GloriaPdf,
    isFeatured: true,
  },
  {
    image: Seline,
    title: 'Seline',
    text: 'Seline was born in September 2002. She is currently in form 4 at Rose Makwere Girls Secondary School.',
    link: SelinePdf,
    isFeatured: true,
  },
  {
    image: Amina,
    title: 'Amina',
    text: 'Amina is currently in form 3 at ACK St. Thomas Girls’ Secondary School. She will be finishing her high school level in 2022.',
    link: AminaPdf,
    isFeatured: false,
  },
  {
    image: Leah,
    title: 'Leah',
    text: 'Leah is 18 years old. Currently, she is in Form 3 student and a full-time boarder at Kingwede Girl’s High School.',
    link: LeahPdf,
    isFeatured: false,
  },
  {
    image: Halima,
    title: 'Halima',
    text: 'Halima was born on the 27th of July 2003. She is an above average young lady with a bright future ahead.',
    link: HalimaPdf,
    isFeatured: false,
  },
];

export function getFeaturedCurrentStudents() {
  return CURRENT_STUDENTS.filter((student) => student.isFeatured);
}

export function getAllCurrentStudents() {
  return CURRENT_STUDENTS;
}
