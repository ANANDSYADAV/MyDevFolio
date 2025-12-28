import { Link, NavLink } from "react-router-dom";
import "../index.css";
import { experience, certificates, academics } from "../assets/constants";
import { CardComp } from "./Card/CardComp";
import { FaRegRectangleList } from "react-icons/fa6";
import { GiFireGem } from "react-icons/gi";
import TabButton from "./TabButton";
import { tabs } from "../assets/constants";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// import { useZustandStore } from "../store/zustStore";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

export default function MyMoreDetails() {
  // const currentTab = useZustandStore((state) => state.currTab);
  const [tabParam, setTabParam] = useSearchParams();
  const currentTab = tabParam.get("tab") || "Career";
  const navigate = useNavigate();
  // const setCurrentTab = useZustandStore((state) => state.setCurrTab);

  const container = useRef();

  // This hook runs every time the currentTab changes
  useGSAP(
    () => {
      // 1. Clear any existing ScrollTriggers to prevent memory leaks/glitches
      ScrollTrigger.getAll().forEach((t) => t.kill());

      // 2. Select all items we want to animate (cards and articles)
      // Only run if items actually exist in the DOM
      const items = gsap.utils.toArray(".animate-item");
      if (items.length === 0) return;

      // 3. Use a small delay to let the React DOM "settle"
      const timer = setTimeout(() => {
        items.forEach((item) => {
          gsap.fromTo(item,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 95%",
                toggleActions: "play none none none",
              }
            }
          );
        });
        // Re-calculate positions once everything is placed
        ScrollTrigger.refresh();
      }, 100); // 100ms is enough to prevent the race condition

      // Ensure the Back Button is specifically handled if it's acting up
      gsap.to(".back-home-btn", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.5 // Let it appear slightly after the main content
      });

      return () => {
        clearTimeout(timer);
        ScrollTrigger.getAll().forEach(t => t.kill());
      };

    },
    { dependencies: [currentTab], scope: container }
  );

  const changeTab = (tabName) => {
    navigate(`/more_details?tab=${tabName}`, { replace: true });
  };

  return (
    <section ref={container} className="flex flex-col mb-5">
      <menu className="tabs flex flex-col justify-center items-center sm:flex-row gap-3 p-2 font-bold text-white text-start">
        <ul className="flex gap-3 flex-wrap justify-center">
          {tabs.map((tab) => (
            <TabButton
              key={tab.name}
              name={tab.name}
              icon={tab.icon}
              onclick={() => changeTab(tab.name)}
              currTab={currentTab}
            />
          ))}
        </ul>
      </menu>

      {/* Career Tab */}
      <article>
        {currentTab === "Career" && (
          <section className="my-4">
            {experience.map((exp) => (
              <article key={exp.duration} className="animate-item w-[80%] mx-auto my-8">
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

      {/* Certifications Tab */}
      <article>
        {currentTab === "Certifications" && (
          <section className="w-[85%] mx-auto my-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6 xl:gap-8">
            {certificates.map((cert) => (
              <figure key={cert.name} className="group relative flex max-w-[350px] h-[350px] items-center justify-center border-[4px] border-slate-400">
                <img
                  src={cert.link}
                  alt={cert.name}
                  className="absolute size-[350px] inset-0 h-full w-full object-fill transition duration-700 hover:scale-110"
                />
              </figure>
            ))}
          </section>
        )}
      </article>

      {/* Academics Tab */}
      <article>
        {currentTab === "Academics" && (
          <section className="w-[80%] mx-auto my-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:gap-8">
            {academics.map((acad, index) => (
              <article
                key={acad.heading}
                className={`animate-item flex flex-col p-5 gap-2 bg-gray-100 shadow-lg hover:scale-105 transition-all ease-in-out ${index % 2 === 0 ? "border-l-4 border-blue-400" : "border-r-4 border-gray-400"
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
        className="back-home-btn animate-item w-[200px] bg-gray-800 py-3 relative z-20 text-blue-200 text-xl font-bold font-sans rounded-md hover:text-indigo-100 mx-auto lg:mx-0 text-center px-5 self-center"
      >
        ← Back Home
      </NavLink>
    </section>
  );
}
