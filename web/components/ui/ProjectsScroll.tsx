"use client"
import { useState } from 'react'
import * as React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Stack } from "@/components/ui/Stack";
import { CurrentProject } from "@/components/ui/CurrentProject"
import Image from 'next/image'
import Link from 'next/link'
import projects from '@/app/data/projects.json';
import { Project, CurrProjectType } from "@/app/types/projectTypes";
import { useProject } from '@/app/contexts/ProjectContext';

export function ProjectsScroll() {
    const { currProject, setCurrProject } = useProject();
    if (!currProject || currProject.stack === undefined) {
        return <div>No projects</div>;
    }
    if (setCurrProject === undefined) {
        return <div>No setCurrProject function</div>;
    }

  return (
    <ScrollArea className="border rounded-md overflow-auto">
      <div className="p-4 space-y-4" >
        {projects.map((project) => (
          <React.Fragment key={project.title} >
            <div className="hover:bg-accent group " onClick={() => setCurrProject(project)}>
              <div className="flex flex-row justify-between">
                <div className="text-sm font-medium">{project.title}</div>
                <div className="flex gap-1 flex-wrap justify-end">
                  {project.stack.map((stackItem, index) => (
                    <Stack
                      key={index}
                      className="text-xs px-2 py-0.5 rounded bg-gray-200 dark:bg-gray-800"
                    >
                      {stackItem}
                    </Stack>
                  ))}
                </div>
              </div>

            <p className="text-border mt-1">{project.description}</p>
            <Separator className="my-2" />
            </div>
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
    
  );
}