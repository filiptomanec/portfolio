import Link from "next/link";

import {FaGithub, FaLinkedinIn, FaTwitter, FaYoutube} from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>, path: ""},
    {icon: <FaLinkedinIn/>, path: ""},
    {icon: <FaYoutube/>, path: ""},
    {icon: <FaTwitter/>, path: ""},
];

interface ISocial {
    containerStyles: string;
    iconStyles: string;
}

const Social = ({containerStyles, iconStyles}: ISocial) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;
