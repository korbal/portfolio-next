"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import GithubStreak from "../components/GithubStreak";
import {
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col items-center justify-center py-12 my-10 text-center md:pt-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/balint-korosi.jpg"
            alt=""
            width={325}
            height={325}
            className="p-1 border rounded-full shadow-2xl dark:bg-orange-300"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="mt-6 text-4xl font-bold md:mt-0 md:text-7xl ">
            Hi, I&#39;m Bálint!
          </h1>
          <p className="mt-4 mb-6 text-lg md:text-2xl">
            I&apos;m committed to commit code for
            <span className="font-semibold text-purple-400"> 365 Days </span>
            straight on GitHub so I can expand my skills and become a proficient
            web developer.
          </p>

          <Link
            to="projects"
            className="px-6 py-3 font-semibold bg-teal-600 rounded shadow cursor-pointer text-neutral-100 hover:bg-teal-700 dark:bg-red-400 dark:hover:bg-orange-300"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>

      {/* <div className="bg-white dark:bg-slate-200"> */}
      <div>
        <GithubStreak />
      </div>

      <div className="flex flex-row justify-between mt-10">
        <a href="https://github.com/korbal" rel="noreferrer" target="_blank">
          <AiOutlineGithub
            className="transition-transform cursor-pointer hover:-translate-y-1 text-neutral-500 dark:text-neutral-100"
            size={90}
          />
        </a>

        <a
          href="mailto:balint.j.korosi@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          <AiOutlineMail
            className="transition-transform cursor-pointer hover:-translate-y-1 text-neutral-500 dark:text-neutral-100"
            size={100}
          />
        </a>

        <a
          href="https://twitter.com/korosibalint"
          rel="noreferrer"
          target="_blank"
        >
          <AiOutlineTwitter
            className="transition-transform cursor-pointer hover:-translate-y-1 text-neutral-500 dark:text-neutral-100"
            size={90}
          />
        </a>
      </div>

      <div className="flex flex-row items-center justify-center mt-5 text-center">
        <Link
          className="cursor-pointer"
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
