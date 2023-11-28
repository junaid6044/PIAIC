import Card from './(components)/card';

const cardData = [
  {
    id: 1,
    imgSrc: "/img/1.webp",
    title: "Discover top Software Houses in Faisalabad in 2024",
    text: "Explore the leading software houses in Faisalabad, Pakistan, in 2024. Find exciting career opportunities in the dynamic IT landscape of Faisalabad's tech scene.",
    link: "top-software-house-2024"
  },
  {
    id: 2,
    imgSrc: "/img/2.webp",
    title: "Bun: A New JavaScript Runtime that Replaces Node.js",
    text: "Bun is a new JavaScript runtime that replaces Node.js. It is built on top of JavaScriptCore engine and is designed to be performant, lightweight, and simple.",
    link: "javaScript-runtime"
  },
  {
    id: 3,
    imgSrc: "/img/3.webp",
    title: "Top 10 Software house in Pakistan",
    text: "Explore Pakistan's leading software houses, from startups to established giants, shaping the nation's tech landscape with innovation and excellence. Discover how these companies leverage diverse cultures and cutting-edge technologies to deliver world-class solutions globally in this insightful blog.",
    link: "top-software-house-in-pakistan"
  },
  {
    id: 4,
    imgSrc: "/img/4.webp",
    title: "The Top 10 Tech Stacks Used by the World's Most Successful Companies",
    text: "Explore the top 10 tech stacks favored by industry leaders like Facebook, Netflix, and Uber. Learn how these stacks drive success and gain insights for your own projects. Discover the secrets behind MERN, Python Django, Serverless Computing, and more with Techloset's expertise.",
    link: "top-tech-stack"
  },
  {
    id: 5,
    imgSrc: "/img/5.webp",
    title: "Drizzle vs Prisma: Which TypeScript ORM is Faster, Simpler, and More Flexible in 2023?",
    text: "Explore the world of TypeScript ORM tools for SQL databases as we compare Drizzle and Prisma in terms of features, performance, compatibility, simplicity, flexibility, and future prospects. Learn which tool is the ideal choice for your 2023 development projects, whether you prioritize SQL familiarity, performance, or comprehensive features. Make an informed decision between these powerful tools for type-safe and expressive SQL development with TypeScript.",
    link: "drizzle-vs-prisma"
  },
  {
    id: 6,
    imgSrc: "/img/6.webp",
    title: "How to learn Blockchain Development in 2023: A Complete Guide and Detailed Roadmap",
    text: "Learn how to learn Blockchain Development in 2023 with this comprehensive guide and roadmap. Explore blockchain fundamentals, programming skills, smart contract development, DApp creation, and blockchain security to thrive in the dynamic world of blockchain technology.",
    link: "blockchain-development-2023"
  },
  {
    id: 7,
    imgSrc: "/img/7.webp",
    title: "Blockchain Explained: The History, Concepts, and Features of Blockchain Technology",
    text: "Explore the history, concepts, and features of blockchain technology in this comprehensive guide. Understand the evolution of blockchain, grasp its core concepts, and discover its powerful features that are shaping the digital landscape in 2023 and beyond.",
    link: "blockchain-history"
  },
  {
    id: 8,
    imgSrc: "/img/8.webp",
    title: "How to Become a DevOps Engineer in 2023: A Complete Guide and Roadmap",
    text: "Unlock a rewarding career as a DevOps engineer in 2023 with Techloset Solutions. Explore top software house opportunities in Faisalabad, offering expert software consultancy services. Join us to shape the future of DevOps software.",
    link: "devops-engineer-roadmap-2023"
  },
  {
    id: 9,
    imgSrc: "/img/9.webp",
    title: "The Metaverse: What It Is, How to Access It, and What It Means for the Future of the Internet",
    text: "This article is a brief introduction to the metaverse, a virtual reality where people can interact and create in immersive ways. The article covers how to access the metaverse, its benefits and challenges, and some tips to enjoy it.",
    link: "metaverse"
  },
  {
    id: 10,
    imgSrc: "/img/10.webp",
    title: "A Complete Guide to Next Js: A React Js Framework",
    text: "This article covers the basics of Nextjs, its significance over other frameworks, the companies that are using this and how to get started with it.",
    link: "nextjs"
  },
  {
    id: 11,
    imgSrc: "/img/11.webp",
    title: "How to pass coding tests and assessments for a software developer job",
    text: "Coding tests can be difficult sometimes to get through on the spot. Especially the prelude session of any job process requires logical assessment test, that is basically, you writing a script within a defined period of time that too without any online help! Lets dig further on how you can ace it.",
    link: "developer-coding-tests"
  },
  {
    id: 12,
    imgSrc: "/img/12.webp",
    title: "How to Install Node.js Locally with Node Version Manager (nvm)",
    text: "nvm is a version manager for node.js, designed to be installed per-user, and invoked per-shell. nvm works on any POSIX-compliant shell (sh, dash, ksh, zsh, bash), in particular on these platforms: unix, macOS, and windows, WSL.",
    link: "install-nodejs-using-nvm"
  },
  {
    id: 13,
    imgSrc: "/img/13.webp",
    title: "How to Get a Software Development Job? Step-by-Step Guide",
    text: "How to get a software development job? This article walks you through the step-by-step procedure of securing a position as a software developer in a competitive market.",
    link: "software-development-job"
  },
  {
    id: 14,
    imgSrc: "/img/14.webp",
    title: "First Day of Job as a Software Developer",
    text: "This article walks you through the experience of your first day at job as a software developer. Narrating the major Do's and Don'ts, you will need this before giving joining!",
    link: "job-first-day"
  },
  {
    id: 15,
    imgSrc: "/img/15.webp",
    title: "What to Look for in a Front End Developer: A Comprehensive Guide",
    text: "Want to hire a front end developer? A complete guide on how to hire a front end developer.",
    link: "front-end-developer"
  },
  {
    id: 16,
    imgSrc: "/img/16.webp",
    title: "The Complete Guide to React, Angular, and Vue 2022",
    text: "Vue.js vs React vs Angular - Which of these three frontend frameworks is best for your project? It might seem like a difficult choice having the number of frameworks out there, but we’re going to break down the pros and cons to help you make a smarter decision.",
    link: "vuejs-vs-react-vs-angular"
  },
  {
    id: 17,
    imgSrc: "/img/17.webp",
    title: "Top 10 Software House in Faisalabad",
    text: "List of Top 10 Software House of Faislabad and Best software houses in Pakistan",
    link: "top-software-in-faisalabad"
  },
  {
    id: 18,
    imgSrc: "/img/18.webp",
    title: "What is Hybrid Mobile Application?",
    text: "The Future of mobile application development is developing Hybrid Apps. In this article you will learn more about the concept of Hybrid Applications.",
    link: "hybrid-mobile-application"
  },
];


export default function Home() {
  return (
    <>
    <div className='text-center font-bold my-4'>
      <p className='text-red-800 text-lg'>My Recent Posts</p>
      <h1 className='text-6xl mt-2 mb-8 text-teal-600'>My Blog</h1>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-11/12 mx-auto">
      {cardData.map(card => (
        <Card key={card.id} data={card} />
      ))}
    </div>
    </>
  );
}
