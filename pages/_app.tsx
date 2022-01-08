import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client'
import client from '@common/apollo-client'
import theme from '@common/styles/theme'

export default function MyApp({ Component, pageProps }) {

  return (
    <ApolloProvider client={ client } >
      <ChakraProvider theme={ theme } >
        <Component { ...pageProps } />
      </ChakraProvider>
    </ApolloProvider>
  )
}
