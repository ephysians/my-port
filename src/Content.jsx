// import images
import Hero_person from "./assets/images/Hero/person.png";

// import skills images
import express from "./assets/images/Skills/express.png";
import react from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import js from "./assets/images/Skills/js.png";
import tailwind from "./assets/images/Skills/tailwind.png";
import redux from "./assets/images/Skills/redux.png";
import bootstrap from "./assets/images/Skills/bootstrap.png";
import postman from "./assets/images/Skills/postman.png";
import html from "./assets/images/Skills/html.png";
import css from "./assets/images/Skills/css.png";
import git from "./assets/images/Skills/git.png";
import npm from "./assets/images/Skills/npm.png";


//import Services images
import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";
import services_logo4 from "./assets/images/Services/logo4.png";
import services_logo5 from "./assets/images/Services/logo5.png";

// import Project images
import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  // change some content links below
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Fullstack Engr.",
    firstName: "OBINNA",
    LastName: "CHUKS",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "12+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      
      {
        name: "Express",
        para: "Lorem ipsum text  dummy",
        logo: express,
      },
      {
       name: "React.JS",
        para: "Lorem ipsum text  dummy",
        logo: react,
      },
      {
        name: "Redux",
        para: "Lorem ipsum text  dummy",
        logo: redux,
      },
      {
        name: "JavaScript",
        para: "Lorem ipsum text  dummy",
        logo: js,
      },
      {
        name: "Tailwind Css",
        para: "Lorem ipsum text  dummy",
        logo: tailwind,
      },
      {
        name: "Nodejs",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      {
        name: "CSS3",
        para: "Lorem ipsum text  dummy",
        logo: css,
      },
      {
        name: "Html5",
        para: "Lorem ipsum text  dummy",
        logo: html,
      },
      {
        name: "Git",
        para: "Lorem ipsum text  dummy",
        logo: git,
      },
      {
        name: "Postman",
        para: "Lorem ipsum text  dummy",
        logo: postman,
      },
      {
        name: "Npm",
        para: "Lorem ipsum text  dummy",
        logo: npm,
      },
      {
        name: "Bootstrap",
        para: "Lorem ipsum text  dummy",
        logo: bootstrap,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Building and designing responsive and user-friendly websites, developing custom web applications tailored to specific business needs and creating dynamic and interactive user interfaces using HTML, CSS, and JavaScript",
        logo: services_logo1,
      },
      {
        title: "Backend Development",
        para: " Designing and developing server-side logic and APIs, Setting up databases and managing data storage and retrieval and implementing user authentication and authorization systems",
        logo: services_logo2,
      },
      {
        title: "API Development",
        para: "Building RESTful APIs for communication between front-end and back-end systems and implementing API endpoints for data retrieval, creation, updating, and deletion.",
        logo: services_logo3,
      },
     
      {
        title: "Maintenance",
        para: "Providing ongoing maintenance, updates, and enhancements to existing websites and applications.Troubleshooting and resolving technical issues and bugs.",
        logo: services_logo4,
      },
       {
        title: "System Support",
        para: "Need system support? I got you covered! I provision fast and reliable support for specifically Mongo DB. From troubleshooting to maintenance, I ensure your systems encounter no slow you down very optimized and secure.",
        logo: services_logo5,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "BANK OTP GENERATOR",
        image: project1,
      },
      {
        title: "SCHEDULE TRACKER",
        image: project2,
      },
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Bank Hardware Token",
        image: project2,
      },
      {
        title: "Gym Website",
        image: project1,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Enhanced Online Presence: Thanks to Chuks's innovative web application, My client online presence has seen a remarkable boost. The user-friendly design and seamless functionality have significantly improved hercustomers' experience, resulting in increased engagement and retention.”",
        img: avatar1,
        name: "KUFREY SAMUEL / (UI/UX)",
      },
      {
        review:
          "“Tailored Solutions: Emmanuel took the time to truly understand my business plight on marketing & awareness. The web application he developed was custom-tailored to address our specific needs, which has been instrumenat for driving sale since I employed it...Thanks”",
        img: avatar2,
        name: "MARYJANE OBI - Entrepreneur (AuntyJayz Onlin-Store)",
      },
      {
        review:
          "“Expanded Reach: My Micro-business have expanded our it's customer's base beyond the local market. Emmanuel's web application has allowed us to reach a broader audience, resulting in increased sales and revenue.”",
        img: avatar3,
        name: "Engr. GODSLOVE .U",
      },
      {
        review:
          "“User-Centric Design: Chuks commitment to creating an intuitive and visually appealing user interface for my Electrical business has greatly enhanced the user experience. The application's design not only attracts visitors but also keeps them engaged.”",
        img: avatar4,
        name: " Engr. DAREAL SOLOMON - Electrical Engr (Dareal-Electrical)",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "“Cultivating digital experiences with a mastery of both front-end finesse and back-end prowess,  My commitment to crafting seamless, innovative solutions fuels my passion for creating captivating online landscapes. Welcome to a collaboration built on expertise and vision.”",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Lets Talk",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "emlighttechnologies2022@gmail.com",
        icon: GrMail,
        link: "emlighttechnologies2022@gmail.com",
      },
      {
        text: "+2349 3810 4041",
        icon: MdCall,
        link: "https://wa.me/+234938104041",
      },
      {
        text: "ephysians",
        icon: BsInstagram,
        link: "https://www.instagram.com/ephysians/",
      },
      {
        text: "@ephysians",
        icon: BsGithub,
        link: "https://github.com/ephysians/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};






