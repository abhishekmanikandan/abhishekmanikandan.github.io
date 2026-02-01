export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
}

const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').replace(/\/+$/, '');
const prefix = basePath ? `${basePath}` : '';

const data: Project[] = [
  {
    title: 'RDBMS Engine in Java',
    subtitle: '',
    image: `${prefix}/images/projects/rdbms.png`,
    link: 'https://github.com/ABHISHEK1967/RDBMS-JAVA',
    date: '2021-12-20',
    desc: 'A lightweight Relational Database Management System (RDBMS) implemented from scratch in Java, designed to mimic the internal architecture and execution flow of real-world databases such as MySQL and PostgreSQL at a simplified level.',
    tech: ['Java'],
    featured: true,
  },
  {
    title: 'E-commerce Website',
    subtitle: '',
    link: 'https://github.com/ABHISHEK1967/Scotia-jewellery-mart-Ecommerce',
    image: `${prefix}/images/projects/fullstack.png`,
    date: '2022-08-20',
    desc: 'Scotia Jewellery Mart is a production-inspired, cloud-native e-commerce platform built using the MERN stack.',
    tech: ['React', 'Node.js', 'AWS', 'Typescript','MongoDB','Express','JavaScript','HTML','CSS'],
    featured: true,
  },
  {
    title: 'Halifax Foodie',
    subtitle: '',
    link: 'https://github.com/ABHISHEK1967/Halifax-Foodie',
    image: `${prefix}/images/projects/foodie.png`,
    date: '2022-08-20',
    desc: 'Halifax Foodie is a production-grade, cloud-native, full-stack web application that delivers personalized food, kitchen, hotel, and tour recommendations using user profiling, questionnaires, and sentiment analysis.',
    tech: ['React', 'AWS', 'Docker','GCP', 'Serverless','Hybrid Cloud','Dynamodb','API Gateway' ],
  },
  {
    title: 'Amazon Go',
    subtitle: '',
    image: `${prefix}/images/projects/amzn.png`,
    link: 'https://github.com/ABHISHEK1967/Amazon-go-clone',
    date: '2022-03-15',
    desc: 'Production-style Amazon Go inspired e-commerce system demonstrating frontend + backend architecture, API design, system flows, and engineering best practices.',
    tech: ['Angular', 'Node.js', 'AWS', 'Monorepo','Express','JavaScript','HTML','CSS'],
  },
];

export default data;
