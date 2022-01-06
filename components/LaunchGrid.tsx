import { SimpleGrid } from '@chakra-ui/react'
import Card from '@components/Card'
import { ILaunch } from '@common/interfaces/launch.interface'

interface ILaunchGridProps {
  launches: ILaunch[]
}

const LaunchesGrid: React.FC<ILaunchGridProps> = ({ launches }: ILaunchGridProps) => {
  return (
    <SimpleGrid 
      minChildWidth={'250px'}
      minChildHeight={'250px'}
      spacing={'40px'}
      marginTop={'40px'}
      marginBottom={'40px'}
      p={'50px'}
      bg='gray.50'
      textAlign='center'
      rounded='lg'
      color='gray.400'
    >
      {launches.map((launch) => (
        <Card launch={launch} />
      ))}
    </SimpleGrid>
  )
}

export default LaunchesGrid