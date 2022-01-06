
import Layout from '@components/Layout'
import { useGetLaunches } from '@hooks/launches/useGetLaunhces'
import LaunchesGrid from '@components/LaunchGrid'

const IndexPage: React.FC = () => {
  const launches = useGetLaunches()

  return (
    <Layout title='Home | Archie Test | Space-X launches'>
      <LaunchesGrid launches={ launches || []} />
    </Layout>
  )
}

export default IndexPage
