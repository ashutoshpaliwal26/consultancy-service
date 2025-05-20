import { AtSign, Lock } from 'lucide-react'
import Button from '../../components/buttons/Button'
import TextInput from '../../components/TextInput'
import { useState } from 'react'
const Login = () => {
    const [showPassword, setShowPassword] = useState<boolean>();
    
    return (
        <form action="" className="flex flex-col w-full h-fit items-center justify-center gap-3">
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

                <label htmlFor="atc" className="flex items-center gap-2 justify-center">
                    <input id="atc" type="checkbox" className="font-roboto" onChange={() => setShowPassword(!showPassword)} />
                    Accept Term and Conditions ? 
                </label>
            </div>
            <span className='w-full h-2'></span>
            <Button>Sign Up</Button>
        </form>
    )
}

export default Login