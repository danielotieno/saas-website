import George from '../assets/images/waiting/George.jpeg';
import GeorgePdf from '../assets/images/waiting/George.pdf';
import Happiness from '../assets/images/waiting/Happiness.jpg';
import HappinessPdf from '../assets/images/waiting/happiness.pdf';

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
];

export function getFeaturedWaitingStudents() {
  return WAITING_STUDENTS.filter((student) => student.isFeatured);
}

export function getAllWaitingStudents() {
  return WAITING_STUDENTS;
}
