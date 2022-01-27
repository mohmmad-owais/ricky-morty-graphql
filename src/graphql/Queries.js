import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query Characters($page: Int) {
    characters(page: $page) {
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

export const GET_CHARACTER = gql`
  query CharactersByIds($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
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
`;
