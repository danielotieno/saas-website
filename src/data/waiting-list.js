import Alvin from '../assets/images/waiting/alvin.jpg';
import AlvinPdf from '../assets/images/waiting/alvin.pdf';
import Prilly from '../assets/images/waiting/prilly.jpeg';
import PrillyPdf from '../assets/images/waiting/prilly.pdf';
import Robert from '../assets/images/waiting/robert.jpeg';
import RobertPdf from '../assets/images/waiting/robert.pdf';
import Sheryl from '../assets/images/waiting/sheryl.jpeg';
import SherylPdf from '../assets/images/waiting/sheryl.pdf';
import Martin from '../assets/images/waiting/martin.jpeg';
import MartinPdf from '../assets/images/waiting/martin.pdf';
import Elizabeth from '../assets/images/waiting/elizabeth.jpeg';
import ElizabethPdf from '../assets/images/waiting/elizabeth.pdf';
import Maxwel from '../assets/images/waiting/maxwel.jpeg';
import MaxwelPdf from '../assets/images/waiting/maxwel.pdf';
import Nancy from '../assets/images/waiting/nancy.jpeg';
import NancyPdf from '../assets/images/waiting/nancy.pdf';
import Constance from '../assets/images/waiting/constance.jpeg';
import ConstancePdf from '../assets/images/waiting/constance.pdf';
import Omar from '../assets/images/waiting/omar.jpeg';
import OmarPdf from '../assets/images/waiting/omar.pdf';
import Riana from '../assets/images/waiting/riana.jpeg';
import RianaPdf from '../assets/images/waiting/riana.pdf';
import Rajab from '../assets/images/waiting/rajab.jpeg';
import RajabPdf from '../assets/images/waiting/rajab.pdf';

const WAITING_STUDENTS = [
  {
    image: Alvin,
    title: 'Alvin',
    text: 'Alvin is 18 years old. His dream is to become a Doctor one day.',
    link: AlvinPdf,
    isFeatured: true,
  },

  {
    image: Prilly,
    title: 'Prilly',
    text: 'Prilly is 17 years old. She is currently in form 3 and dreams of becoming a Nurse one day.',
    link: PrillyPdf,
    isFeatured: true,
  },

  {
    image: Robert,
    title: 'Robert',
    text: 'Robert is 18 years old and currently a Form 3 student. His dream is to become an Engineer one day.',
    link: RobertPdf,
    isFeatured: true,
  },

  {
    image: Sheryl,
    title: 'Sheryl',
    text: 'Sheryl is 16 years old and currently in Form 3. Her dream is to become an Electrical Engineer one day.',
    link: SherylPdf,
    isFeatured: true,
  },

  {
    image: Martin,
    title: 'Martin',
    text: 'Martin is 17 years old and currently in Form 2. His dream is to become a Doctor one day.',
    link: MartinPdf,
    isFeatured: true,
  },

  {
    image: Elizabeth,
    title: 'Elizabeth',
    text: 'Elizabeth is 15 years old and currently in Form 3. Her dream is to become a Lawyer one day.',
    link: ElizabethPdf,
    isFeatured: true,
  },

  {
    image: Maxwel,
    title: 'Maxwel',
    text: 'Maxwel is 16 years old. He dreams of becoming a Doctor one day.',
    link: MaxwelPdf,
    isFeatured: false,
  },

  {
    image: Nancy,
    title: 'Nancy',
    text: 'Nancy is 17 years old and currently in form 3. She dreams of becoming a Nurse one day.',
    link: NancyPdf,
    isFeatured: false,
  },

  {
    image: Constance,
    title: 'Constance',
    text: 'Constance is 16 years old. Her dream is to become a Lawyer one day.',
    link: ConstancePdf,
    isFeatured: false,
  },

  {
    image: Omar,
    title: 'Omar',
    text: 'Omar is 18 years old and currently in form 3. He dreams of becoming a Doctor one day.',
    link: OmarPdf,
    isFeatured: false,
  },

  {
    image: Riana,
    title: 'Riana',
    text: 'Riana is 16 years old. Her dream is to become a Pilot one day.',
    link: RianaPdf,
    isFeatured: false,
  },

  {
    image: Rajab,
    title: 'Rajab',
    text: 'Rajab is 16 years old and currently in form 3. He dreams of becoming a Journalist one day.',
    link: RajabPdf,
    isFeatured: false,
  },
];

export function getFeaturedWaitingStudents() {
  return WAITING_STUDENTS.filter((student) => student.isFeatured);
}

export function getAllWaitingStudents() {
  return WAITING_STUDENTS;
}
