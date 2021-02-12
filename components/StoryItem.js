import Link from 'next/link'
import {useEffect} from 'react'
import moment from 'moment'

const Story = ({story}) => {
    const time = moment.unix(story.time)

    return (
        <div>
            <span>
            <a href={`${story.url}`} target='_blank'>
                <h5><span>{story.title}</span></h5>
            </a>
            </span>
            <span>
            <p>{story.score} points by {story.by} | {moment(time).fromNow()} | hide | {story.descendants} comments</p>
            </span>
            
        </div>
    )
}

export default Story


