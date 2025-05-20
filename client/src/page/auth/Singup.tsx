import { AtSign, Lock, User } from "lucide-react"
import TextInput from "../../components/TextInput"
import Button from "../../components/buttons/Button"
import { useState } from "react"
import { Link } from "react-router-dom"

const Singup = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <form action="" className="flex flex-col w-full h-fit items-center justify-center gap-3">
      <div className="w-full h-full flex flex-col items-start">
        <label className="font-roboto">Name</label>
        <TextInput tailwind="text-gray-700" type="text" icon={<User />} placeholder="John Doe" />
      </div>
      <div className="w-full h-full flex flex-col items-start">
        <label className="font-roboto">Email</label>
        <TextInput tailwind="text-gray-700" type="email" icon={<AtSign />} placeholder="john@example.com" />
      </div>
      <div className="w-full h-full flex flex-col items-start">
        <label className="font-roboto">Password</label>
        <TextInput tailwind="text-gray-700" type={showPassword ? "text" : "password"} icon={<Lock />} placeholder="********" />
      </div>
      <div className="w-full h-full flex flex-col items-start gap-1">
        <label htmlFor="show_password" className="flex items-center gap-2 justify-center">
          <input id="show_password" type="checkbox" className="font-roboto" onChange={() => setShowPassword(!showPassword)} />
          Show Password
        </label>
        <Link to={"/"}>
          <p className="text-s text-purple-800 font-semibold">
            Forget Password
          </p>
        </Link>
      </div>
      <span className='w-full h-2'></span>
      <Button>Sign Up</Button>
    </form>
  )
}

export default Singup