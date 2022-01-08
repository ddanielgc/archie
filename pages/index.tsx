
import Layout from '@components/Layout'
import client from '@common/apollo-client'
import { useLazyQuery } from '@apollo/client'
import { SEARCH_LAUNCHES } from '@services/launches/searchLaunches'
import LaunchesGrid from '@components/LaunchGrid'
import { useEffect, useState } from 'react' 
import { 
  Heading,
  Box,
  InputGroup,
  Input,
  InputLeftElement,
  Divider,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { ILaunch } from '@common/interfaces/launch.interface'

const paginationDefault = {
  limit: 20
}
interface ILaunchProps {
  staticLaunches: ILaunch[]
}

const IndexPage: React.FC<ILaunchProps> = ({ staticLaunches }: ILaunchProps) => {
  const [isFirstLoad, setIsFirstLoad] = useState(true)
  const [search, setSearch] = useState('')
  const [launches, setLaunches] = useState(staticLaunches)
  const [executeSearch, { data: searchLaunches, loading, error }] = useLazyQuery(SEARCH_LAUNCHES)

  useEffect(() => {
    if (!isFirstLoad) {
      executeSearch({
        variables: { 
          searchTerm: search,
          limit: paginationDefault.limit,
          offset: 0
        }
      })
      setLaunches(searchLaunches?.launches)
    }
  }, [search])

  useEffect(() => {
    setIsFirstLoad(false)
  }, [])

  if (error) return (
    <Alert status='error'>
      <AlertIcon />
      <AlertTitle mr={2}>Error!</AlertTitle>
      <AlertDescription>{ error?.message }</AlertDescription>
    </Alert>
  )

  return (
    <Layout title='Home | Archie Test | Space-X launches'>
      <Heading as='h4' size='xl' isTruncated color='black' marginLeft={'40px'} marginTop={'20px'}>
        Space-X launches
      </Heading>
      <Box maxW='lg' mx='auto' p={4}>
        <InputGroup>
          <InputLeftElement pointerEvents='none' children={ <SearchIcon color='gray.500' /> } />
          <Input onChange={(event) => setSearch(event.target.value)} variant='filled' placeholder='Search' value={ search } />
        </InputGroup>
      </Box>
      <Divider />
      <LaunchesGrid launches={ launches || []} loading={ loading } />
    </Layout>
  )
}

export async function getStaticProps() {
  const options = {
    variables: {
      searchTerm: '',
      limit: paginationDefault.limit,
      offset: 0
    }
  }

  const { data } = await client.query({
    query: SEARCH_LAUNCHES,
    ...options
  })

  return {
    props: {
      staticLaunches: data?.launches
    }
  }
}

export default IndexPage
