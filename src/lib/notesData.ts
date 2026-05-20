export interface Chapter {
  id: string;
  title: string;
  content: string; // Markdown or raw text content
  isAvailable: boolean;
}

export interface Level {
  id: string;
  title: string;
  chapters: Chapter[];
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: string; // We can use the name of the icon or a direct SVG string later
  levelRange: string;
  totalChapters: number;
  levels: Level[];
}

export const notesData: Topic[] = [
  {
    id: 'frontend',
    title: 'Frontend Web Development',
    description: 'A comprehensive guide from HTML fundamentals to advanced React and performance optimization.',
    icon: 'layout', // Represents a generic frontend icon
    levelRange: 'Beginner to Expert',
    totalChapters: 8,
    levels: [
      {
        id: 'level-1',
        title: 'Level 1: The Basics',
        chapters: [
          {
            id: 'html-css',
            title: 'HTML & CSS Fundamentals',
            content: '# HTML & CSS Fundamentals\n\nWelcome to the first chapter of Frontend Web Development.\n\nIn this section, we will cover the core building blocks of the web.',
            isAvailable: true,
          },
          {
            id: 'js-basics',
            title: 'JavaScript Basics',
            content: '# JavaScript Basics\n\nLearn how to add interactivity to your websites using JavaScript.',
            isAvailable: true,
          }
        ]
      },
      {
        id: 'level-2',
        title: 'Level 2: Intermediate',
        chapters: [
          {
            id: 'react-intro',
            title: 'Introduction to React',
            content: '# Introduction to React\n\nReact is a declarative, efficient, and flexible JavaScript library for building user interfaces.',
            isAvailable: true,
          },
          {
            id: 'state-management',
            title: 'State Management',
            content: '',
            isAvailable: false, // Coming soon
          }
        ]
      },
      {
        id: 'level-3',
        title: 'Level 3: Expert',
        chapters: [
          {
            id: 'performance',
            title: 'Web Performance Optimization',
            content: '',
            isAvailable: false,
          }
        ]
      }
    ]
  },
  {
    id: 'dotnet',
    title: 'Mastering .NET',
    description: 'Deep dive into C#, ASP.NET Core, and building scalable backend systems.',
    icon: 'server',
    levelRange: 'Intermediate to Expert',
    totalChapters: 5,
    levels: [
      {
        id: 'level-1',
        title: 'Level 1: Core Concepts',
        chapters: [
          {
            id: 'csharp-advanced',
            title: 'Advanced C# Features',
            content: '# Advanced C# Features\n\nExploring LINQ, delegates, events, and async/await in depth.',
            isAvailable: true,
          },
          {
            id: 'ef-core',
            title: 'Entity Framework Core',
            content: '# Entity Framework Core\n\nMastering ORM with EF Core, migrations, and performance tuning.',
            isAvailable: true,
          }
        ]
      },
      {
        id: 'level-2',
        title: 'Level 2: Web APIs & Microservices',
        chapters: [
          {
            id: 'building-rest-apis',
            title: 'Building REST APIs',
            content: '',
            isAvailable: false,
          },
          {
            id: 'microservices',
            title: 'Microservices Architecture',
            content: '',
            isAvailable: false,
          }
        ]
      }
    ]
  }
];
