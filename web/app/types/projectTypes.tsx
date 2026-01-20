export interface Project {
    title: string;
    description: string;
    longDescription: string;
    stack: string[];
    image?: string;
    link?: string;
}

export type CurrProjectType = {
    currProject: Project;
    setCurrProject?: (project: Project) => void;
}
