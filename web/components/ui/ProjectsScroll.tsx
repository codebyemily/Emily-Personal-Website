"use client"
import { useState } from 'react'
import * as React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Stack } from "@/components/ui/Stack";
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import projects from '@/app/data/projects.json';
import { useProject } from '@/app/contexts/ProjectContext';
import { useZoom } from '@/app/contexts/ZoomContext';

export function ProjectsScroll() {
    const { currProject, setCurrProject } = useProject();
    const { setZoom } = useZoom();
    const [openProjects, setOpenProjects] = useState<Set<string>>(new Set());

    if (!currProject || currProject.stack === undefined) {
        return <div>No projects</div>;
    }
    if (setCurrProject === undefined) {
        return <div>No setCurrProject function</div>;
    }

    const toggleProject = (projectTitle: string) => {
        setOpenProjects(prev => {
            const newSet = new Set(prev);
            if (newSet.has(projectTitle)) {
                newSet.delete(projectTitle);
            } else {
                newSet.add(projectTitle);
            }
            return newSet;
        });
    };

    const isOpen = (projectTitle: string) => openProjects.has(projectTitle);

  return (
    <ScrollArea className="border border-border rounded-md overflow-auto">
      <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
        {projects.map((project) => {
            const isProjectOpen = isOpen(project.title);
            return (
            <React.Fragment key={project.title}>
                {/* Desktop view - click to select project */}
                <div 
                  className="hidden md:block hover:bg-accent/50 group cursor-pointer transition-colors rounded-md p-2 -m-2" 
                  onClick={() => setCurrProject(project)}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0">
                    <div className="text-xs sm:text-sm font-medium text-foreground">{project.title}</div>
                    
                  </div>
                  <p className="text-muted-foreground mt-1.5 text-xs sm:text-sm leading-relaxed">{project.description}</p>
                  {project.link && (
                    <div className="mt-2">
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                      >
                        View Project
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Link>
                    </div>
                  )}
                  <Separator className="my-2" />
                </div>

                {/* Mobile/Tablet view - dropdown with all project info */}
                <div className="md:hidden border border-border rounded-md overflow-hidden bg-card">
                  <button
                    onClick={() => toggleProject(project.title)}
                    className="w-full flex items-center justify-between p-3 sm:p-4 hover:bg-accent/50 transition-colors text-left"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="text-sm sm:text-base font-medium text-foreground mb-1">{project.title}</div>
                      <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                    </div>
                    <div className="ml-2 shrink-0">
                      {isProjectOpen ? (
                        <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                      )}
                    </div>
                  </button>

                  {isProjectOpen && (
                    <div className="border-t border-border bg-card/50">
                      <div className="p-3 sm:p-4 space-y-4">
                        {/* Long Description */}
                        <div>
                          <p className="text-xs sm:text-sm text-foreground leading-relaxed">
                            {project.longDescription}
                          </p>
                        </div>

                        {/* Project Image */}
                        {project.image && (
                          <div className="relative w-full aspect-video rounded-md border border-border overflow-hidden bg-muted/20">
                            <Image
                              src={`/images/${project.image}`}
                              alt={project.title}
                              fill
                              className="object-contain cursor-pointer hover:opacity-90 transition-opacity"
                              onClick={() => setZoom(project.image!)}
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </div>
                        )}

                        {/* Stack Tags */}
                        <div>
                          <div className="text-xs sm:text-sm font-medium text-foreground mb-2">Technologies:</div>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {project.stack.map((stackItem, index) => (
                              <Stack
                                key={index}
                                className="text-[10px] sm:text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
                              >
                                {stackItem}
                              </Stack>
                            ))}
                          </div>
                        </div>

                        {/* Link */}
                        {project.link && (
                          <div>
                            <Link
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-xs sm:text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                            >
                              View Project
                              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
            </React.Fragment>
          );
        })}
      </div>
    </ScrollArea>
  );
}