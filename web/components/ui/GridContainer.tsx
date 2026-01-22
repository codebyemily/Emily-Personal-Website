"use client"
import { MapPin } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { ExperienceScroll } from "@/components/ui/ExperienceScroll";
import { ProjectsScroll } from "@/components/ui/ProjectsScroll";
import { Card, CardGrid } from "@/components/ui/card"
import styles from "@/app/BentoGrid.module.css";
import { Projects } from "@/components/ui/ProjectsList";
import { ScrollArea } from "@/components/ui/scroll-area";
import  Link  from 'next/link'
import Emily from "@/public/Emily.png"
import { CurrentProject } from "@/components/ui/CurrentProject"
import { useState } from 'react'
import * as React from "react";
import { Project, CurrProjectType } from "@/app/types/projectTypes";
import projects from "@/app/data/projects.json";
import { useProject } from '@/app/contexts/ProjectContext';
import GitHubStats from '@/components/ui/GitHubStats';
import { IconCard } from '@/components/ui/IconCard'; 

export default function GridContainer() {

    return ( 
         <div>
          {/* Grid Container */}
          <ScrollArea className="rounded-xl border-y overflow-auto">
            <div className={` ${styles.gridContainer} `}>
            <CardGrid area="box1">
              <h3>Hi, I’m Emily Thach.</h3>I’m a third-year Software Engineering student at San José State University with a passion for full-stack development and exploring new technologies. 
                    Through my coursework, club involvement, and personal projects, I’ve honed my problem-solving skills and developed a constant curiosity for learning.
              </CardGrid>
            <CardGrid area="box2" className="gap-4 items-center h-full justify-center">
              <Image src={Emily} alt="Picture of Emily Thach"  className="rounded-lg aspect-square object-cover object-bottom border"/>
              <div className="flex items-center justify-center">
                <div className="flex flex-row gap-1.5 items-end">
                  <MapPin className="w-6 h-6"/>
                  <p>Kobe, Japan</p>
                </div>
              </div>
              </CardGrid>
            <CardGrid area="box3"className="flex flex-wrap"> 
              <IconCard />
            </CardGrid>
            <CardGrid area="box4">
              <h3>Education</h3>
              <ul className="list-disc list-inside">
                <li>San Jose State University</li> 
                <li>B.S. Software Engineering, Fall 2027</li>
                <li>GPA: 4.00 / 4.00</li>
                <li>President's Scholar</li>
              </ul>

              <h3>Organizations</h3>
              <ul className="list-disc list-inside">
                <li>Software and Computer Engineering Society</li>
                <li>Associated Computing Machinery Club</li>
                <li>Responsible Computing Club</li>
                <li>Omi Ambassador</li>
              </ul>

            </CardGrid>
            <CardGrid area="box5">
              <h3>Experience</h3>
              <ExperienceScroll></ExperienceScroll></CardGrid>
            <Link href="/Form">
              <CardGrid area="box6" variant="h-full w-full bg-primary flex flex-col items-center text-center text-white hover:bg-chart-5"><h1>Contact Form</h1></CardGrid>
            </Link>
            <CardGrid area="box8" className="flex flex-col gap-1 justify-between">
              <CurrentProject/ >
            </CardGrid>

            <CardGrid area="box9">
              <GitHubStats />
            </CardGrid>
                

            </div>  

        </ScrollArea>

        </div>  
    );
}
