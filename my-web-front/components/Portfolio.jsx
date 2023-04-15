import React from "react";
import { MdExpandMore } from "react-icons/md";
import rmp from "../public/assets/portfolio/RMP.png";
import cynorix_fileshare from "../public/assets/portfolio/Cynorix_fileshare.png";
import syth from "../public/assets/portfolio/synthbiotic.png";
import fuzzer from "../public/assets/portfolio/fuzzer.jpg";
import christina from "../public/assets/portfolio/Christina.png";
import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "Cynorix File Share",
      imageSrc: cynorix_fileshare,
      url: "cynorix_fileshare",
    },
    {
      id: 2,
      title: "BroadCast-Fuzzer",
      imageSrc: fuzzer,
      url: "fuzzer",
    },
    {
      id: 3,
      title: "Rate My Property",
      imageSrc: rmp,
      url: "rate-my-property",
    },
    {
      id: 4,
      title: "Synthbiotic Dungeon",
      imageSrc: syth,
      url: "synthbiotic-dungeon",
    },
    {
      id: 5,
      title: "Desktop Assistant",
      imageSrc: christina,
      url: "desktop-assistant",
    },
  ];

  return (
    <div id="portfolio" className="w-full bg-slate-700 text-center">
      <div className="max-w-screen-xl mx-auto px-8 py-16 md:text-left">
        <h2 className="text-3xl md:text-7xl tracking-wider uppercase text-blue-800 font-bold">
          Portfolio
        </h2>
        <p className="py-4 text-white">
          Welcome to my portfolio page! I am Sheng, a highly skilled programmer
          with many years of experience in software development.
          <br></br>My diverse range of projects showcases my proficiency in
          programming and my ability to collaborate with teams to achieve shared
          goals. <br></br>From secure file-sharing platforms to Unreal Engine
          game development, each project demonstrates my creativity and
          problem-solving abilities. <br></br>Thank you for visiting my page,
          and I look forward to working with you.
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 hover:scale-110"
                  style={{ objectFit: "cover", height: "210px" }}
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4 text-white">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <Link href="/portfolio">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              all projects
              <span className="-rotate-90 duration-100 ease-in group-hover:translate-x-5">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
