import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faYoutube, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer className="bg-[#1f1f1f] text-white py-10 px-52 mt-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
                <div className="text-center md:text-left">
                    <p className="text-sm">copyright © 2020-2025, 180Daraga. All Rights Reserved</p>
                    <ul className="flex justify-center md:justify-start space-x-4 mt-3">
                    <li className="bg-[#3b5999]  w-[30px] h-[30px] rounded-[3px] flex items-center justify-center">
                        <a href="https://www.facebook.com/180.Daraga" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faFacebookF} className="text-xl " />
                        </a>
                    </li>
                    <li className="bg-[#cd201f]  w-[30px] h-[30px] rounded-[3px] flex items-center justify-center">
                        <a href="https://www.youtube.com/channel/UCy2pNwCwdCDBa557YSYzLOA" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faYoutube} className="text-xl " />
                        </a>
                    </li>
                    <li className="bg-[#55acee]  w-[30px] h-[30px] rounded-[3px] flex items-center justify-center">
                        <a href="https://twitter.com/180daraga" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faTwitter} className="text-xl " />
                        </a>
                    </li>
                    <li className="bg-[#e4405f] w-[30px] h-[30px] rounded-[3px] flex items-center justify-center">
                        <a href="https://www.instagram.com/180daraga" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="text-xl" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-center md:text-left mt-4 md:mt-0">
                <p>Email:{" "} 
                    <a href="mailto:180daraga.org@gmail.com" className="underline">180daraga.org@gmail.com</a>
                </p>
                <p>Tel:{" "}
                    <a href="tel:+20 104 056 4660" className=" underline">+20 104 056 4660</a>
                </p>
            </div>
        </div>
        </footer>
    );
}

export default Footer;
