import Button from '../components/buttons/Button'
import SideBar from '../components/SideBar'
import Dashboard from './dashboard/Dashboard'

const Home = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <SideBar/>
      <Dashboard/>
    </div>
  )
}

export default Home