import { gql } from '@apollo/client';

export const HomeQuery = gql`
    query {
        projects {
            id
            name
            description
            teams {
                id
                name
            }
            leader {
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
        teams {
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
        teammates {
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
`;
