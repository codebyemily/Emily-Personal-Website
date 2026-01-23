"use client"
import { MapPin } from "lucide-react";
import Image from "next/image";
import { ExperienceScroll } from "@/components/ui/ExperienceScroll";
import { ProjectsScroll } from "@/components/ui/ProjectsScroll";
import { CardGrid } from "@/components/ui/card"
import styles from "@/app/BentoGrid.module.css";
import  Link  from 'next/link'
import Emily from "@/public/Emily.png"
import { CurrentProject } from "@/components/ui/CurrentProject"
import GitHubStats from '@/components/ui/GitHubStats';
import { IconCard } from '@/components/ui/IconCard';
import { ThemeToggle } from '@/components/ui/ThemeToggle'; 

export default function GridContainer() {

    return ( 
         <div className="w-full min-h-full">
          {/* Grid Container */}
          <div className={`${styles.gridContainer} p-2 sm:p-4`}>
            <CardGrid area="box1" className="gap-3 sm:gap-4 md:gap-6 md:text-left text-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Hi, I'm Emily Thach.</h3>
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                I'm a third-year Software Engineering student at San José State University with a passion for full-stack development and exploring new technologies. 
                Through my coursework, club involvement, and personal projects, I've honed my problem-solving skills and developed a constant curiosity for learning.
              </p>
            </CardGrid>
            
            <CardGrid area="box2" className="gap-3 sm:gap-4 md:gap-6 items-center justify-center">
              <div className="relative w-full max-w-[180px] sm:max-w-[220px] md:max-w-[250px] aspect-square mx-auto">
                <Image 
                  src={Emily} 
                  alt="Picture of Emily Thach"  
                  className="rounded-xl object-cover object-bottom border-2 border-border shadow-md"
                  fill
                  sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, 250px"
                />
              </div>
              <div className="flex items-center justify-center">
                <div className="flex flex-row gap-1.5 items-center px-3 py-1.5 rounded-full bg-muted/50 border border-border">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-6 text-primary"/>
                  <p className="text-xs sm:text-sm md:text-base font-medium">Kobe, Japan</p>
                </div>
              </div>
            </CardGrid>
            
            <CardGrid 
              area="box3"
              className="flex flex-wrap gap-2 sm:gap-3 justify-center items-center md:items-start min-h-[120px] !bg-transparent !border-0 !rounded-none !shadow-none !p-0 md:!bg-card md:!border md:!border-border md:!rounded-xl md:!shadow-sm md:!p-6"
            >
              <IconCard />
            </CardGrid>
            
            <CardGrid area="box4" className="gap-3 sm:gap-4 md:gap-6">
              <div>
                <h3 className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3">Education</h3>
                <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
                  <li>San Jose State University</li> 
                  <li>B.S. Software Engineering, Fall 2027</li>
                  <li>GPA: 4.00 / 4.00</li>
                  <li>President's Scholar</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3">Organizations</h3>
                <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
                  <li>Software and Computer Engineering Society</li>
                  <li>Associated Computing Machinery Club</li>
                  <li>Responsible Computing Club</li>
                  <li>Omi Ambassador</li>
                </ul>
              </div>
            </CardGrid>
            
            <CardGrid area="box5" className="h-full">
              <h3 className="text-base sm:text-lg md:text-xl">Experience</h3>
              <ExperienceScroll />
            </CardGrid>
            
            {/* Projects section for mobile/tablet */}
            <div 
              area="box7"
              style={{gridArea: "box7"}}
              className="md:hidden"
            >
              <div className="flex flex-col gap-4 p-4 border border-border rounded-xl bg-card">
                <div className="flex items-center justify-between">
                  <h2 className="text-base font-semibold">Projects</h2>
                </div>
                <div className="max-h-96 overflow-auto">
                  <ProjectsScroll />
                </div>
              </div>
            </div>
            
            <CardGrid 
              area="box6"
              className="h-full w-full !bg-transparent hover:!bg-transparent !border-0 !rounded-none !shadow-none !p-0 md:!bg-primary md:hover:!bg-primary/90 flex flex-col items-center justify-center text-center md:!text-primary-foreground text-foreground transition-colors min-h-[120px] md:!border md:!border-border md:!rounded-xl md:!shadow-sm md:!p-6"
            >
              <Link href="/Form" className="w-full h-full md:flex md:items-center md:justify-center">
                <button className="bg-primary py-3 px-6 rounded-lg md:px-6 py-3 hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors md:bg-transparent md:hover:bg-transparent md:text-primary-foreground md:rounded-none md:p-0">
                  <span className="text-base sm:text-lg md:text-xl lg:text-2xl underline">Contact Form</span>
                </button>
              </Link>
            </CardGrid>
            <CardGrid area="box8" className="hidden md:flex flex-col gap-2">
              <CurrentProject />
            </CardGrid>

            <CardGrid area="box9" className="hidden md:flex gap-3">
              <GitHubStats />
            </CardGrid>
            </div>
        </div>  
    );
}
