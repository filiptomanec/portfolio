"use client";

import CountUp from "react-countup";
import useGithubCommits from "@/hooks/useGithubCommits";
import { getYearsOfExperience } from "@/lib/utils";

const Stats = () => {
  const { commits } = useGithubCommits();

  const stats = [
    {
      num: getYearsOfExperience("2020-03-01"),
      plus: true,
      text: "Let zkušeností",
    },
    {
      num: 10,
      plus: true,
      text: "Dokončených projektů",
    },
    {
      num: 15,
      plus: true,
      text: "Ovládaných technologií",
    },
    {
      num: commits,
      plus: false,
      text: "Commitů na GitHubu",
    },
  ];

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <div>
                  <CountUp
                    end={item.num}
                    duration={5}
                    delay={2}
                    className="text-4xl xl:text-6xl font-extrabold"
                  />
                  {item.plus && <span className="text-4xl xl:text-6xl">+</span>}
                </div>
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
