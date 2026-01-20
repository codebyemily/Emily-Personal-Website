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
import { WebPage } from "@/components/ui/WebPage";
// Icons
import { Scroll, MapPin, Laptop,  } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ProjectProvider } from "@/app/contexts/ProjectContext";

export default function Home() {

  return (
      <div>
        <WebPage />
      </div>
  );
}
