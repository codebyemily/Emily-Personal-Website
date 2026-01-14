import Image from "next/image";
import { Button } from "@/components/ui/button"
import { ExperienceScroll } from "@/components/ui/ExperienceScroll";
import { ProjectsScroll } from "@/components/ui/ProjectsScroll";
import { Card, CardGrid } from "@/components/ui/card"
import styles from "./BentoGrid.module.css";
import { Projects } from "@/components/ui/ProjectsList";
import { ScrollArea } from "@/components/ui/scroll-area";
import  Link  from 'next/link'
import Emily from "@/public/Emily.png"
import { CurrentProject } from "@/components/ui/CurrentProject"

// Icons
import { Scroll, MapPin, Laptop,  } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {

  return (
    <div className="flex h-screen w-screen bg-background font-sans  dark:bg-black">
     
      <main className="flex flex-col dark:bg-black sm:items-start h-full border">
        
          {/* main container */}
        <div className="flex flex-row border h-screen w-screen ">         
          
          {/* Sidebar */}
          <div className=" text-card-foreground flex flex-col gap-6 border-r p-6 w-64 flex-1">
            <h2>Projects</h2>
            <ProjectsScroll></ProjectsScroll>
          </div>
          {/* Grid Container */}
          <ScrollArea className="rounded-xl border-y flex-3 overflow-auto m-6">
      
            <div className={` ${styles.gridContainer} `}>

            <CardGrid area="box1">
              <h3>Hi, I’m Emily Thach.</h3>I am a third-year Software Engineering student at San José State University. I enjoy full stack development and learning new technologies.
              Through my coursework, clubs, and personal projects, I’ve developed a problem-solving mindset and a love for learning new technologies! 
              </CardGrid>
            <CardGrid area="box2" className="gap-2 items-center">
              <Image src={Emily} alt="Picture of Emily Thach"  className="rounded-md aspect-square object-cover object-bottom border"/>
              <div className="flex flex-row gap-1.5 items-end">
                <MapPin className="w-6 h-6"/>
                <p>Nunobiki Herb Garden Park</p>
              </div>
              
              </CardGrid>
            <CardGrid area="box3"> 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 71 55"
                className="w-6 h-6"
                fill="currentColor"
              >
                <path d="M60.104 4.552A58.75 58.75 0 0046.84.24a41.925 41.925 0 00-1.997 4.13 56.845 56.845 0 00-13.69 0A42.03 42.03 0 0029.159.24 58.64 58.64 0 0015.894 4.55C6.491 19.577 1.995 34.308 2.32 48.868a60.527 60.527 0 0018.126 5.838 44.642 44.642 0 003.932-6.404 39.877 39.877 0 01-6.243-3.047c.525-.381 1.04-.777 1.545-1.187a50.83 50.83 0 009.415 4.82 45.686 45.686 0 008.602 1.793c.289-.405.573-.818.85-1.24a45.098 45.098 0 008.652-1.78 51.053 51.053 0 009.38-4.83c.505.41 1.02.806 1.545 1.187a39.93 39.93 0 01-6.243 3.047 44.57 44.57 0 003.932 6.404 60.527 60.527 0 0018.126-5.838c-.422-14.56-4.918-29.291-13.322-44.316zM23.522 37.437c-4.034 0-7.355-3.777-7.355-8.433 0-4.655 3.27-8.432 7.355-8.432 4.107 0 7.356 3.777 7.356 8.432 0 4.656-3.249 8.433-7.356 8.433zm24.956 0c-4.034 0-7.356-3.777-7.356-8.433 0-4.655 3.27-8.432 7.356-8.432 4.106 0 7.355 3.777 7.355 8.432 0 4.656-3.249 8.433-7.355 8.433z" />
              </svg>

            </CardGrid>
            <CardGrid area="box4">
              <h3>Education</h3>
              <ul className="list-disc list-inside">
                <li>San Jose State University</li> 
                <li>B.S. Software Engineering, Fall 2027</li>
                <li>GPA: 4.00 / 4.00</li>
                <li>President's Scholar</li>
              </ul>

              <h3>Organizations</h3>
              <ul className="list-disc list-inside">
                <li>Software and Computer Engineering Society</li>
                <li>Associated Computing Machinery Club</li>
                <li>Responsible Computing Club</li>
                <li>Omi Ambassador</li>
              </ul>

            </CardGrid>
            <CardGrid area="box5">
              <h3>Experience</h3>
              <ExperienceScroll></ExperienceScroll></CardGrid>
            <CardGrid area="box6" variant="bg-primary flex flex-col text-center text-white"><h1>Contact Form</h1></CardGrid>
            <CardGrid area="box7">
              <ul className="list-disc list-inside">
                <Link href="mailto:emily.thach01@sjsu.edu" className="underline"><h3>Email</h3></Link>
                <Link href="https://github.com/codebyemily" className="underline"><h3>Linkedin</h3></Link>
                <Link href="https://github.com/codebyemily" className="underline"><h3>Discord</h3></Link>
                <Link href="https://github.com/codebyemily" className="underline"><h3>Github</h3></Link>
              </ul>

              </CardGrid>
            <CardGrid area="box8" className="flex flex-col gap-1 justify-between">
              
              <CurrentProject selected=""></CurrentProject>
              </CardGrid>
            <CardGrid area="box9">Github daily commits</CardGrid>

            </div>  

        </ScrollArea>

        </div>  
    
      </main>

    </div>
    
  );
}
