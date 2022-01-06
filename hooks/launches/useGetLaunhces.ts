import { gql, useQuery } from '@apollo/client'
import { ILaunch } from '@common/interfaces/launch.interface'

const GET_LAUNCHES = gql`
  query GetLaunches($limit: Int!, $offset: Int!) {
    launches(limit: $limit, offset: $offset) {
      id
      mission_name
      rocket {
        rocket_name
      }
      links {
        mission_patch
        mission_patch_small
      }
      details
    }
  }
`
export const useGetLaunches = (): ILaunch[] | undefined => {
  const options = {
    variables: { 
      limit: 18,
      offset: 0
    }
  }
  const { data, loading, error } = useQuery(GET_LAUNCHES, options)
  
  return data?.launches
}