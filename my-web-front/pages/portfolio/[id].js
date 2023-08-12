import React from "react";
import rmp from "../../public/assets/portfolio/RMP.png";
import cynorix_fileshare from "../../public/assets/portfolio/Cynorix_fileshare.png";
import fuzzer from "../../public/assets/portfolio/fuzzer.jpg";
import syth from "../../public/assets/portfolio/synthbiotic.png";
import christina from "../../public/assets/portfolio/Christina.png";
import cyauth from "../../public/assets/portfolio/Cyauth.png";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { AiOutlineCaretLeft } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";

const portfolios = [
  {
    id: 1,
    title: "Cynorix File Share",
    imageSrc: cynorix_fileshare,
    url: "cynorix_fileshare",
    skills:
      "NodeJS, Express, React, Firebase, MongoDB, Stripe, File Encryption",
    description:
      "As the head of the technical team, I took charge of leading the development of a cutting-edge, secure file sharing platform that prioritized user privacy and security. With my expertise in encryption and cybersecurity, I modified the core algorithm to ensure the platform was impenetrable to any malicious attacks. Additionally, I established a robust CI/CD pipeline that streamlined the development and deployment process, allowing for more efficient and agile project delivery. || To further enhance the platform's functionality, I integrated popular cloud storage services like Google Drive and OneDrive, making it easy for users to seamlessly transfer and access their files. To achieve these goals, I led a team of co-op students, implementing Agile methodologies to create detailed road maps and sprint plans that kept everyone on track and accountable. ||  Overall, my leadership and technical skills enabled the team to achieve project milestones and deliver a high-quality product on time. It was an exciting project, and I'm thrilled to have been a part of it!",
    giturl: "https://github.com/hoooowsh/Cynorix_FileShare",
    demourl: "https://googledrive-share.cynorix.com/",
  },
  {
    id: 2,
    title: "BroadCast-Fuzzer",
    imageSrc: fuzzer,
    url: "fuzzer",
    skills: "Python",
    description:
      "As a proactive and innovative software engineer, I spearheaded the design and development of a sophisticated black box testing tool for Android applications. || My tool utilized a novel approach by leveraging fuzzing techniques to identify vulnerabilities in the Broadcast Receiver components of Android apps. Through meticulous testing and analysis, I implemented a cutting-edge random data generator capable of producing various data formats, including jpg, mp4, and txt files, to rigorously evaluate the resilience and robustness of the target applications. || As a result, my tool was able to uncover critical crashes in the popular Telegram Android app, as well as detect other abnormal behaviors in other fuzzed apps. ||Overall, my innovative and rigorous approach to software testing ensured the creation of a robust and reliable product, that was well received by both the development team and the clients.",
    giturl: "https://github.com/hoooowsh/broadcast-fuzzer",
  },
  {
    id: 3,
    title: "Rate My Property",
    imageSrc: rmp,
    url: "rate-my-property",
    skills: "NodeJS, Express, MongoDB",
    description:
      "As a software engineer, I have had the opportunity to work on various projects throughout my career. One notable project was building a platform that allowed users to review properties anonymously. || In this project, I was responsible for the back-end development, which involved designing and developing REST APIs that connected with MongoDB. Additionally, I wrote unit tests for each endpoint to ensure that the platform was reliable and robust. ||To ensure that the project was successful, I also practiced various Agile ceremonies using JIRA. This included organizing and planning sprint demos and retrospective meetings, as well as participating in daily stand-up meetings to discuss progress and plan tasks. || Overall, my experience working on this project has taught me valuable skills in software development and project management, which I am eager to apply to future projects.",
    giturl: "https://github.com/hoooowsh/RateMyPropertyWebDev",
  },
  {
    id: 4,
    title: "Synthbiotic Dungeon",
    imageSrc: syth,
    url: "synthbiotic-dungeon",
    skills: "Unreal Engine, C++",
    description:
      "As a proficient game developer, I played a pivotal role in designing and implementing several key features in a highly popular dungeon game. Among the features that I helped create were the dungeon shop, mini-map, character skills, and many others. My creative contributions to the game were highly valued by the development team, as I brought innovative ideas and a keen attention to detail to every aspect of the project. || Moreover, my strong collaboration skills allowed me to work closely with talented artists and other skilled programmers. This teamwork was critical in seamlessly integrating the various game components, resulting in a highly polished and engaging game experience. Through our combined efforts, we were able to successfully publish the game on the esteemed Steam store, where it continues to garner enthusiastic praise from players around the world.",
    demourl: "https://store.steampowered.com/app/1576880/Synthbiotic_Dungeon/",
  },
  {
    id: 5,
    title: "Desktop Assistant (Still In Development Process)",
    imageSrc: christina,
    url: "desktop-assistant",
    skills: "Unity, C#",
    description:
      "I created a desktop assistant application that utilizes chatbot APIs, complete with a customized user interface. By incorporating AI technology, I anticipate that this app will significantly improve my work efficiency and provide a range of benefits. Given the promising future of AI and chatbots, developing this app has allowed me to gain valuable hands-on experience with these cutting-edge technologies. || Please be aware that this project is currently in the development stage, and additional improvements will be made. Specifically, a more user-friendly interface will be implemented, and model animation based on the responses from the ChatGPT API will be added. These changes will transform the desktop assistant into an even more effective and user-friendly tool.",
    giturl: "https://github.com/hoooowsh/Christina_Enhance",
  },
  {
    id: 6,
    title: "Cyauth iOS",
    imageSrc: cyauth,
    url: "Cyauth-iOS",
    skills: "Swift, Objective-C",
    description:
    "Spearheaded the in-depth development and design of Cyauth's 2FA tool for iOS, meticulously crafting an intuitive user interface. Successfully rolled out a robust user authentication workflow, integrating advanced features such as QR scanning and user notifications. Collaborating closely with a dedicated team, I played a pivotal role in architecting the software and refining the workflow of Cyauth. This app now stands as an integral and efficient component of the 2FA authentication process.",
    giturl: "https://github.com/hoooowsh/Cyauth_iOS",
    demourl: "https://cynorix-authenticator.firebaseapp.com/login",
  },
];

