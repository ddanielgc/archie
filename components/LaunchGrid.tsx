import { SimpleGrid, Skeleton } from '@chakra-ui/react'
import Card from '@components/Card'
import { ILaunch } from '@common/interfaces/launch.interface'

interface ILaunchGridProps {
  launches: ILaunch[]
  loading: boolean
}

const LaunchesGrid: React.FC<ILaunchGridProps> = ({ launches, loading }: ILaunchGridProps) => {
  return (
    <SimpleGrid 
      minChildWidth={'250px'}
      spacing={'40px'}
      marginTop={'40px'}
      marginBottom={'40px'}
      p={'50px'}
      bg='gray.50'
      rounded='lg'
      color='gray.400'
    >
      {launches.map((launch) => (
        <Skeleton key={launch.id} isLoaded={!loading}>
          <Card launch={launch} />
        </Skeleton>
      ))}
    </SimpleGrid>
  )
}

export default LaunchesGrid