import Image from 'next/image'
import Link from 'next/link'
import projects from '@/app/data/projects.json';
import * as React from "react";
import { Stack } from "@/components/ui/Stack";
import Emily from "@/public/Emily.png"

export function CurrentProject( project: any ){
    

    let currProject = project
    if (!currProject || currProject === undefined || project.stack === undefined){
        //display the first project
        currProject = projects[0]
    }

    return(
      <div className="p-4 space-y-4 ">
        <div className="flex flex-row items-center">
            <h3>{currProject.title}</h3>
            <Link href="/">Github Link</Link>
        </div>
        <div className="mx-auto">
            <Image src={Emily} alt="Picture of Emily Thach" width={100} height={100} className="float-right mr-2 mb-2 rounded-md aspect-square object-cover object-bottom border"/>
            <span className="text-sm">{currProject.longDescription}</span>

        </div>
        
        <div className="flex flex-wrap justify-content gap-1">
            {currProject.stack.map((stackItem: String, index: any) => (
                <Stack key={index}
                    className="" >
                    {stackItem}
                </Stack>
            ))}
        </div>
        
      </div>
    );
    
}