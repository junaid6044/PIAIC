const cardData = [
  {
    id: 1,
    imgSrc: "/img/1.webp",
    title: "Discover top Software Houses in Faisalabad in 2024",
    text: "",
    link: "top-software-house-2024"
  },
  {
    id: 2,
    imgSrc: "/img/2.webp",
    title: "Bun: A New JavaScript Runtime that Replaces Node.js",
    text: "",
    link: "javaScript-runtime"
  },
  {
    id: 3,
    imgSrc: "/img/3.webp",
    title: "Top 10 Software house in Pakistan",
    text: "",
    link: "top-software-house-in-pakistan"
  },
  {
    id: 4,
    imgSrc: "/img/4.webp",
    title: "The Top 10 Tech Stacks Used by the World's Most Successful Companies",
    text: "",
    link: "top-tech-stack"
  },
  {
    id: 5,
    imgSrc: "/img/5.webp",
    title: "Drizzle vs Prisma: Which TypeScript ORM is Faster, Simpler, and More Flexible in 2023?",
    text: "",
    link: "drizzle-vs-prisma"
  },
  {
    id: 6,
    imgSrc: "/img/6.webp",
    title: "How to learn Blockchain Development in 2023: A Complete Guide and Detailed Roadmap",
    text: "",
    link: "blockchain-development-2023"
  },
  {
    id: 7,
    imgSrc: "/img/7.webp",
    title: "Blockchain Explained: The History, Concepts, and Features of Blockchain Technology",
    text: "",
    link: "blockchain-history"
  },
  {
    id: 8,
    imgSrc: "/img/8.webp",
    title: "How to Become a DevOps Engineer in 2023: A Complete Guide and Roadmap",
    text: "",
    link: "devops-engineer-roadmap-2023"
  },
  {
    id: 9,
    imgSrc: "/img/9.webp",
    title: "The Metaverse: What It Is, How to Access It, and What It Means for the Future of the Internet",
    text: "",
    link: "metaverse"
  },
  {
    id: 10,
    imgSrc: "/img/10.webp",
    title: "A Complete Guide to Next Js: A React Js Framework",
    text: "",
    link: "nextjs"
  },
  {
    id: 11,
    imgSrc: "/img/11.webp",
    title: "How to pass coding tests and assessments for a software developer job",
    text: "",
    link: "developer-coding-tests"
  },
  {
    id: 12,
    imgSrc: "/img/12.webp",
    title: "How to Install Node.js Locally with Node Version Manager (nvm)",
    text: "",
    link: "install-nodejs-using-nvm"
  },
  {
    id: 13,
    imgSrc: "/img/13.webp",
    title: "How to Get a Software Development Job? Step-by-Step Guide",
    text: "",
    link: "software-development-job"
  },
  {
    id: 14,
    imgSrc: "/img/14.webp",
    title: "First Day of Job as a Software Developer",
    text: "",
    link: "job-first-day"
  },
  {
    id: 15,
    imgSrc: "/img/15.webp",
    title: "What to Look for in a Front End Developer: A Comprehensive Guide",
    text: "",
    link: "front-end-developer"
  },
  {
    id: 16,
    imgSrc: "/img/16.webp",
    title: "The Complete Guide to React, Angular, and Vue 2022",
    text: "",
    link: "vuejs-vs-react-vs-angular"
  },
  {
    id: 17,
    imgSrc: "/img/17.webp",
    title: "Top 10 Software House in Faisalabad",
    text: "",
    link: "top-software-in-faisalabad"
  },
  {
    id: 18,
    imgSrc: "/img/18.webp",
    title: "What is Hybrid Mobile Application?",
    text: "",
    link: "hybrid-mobile-application"
  },
];

export default function Page({ params }: { params: { slug: string } }) {
  const selectedCard = cardData.find(card => card.link === params.slug);

  return (
    <div>
      {selectedCard ? (
        <div>
          <h1>{selectedCard.title}</h1>
          <p>{selectedCard.text}</p>
        </div>
      ) : (
        <p>Post not found</p>
      )}
    </div>
  );
}