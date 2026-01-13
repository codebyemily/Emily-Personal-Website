import Image from "next/image";
import { Button } from "@/components/ui/button"
import { ExperienceScroll } from "@/components/ui/ExperienceScroll";
import { Card, CardGrid } from "@/components/ui/card"
import styles from "./BentoGrid.module.css";
import { Projects } from "@/components/ui/ProjectsList";
import { ScrollArea } from "@/components/ui/scroll-area";
import  Link  from 'next/link'
import { Courier_Prime } from 'next/font/google';

const courier = Courier_Prime({
  subsets: ['latin'], // required
  weight: '400',      // optional, regular weight
});

export default function Home() {

  return (
    <div className="flex min-h-screen w-full p-8 bg-background font-sans  dark:bg-black">
     
      <main className="flex min-h-screen flex-col dark:bg-black sm:items-start">
<div className="flex flex-row gap-5 h-full w-full max-h-3xl border">         
      <div className=" text-card-foreground flex flex-col gap-6 border-r p-6 w-64 flex-1">
        <h2 className={courier.className}>Projects</h2>
        <ExperienceScroll></ExperienceScroll>
      </div>
          <div className={` ${styles.gridContainer} flex-3 pr-6 py-6`}>

          <CardGrid area="box1">
            <h3>Hi, I’m Emily Thach.</h3>I am a third-year Software Engineering student at San José State University. I enjoy full stack development and learning new technologies.
            Through my coursework, clubs, and personal projects, I’ve developed a problem-solving mindset and a love for learning new technologies!
            </CardGrid>
          <CardGrid area="box2">Github daily commits</CardGrid>
          <CardGrid area="box3">Download resume v</CardGrid>
          <CardGrid area="box4">Picture of me</CardGrid>
          <CardGrid area="box5"><ExperienceScroll></ExperienceScroll></CardGrid>
          <CardGrid area="box6" variant="bg-primary flex flex-col text-center text-white"><h1>Contact Form</h1></CardGrid>
          <CardGrid area="box7">
            <ul className="list-disc list-inside">
              <Link href="mailto:emily.thach01@sjsu.edu" className="underline"><h3>Email</h3></Link>
              <Link href="https://github.com/codebyemily" className="underline"><h3>Linkedin</h3></Link>
              <Link href="https://github.com/codebyemily" className="underline"><h3>Discord</h3></Link>
              <Link href="https://github.com/codebyemily" className="underline"><h3>Github</h3></Link>
            </ul>

            </CardGrid>
          <CardGrid area="box8">
            <p className="border-b pb-2">Click on a project and it will pop up here!</p>
            
            </CardGrid>
          <CardGrid area="box9">Organizations, Extracurriculars, events participated, sports, Clubs, hackathons, volunteering
Leadership roles
What you actually did impact</CardGrid>

        </div>  
        </div>      
      </main>
    </div>
    
  );
}
