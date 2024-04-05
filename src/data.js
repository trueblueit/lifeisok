/**
 * This file contains data for the app
 * It is seperated from the app code to make it easy
 * to work with and manage data.
 *
 * It exports the data as constants that can be imported
 * into the app code.
 */

// accommodationData

/* imporrt for NabItems*/
import {
  FaHome,
  FaStar,
  FaUser,
  FaEnvelope,
  FaCog,
  FaBed,
} from "react-icons/fa";

// our values data in home page
export const values = [
  {
    id: 1,
    img: "assets/images/icons/1.png",
    name: "COMPASSION",
    description:
      "We offer support from our desire to help individuals and emphasize on the operational environment is less stressful and more satisfying.",
  },
  {
    id: 2,
    img: "assets/images/icons/2.png",
    name: "TOGETHERNESS/INTEGRITY",
    description:
      "We cement our relationship by encouraging each other to strive together, feel safe and belong to a group.",
  },
  {
    id: 3,
    img: "assets/images/icons/3.png",
    name: "RESEPCT",
    description:
      "We recognise individual rights and dignity. We do care about the diversity and social cohesion/inclusion.",
  },
  {
    id: 4,
    img: "assets/images/icons/4.png",
    name: "TRUST",
    description:
      "We trust our ability to contribute to a positive change. We thrive to achieve the best potential of individual.",
  },
  {
    id: 5,
    img: "assets/images/icons/5.png",
    name: "EXPLORE",
    description:
      "To grow in an everyday changing environment, we keep questioning and challenging ourselves and the status quo.",
  },
];

//services page data in our services (home page)
export const services = [
  {
    title: "DAILY ACTIVITIES & IMPROVED LIVING CHOICE",
    icon: "pe-7s-rocket",
    mylink: "/service1",
    description:
      "We are excellent in providing all home-bound personal and self-care support as well as community access supports to assist you in visiting family and friends or participating in daily scheduled or innovative activities or social events.",
  },
  {
    title: "ASSISTANCE WITH SOCIAL AND COMMUNITY PARTICIPATION",
    icon: "pe-7s-chat ",
    mylink: "/service2",
    description:
      "Our wide range of non-clinical capacity-building services includes social skills, employment, life skills, and tenancy support. As part of our person-centered recovery approach.",
  },
  {
    title: "ACCOMMODATION SUPPORT",
    icon: "pe-7s-home",
    mylink: "/service3",
    description:
      "Funding for Accommodation Supports generally comes from the Core funding section of your NDIS plan and is usually pre-planned with the agency when your plan is established or reviewed.",
  },
  {
    title: "SUPPORTS IN EMPLOYMENT",
    icon: "pe-7s-map-2",
    mylink: "/service4",
    description:
      "Funding for support in employment is in the Core budget of a participant’s plan under the support category Assistance with Social Economic and Community Participation. The NDIS also funds capacity building employment supports.",
  },
  {
    title: "SUPPORTED INDEPENDENT LIVING (SIL)",
    icon: "pe-7s-key",
    mylink: "/service5",
    description:
      "In our SIL, you will find a safe, comfortable, and supportive living environment, where all your everyday needs will be met. You will receive person-centred care from our SIL team; they will assist you in planning your recovery journey.",
  },
  {
    title: "SCHOOL LEAVER EMPLOYMENT SUPPORTS (SLES)",
    icon: "pe-7s-portfolio",
    mylink: "/service6",
    description:
      "A SLES is an NDIS support available to students leaving secondary school that helps them on a pathway to employment.",
  },
];

//gallery data in about us (gallary.js)
export const images = [
  { id: 1, img: "assets/lifeisok/1.jpeg" },
  {
    id: 2,
    img: "assets/lifeisok/about.jpeg",
  },
  { id: 3, img: "assets/lifeisok/aboutus.jpeg" },
];

// housing service
export const accordionData = [
  {
    title: "Supported independent living (SIL)",
    imgSrc: [
      ".././assets/lifeisok/house/3.jpg",
      ".././assets/lifeisok/house/1.jpg",
      ".././assets/lifeisok/house/2.jpg",
    ],
    content:
      " In our SIL, you will find a safe, comfortable, and supportive living environment, where all your everyday needs will be met. You will receive person-centred care from our SIL team; they will assist you in planning your recovery journey, strengthening you to build your independence, and reaching your goals. Our long-term basis SIL services are available in Palmerston and in Darwin.",
  },
  {
    title: "Short Term Accommodation (STA)",
    imgSrc: [
      ".././assets/lifeisok/house/4.jpg",
      ".././assets/lifeisok/house/3.jpg",
      ".././assets/lifeisok/house/2.jpg",
    ],
    content:
      "Our STA offers a safe place for you to experience time away from your normal place of residence. While at STA, you will experience a personalized service which will accommodate all your needs, including appointments, social outings, family and friend visits, day-to-day living, self-care support, and planning for psychosocial recovery and NDIS. For a period of up to 14 days, we provide STA at shared residential sites across Darwin.",
  },
  {
    title: "Medium term accommodation (MTA)",
    imgSrc: [
      ".././assets/lifeisok/house/4.jpg",
      ".././assets/lifeisok/house/5.jpg",
      ".././assets/lifeisok/house/6.jpg",
    ],
    content:
      "NDIS participants can stay at our MTA during a transitional period (such as when leaving the hospital or released from Corrections). Throughout your recovery journey, our residential staff will provide you with support and guidance so that you can move into more permanent accommodations and support your psychosocial recovery goal. For a period of up to 90 days, we provide MTA at shared residential locations throughout Darwin.",
  },
];

