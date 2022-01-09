import { SimpleGrid, Skeleton, Center, Text } from '@chakra-ui/react'
import { Card } from '@components/index'
import { ILaunch } from '@common/interfaces/launch.interface'
import InfiniteScroll from 'react-infinite-scroll-component'

interface ILaunchGridProps {
  launches: ILaunch[]
  loading: boolean
  hasMore: boolean
  getMoreLaunches: () => void
}

const LaunchGrid: React.FC<ILaunchGridProps> = ({ launches, loading, hasMore, getMoreLaunches }: ILaunchGridProps) => {

  return (
    <InfiniteScroll
      dataLength={ launches.length }
      next={ getMoreLaunches }
      hasMore={ hasMore }
      loader={
        <Center mt={8}>
          <Skeleton height='40px' />
        </Center>
      }
      endMessage={ 
        <Center paddingBottom={20}>
          <Text fontSize={'3xl'}>No more launches to load</Text>
        </Center>
      }
    >
      <SimpleGrid 
        minChildWidth={'250px'}
        spacing={'40px'}
        marginBottom={'40px'}
        p={'50px'}
        bg='gray.50'
        rounded='lg'
        color='gray.400'
      >
        {launches.map((launch) => (
          <Skeleton key={ launch?.id } isLoaded={ !loading }>
            <Card launch={ launch } />
          </Skeleton>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  )
}

export default LaunchGrid