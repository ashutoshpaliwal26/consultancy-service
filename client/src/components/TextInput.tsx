import { useEffect, useRef, useState, type ChangeEvent, type HTMLInputTypeAttribute,  type ReactNode } from "react"
import type React from "react"
import RoundButton from "./buttons/RoundButton"

interface InputProps {
    icon?: ReactNode,
    type?: HTMLInputTypeAttribute,
    onChange?: (e: ChangeEvent) => void
    placeholder?: string,
    value?: string,
    name?: string,
    className?: string,
    style?: React.CSSProperties,
    tailwind? : string
}

const TextInput: React.FC<InputProps> = ({
    type,
    placeholder,
    value,
    name,
    onChange,
    style,
    className,
    icon,
    tailwind
}) => {
    const [active, setActive] = useState<boolean>(false);
    const divRef = useRef<HTMLDivElement>(null);

    const activeToggle = () => {
        setActive(true);
    }
    
    useEffect(() => {
        function handelClickOutSide (e:any) {
            if(divRef.current && !divRef.current.contains(e.target)){
                setActive(false);
            }
        }

        document.addEventListener("mousedown" , handelClickOutSide);

        return(() => {
            document.removeEventListener('mousedown', handelClickOutSide);
        })
        
    }, [])
    
    return (
        <div onClick={activeToggle} ref={divRef} className={`w-full h-fit rounded-xl p-1 gap-1 bg-gray-200 flex flex-row justify-between items-center ${active ? 'outline-1 active:outline-gray-600' : ''}`}>
            <RoundButton tailwind="text-gray-600" disable={true}>{icon}</RoundButton>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value} onChange={onChange}
                style={style}
                className={`${className ? "" : `bg-gray-200 w-full h-10 outline-none font-roboto placeholder:bg-gray-200 placeholder:font-roboto ${tailwind}`}`} 
            />
        </div>
    )
}

export default TextInput