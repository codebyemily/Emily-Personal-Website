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
           
          <div className="w-screen h-screen relative flex items-center justify-content z-50" onClick={() => setZoom(null)}>
            
            <Image src={`/images/${zoom}`} alt="Failed to obtain image" fill className="m-auto rounded-xl border absolute object-contain p-16"/>
              
          </div>
           : null
          
          }

          {/* main container */}
        <div className={`absolute z-0 ${zoom ? 'opacity-20' : ''}`}>

        <div className={`flex flex-col md:flex-row border h-screen w-screen `}>         

          {/* Sidebar - visible at md and up */}
          <aside className="hidden md:flex flex-col text-card-foreground gap-6 border-r p-6 w-64">
            <h2 className="text-xl font-semibold">Projects</h2>
            <ProjectsScroll />
          </aside>

          {/* Main area: mobile projects (md:hidden) above grid */}
          <main className="flex-1 flex flex-col overflow-auto">
            {/* Mobile Projects - visible below md */}
            <div className="md:hidden w-full border-b p-4">
              <h2 className="text-lg font-semibold">Projects</h2>
              <ProjectsScroll />
            </div>

            {/* Grid Container */}
            <div className="p-6">
              <GridContainer />
            </div>
          </main>
        </div>
      </div>

      </main>

    </div>
    
    
  );
}
