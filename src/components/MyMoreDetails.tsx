import { Link, NavLink } from "react-router-dom";
import "../index.css";
import { experience, certificates, academics } from "../assets/constants";
import { CardComp } from "./Card/CardComp";
import { v4 as uuidv4 } from "uuid";
import { FaRegRectangleList } from "react-icons/fa6";
import { GiFireGem } from "react-icons/gi";
import TabButton from "./TabButton";
import { tabs } from "../assets/constants";

import { useZustandStore } from "../store/zustStore";

export default function MyMoreDetails() {
  const currentTab = useZustandStore((state) => state.currTab);
  const setCurrentTab = useZustandStore((state) => state.setCurrTab);

  return (
    <section className="flex flex-col mb-5">
      <article className="flex flex-col justify-center items-center sm:flex-row gap-3 p-2 font-bold text-white text-start">
        {tabs.map((tab) => (
          <TabButton
            key={uuidv4()}
            name={tab.name}
            icon={tab.icon}
            onclick={() => setCurrentTab(tab.name)}
            currTab={currentTab}
          />
        ))}
      </article>
      <article>
        {currentTab === "Career" && (
          <section className="my-4">
            {experience.map((exp) => (
              <article key={uuidv4()} className="w-[80%] mx-auto my-8">
                <div className="flex gap-2 items-center">
                  <FaRegRectangleList />
                  <div className="text-xl">{exp.duration}</div>
                </div>
                <CardComp exp={exp} />
              </article>
            ))}
          </section>
        )}
      </article>
      <article>
        {currentTab === "Certifications" && (
          <section className="w-[85%] mx-auto my-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6 xl:gap-8">
            {certificates.map((cert) => (
              <figure
                key={uuidv4()}
                className="group relative flex size-[350px] items-end overflow-hidden rounded-lg bg-gray-300 shadow-2xl border-[2px] border-slate-400"
              >
                <img
                  src={cert.link}
                  alt={cert.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-fill object-center transition duration-200 group-hover:scale-110 ease-in-out"
                />
              </figure>
            ))}
          </section>
        )}
      </article>
      <article>
        {currentTab === "Academics" && (
          <section className="w-[80%] mx-auto my-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:gap-8">
            {academics.map((acad, index) => (
              <article
                key={uuidv4()}
                className={`flex flex-col p-5 gap-2 bg-gray-100 shadow-lg hover:scale-105 transition-all ease-in-out ${
                  index % 2 === 0
                    ? "border-l-4 border-blue-400"
                    : "border-r-4 border-gray-400"
                }`}
              >
                <div className="flex items-center gap-2 text-xl font-serif font-bold">
                  <GiFireGem /> {acad.heading}
                </div>
                <div>{acad.desc}</div>
                {acad.link && (
                  <Link
                    to={acad.link}
                    className="bg-blue-500 w-[150px] text-center py-2 rounded-lg hover:bg-slate-400 font-medium self-center"
                  >
                    Know More
                  </Link>
                )}
              </article>
            ))}
          </section>
        )}
      </article>

      <NavLink
        to="/"
        className="w-[200px] bg-gray-800 py-3 text-blue-200 text-xl font-bold font-sans rounded-md hover:text-indigo-100 mx-auto lg:mx-0 text-center px-5 self-center"
      >
        ← Back Home
      </NavLink>
    </section>
  );
}
