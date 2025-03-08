"use client";

import CountUp from "react-countup";
import useGithubCommits from "@/hooks/useGithubCommits";

const Stats = () => {
    const {commits} = useGithubCommits();

    const stats = [
        {
            num: getYearsOfExperience("2020-03-01"),
            text: "Years of experience",
        },
        {
            num: 26,
            text: "Projects completed",
        },
        {
            num: 8,
            text: "Technologies mastered",
        },
        {
            num: commits,
            text: "Code commits",
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
                                <CountUp
                                    end={item.num}
                                    duration={5}
                                    delay={2}
                                    className="text-4xl xl:text-6xl font-extrabold"
                                />
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

function getYearsOfExperience(dateString: string) {
    const startDate = new Date(dateString);
    const currentDate = new Date();

    let yearsDiff = currentDate.getFullYear() - startDate.getFullYear();

    if (
        currentDate.getMonth() < startDate.getMonth() ||
        (currentDate.getMonth() === startDate.getMonth() && currentDate.getDate() < startDate.getDate())
    ) {
        yearsDiff--;
    }

    return yearsDiff;
}

async function fetchCommits() {
    const response = await fetch("/api/github");
    if (!response.ok) throw new Error("Failed to fetch commits");

    const data = await response.json();
    return data.commits;
}

export default Stats;
