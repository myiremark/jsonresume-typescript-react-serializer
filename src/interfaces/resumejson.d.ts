// changed from Location to ResumeJsonLocation to prevent potential namespace issues
// TODO: automate extraction for updates to schema
// TODO: add schema validation

export interface ResumeJsonLocation {
    address: string;
    postalCode: string;
    city: string;
    countryCode: string;
    region: string;
  }
  
  export interface Profile {
    network: string;
    username: string;
    url: string;
  }
  
  export interface Basic {
    name: string;
    label: string;
    image: string;
    email: string;
    phone: string;
    url: string;
    summary: string;
    location: ResumeJsonLocation;
    profiles: Profile[];
  }
  
  export interface Work {
    name: string;
    location: string;
    description: string;
    position: string;
    url: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
  }
  
  export interface Volunteer {
    organization: string;
    position: string;
    url: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
  }
  
  export interface Education {
    institution: string;
    url: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
    gpa: string;
    courses: string[];
  }
  
  export interface Award {
    title: string;
    date: string;
    awarder: string;
    summary: string;
  }
  
  export interface Publication {
    name: string;
    publisher: string;
    releaseDate: string;
    url: string;
    summary: string;
  }
  
  export interface Skill {
    name: string;
    level: string;
    keywords: string[];
  }
  
  export interface Language {
    language: string;
    fluency: string;
  }
  
  export interface Interest {
    name: string;
    keywords: string[];
  }
  
  export interface Reference {
    name: string;
    reference: string;
  }
  
  export interface Project {
    name: string;
    description: string;
    highlights: string[];
    keywords: string[];
    startDate: string;
    endDate: string;
    url: string;
    roles: string[];
    entity: string;
    type: string;
  }
  
  export interface Meta {
    canonical: string;
    version: string;
    lastModified: string;
  }
  
  export interface Resume {
    $schema: string;
    basics: Basic;
    work: Work[];
    volunteer: Volunteer[];
    education: Education[];
    awards: Award[];
    publications: Publication[];
    skills: Skill[];
    languages: Language[];
    interests: Interest[];
    references: Reference[];
    projects: Project[];
    meta: Meta;
  }
  