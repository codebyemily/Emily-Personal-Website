"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Stack } from "@/components/ui/Stack";
import { useProject } from '@/app/contexts/ProjectContext';
import { useZoom } from '@/app/contexts/ZoomContext';
import { ExternalLink } from 'lucide-react';

export function CurrentProject(){
    const { currProject } = useProject();
    const { setZoom } = useZoom();

    if (!currProject?.stack?.length) {
        return <div>Loading projects...</div>;
    }

    return(
      <div className="space-y-3 sm:space-y-4 flex flex-col justify-between h-full min-h-0">
        <div className="flex flex-row justify-between items-start gap-2">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold flex-1">{currProject.title}</h3>
            <Link 
              href={currProject.link as string} 
              target="_blank"
              className="inline-flex underline text-primary hover:text-primary/80 transition-colors text-xs sm:text-sm whitespace-nowrap"
            >
              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
            </Link>
        </div>
        <div className="flex-1 overflow-auto">
            <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">{currProject.longDescription}</p>
        </div>

        <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-6">
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
            {currProject.stack.map((stackItem: string, index: any) => (
              <Stack 
                key={index}
                className="text-[10px] sm:text-xs px-2 py-1 rounded "
              >
                {stackItem}
              </Stack>
            ))}
          </div>
          <div className="relative w-full aspect-video rounded-md  overflow-hidden">
            <Image 
              src={`/images/${currProject.image}`} 
              alt="Project Image" 
              fill 
              className="object-contain cursor-pointer hover:opacity-90 transition-opacity" 
              onClick={() => {setZoom(currProject.image)}} 
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div> 
        </div>
      </div>
    );
    
}