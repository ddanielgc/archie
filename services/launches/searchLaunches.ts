import { gql } from '@apollo/client'

export const SEARCH_LAUNCHES = gql`
  query GetLaunches($searchTerm: String!, $limit: Int!, $offset: Int!) {
    launches(find: {mission_name: $searchTerm}, limit: $limit, offset: $offset) {
      id
      mission_name
      rocket {
        rocket_name
      }
      links {
        mission_patch
        mission_patch_small
        article_link
      }
      details
    }
  }
`