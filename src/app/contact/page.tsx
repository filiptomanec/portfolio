"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

import {FaEnvelope} from "react-icons/fa";
import {motion} from "framer-motion";

const info = [
    // {
    //     icon: <FaPhoneAlt/>,
    //     title: "Phone",
    //     description: "(+40) 321 654 876",
    // },
    {
        icon: <FaEnvelope/>,
        title: "Email",
        description: "tomanec.f@gmail.com",
    },
    // {
    //     icon: <FaMapMarkerAlt/>,
    //     title: "Address",
    //     description: "Code Corner, Tech Town 13579",
    // },
];

const Contact = () => {
    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Pojďme spolupracovat</h3>
                            <p className="text-white/60">
                                Rád bych se dozvěděl více o Vašich potřebách a jak Vám můžu pomoci.
                            </p>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" placeholder="Jméno"/>
                                <Input type="text" placeholder="Příjmení"/>
                                <Input type="email" placeholder="E-mailová adresa"/>
                                <Input type="tel" placeholder="Telefonní číslo"/>
                            </div>
                            {/* textarea */}
                            <Textarea
                                className="h-[200px]"
                                placeholder="Zde napište svou zprávu."
                            />
                            {/* btn */}
                            <Button variant="default" size="md" className="max-w-40">
                                Odeslat zprávu
                            </Button>
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div
                                            className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
