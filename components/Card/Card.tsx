import { useState } from 'react'
import { ILaunch } from '@common/interfaces/launch.interface'
import { Box, Link, Center, Tooltip, Text, Image, Heading } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

interface ILaunchCardProps {
  launch: ILaunch
}

const Card: React.FC<ILaunchCardProps> = ({ launch }: ILaunchCardProps) => {
  const [isLabelOpen, setIsLabelOpen] = useState(false)

  return (
      <Box
        key={ launch?.id }
        maxW='sm'
        borderRadius='lg'
        overflow='hidden'
        boxShadow='dark-lg'
        rounded='md'
        bg='white'
        height='100%'
      >
        <Box 
          overflow='hidden'
          boxShadow='base' 
          bg='gray.400'
        >
          <Center p={2}>
            <Image
              src={ launch?.links?.mission_patch } 
              width={200}
              height={200}
              alt={ launch?.mission_name }
              fallbackSrc='https://via.placeholder.com/200'
              loading='lazy'
            />
          </Center>
        </Box>
        <Box p='2' alignItems='baseline'>
          <Box display='flex' alignItems='flex-start' justifyContent='space-between'>
            <Heading 
              mt='1'
              lineHeight='tight'
              fontSize='xl'
              color='black' 
              fontWeight='bold' 
              p={1} 
              isTruncated={true}
            >
              Mission: { launch?.mission_name }
            </Heading>
            <Link href={ launch?.links?.article_link } p={1} isExternal>
              <ExternalLinkIcon mx='2px' />
            </Link>
          </Box>
          <Text fontSize='sm' color='gray.500' p={1} fontWeight='semibold'>
            Rocket: { launch?.rocket?.rocket_name }
          </Text>
          <Tooltip 
            hasArrow 
            label={ launch?.details }
            bg='gray.300'
            color='black'
            placement='auto' 
            isOpen={isLabelOpen} 
          >
            <Text 
              fontSize='md' 
              color='black' 
              p={1} 
              fontWeight='semibold' 
              noOfLines={[3, 4, 5]}
              onMouseEnter={() => setIsLabelOpen(true)}
              onMouseLeave={() => setIsLabelOpen(false)}
              onClick={() => setIsLabelOpen(!isLabelOpen)}
            >
              { launch?.details || 'No details available' }
            </Text>
          </Tooltip>
        </Box>
      </Box>
  )
}

export default Card