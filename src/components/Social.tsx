import Link from "next/link";

import {FaGithub, FaLinkedinIn} from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>, path: "https://github.com/filiptomanec"},
    {icon: <FaLinkedinIn/>, path: "https://www.linkedin.com/in/filip-tomanec-568b97173/"},
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
