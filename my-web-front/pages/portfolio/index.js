import React from "react";
import rmp from "../../public/assets/portfolio/RMP.png";
import cynorix_fileshare from "../../public/assets/portfolio/Cynorix_fileshare.png";
import fuzzer from "../../public/assets/portfolio/fuzzer.jpg";
import syth from "../../public/assets/portfolio/synthbiotic.png";
import Link from "next/link";
import Image from "next/image";

export const getStaticProps = async () => {
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
  ];
  return {
    props: { portfolios },
  };
};

const PortfoliosRoute = ({ portfolios }) => {
  return (
    <div id="portfolio" className="w-full h-full bg-slate-700">
      <div className="max-w-screen-xl mx-auto pb-24 p-4 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold pt-20">
          Portfolio
        </h2>
        <p className="py-4 text-white text-center">
          Greetings! <br></br>I am pleased to present my portfolio of projects,
          listed in chronological order from newest to oldest. <br></br>As an
          aspiring professional, I am always eager to take on new and exciting
          challenges. <br></br>I am currently seeking job opportunities and
          would welcome the chance to discuss how my skills and experience can
          contribute to your organization. <br></br>Please feel free to contact
          me for further details regarding my portfolio or to schedule a
          consultation. <br></br>Thank you for your consideration!
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
      </div>
    </div>
  );
};

export default PortfoliosRoute;
