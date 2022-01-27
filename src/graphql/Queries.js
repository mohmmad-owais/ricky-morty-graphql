import { gql } from "@apollo/client";

export const GET_CHARACTER = gql`
  query {
    characters {
      info {
        count
      }
      results {
        id
        name
        status
        species
        gender
        image
        type
        gender
        created
        location {
          name
        }
        origin {
          name
        }
      }
    }
  }
`;
