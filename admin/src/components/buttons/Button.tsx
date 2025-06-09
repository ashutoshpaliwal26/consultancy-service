import type React from "react"
import type { ReactNode } from "react"

interface ButtonProps {
  children : ReactNode | string,
  width? : string,
  onChange? : () => void,
  className? : string,
  style? : React.CSSProperties,
  height? : string
}

const Button:React.FC<ButtonProps> = ({
  children, width, onChange, className, style, height
}) => {
  return (
    <button
      className={`${className ? className : "w-full h-fit p-3 bg-purple-800 text-white cursor-pointer outline-1 outline-gray-800 hover:bg-purple-500 hover:text-gray-200  font-roboto font-normal rounded-xl"}`}
      style={style || width ? {width : width, height : height} : style}
      onChange={onChange}
    >
      {children}
    </button>
  )
}

export default Button