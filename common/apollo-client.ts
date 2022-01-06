import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_SPACE_X_API as string,
    cache: new InMemoryCache(),
})

export default client