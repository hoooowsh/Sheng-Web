import React from "react";
import rmp from "../../public/assets/portfolio/RMP.png";
import cynorix_fileshare from "../../public/assets/portfolio/Cynorix_fileshare.png";
import fuzzer from "../../public/assets/portfolio/fuzzer.png";
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
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-xl mx-auto pb-24 p-4 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold pb-16">
          Portfolio
        </h2>
        {/* <p className="py-4 max-w-lg">
          whatever whatever asdffffffffffffffffffffffffffffffasdfsadfqwfasdfwwfw
          wqerf sadv zxfwqer{" "}
        </p> */}

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 hover:scale-110"
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
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
