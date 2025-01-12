import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import bg from './assets/Images/bg-leaves.webp'


const Layout = () => {
  return (
    <>
    <div className='min-h-screen bg-cover bg-center bg-no-repeat bg-fixed' style={{backgroundImage: `url(${bg})`}} id='bg'>
      <Header />
      <Outlet /> {/*This is where the child routes will be rendered */}
      <Footer />
    </div>
    </>
  )
}

export default Layout
