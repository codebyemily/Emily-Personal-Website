"use client";
import Image from "next/image";
import { ProjectsScroll } from "@/components/ui/ProjectsScroll";
import { ScrollArea } from "@/components/ui/scroll-area";
import GridContainer from "@/components/ui/GridContainer";
import { useZoom } from "@/app/contexts/ZoomContext";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function WebPage() {
  const { zoom, setZoom } = useZoom();

  return ( 
    <div className="relative flex min-h-screen w-screen bg-background text-foreground font-sans transition-colors duration-200 overflow-x-hidden">
      <main className="flex flex-col w-full min-h-screen">
        {/* Zoomed in image display */}
        {zoom ? (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm cursor-pointer"
            onClick={() => setZoom(null)}
          >
            <div className="relative w-full h-full max-w-7xl max-h-[90vh] m-4 md:m-8 lg:m-16">
              <Image 
                src={`/images/${zoom}`} 
                alt="Project image" 
                fill 
                className="rounded-xl object-contain p-4 md:p-8 lg:p-16"
                priority
              />
            </div>
          </div>
        ) : null}

        {/* Main container */}
        <div className={`flex flex-col md:flex-row h-screen w-full transition-opacity duration-200 ${zoom ? 'opacity-20 pointer-events-none' : ''}`}>
          {/* Sidebar - visible at md and up */}
          <aside className="hidden md:flex flex-col text-card-foreground gap-4 md:gap-6 border-r border-border bg-card/50 p-4 md:p-6 w-64 lg:w-72 shrink-0 h-screen">
            <div className="flex items-center justify-between shrink-0">
              <h2 className="text-lg md:text-xl font-semibold">Projects</h2>
              <ThemeToggle />
            </div>
            <ScrollArea className="flex-1 min-h-0">
              <ProjectsScroll />
            </ScrollArea>
          </aside>

          {/* Main area */}
          <div className="flex-1 flex flex-col h-screen min-w-0">
            {/* Grid Container */}
            <div className="flex-1 min-h-0 overflow-x-hidden p-3 sm:p-4 md:p-6">
              <ScrollArea className="h-full w-full rounded-xl border">
                <GridContainer />
              </ScrollArea>
            </div>
          </div>
        </div>
      </main>
    </div>
    
    
  );
}
