"use client"
import Image from 'next/image'
import Link from 'next/link'
import projects from '@/app/data/projects.json';
import * as React from "react";
import { Stack } from "@/components/ui/Stack";
import Emily from "@/public/Emily.png"
import GithubIcon from "@/components/icons/github-icon.svg"
import { ProjectsScroll } from "@/components/ui/ProjectsScroll";
import { Project, CurrProjectType } from "@/app/types/projectTypes";
import { useProject } from '@/app/contexts/ProjectContext';
import { useZoom } from '@/app/contexts/ZoomContext';

export function CurrentProject(){
    const { currProject, setCurrProject } = useProject();
    const { zoom, setZoom } = useZoom();

    if (!currProject?.stack?.length) {
        return <div>Loading projects...</div>;
    }

    return(
      <div className=" space-y-4 flex flex-col justify-between">
        <div className="flex flex-row justify-between">
            <h3>{currProject.title}</h3>
            <Link href={currProject.link as string} target="_blank"><p className="underline text-primary">Link</p></Link>
        </div>
        <div className="mx-auto">
            <span className="text-sm">{currProject.longDescription}</span>
        </div>
        <div>

        </div>

        <div className="flex flex-col items-center gap-6">
        <div className="flex flex-wrap justify-content gap-1">
            {currProject.stack.map((stackItem: String, index: any) => (
                <Stack key={index}
                    className="" >
                    {stackItem}
                </Stack>
            ))}
        </div>
        <div className="relative w-full h-50 rounded-md">
            <Image src={`/images/${currProject.image}`} alt="Project Image" fill className="w-full object-contain cursor-pointer" onClick={() => {setZoom(currProject.image)}}  />
        </div> 
        </div>
      </div>
    );
    
}