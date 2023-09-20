export interface IResponse {
    id: number;
    created_at: string;
    updated_at: string;
  }

  export interface FormDados {
    name: string;
    email: string;
    birthdate: string;
    phone: string;
    role: string;
    bio: string;
    links: string[];
    states: string[];
    city_id: string;
    softskill_ids: string[];
    selectedSkills: number[];
    ability_ids: string[];
    tech_ids: string[];
    hasExperience: string;
    hasCompetence: string; 
    experiences_attributes: string[];
    studies_attributes:string[];
  }