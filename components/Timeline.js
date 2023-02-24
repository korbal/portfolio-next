import React from "react";
import Image from "next/image";
import Link from "next/link";

const Timeline = () => {
  return (
    <section id="projects" className="py-10 ">
      <h2 className="text-center">
        Brief history
        <hr className="w-6 h-1 mx-auto my-10 bg-teal-500 border-0 rounded" />
      </h2>
      {/* <div className="flex flex-col mt-8 space-y-28">fing</div> */}

      <div className="text-gray-400 bg-slate-900 body-font">
        <div className="container flex flex-wrap px-5 py-24 mx-auto">
          <div className="relative flex pt-10 pb-20 mx-auto sm:items-center md:w-2/3">
            <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-gray-800 pointer-events-none" />
            </div>
            <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-lg font-medium text-white sm:mt-0 title-font">
              2009
            </div>
            <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-indigo-400 bg-gray-800 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  className="flex-shrink-0 w-12 h-12"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />{" "}
                  <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />{" "}
                </svg>
              </div>
              <div className="flex-grow mt-6 sm:pl-6 sm:mt-0">
                <h3 className="mb-1 text-xl font-medium text-white title-font">
                  Started the "Five languages in five years" project
                </h3>
                <p className="leading-relaxed">
                  In 5 years I learned 5 different languages to various extents.
                  English to native level, passed the German C1 exam, Spanish to
                  B2 level, Russian to A2 level, and passed the HSK2 exam in
                  Chinese.
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex pt-10 pb-20 mx-auto sm:items-center md:w-2/3">
            <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-gray-800 pointer-events-none" />
            </div>
            <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-lg font-medium text-white sm:mt-0 title-font">
              2014
            </div>
            <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-indigo-400 bg-gray-800 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  className="flex-shrink-0 w-12 h-12"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />{" "}
                  <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />{" "}
                </svg>
              </div>
              <div className="flex-grow mt-6 sm:pl-6 sm:mt-0">
                <h3 className="mb-1 text-xl font-medium text-white title-font">
                  Started running a fluentin3months.com
                </h3>
                <p className="leading-relaxed">
                  One of the biggest language learning blogs in the world.
                  Responsible for data, backend, partly frontend, and marketing.
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex pt-10 pb-20 mx-auto sm:items-center md:w-2/3">
            <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-gray-800 pointer-events-none" />
            </div>
            <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-lg font-medium text-white sm:mt-0 title-font">
              2016
            </div>
            <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-indigo-400 bg-gray-800 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  className="flex-shrink-0 w-12 h-12"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />{" "}
                  <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />{" "}
                </svg>
              </div>
              <div className="flex-grow mt-6 sm:pl-6 sm:mt-0">
                <h3 className="mb-1 text-xl font-medium text-white title-font">
                  Turned side project into an online business
                </h3>
                <p className="leading-relaxed">
                  The blog I started writing in 2009{" "}
                  <a href="https://otevotnyelv.com" className="underline">
                    otevotnyelv.com
                  </a>{" "}
                  turned into a course business. Streamlined and automated it to
                  95%.
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex pt-10 pb-20 mx-auto sm:items-center md:w-2/3">
            <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-gray-800 pointer-events-none" />
            </div>
            <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-lg font-medium text-white sm:mt-0 title-font">
              2023
            </div>
            <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-indigo-400 bg-gray-800 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  className="flex-shrink-0 w-12 h-12"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />{" "}
                  <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />{" "}
                </svg>
              </div>
              <div className="flex-grow mt-6 sm:pl-6 sm:mt-0">
                <h3 className="mb-1 text-xl font-medium text-white title-font">
                  Started learning web development
                </h3>
                <p className="leading-relaxed ">
                  My goal is to become a full-stack developer. I'm primarily
                  learning at{" "}
                  <a href="https://otevotnyelv.com/ztm" className="underline">
                    Zero To Mastery
                  </a>{" "}
                  and creating my own apps. Committing every day to my GitHub
                  repos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
