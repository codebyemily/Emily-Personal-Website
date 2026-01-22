import GithubIcon from "@/components/icons/github-icon.svg";
import LinkedinIcon from "@/components/icons/linkedin-icon.svg";
import DevpostIcon from "@/components/icons/devpost-icon.svg";

import Link from 'next/link'
import Image from "next/image";
import * as React from "react";

export function IconCard(){
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-col gap-2 sm:gap-3 justify-center items-center">
                <Link 
                  href="https://www.linkedin.com/in/emilythachh" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-row items-center gap-2 hover:text-primary transition-colors text-sm sm:text-base"
                >
                    <Image src={LinkedinIcon} alt="Linkedin" width={20} height={20} className="sm:w-6 sm:h-6" />
                    <span>Linkedin</span>
                </Link>

                <Link 
                  href="https://github.com/codebyemily" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-row items-center gap-2 hover:text-primary transition-colors text-sm sm:text-base"
                >
                    <Image src={GithubIcon} alt="Github" width={20} height={20} className="sm:w-6 sm:h-6" />
                    <span>Github</span>
                </Link>

                <Link 
                  href="https://devpost.com/emilythach005" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-row items-center gap-2 hover:text-primary transition-colors text-sm sm:text-base"
                >
                    <Image src={DevpostIcon} alt="Devpost" width={20} height={20} className="sm:w-6 sm:h-6" />
                    <span>Devpost</span>
                </Link>
            </div>
        </div>
    );
}