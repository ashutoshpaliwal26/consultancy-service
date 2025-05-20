import { Outlet, useNavigate } from 'react-router-dom'
import ToggleButton from '../../components/buttons/ToggleButton';
import { User, UserPlus } from 'lucide-react';

const AuthPage = () => {
  const navigate = useNavigate();

  const onClickLogin = () => {
    navigate("/auth/login")
  }

  const onClickSignup = () => {
    navigate("/auth/signup")
  }

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-gray-200'>
      <div className='w-1/3 h-fit flex items-center justify-center flex-col p-4 rounded-2xl bg-white'>
        <ToggleButton leftIcon={<User size={20}/>} rightIcon={<UserPlus size={20}/>} leftLable='Sign In' rightLabel='Sign Up' onClickLeft={onClickLogin} onClickRight={onClickSignup}/>
        <div className='w-xs'>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default AuthPage