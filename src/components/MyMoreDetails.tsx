import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { HiBuildingOffice } from "react-icons/hi2";
import { PiCertificateFill } from "react-icons/pi";
import { HiAcademicCap } from "react-icons/hi2";
import { experience, certificates, academics } from "../assets/constants";
import { CardComp } from "./Card/CardComp";
import { v4 as uuidv4 } from "uuid";
import { FaRegRectangleList } from "react-icons/fa6";
import { GiFireGem } from "react-icons/gi";

export default function MyMoreDetails() {
  const [currentTab, setCurrentTab] = useState("career");

  return (
    <section className="flex flex-col gap-5">
      <article className="flex flex-col justify-center items-center sm:flex-row gap-3 p-2 font-bold text-white text-start bg-slate-300">
        <button
          className={`navigate-btn flex gap-2 items-center justify-center ${
            currentTab === "career"
              ? "bg-[#0077ff] text-white transition ease-in-out"
              : "text-blue-600"
          }`}
          onClick={() => setCurrentTab("career")}
        >
          <HiBuildingOffice /> <div>Career</div>
        </button>
        <button
          className={`navigate-btn flex gap-2 items-center justify-center ${
            currentTab === "certificate"
              ? "bg-[#0077ff] text-white transition ease-in-out"
              : "text-blue-600"
          }`}
          onClick={() => setCurrentTab("certificate")}
        >
          <PiCertificateFill /> Certifications
        </button>
        <button
          className={`navigate-btn flex gap-2 items-center justify-center ${
            currentTab === "academic"
              ? "bg-[#0077ff] text-white transition ease-in-out"
              : "text-blue-600"
          }`}
          onClick={() => setCurrentTab("academic")}
        >
          <HiAcademicCap /> Academics
        </button>
      </article>
      <article>
        {currentTab === "career" && (
          <section>
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
        {currentTab === "certificate" && (
          <section className="w-[80%] mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:gap-8">
            {certificates.map((cert) => (
              <article
                key={uuidv4()}
                className="group relative flex h-[300px] items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-[600px]"
              >
                <figure className="flex gap-2 items-center">
                  <img
                    src={cert.link}
                    alt={cert.name}
                    className="absolute inset-0 h-full w-full object-contain object-center transition duration-200 group-hover:scale-110"
                  />
                </figure>
              </article>
            ))}
          </section>
        )}
      </article>
      <article>
        {currentTab === "academic" && (
          <section className="w-[80%] mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:gap-8">
            {academics.map((acad, index) => (
              <article
                key={uuidv4()}
                className={`flex flex-col p-5 gap-2 bg-gray-100 shadow-lg ${
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
    </section>
  );
}
