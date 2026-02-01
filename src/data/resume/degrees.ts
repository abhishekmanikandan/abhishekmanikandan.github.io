export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'Dalhousie University',
    degree: 'Masters in Applied Computer Science',
    link: 'https://www.dal.ca/study/programs/graduate-professional/applied-computer-science-macsc.html',
    year: 2022,
  },
  {
    school: 'Anna University',
    degree: 'B.Tech Electronics and Communication Engineering',
    link: 'https://www.annauniv.edu/',
    year: 2012,
  },
];

export default degrees;
