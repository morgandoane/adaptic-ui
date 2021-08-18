import { gql } from '@apollo/client';

export const CreateTeamMutation = gql`
    mutation createTeam($data: CreateTeamInput!) {
        createTeam(data: $data) {
            id
            name
            members {
                user_id
                name
                given_name
                family_name
                middle_name
                nickname
                preferred_username
                profile
                picture
                website
                email_verified
                email
                gender
                birthdate
                zoneinfo
                locale
                phone_number
                phone_number_verified
                address
                updated_at
            }
        }
    }
`;
