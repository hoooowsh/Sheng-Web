import React from "react";

import { MdExpandMore } from "react-icons/md";
import Link from "next/link";

const Me = () => {
  return (
    <div id="me" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          Me
        </h2>
        <div className="shadow-xl shadow-blue-300 my-8 px-8">
          <p className="py-4 max-w-2xl mx-auto">
            I have completed a BS in CS with an Emphasis in EAE(Game
            Development) from the University of Utah, and a MEng in ECE with a
            specialization in Software from the University of Waterloo. Through
            my education, I have gained a strong foundation in various
            programming languages, web technologies, databases, and game
            development tools. My education has provided me with the skills and
            knowledge to work effectively in cross-functional teams, manage
            projects, and solve complex problems.
          </p>
          <p className="py-4 max-w-2xl mx-auto">
            blablabla about mememememe blablabla about mememememeblablabla about
            mememememeblablabla about mememememeblablabla about
            mememememeblablabla about mememememeblablabla about
            mememememeblablabla about mememememe
          </p>
          <p className="py-4 max-w-2xl mx-auto">
            blablabla about mememememe blablabla about mememememeblablabla about
            mememememeblablabla about mememememeblablabla about
            mememememeblablabla about mememememeblablabla about
            mememememeblablabla about mememememe
          </p>
          <p className="py-4 max-w-2xl mx-auto">
            blablabla about mememememe blablabla about mememememeblablabla about
            mememememeblablabla about mememememeblablabla about
            mememememeblablabla about mememememeblablabla about
            mememememeblablabla about mememememe
          </p>
        </div>
        <div className="flex items-center justify-center gap-10">
          <Link href="/resume.pdf" download={true}>
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              resume
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>

          <Link href="/#portfolio">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              my portfolio
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-180">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Me;
