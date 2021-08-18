import { User } from 'graphql/types/User';

export interface Project {
    id: string;
    name: string;
    description: string | null;
    teams: { id: string; name: string }[];
    leader: User;
}

export interface Team {
    id: string;
    name: string;
    members: User[];
}

export type Teammate = User;

export interface HomeQueryRes {
    projects: Project[];
    teams: Team[];
    teammates: Teammate[];
}
