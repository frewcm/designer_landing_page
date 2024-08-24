import { title } from "process";

const portrait = "portrait.jpg";
const lion = "/lion.jpg";

export const teamList = [
  {
    id: 1,
    name: "Abebe Beso",
    img: portrait,
    position: "FOUNDER",
    profession: "Web Developer",
  },
  {
    id: 2,
    name: "Abebe Beso",
    img: portrait,
    position: "CO-FOUNDER",
    profession: "Web Developer",
  },
  {
    id: 3,
    name: "Abebe Beso",
    img: portrait,
    position: "General Manager",
    profession: "Web Developer",
  },
  {
    id: 4,
    name: "Abebe Beso",
    img: portrait,
    position: "Staff",
    profession: "Web Developer",
  },
];

export const whatWeDoList = [
  {
    id: 1,
    img: lion,
    serviceTitle: "Service Title",
    serviceList: [
      "Silent Echo",
      "Hidden Path",
      "Crimson Dawn",
      "Frosted Glass",
    ],
  },
  {
    id: 2,
    img: lion,
    serviceTitle: "Service Title",
    serviceList: [
      "Silent Echo",
      "Hidden Path",
      "Crimson Dawn",
      "Frosted Glass",
    ],
  },
  {
    id: 3,
    img: lion,
    serviceTitle: "Service Title",
    serviceList: [
      "Silent Echo",
      "Hidden Path",
      "Crimson Dawn",
      "Frosted Glass",
    ],
  },
  {
    id: 4,
    img: lion,
    serviceTitle: "Service Title",
    serviceList: [
      "Silent Echo",
      "Hidden Path",
      "Crimson Dawn",
      "Frosted Glass",
    ],
  },
];

interface Portfolio {
  img: string;
  type: string;
  location: string;
}
interface PortfolioList {
  [key: string]: Portfolio[];
}

export const portfolioList: PortfolioList[] = [
  {
    nav1: [
      { img: lion, type: "Type of nav1", location: "Location of the nav1" },
      { img: lion, type: "Type of nav1", location: "Location of the nav1" },
      { img: lion, type: "Type of nav1", location: "Location of the nav1" },
      { img: lion, type: "Type of nav1", location: "Location of the nav1" },
    ],
    nav2: [
      { img: lion, type: "Type of nav2", location: "Location of the nav2" },
      { img: lion, type: "Type of nav2", location: "Location of the nav2" },
      { img: lion, type: "Type of nav2", location: "Location of the nav2" },
      { img: lion, type: "Type of nav2", location: "Location of the nav2" },
    ],
    nav3: [
      { img: lion, type: "Type of nav3", location: "Location of the nav3" },
      { img: lion, type: "Type of nav3", location: "Location of the nav3" },
      { img: lion, type: "Type of nav3", location: "Location of the nav3" },
      { img: lion, type: "Type of nav3", location: "Location of the nav3" },
    ],
    nav4: [
      { img: lion, type: "Type of nav4", location: "Location of the nav4" },
      { img: lion, type: "Type of nav4", location: "Location of the nav4" },
      { img: lion, type: "Type of nav4", location: "Location of the nav4" },
      { img: lion, type: "Type of nav4", location: "Location of the nav4" },
    ],
    nav5: [
      { img: lion, type: "Type of nav5", location: "Location of the nav5" },
      { img: lion, type: "Type of nav5", location: "Location of the nav5" },
      { img: lion, type: "Type of nav5", location: "Location of the nav5" },
      { img: lion, type: "Type of nav5", location: "Location of the nav5" },
    ],
  },
];

interface Blogs {
  img: string;
  title: string;
  description: string;
  writtenBy: string;
  date: string;
}

export const blogs: Blogs[] = [
  {
    img: lion,
    title: "This is the title of the Blog",
    description:
      "Blogs are online platforms where individuals or groups share thoughts, insights, or expertise on various topics. They range from personal journals to professional guides, often featuring articles, multimedia, and reader interaction through comments, fostering community and information exchange.",
    writtenBy: "John Smith",
    date: "11/11/2111",
  },
  {
    img: lion,
    title: "This is the title of the Blog",
    description:
      "Blogs are online platforms where individuals or groups share thoughts, insights, or expertise on various topics. They range from personal journals to professional guides, often featuring articles, multimedia, and reader interaction through comments, fostering community and information exchange.",
    writtenBy: "John Smith",
    date: "11/11/2111",
  },
];
