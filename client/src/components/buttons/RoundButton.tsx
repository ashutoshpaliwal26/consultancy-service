import type { ReactNode } from "react"
import type React from "react"

interface RoundButtonProps {
    style? : React.CSSProperties,
    className? : string,
    children? : ReactNode | string,
    onChange? : () => {},
    disable : boolean,
    tailwind? : string
}

const RoundButton:React.FC<RoundButtonProps> = ({
    style,
    className,
    children,
    onChange ,
    disable=false,
    tailwind,
}) => {
  return (
    <button
        style={style}
        className={`${className ? className : `${tailwind} p-1 w-12 h-12 rounded-full ${disable ? '' : 'cursor-pointer'} flex items-center justify-center`}`}
        onChange={onChange}
        disabled={disable}
    >
        {children}
    </button>
  )
}

export default RoundButton