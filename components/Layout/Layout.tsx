import { ReactNode } from 'react'
import { Header, Head } from '@components/index'

type ILayoutProps = {
  children?: ReactNode
}

const Layout: React.FC<ILayoutProps>  = ({ children }: ILayoutProps) => (
  <>
    <Head />
    <Header />
    { children }
  </>
)

export default Layout
