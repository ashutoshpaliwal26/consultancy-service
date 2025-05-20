import React, { useState, type ReactNode } from 'react'
import RoundButton from './RoundButton';

interface ToggleButtonProps {
    rightLabel: string,
    leftLable: string,
    onClickRight: () => void,
    onClickLeft: () => void,
    leftIcon? : ReactNode,
    rightIcon? : ReactNode
}

const ToggleButton: React.FC<ToggleButtonProps> = ({leftIcon, rightIcon, leftLable, rightLabel, onClickLeft, onClickRight }) => {
    const [theam, setTheam] = useState<boolean>(false);


    const signUpToggle = () => {
        setTheam(true);
        onClickLeft();
    }

    const loginToggle = () => {
        setTheam(false);
        onClickRight();
    }

    return (
        <div className={'px-2 w-80 h-16 relative bg-white rounded-3xl'}>
            <div className={`absolute z-0 w-1/2 h-12 bg-purple-800 top-2 transition ease-linear ${theam ? 'translate-x-0' : 'translate-x-36'} rounded-3xl`} ></div>
            <button onClick={signUpToggle} className={`${theam ? 'text-white' : ""} absolute z-10 w-1/2 h-12 left-0 top-2 flex justify-center items-center cursor-pointer text-black`}>
                {/* 64/2 32  */}
                <RoundButton tailwind='bg-tanspirent' children={leftIcon} disable={true} />
                {leftLable}
            </button>
            <button onClick={loginToggle} className={`${!theam ? 'text-white' : ""} absolute w-1/2 h-12 right-2 top-2 flex justify-center items-center cursor-pointer`}>
                <RoundButton children={rightIcon} disable={true} />
                {rightLabel}
            </button>
        </div>
    )
}

export default ToggleButton