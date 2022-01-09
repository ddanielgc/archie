import { Heading, Flex } from '@chakra-ui/react'

const Header: React.FC = () => {

  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      padding={6}
      bg='black'
      color='white'
      boxShadow='2xl'
    >
      <Flex align='center' mr={5}>
        <Heading as='h5' size='xl' isTruncated color='white'>
          SpaceX launches
        </Heading>
      </Flex>
    </Flex>
  )
}

export default Header
