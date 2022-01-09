
import { useState } from 'react' 
import { Layout, LaunchGrid } from '@components/index'
import client from '@common/apollo-client'
import { useLazyQuery } from '@apollo/client'
import { SEARCH_LAUNCHES } from 'graphql/launches/searchLaunches'
import {
  Box,
  InputGroup,
  Input,
  InputLeftElement,
  Divider,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
  Text,
  useTheme
} from '@chakra-ui/react'
import { SearchIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { ILaunch } from '@common/interfaces/launch.interface'
import { paginationDefault } from '@config/application'
interface ILaunchProps {
  staticLaunches: ILaunch[]
}

const IndexPage: React.FC<ILaunchProps> = ({ staticLaunches }: ILaunchProps) => {
  const theme = useTheme()
  const [search, setSearch] = useState('')
  const [launches, setLaunches] = useState<ILaunch[] | [null]>(staticLaunches)
  const [hasMore, setHasMore] = useState(true)
  const [executeSearch, { loading, error }] = useLazyQuery(SEARCH_LAUNCHES, {
    onCompleted: (data) => {
      if (launches?.length < paginationDefault.max) {
        setLaunches([...launches, ...data?.launches])
      } else { 
        setHasMore(false)
      }
    },
    onError: (error) => {
      console.log('🚀 ~ error', error)
    }
  })
  
  const searchLaunches = () => {
    setLaunches([])
    setHasMore(true)

    executeSearch({
      variables: {
        searchTerm: search,
        limit: paginationDefault.limit,
        offset: 0
      }
    })
  }

  const fetchLaunches = () => {
    executeSearch({
      variables: { 
        searchTerm:  search,
        limit: paginationDefault.limit,
        offset: launches?.length
      }
    })
  }

  if (error) return (
    <Alert status='error'>
      <AlertIcon />
      <AlertTitle mr={2}>Error!</AlertTitle>
      <AlertDescription>{ error?.message }</AlertDescription>
    </Alert>
  )

  return (
    <Layout>
      <Box display='flex' alignItems='flex-start' maxW='lg' mx='auto' p={4} marginTop={10}>
        <InputGroup>
          <InputLeftElement pointerEvents='none' children={ <SearchIcon color='gray.500' /> } />
          <Input 
            onChange={(event) => setSearch(event.target.value)} 
            onKeyPress={e=> {
              if (e.key === 'Enter') searchLaunches()
            }} 
            variant='outline'
            placeholder='Search'
            value={ search }
            borderColor={ theme.colors.gray[900] }
          />
        </InputGroup>
        <Button 
          variant='outline'
          marginLeft={2}
          onClick={ searchLaunches }
          isLoading={ loading }
          bg='black'
          rightIcon={ <ArrowForwardIcon color='white' /> }
          _hover={ { bg: theme.colors.gray[500] } }
        >
          <Text fontSize='sm' color='white'>Search</Text>
        </Button>
      </Box>
      <Divider />
      <LaunchGrid launches={ launches || []} loading={ loading } getMoreLaunches={ fetchLaunches } hasMore={ hasMore } />
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