export const accommodations = [
  {
    name: "Support indepedent Living(SIL)",
    description:
      " In our SIL, you will find a safe, comfortable, and supportive living environment, where all your everyday needs will be met. You will receive person-centred care from our SIL team; they will assist you in planning your recovery journey, strengthening you to build your independence, and reaching your goals. Our long-term basis SIL services are available in Palmerston and in Darwin.",
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    imgSrc: [
      ".././assets/lifeisok/house/1.jpg",
      ".././assets/lifeisok/house/3.jpg", // Additional images
      ".././assets/lifeisok/house/5.jpg",
    ],
  },
  {
    name: "Short Term Accommodation (STA)",
    description:
      "Our STA offers a safe place for you to experience time away from your normal place of residence. While at STA, you will experience a personalized service which will accommodate all your needs, including appointments, social outings, family and friend visits, day-to-day living, self-care support, and planning for psychosocial recovery and NDIS. For a period of up to 14 days, we provide STA at shared residential sites across Darwin.",
    bedrooms: 2,
    bathrooms: 3,
    parking: 2,
    imgSrc: [
      ".././assets/lifeisok/house/2.jpg",
      ".././assets/lifeisok/house/4.jpg",
      ".././assets/lifeisok/house/6.jpg",
    ],
  },
  {
    name: "Medium term accommodation (MTA)",
    description:
      "NDIS participants can stay at our MTA during a transitional period (such as when leaving the hospital or released from Corrections). Throughout your recovery journey, our residential staff will provide you with support and guidance so that you can move into more permanent accommodations and support your psychosocial recovery goal. For a period of up to 90 days, we provide MTA at shared residential locations throughout Darwin.",
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    imgSrc: [
      ".././assets/lifeisok/house/3.jpg",
      ".././assets/lifeisok/house/1.jpg",
      ".././assets/lifeisok/house/3.jpg",
    ],
  },

  // Add more accommodations as needed
];

export const navItems = [
  {
    id: 1,
    link: "/#home",
    idnm: "home",
    navheading: "Home",
    icon: FaHome,
  },
  {
    id: 2,
    link: "/#features",
    idnm: "features",
    navheading: "Features",
    icon: FaStar,
  },
  {
    id: 3,
    link: "/#services",
    idnm: "services",
    navheading: "Services",
    icon: FaCog,
    submenu: [
      {
        id: 7,
        link: "/service1",
        idnm: "service1",
        navheading: "Daily Activities & Improved Living Choice",
      },
      {
        id: 8,
        link: "/service2",
        idnm: "service2",
        navheading: "Assistance With Social And Community Participation",
      },
      {
        id: 9,
        link: "/service3",
        idnm: "service3",
        navheading: "Accommodation Support",
      },
      {
        id: 10,
        link: "/service4",
        idnm: "service4",
        navheading: "Supports in Employment",
      },
      {
        id: 11,
        link: "/service5",
        idnm: "service5",
        navheading: "Supported Independent Living (SIL)",
      },
      {
        id: 12,
        link: "/service6",
        idnm: "service6",
        navheading: "School Leaver Employment Supports (SLES)",
      },
    ],
    isOpen: false,
  },
  {
    id: 4,
    link: "/index4",
    idnm: "about",
    navheading: "About Us",
    icon: FaUser,
  },
  {
    id: 5,
    link: "/#accomodation",
    idnm: "accomodation",
    navheading: "Accomodation",
    icon: FaBed,
  },
  {
    id: 6,
    navheading: "Contact Us",
    icon: FaEnvelope,
    submenu: [
      { id: 14, navheading: "Referals", link: "/index5" },
      { id: 15, navheading: "Enquiry", link: "/index1" },
      { id: 16, navheading: "Career", link: "/#career" },
      { id: 17, navheading: "Feedback", link: "/#feedback" },
    ],
    isOpen: false,
  },
];
