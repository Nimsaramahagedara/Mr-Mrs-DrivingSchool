import React from 'react'
import ReactPlayer from 'react-player/youtube'

type Props = {
    link?: string
}

const YoutubeVideo = (props: Props) => {
    return (
        <div className='rounded-full overflow-hidden aspect-square'>
            <ReactPlayer url={props.link} width={'100%'} height={'100%'}/>
        </div>

    )
}

export default YoutubeVideo