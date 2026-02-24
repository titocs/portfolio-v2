export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Assembly in Edge Computing",
    excerpt:
      "Exploring how WASM is redefining serverless architectures and enabling high-performance computing closer to the user. Is this the end of traditional containers?",
    date: "Nov 15, 2023",
    readTime: "8 min read",
    image: "/images/blog/wasm-edge.jpg",
    category: "Architecture",
    tags: ["#WASM", "#Performance", "#Edge"],
    featured: true,
  },
  {
    id: "2",
    title: "Optimizing React Renders: Beyond useMemo",
    excerpt:
      "A deep dive into React's reconciliation process and how to truly prevent unnecessary re-renders in large scale applications without overusing hooks.",
    date: "Oct 24, 2023",
    readTime: "5 min read",
    image: "/images/blog/react-render.jpg",
    category: "React",
    tags: ["#React", "#Frontend", "#Performance"],
  },
  {
    id: "3",
    title: "Zero Trust Architecture Explained",
    excerpt:
      "Why the traditional perimeter defense is dead and how to implement a Zero Trust model in your cloud infrastructure to secure your microservices.",
    date: "Sep 12, 2023",
    readTime: "12 min read",
    image: "/images/blog/zero-trust.jpg",
    category: "Security",
    tags: ["#Security", "#Cloud", "#DevSecOps"],
  },
  {
    id: "4",
    title: "Why I Switched to Rust for Backend Services",
    excerpt:
      "A personal journey from C++ to Rust. Memory safety without garbage collection is just the tip of the iceberg. Here's what I learned building API gateways.",
    date: "Aug 30, 2023",
    readTime: "6 min read",
    image: "/images/blog/rust-backend.jpg",
    category: "Thoughts",
    tags: ["#Rust", "#Systems", "#Backend"],
  },
  {
    id: "5",
    title: "Understanding CSS Container Queries",
    excerpt:
      "Media queries focus on the viewport. Container queries focus on the parent element. Learn how this fundamentally changes component-driven architecture.",
    date: "Jul 18, 2023",
    readTime: "4 min read",
    image: "/images/blog/css-container.jpg",
    category: "Tutorials",
    tags: ["#CSS", "#Frontend", "#DesignSystem"],
  },
  {
    id: "6",
    title: "The Anatomy of a Memory Leak in Node.js",
    excerpt:
      "How closures and event listeners can silently destroy your application's health. A step-by-step guide to profiling and fixing memory issues in production.",
    date: "Jun 05, 2023",
    readTime: "9 min read",
    image: "/images/blog/nodejs-memory.jpg",
    category: "Tutorials",
    tags: ["#Nodejs", "#Debugging", "#Backend"],
  },
  {
    id: "7",
    title: "Designing APIs for Developer Experience (DX)",
    excerpt:
      "An API is only as good as its documentation and predictability. Principles for designing RESTful endpoints that developers actually want to use.",
    date: "May 22, 2023",
    readTime: "7 min read",
    image: "/images/blog/api-design.jpg",
    category: "Thoughts",
    tags: ["#API", "#Design", "#DX"],
  },
  {
    id: "8",
    title: "The Rise of Micro-Frontends",
    excerpt: "Breaking down the monolithic frontend into manageable, independently deployable pieces. A look at Webpack Module Federation in practice.",
    date: "Apr 10, 2023",
    readTime: "8 min read",
    image: "/images/blog/micro-frontends.jpg",
    category: "Architecture",
    tags: ["#Frontend", "#Microservices", "#Webpack"],
  },
  {
    id: "9",
    title: "Demystifying the Event Loop",
    excerpt: "Visualizing the call stack, web APIs, and task queues in JavaScript. Why your setTimeouts aren't as accurate as you think.",
    date: "Mar 02, 2023",
    readTime: "5 min read",
    image: "/images/blog/event-loop.jpg",
    category: "Tutorials",
    tags: ["#JavaScript", "#Fundamentals"],
  },
  {
    id: "10",
    title: "PostgreSQL Tuning Guide",
    excerpt: "Indexes, vacuuming, and analyzing query plans. Getting the most performance out of your relational database.",
    date: "Feb 14, 2023",
    readTime: "11 min read",
    image: "/images/blog/postgres-tuning.jpg",
    category: "Tutorials",
    tags: ["#Database", "#PostgreSQL", "#Performance"],
  },
];

export const getAllCategories = () => {
  const categories = new Set(blogPosts.map((post) => post.category));
  return ["All", ...Array.from(categories)];
};
