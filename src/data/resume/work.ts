/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Royal Bank Of Canada ',
    position: 'Senior Full stack Engineer',
    url: '',
    startDate: '2022-09-06',
    summary: ``,
    highlights: [
      'Delivered Agentic AI innovations by rapidly prototyping new product ideas, redefining HR workspace in the GenAI era.',
      'Created internal RAG orchestration framework for personal AI assistants using gpt-4o-mini LLM and React for UI.',
      'Prototyped pretrained ML models (similar to Google translate) for document translation using Azure AI services.',
      'Implemented testing framework (LLM as a judge) integrated with CI/CD pipeline, reduced post-release defects by 40%.',
      'Mentored 3 interns, leading them to successfully complete a LangGraph Agentic AI project till deployment.'
    ],
  },
  {
    name: 'Ayogo Healthcare',
    position: 'Software Developer Intern',
    url: '',
    startDate: '2022-05-01',
    endDate: '2022-08-01',
    summary: ``,
    highlights: [
      'Improvised SaaS platform using an AWS serverless event driven distributed system with 99.9% SLA.',
      'Led performance optimization efforts, reducing API load times by 42% by batching and parallelizing.',
      'Re-architected inference APIs on AWS Lambda, scaling from 1,000 to 1M+ users per day and cutting job time from 30+ seconds to 7 seconds.',
      'Led privacy, security, and compliance reviews, resolving concerns to build enterprise-ready features.',
    ],
  },
  {
    name: 'Comcast',
    position: 'Software Development Engineer 2',
    url: '',
    startDate: '2021-01-01',
    endDate: '2021-07-01',
    summary: ``,
    highlights: [
      'Led team of 3 developers to build UI for Xfinity mobile with projected 1 million monthly active users.',
      'Architected full re-write of Xm360 frontend using Angular MFE (micro-frontend) to enable faster loading performance.',
      'Contributed to AI-driven forecasting and employee-attrition models improving data driven insights by 90%.',
      'Implemented centralized logging and real-time monitoring with ELK stack and reduced debugging time by 50%.'
    ],
  },
  {
    name: 'Sanmina',
    position: 'Full Stack Developer',
    url: '',
    startDate: '2017-01-01',
    endDate: '2020-09-01',
    summary: ``,
    highlights: [
      'Created scalable microservice-enabled offering, using Angular and Node, orchestrated by Kubernetes on GCP.',
      'Designed and authored closed-source SSO enabled LDAP verification for authentication and authorization.',
      'Created machine learning models to rubricate support tickets with <9% error rate.',
      'Automated workflows using Camunda BPMN to improve user engagement by 70% streamlining business processes.'
    ],
  }
];

export default work;
