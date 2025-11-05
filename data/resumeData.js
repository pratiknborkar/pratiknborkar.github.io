import { MdOutlineBusinessCenter, MdOutlineSchool } from "react-icons/md";
import { FaAward } from "react-icons/fa";

module.exports = [
  {
    id: 1,
    title: "Education",
    icon: <MdOutlineBusinessCenter />,
    items: [
      {
        id: 1,
        date: "2016",
        title: "BE Computer Engineering ",
        place: "North Maharashtra University",
        bg: "#FFF4F4",
      },

      {
        id: 2,
        date: "2009 ",
        title: "Diploma in Electronics Engg",
        place: "Maharashtra State Board of Technical Education ",
        bg: "#FFF1FB",
      },

      {
        id: 3,
        date: "2004",
        title: "SSC ",
        place: "Maharashtra State Education Board ",
        bg: "#FFF4F4",
      },
    ],
  },
  {
    id: 2,
    title: "Experience",
    icon: <MdOutlineSchool />,
    items: [
      {
        id: 1,
        date: "From-2023",
        title: "Deputy Manager",
        place: "Reliance Industries Limited",
        bg: "#EEF5FA",
      },

      {
        id: 2,
        date: "2021-2023",
        title: "Kubernetes Admin",
        place: "ACL Digital (Alten Calsoft Labs)",
        bg: "#F2F4FF",
      },

      {
        id: 3,
        date: "2018-2021",
        title: "Technical Support Engineer (AWS)",
        place: "Dixit Infotech Services Pvt. Ltd",
        bg: "#EEF5FA",
      },
    ],
  },
  {
    id: 3,
    title: "Awards",
    icon: <FaAward />,
    items: [
      {
        id: 1,
        date: "2015-2017",
        title: "  Graphic Designer",
        place: "Web Graphy, Los Angeles, CA",
        bg: "#FCF4FF",
      },

      {
        id: 2,
        date: "2014 - 2015",
        title: "Jr. Web Developer",
        place: "Creative Gigs.",
        bg: "#FCF9F2",
      },

      {
        id: 3,
        date: "2015-2017",
        title: "Best Freelancer",
        place: "Fiver & Upwork Level 2 & Top Rated",
        bg: "#FCF4FF",
      },
    ],
  },
];
