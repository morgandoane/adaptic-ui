import { gql } from '@apollo/client';

export const ProjectsQuery = gql`
    query projects {
        projects {
            id
        }
    }
`;
