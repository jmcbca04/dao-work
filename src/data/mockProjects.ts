export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  status: 'open' | 'in-progress' | 'completed';
  details?: {
    budget?: string;
    timeline?: string;
    skills?: string[];
    location?: string;
  };
}

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Smart Contract Development for DAO Treasury',
    description: 'We need an experienced Solidity developer to create secure multi-sig treasury contracts with role-based access control and governance integration.',
    category: 'development',
    status: 'open',
    details: {
      budget: '$5,000 - $10,000',
      timeline: '4-6 weeks',
      skills: ['Solidity', 'Smart Contracts', 'Security', 'Web3.js'],
      location: 'Remote',
    }
  },
  {
    id: '2',
    title: 'Web3 Dashboard UI Design',
    description: 'Looking for a UI/UX designer to create a modern, intuitive dashboard for our DAO members to participate in governance and view treasury analytics.',
    category: 'design',
    status: 'open',
    details: {
      budget: '$2,000 - $4,000',
      timeline: '2-3 weeks',
      skills: ['UI/UX Design', 'Figma', 'Web3', 'Dashboard Design'],
      location: 'Remote',
    }
  },
  {
    id: '3',
    title: 'Community Engagement Strategy',
    description: 'Develop and implement a comprehensive strategy to grow our Discord community, increase member engagement, and improve governance participation.',
    category: 'community',
    status: 'open',
    details: {
      budget: '$3,000 - $5,000',
      timeline: '3 months',
      skills: ['Community Management', 'Discord', 'Growth Strategy', 'DAO Governance'],
      location: 'Remote',
    }
  },
  {
    id: '4',
    title: 'Tokenomics Analysis and Redesign',
    description: 'Conduct an analysis of our current token model and propose improvements to incentivize long-term holding, participation, and ecosystem growth.',
    category: 'finance',
    status: 'in-progress',
    details: {
      budget: '$8,000 - $12,000',
      timeline: '6-8 weeks',
      skills: ['Tokenomics', 'Economic Modeling', 'DeFi', 'Data Analysis'],
      location: 'Remote',
    }
  },
  {
    id: '5',
    title: 'Smart Contract Security Audit',
    description: 'Perform a comprehensive security audit of our DAO governance and treasury smart contracts. Identify vulnerabilities and provide recommendations.',
    category: 'security',
    status: 'completed',
    details: {
      budget: '$6,000 - $9,000',
      timeline: '2 weeks',
      skills: ['Smart Contract Auditing', 'Security', 'Solidity', 'Bug Bounty'],
      location: 'Remote',
    }
  },
  {
    id: '6',
    title: 'DAO Metrics Dashboard Development',
    description: 'Build a real-time analytics dashboard that tracks key performance indicators for our DAO, including member growth, proposal activity, and treasury flows.',
    category: 'analytics',
    status: 'open',
    details: {
      budget: '$4,000 - $7,000',
      timeline: '4 weeks',
      skills: ['React', 'Data Visualization', 'The Graph', 'Web3 Integration'],
      location: 'Remote',
    }
  },
  {
    id: '7',
    title: 'Content Creation for Web3 Education',
    description: 'Create engaging educational content about Web3, DAOs, and decentralized governance for our blog, social media, and newsletter.',
    category: 'marketing',
    status: 'open',
    details: {
      budget: '$2,500 - $4,500',
      timeline: '3 months',
      skills: ['Content Creation', 'Web3 Knowledge', 'Copywriting', 'Social Media'],
      location: 'Remote',
    }
  },
  {
    id: '8',
    title: 'Governance Process Optimization',
    description: 'Review and redesign our current governance processes to increase participation, improve efficiency, and ensure high-quality decision-making.',
    category: 'community',
    status: 'in-progress',
    details: {
      budget: '$3,500 - $6,000',
      timeline: '2 months',
      skills: ['DAO Governance', 'Process Design', 'Community Management', 'Facilitation'],
      location: 'Remote',
    }
  },
]; 