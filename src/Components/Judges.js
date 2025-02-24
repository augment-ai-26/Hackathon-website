import React, { useEffect, useState } from "react";
import "./Judges.css";
import Sample from "./Sample";
import { FaLinkedin } from "react-icons/fa";
import judge1 from "../Images/shridivya.png";
import judge2 from "../Images/Shashank.jpg";
import judge3 from "../Images/Misbah.jpg";
import judge4 from "../Images/kaushal.jpeg";
import judge5 from "../Images/Jaiswal-2 (1).JPG";
import judge6 from "../Images/Bharat.jpg";
import judge7 from "../Images/Nusrat.webp";

const judgesData = [
  {
    name: "Shridivya",
    image: judge1,
    description:
      "Shri Divya, a Senior Software Engineer at Microsoft, specializes in cloud infrastructure and AI-driven optimization. She has contributed to M365 Substrate and Azure Network Planning Engineering, co-developing a quota-based workload management system and enhancing Cloud Cache for efficient data sync. Her work in Azure Cloud Supply Chain includes ML models for network device rationalization and automated testing, improving planning and operations.",
    linkedin: "https://www.linkedin.com/in/shridivya-sharma",
  },
  {
    name: "Shashank",
    image: judge2,
    description:
      "Shashank is passionate about Machine Learning, Data Science, and Big Data, actively exploring advancements in the field. Currently a Teaching Assistant for Algorithms at NYU, he previously worked at Oracle as a Software Engineer Intern, applying state-of-the-art ML and NLP techniques to develop executive-focused tools. He has also led an end-to-end scalable Big Data project, showcasing his expertise in building intelligent and efficient solutions.",
    linkedin: "https://www.linkedin.com/in/shashank-s-12a23922/",
  },
  {
    name: "Misbah Khair",
    image: judge3,
    description:
      "Misbah Khair is a Solution Architect at Oracle HCM Cloud, passionate about empowering others through mentorship and learning. He shares his expertise to help aspiring professionals grow in their careers, fostering a collaborative community and inspiring continuous development in the tech industry.",
    linkedin: "https://www.linkedin.com/in/misbah-khair-586273168/",
  },
  {
    name: "Kaushal Tripati",
    image: judge4,
    description:
      "Kaushal Tripathi is the Lead Mobile Engineer at ToolsForHumanity, shaping human-AI interactions at WorldCoin. He specializes in high-performance mobile architectures, secure platforms, and scalable design. With expertise in Wearable OS, IoT medical devices, Android AOSP customizations, BLE, and NFC, he drives seamless connectivity and cross-platform integration. Passionate about 0-to-1 innovation, he excels in transforming ideas from concept to production, delivering cutting-edge mobile experiences in dynamic startup environments.",
    linkedin: "https://www.linkedin.com/in/kaushlendra/",
  },
  {
    name: "Sunny Jaiswal",
    image: judge5,
    description:
      "Sunny Jaiswal is an Oracle HCM Solutions Architect with over 15 years of experience and a seasoned hackathon judge. Holding a Master’s in IT, an MBA in HR, and multiple Oracle certifications, he specializes in HR digital transformation, project leadership, and innovative process design. A thought leader in HR technology, he has authored a book on Oracle E-Business Suite and numerous industry articles, driving organizational efficiency and enhancing employee experiences worldwide.",
    linkedin: "https://www.linkedin.com/in/sunny-j-478871211/",
  },
  {
    name: "Bharat",
    image: judge6,
    description:
      "Bharat is a Software Developer at Amazon with over 12 years of experience in web application development, cloud technologies, and artificial intelligence. He specializes in microservices design, optimizing CI/CD pipelines, and implementing advanced AI/ML systems. With dual master's degrees in Computer Science and Electrical Engineering, he brings a strong technical foundation to building scalable and intelligent software solutions.                                                    ",
    linkedin: "https://www.linkedin.com/in/bharattiwary/",
  },
  {
    name: "Nusrat",
    image: judge7,
    description:
      "Nusrat Shaheen is an Oracle HCM Cloud Principal Consultant with over 10 years of experience in optimizing HR processes and leading successful implementations. Passionate about innovation, she mentors teams, authors insightful articles on HR technology, and serves as a hackathon judge, driving excellence and transformation in the industry.",
    linkedin: "https://www.linkedin.com/in/nusrat-shaheen/",
  },
];

const Judges = () => {
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowCards(true);
    }, 200); // Delay to ensure smooth transition
  }, []);

  return (
    <div>
      <Sample />
      <div className="judges-container">
        <h1 className="judges-title">Meet The Judges</h1>

        <div className="judges-list">
          {judgesData.map((judge, index) => (
            <div className={`judge-card ${showCards ? "show" : ""}`} key={index}>
              <div className="hexagon">
                <img src={judge.image} alt={judge.name} className="judge-image" />
              </div>
              <h2 className="judge-name">{judge.name}</h2>
              <p className="judge-description">{judge.description}</p>
              <a href={judge.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-btn">
                <FaLinkedin className="linkedin-icon" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Judges;

