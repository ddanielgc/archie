import { ILaunch } from '@common/interfaces/launch.interface'
import { Box, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Image from 'next/image'

interface ILaunchCardProps {
  launch: ILaunch
}

const Card: React.FC<ILaunchCardProps> = ({ launch }: ILaunchCardProps) => {
  return (
      <Box 
        key={launch?.id} 
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
            src={launch?.links?.mission_patch} 
            width={200}
            height={200}
            alt={launch?.mission_name}
          />
        </Box>
        <Box p='2' alignItems='baseline'>
          <Box display='flex' alignItems='flex-start' justifyContent='space-between'>
            <Box
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              isTruncated={true}
            >
              {launch?.mission_name}
            </Box>
            <Link href={launch?.links?.article_link}  isExternal>
              <ExternalLinkIcon mx='2px' />
            </Link>
          </Box>
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {launch?.rocket?.rocket_name}
          </Box>
          <Box
            mt='1'
            fontWeight='bold'
            as='h4'
            lineHeight='tight'
            isTruncated={true}
          >
            {launch?.details || 'No details available'}
          </Box>
        </Box>
      </Box>
  )
}

export default Card