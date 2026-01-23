import * as React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import experiences from "@/app/data/experience.json"

export function ExperienceScroll() {
  return (
    <ScrollArea className="sm: overflow-auto border border-border rounded-md">
      <div className="p-3 sm:p-4 space-y-3 sm:space-y-4 h-120 lg:h-full">
        {experiences.map((experience, index) => (
          <React.Fragment key={index}>
            <div className="space-y-1.5 sm:space-y-2">
              <p className="text-sm sm:text-base font-semibold text-foreground">{experience.title}</p>
              <div className="text-xs sm:text-sm font-medium text-primary">{experience.organization}</div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{experience.description}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">{experience.dates.start} - {experience.dates.end}</p>
            </div>
            {index < experiences.length - 1 && <Separator className="my-2" />}
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  )
}
