"use client"
import { createContext, useContext, useState, ReactNode } from 'react';
import projects from '@/app/data/projects.json';
import { Project, CurrProjectType as ProjectContextType } from '@/app/types/projectTypes';

// Default context
const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

// Custom hook
export const useProject = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProject must be used within ProjectProvider');
  }
  return context;
};

// Provider
export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [currProject, setCurrProject] = useState<Project>(projects[0]);
  
  return (
    <ProjectContext.Provider value={{ currProject, setCurrProject }}>
      {children}
    </ProjectContext.Provider>
  );
};
