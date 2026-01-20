"use client";
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
import GridContainer from "@/components/ui/GridContainer";
import { useZoom } from "@/app/contexts/ZoomContext";

export function WebPage() {
  const { zoom, setZoom } = useZoom();

  return ( 

    <div className={`relative flex h-screen w-screen bg-background font-sans  dark:bg-black `} >
      <main className={`flex flex-col dark:bg-black sm:items-start h-full border `}>
          {/* Zoomed in image display */}
          { zoom ? 
           
          <div className="w-screen h-screen relative flex items-center justify-content z-50">
            
            <Image src={`/images/${zoom}`} alt="Failed to obtain image" fill className="m-auto rounded-xl border absolute object-contain p-16"/>
              <Button
                className="absolute top-2 right-2 px-16 rounded"
                onClick={() => setZoom(null)}
              >Back</Button>
          </div>
           : null
          
          }

          {/* main container */}
        <div className={`absolute z-0 ${zoom ? 'opacity-20' : ''}`}>

        <div className={`flex flex-row border h-screen w-screen `}>         
          
          {/* Sidebar */}
          <div className=" text-card-foreground flex flex-col gap-6 border-r p-6 w-64 flex-1">
            <h2>Projects</h2>
            <ProjectsScroll></ProjectsScroll>
          </div>
          {/* Grid Container */}
          <div className="rounded-xl flex-3 overflow-auto m-6">
            <GridContainer />
            
          </div>
        </div>
      </div>

      </main>

    </div>
    
    
  );
}