const getPortfolioFrom = (url) => portfolios.filter((p) => p.url === url)[0];

export async function getStaticPaths() {
  const paths = portfolios.map((p) => ({
    params: { id: p.url },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const portfolio = getPortfolioFrom(params.id);

  return {
    props: { portfolio },
  };
}

const OnePortfolio = ({
  portfolio: { title, imageSrc, description, giturl, demourl, skills },
}) => {
  return (
    <div className="h-fit w-full text-center bg-slate-700">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col">
        <div className="flex">
          <Link href="/portfolio">
            <div className="flex items-center justify-center my-8 text-indigo-500 font-bold capitalize cursor-pointer">
              <BiChevronLeft size={25} /> back
            </div>
          </Link>
        </div>

        <h1 className="capitalize text-4xl mt-2 mb-8 text-center md:text-left font-bold text-blue-500 tracking-wider">
          {title}
        </h1>

        <div className="relative mx-auto overflow-hidden my-8">
          <Image src={imageSrc} alt="bla" style={{ objectFit: "cover" }} />
        </div>
        <h2 className="text-center md:text-left my-4 text-2xl font-bold text-white">
          Description
        </h2>
        <p className="text-left text-white">
          {description.split("||").map((item, key) => {
            return (
              <span key={key}>
                {item}
                <br />
              </span>
            );
          })}
        </p>
        <h4 className="text-center md:text-left my-4 text-2xl font-bold text-white">
          Skills
        </h4>
        <p className="text-left text-white">{skills}</p>
        <div className="flex items-center justify-center gap-10">
          {demourl ? (
            <Link href={`${demourl}`}>
              <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
                Demo
                <span className="duration-200 ease-in rotate-180">
                  <AiOutlineCaretLeft size={18} className="ml-2" />
                </span>
              </div>
            </Link>
          ) : null}

          {giturl ? (
            <Link href={`${giturl}`}>
              <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
                Github
                <span className="duration-200 ease-in">
                  <FaGithub size={18} className="ml-2" />
                </span>
              </div>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default OnePortfolio;
