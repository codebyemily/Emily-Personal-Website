import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import experiences from "@/app/data/experience.json"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

const stack = ["React", "TailwindCSS"];

export function ExperienceScroll() {
  return (
    <ScrollArea className="h-150 overflow-auto border rounded-md ">
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium"></h4>
        {experiences.map((experience, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-row justify-between items-center">
              <p>{experience.title}</p>
              <p className="text-border mt-1 justify-end">{experience.title}</p>
            </div>
              <div className="text-sm font-medium">Organization</div>

              <p className="text-border mt-1">{experience.description}</p>
            {/* add experience dates + organization*/}
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  )
}
