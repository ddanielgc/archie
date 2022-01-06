import { ILaunch } from '@common/interfaces/launch.interface'
import { Box } from '@chakra-ui/react'
import Image from 'next/image'

interface ILaunchCardProps {
  launch: ILaunch
}

const Card: React.FC<ILaunchCardProps> = ({ launch }: ILaunchCardProps) => {
  return (
      <Box 
        key={launch.id} 
        maxW='sm'
        borderRadius='lg' 
        overflow='hidden' 
        boxShadow='base' 
        rounded='md' 
        bg='white'
      >
        <Box display='flex' alignItems='baseline'></Box>
        <Box 
          overflow='hidden' 
          boxShadow='base' 
          bg='gray.100'
          paddingTop={'10px'}
        >
          <Image
            src={launch.links.mission_patch} 
            width={200}
            height={200}
            alt={launch.mission_name}
          />
        </Box>
        <Box p='2'>
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            isTruncated
          >
            {launch.mission_name}
          </Box>
          <h5>{launch.rocket.rocket_name}</h5>
          <Box
            mt='1'
            fontWeight='bold'
            as='h4'
            lineHeight='tight'
            isTruncated={true}
          >
            {launch.details}
          </Box>
        </Box>
      </Box>
  )
}

export default Card