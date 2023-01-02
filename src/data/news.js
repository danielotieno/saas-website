import NewsLetters from '../assets/images/news/news.jpeg';
import Moses from '../assets/images/graduations/moses/moses.png';
import TopStudents from '../assets/images/events/top-students.png';
import FoodProgram from '../assets/images/events/food-program.png';
import DonorVisit from '../assets/images/events/donor-visit.jpg';

const NEWS_DATA = [
  {
    image: NewsLetters,
    title: 'Newsletters',
    link: '/news/newsletters',
  },
  {
    image: DonorVisit,
    title: 'Donor Visits',
    link: '/news/donor-visits',
  },
  {
    image: Moses,
    title: 'Moses Graduation',
    link: '/news/moses-onyango',
  },

  {
    image: TopStudents,
    title: 'SAAS Top Students in 2021 National Exams',
    link: '/news/top-students-2021',
  },

  {
    image: FoodProgram,
    title: 'Food Relief Program',
    link: '/news/food-program',
  },
];

export default NEWS_DATA;
