import GithubIcon from "@/components/icons/github-icon.svg";
import LinkedinIcon from "@/components/icons/linkedin-icon.svg";
import DevpostIcon from "@/components/icons/devpost-icon.svg";

import Link from 'next/link'
import Image from "next/image";
import * as React from "react";

export function IconCard(){
    return (
        <div className="flex flex-col 1">
            <div className="flex flex-col gap-1 justify-content">
                <Link href="https://www.linkedin.com/in/emilythachh" target="_blank" rel="noopener noreferrer" className="flex flex-row">
                    <Image src={LinkedinIcon} alt="Linkedin" width={25}></Image>
                    <span className="ml-2">Linkedin</span>
                </Link>

                <Link href="https://github.com/codebyemily" target="_blank" rel="noopener noreferrer" className="flex flex-row">
                    <Image src={GithubIcon} alt="Github" width={25}></Image>
                    <span className="ml-2">Github</span>
                </Link>

                <Link href="https://devpost.com/emilythach005" target="_blank" rel="noopener noreferrer" className="flex flex-row">
                    <Image src={DevpostIcon} alt="Devpost" width={25}></Image>
                    <span className="ml-2">Devpost</span>
                </Link>
            </div>
        </div>
    );
}