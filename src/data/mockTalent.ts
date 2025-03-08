export interface Talent {
  id: string;
  name: string;
  avatar: string;
  title: string;
  bio: string;
  skills: string[];
  primarySkill: string;
  hourlyRate: string;
  availability: 'full-time' | 'part-time' | 'contract' | 'not available';
  experienceLevel: 'junior' | 'mid-level' | 'senior' | 'expert';
  rating: number;
  reviews: number;
  completedProjects: number;
  details?: {
    location?: string;
    languages?: string[];
    portfolio?: string;
    previousDAOs?: string[];
    governance?: {
      experience: boolean;
      platforms: string[];
    };
    social?: {
      twitter?: string;
      github?: string;
      linkedin?: string;
    };
  };
}

export const mockTalent: Talent[] = [
  {
    id: "1",
    name: "Alex Thompson",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    title: "Senior Solidity Developer",
    bio: "Smart contract specialist with 5+ years experience building secure DeFi protocols and DAO infrastructure.",
    skills: ["Solidity", "Smart Contracts", "DeFi", "Security Auditing", "Web3.js", "Hardhat"],
    primarySkill: "development",
    hourlyRate: "$120-150",
    availability: "contract",
    experienceLevel: "senior",
    rating: 4.9,
    reviews: 23,
    completedProjects: 31,
    details: {
      location: "Remote (UTC+1)",
      languages: ["English", "German"],
      portfolio: "https://github.com/alexdev",
      previousDAOs: ["MakerDAO", "Compound", "Aave"],
      governance: {
        experience: true,
        platforms: ["Snapshot", "Tally"],
      },
      social: {
        twitter: "@alexdev",
        github: "alexdev",
        linkedin: "alexthompson",
      },
    },
  },
  {
    id: "2",
    name: "Sophia Chen",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    title: "Tokenomics & Economic Design Specialist",
    bio: "Economist specializing in token mechanism design, incentives, and sustainable DAO economic models.",
    skills: ["Tokenomics", "Economic Modeling", "Game Theory", "Governance Design", "Token Engineering"],
    primarySkill: "strategy",
    hourlyRate: "$100-130",
    availability: "part-time",
    experienceLevel: "expert",
    rating: 4.8,
    reviews: 17,
    completedProjects: 14,
    details: {
      location: "Remote (UTC-8)",
      languages: ["English", "Mandarin"],
      portfolio: "https://tokenecon.com/sophia",
      previousDAOs: ["Index Coop", "OlympusDAO"],
      governance: {
        experience: true,
        platforms: ["Aragon", "Colony", "DAOhaus"],
      },
      social: {
        twitter: "@sophiatokens",
        linkedin: "sophiachen",
      },
    },
  },
  {
    id: "3",
    name: "Marcus Johnson",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    title: "Web3 UI/UX Designer",
    bio: "Creating intuitive interfaces for complex blockchain applications with focus on accessibility and user experience.",
    skills: ["UI/UX Design", "Figma", "Web3 Design", "Design Systems", "Frontend Development"],
    primarySkill: "design",
    hourlyRate: "$90-120",
    availability: "full-time",
    experienceLevel: "mid-level",
    rating: 4.7,
    reviews: 12,
    completedProjects: 18,
    details: {
      location: "Remote (UTC-5)",
      languages: ["English", "Spanish"],
      portfolio: "https://web3designs.io",
      previousDAOs: ["Rarible", "Foundation"],
      governance: {
        experience: false,
        platforms: [],
      },
      social: {
        twitter: "@marcusdesigns",
        github: "marcusj",
        linkedin: "marcusjohnson",
      },
    },
  },
  {
    id: "4",
    name: "Elena Petrov",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    title: "Smart Contract Security Auditor",
    bio: "Former cybersecurity expert now focusing on auditing and securing DeFi protocols and DAO treasuries.",
    skills: ["Security Auditing", "Solidity", "Protocol Analysis", "Formal Verification", "DeFi"],
    primarySkill: "security",
    hourlyRate: "$150-200",
    availability: "contract",
    experienceLevel: "expert",
    rating: 5.0,
    reviews: 8,
    completedProjects: 11,
    details: {
      location: "Remote (UTC+3)",
      languages: ["English", "Russian"],
      portfolio: "https://defi-security.expert",
      previousDAOs: ["Yearn", "Badger"],
      governance: {
        experience: true,
        platforms: ["Snapshot"],
      },
      social: {
        twitter: "@elenasecurity",
        github: "elenapetrov",
      },
    },
  },
  {
    id: "5",
    name: "David Kim",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    title: "DAO Legal Counsel",
    bio: "Legal expert specialized in DAO formation, token legal frameworks, and crypto regulatory compliance.",
    skills: ["Legal", "Regulatory Compliance", "DAO Structures", "Tokenization", "Securities Law"],
    primarySkill: "legal",
    hourlyRate: "$200-250",
    availability: "part-time",
    experienceLevel: "senior",
    rating: 4.8,
    reviews: 7,
    completedProjects: 9,
    details: {
      location: "Remote (UTC-7)",
      languages: ["English", "Korean"],
      portfolio: "https://dao-legal.com",
      previousDAOs: ["LexDAO", "PrimeDAO"],
      governance: {
        experience: true,
        platforms: ["Aragon", "Gnosis Safe"],
      },
      social: {
        twitter: "@daolawyer",
        linkedin: "davidkimlaw",
      },
    },
  },
  {
    id: "6",
    name: "Aisha Mbeki",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    title: "Community & DAO Operations Manager",
    bio: "Strategic community builder helping DAOs scale their operations, engagement and governance processes.",
    skills: ["Community Building", "Operations", "Governance", "Strategy", "Discord Management"],
    primarySkill: "community",
    hourlyRate: "$80-110",
    availability: "full-time",
    experienceLevel: "mid-level",
    rating: 4.9,
    reviews: 14,
    completedProjects: 8,
    details: {
      location: "Remote (UTC+2)",
      languages: ["English", "Swahili", "French"],
      portfolio: "https://dao-community.xyz",
      previousDAOs: ["Gitcoin", "FWB"],
      governance: {
        experience: true,
        platforms: ["Snapshot", "Commonwealth", "Discourse"],
      },
      social: {
        twitter: "@aishacommunity",
        linkedin: "aishambeki",
      },
    },
  },
  {
    id: "7",
    name: "Ryan Garcia",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    title: "Full-Stack Web3 Developer",
    bio: "Building dApps and DAO interfaces with React, Solidity and The Graph. Specializing in frontend-blockchain integration.",
    skills: ["React", "TypeScript", "Ethers.js", "The Graph", "Next.js", "Solidity"],
    primarySkill: "development",
    hourlyRate: "$100-130",
    availability: "contract",
    experienceLevel: "mid-level",
    rating: 4.7,
    reviews: 11,
    completedProjects: 15,
    details: {
      location: "Remote (UTC-6)",
      languages: ["English", "Spanish"],
      portfolio: "https://web3dev.io/ryan",
      previousDAOs: ["Bankless", "POAP"],
      governance: {
        experience: false,
        platforms: [],
      },
      social: {
        twitter: "@ryanweb3",
        github: "ryangarcia",
        linkedin: "ryangarciaweb3",
      },
    },
  },
  {
    id: "8",
    name: "Naomi Zhang",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    title: "Blockchain Data Analyst",
    bio: "Analyzing on-chain data to extract insights for DAOs and DeFi protocols to improve strategies and governance.",
    skills: ["Data Analysis", "SQL", "Python", "Dune Analytics", "Flipside", "Visualization"],
    primarySkill: "analytics",
    hourlyRate: "$90-120",
    availability: "part-time",
    experienceLevel: "senior",
    rating: 4.6,
    reviews: 9,
    completedProjects: 13,
    details: {
      location: "Remote (UTC+8)",
      languages: ["English", "Mandarin"],
      portfolio: "https://chainanalytics.io",
      previousDAOs: ["Llama", "Dune"],
      governance: {
        experience: true,
        platforms: ["Snapshot", "Tally"],
      },
      social: {
        twitter: "@naomidata",
        github: "naomizhang",
        linkedin: "naomizhangdata",
      },
    },
  },
  {
    id: "9",
    name: "Thomas Wilson",
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
    title: "NFT Strategy Consultant",
    bio: "Helping DAOs leverage NFTs for fundraising, community engagement, and governance. NFT collection design and launch specialist.",
    skills: ["NFT Strategy", "Collection Design", "Community Building", "Marketing", "Smart Contracts"],
    primarySkill: "strategy",
    hourlyRate: "$110-140",
    availability: "contract",
    experienceLevel: "senior",
    rating: 4.8,
    reviews: 13,
    completedProjects: 16,
    details: {
      location: "Remote (UTC-4)",
      languages: ["English"],
      portfolio: "https://nftstrategy.xyz",
      previousDAOs: ["BAYC", "Nouns"],
      governance: {
        experience: true,
        platforms: ["Snapshot", "Aragon"],
      },
      social: {
        twitter: "@thomasnft",
        linkedin: "thomaswilsonnft",
      },
    },
  },
  {
    id: "10",
    name: "Julia Santos",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    title: "DeFi Protocol Engineer",
    bio: "Designing and implementing financial protocols with focus on capital efficiency, security, and governance mechanisms.",
    skills: ["Solidity", "DeFi", "Protocol Design", "Mathematics", "Vyper", "Economic Modeling"],
    primarySkill: "development",
    hourlyRate: "$130-180",
    availability: "part-time",
    experienceLevel: "expert",
    rating: 4.9,
    reviews: 7,
    completedProjects: 12,
    details: {
      location: "Remote (UTC-3)",
      languages: ["English", "Portuguese", "Spanish"],
      portfolio: "https://github.com/juliadefi",
      previousDAOs: ["Curve", "Balancer", "dYdX"],
      governance: {
        experience: true,
        platforms: ["Compound Governor", "Snapshot"],
      },
      social: {
        twitter: "@juliadefi",
        github: "juliasantos",
        linkedin: "juliasantosdefi",
      },
    },
  }
]; 