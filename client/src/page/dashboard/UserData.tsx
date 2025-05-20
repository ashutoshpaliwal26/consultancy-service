import React from 'react'
import UserCard from '../../components/card/UserCard'

const data = [
  {
    id : "1" , name : "Ram Sharma" , createdAt : "24/4/2024"
  },
  {
    id : "2" , name : "Shyam Sharma" , createdAt : "25/3/2025"
  },
  {
    id : "3" , name : "Jatin Narayan" , createdAt : "26/1/2023"
  },
]

const UserData = () => {
  
  return (
    <div className='flex flex-col items-start justify-start w-full h-full gap-8'>
      <div>
        <h1 className='text-2xl font-roboto'>Register Users</h1>
      </div>
      <div className='w-full h-fit flex flex-col gap-5'>
        {
          data.map((ele) => {
            return <UserCard name={ele.name} createAt={ele.createdAt} email={ele.name} id={ele.id} verified='true'/>
          })
        }
      </div>
    </div>
  )
}

export default UserData