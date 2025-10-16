import { FaTooth, FaChild, FaTeethOpen,  FaTeeth, FaRegSmile, FaAmbulance } from "react-icons/fa";
import { LuPaintbrush } from "react-icons/lu";
export const Data=[
  {
    q: "Do I need an appointment, or can I walk in?",
    a: "We recommend booking an appointment to reduce waiting time, but walk-ins are welcome based on availability.",
  },
  {
    q: "How often should I visit the dentist?",
    a: "It’s best to visit every six months for routine checkups and cleaning to maintain healthy teeth and gums.",
  },
  {
    q: "Do you offer teeth whitening?",
    a: "Yes! We offer safe and professional teeth whitening that can brighten your smile in a single visit.",
  },
  {
    q: "Do you accept insurance?",
    a: "Yes, we accept most major dental insurance plans. Our team will help you file your claims easily.",
  },
  {
    q: "Are your dental procedures painful?",
    a: "Not at all. We use the latest pain-free techniques and local anesthesia to ensure your comfort during treatment.",
  },
];

export const services = [
  {
    title: "Teeth Whitening",
    desc: "Brighten your smile with safe, professional whitening treatments.",
    icon: <FaTooth  className="text-white text-4xl" />,
  },
  {
    title: "Dental Implants",
    desc: "Replace missing teeth with durable, natural-looking implants.",
    icon: <FaTooth className="text-blue-500 text-4xl" />,
  },
  {
    title: "Cosmetic Dentistry",
    desc: "Perfect your smile with veneers, bonding, and aesthetic treatments.",
    icon: <FaTeethOpen className="text-blue-500 text-4xl" />,
  },
  {
    title: "Orthodontics",
    desc: "Straighten your teeth comfortably with braces or clear aligners.",
    icon: <FaTeeth className="text-blue-500 text-4xl" />,
  },
  {
    title: "Preventive Care",
    desc: "Routine exams, cleaning, and hygiene guidance for long-term oral health.",
    icon: <LuPaintbrush className="text-blue-500 text-4xl" />,
  },
  {
    title: "Pediatric Dentistry",
    desc: "Gentle dental care designed for kids in a stress-free environment.",
    icon: <FaChild className="text-blue-500 text-4xl" />,
  },
  {
    title: "Emergency Care",
    desc: "Immediate relief for dental pain, broken teeth, or accidents.",
    icon: <FaAmbulance className="text-blue-500 text-4xl" />,
  },
];

export const features = [
  {
    id: 1,
    image: "/images/group.jpg",
    title: "Experienced Dentists",
    description:
      "Our team of skilled professionals brings years of experience and gentle care to ensure your smile gets the best treatment.",
      className: "flex flex-col md:flex-row items-center md:items-start"
  },
  {
    id: 2,
    image: "/images/dentinterior.jpg",
    title: "Advanced Technology",
    description:
      "We use the latest dental technology to provide accurate diagnostics and comfortable, efficient treatments.",
      className: "flex flex-col md:flex-row-reverse items-center md:items-start"
  },
  {
    id: 3,
    image: "/images/apointment.jpg",
    title: "Flexible Appointments",
    description:
      "We value your time! Easily schedule appointments that fit your busy lifestyle — even evenings and weekends.",
      className: "flex flex-col md:flex-row items-center md:items-start"
  },
  {
    id: 4,
    image: "/images/care.jpg",
    title: "Patient-Focused Care",
    description:
      "We’re passionate about making every patient feel comfortable and confident before, during, and after treatment.",
      className: "flex flex-col md:flex-row-reverse items-center md:items-start"
  },
];

export  const cards = [
    {
      title: "Our Mission",
      desc: "To deliver top-quality dental care that combines advanced technology with a gentle touch, ensuring every patient leaves with a healthier, brighter smile.",
      img: "/images/mission.jpg",
    },
    {
      title: "Our Vision",
      desc: "To redefine dental excellence by making every visit stress-free, inspiring confidence and promoting lifelong oral health.",
      img: "/images/group.jpg",
    },
    {
      title: "Our Objective",
      desc: "To continuously enhance patient experience through innovation, education, and a commitment to personalized dental solutions.",
      img: "/images/councel.jpg",
    },
  ];

  export const dentalTips = [
            {
              icon: "/images/brush.jpg",
              title: "The Right Way to Brush",
              text: "Learn how to brush your teeth effectively to remove plaque and prevent cavities.",
            },
            {
              icon: "/images/care.jpg",
              title: "Regular Check-ups Matter",
              text: "Discover why visiting your dentist every 6 months keeps your smile bright and healthy.",
            },
            {
              icon: "/images/healthy.jpg",
              title: "Eat for a Healthier Smile",
              text: "Find out how simple dietary choices can strengthen your teeth and gums.",
            },
          ]

export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/service", label: "Services" },
    { href: "/booking", label: "Appointment" },
    { href: "/contact", label: "Contact" },
  ];