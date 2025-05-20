import React from 'react'
import RoundButton from '../buttons/RoundButton'
import { User } from 'lucide-react'

interface UserDetailsProps {
    id : string,
    name : string,
    email : string,
    createAt : string,
    verified : string
}

const UserCard:React.FC<UserDetailsProps> = ({
    id, name, email, createAt
}) => {
  return (
    <div key={id} className='outline-1 outline-gray-400 w-full gap-4 h-20 p-4 bg-gray-300 flex items-center justify-between rounded-xl'>
        <RoundButton disable={true} tailwind='bg-gray-200'><User size={80}/></RoundButton>
        <div className='w-full h-full p-4 flex flex-col items-start justify-center'>
            <p className='font-roboto font-bold text-gray-900'>{name}</p>
            <p className='font-roboto text-gray-500'>{email}</p>
        </div>
        <div className='w-60 h-full flex items-center justify-evenly gap-4'>
            <p>{createAt}</p>
            <div className='w-4 h-4 rounded-full bg-green-600 outline-1 outline-gray-500 outline-offset-2'></div>
        </div>
    </div>
  )
}

export default UserCard