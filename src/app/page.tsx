"use client";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
    // const downloadCV = () => {
    //     const link = document.createElement('a');
    //     link.href = '/assets/CV_Filip_Tomanec.pdf';
    //     link.download = 'CV_Filip_Tomanec.pdf';
    //     link.click();
    // }

    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    {/* text */}
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <span className="text-xl">Software Developer</span>
                        <h1 className="h1 mb-6">
                            Ahoj, jsem<br/> <span className="text-accent">Filip Tomanec</span>
                        </h1>
                        <p className="max-w-[500px] mb-9 text-white/80">
                            Jsem Full-Stack vývojář z Ostravy, zaměřený na tvorbu webových a mobilních aplikací.
                            Mám zkušenosti s vývojem frontendu v TypeScriptu - React/React-Native a backendu v Javě -
                            Spring Boot. Mám za sebou projekty v různých odvětvích, kde jsem se podílel na vývoji
                            robustních a efektivních řešení.
                        </p>
                        {/* btn and socials */}
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <div className="mb-8 xl:mb-0">
                                <Social
                                    containerStyles="flex gap-6"
                                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>
                    {/* photo */}
                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo/>
                    </div>
                </div>
            </div>
            <Stats/>
        </section>
    );
}
