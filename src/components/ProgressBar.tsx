import React from 'react'

type Props = {
    className?:string
}

const ProgressBar : React.FC<Props> = ({className}) => {
    return (
        <div className={`w-full bg-amber-200 rounded-full overflow-hidden ${className}`}>
            <div className='p-[2px] bg-amber-400 w-1/3'>
            </div>
        </div>
    )
}

export default ProgressBar