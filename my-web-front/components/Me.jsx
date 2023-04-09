import React from "react";

import { MdExpandMore } from "react-icons/md";
import Link from "next/link";

const Me = () => {
  return (
    <div id="me" className="w-full bg-slate-700">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          Me
        </h2>
        <div className="my-8 px-8">
          <p className="py-4 max-w-2xl mx-auto text-white">
            I have completed a BS in CS with an Emphasis in EAE(Game
            Development) from the University of Utah, and a MEng in ECE with a
            specialization in Software from the University of Waterloo. Through
            my education, I have gained a strong foundation in various
            programming languages, web technologies, databases, and game
            development tools. My education has provided me with the skills and
            knowledge to work effectively in cross-functional teams, manage
            projects, and solve complex problems.
          </p>
          <p className="py-4 max-w-2xl mx-auto text-white">
            I worked as a tutor during my time at the University of Utah, where
            I helped students with their coursework and assignments. This
            experience allowed me to develop strong communication and
            problem-solving skills, which have proven valuable in my
            professional career.
          </p>
          <p className="py-4 max-w-2xl mx-auto text-white">
            After completing my Master&apos;s degree in Computer Science from
            the University of Waterloo, I started my professional journey as a
            full-stack developer at Cynorix. In this role, I played a key part
            in developing and maintaining several projects, using my technical
            skills to deliver high-quality solutions. I also collaborated with
            team members, providing support and guidance whenever needed, and
            contributed to the overall growth and success of the company.
          </p>
          <p className="py-4 max-w-2xl mx-auto text-white">
            As a software engineer, I am deeply committed to staying at the
            forefront of the latest technological advancements and embracing new
            programming paradigms. I am constantly seeking out new challenges
            and opportunities to learn and grow, and I approach each project
            with an insatiable curiosity and an unquenchable thirst for
            knowledge. I believe that a willingness to learn and a passion for
            innovation are essential traits for success in the ever-evolving
            field of technology, and I strive to embody these qualities in
            everything that I do. By remaining open-minded, adaptable, and eager
            to take on new challenges, I am confident that I can make meaningful
            contributions to any team or project.
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
