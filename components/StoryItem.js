import Link from 'next/link'
import {useEffect} from 'react'
import moment from 'moment'

const Story = ({story, number}) => {
    const time = moment.unix(story.time)

    return (
        <div>
            <span>
                <h5>{number} . </h5>
                <a href={`${story.url}`} target='_blank'>
                    <h5>{story.title}</h5>
                </a>
            </span>
            <span>
            <p>{story.score} points by {story.by} | {moment(time).fromNow()} | hide | {story.descendants} comments</p>
            </span>
            
        </div>
    )
}

export default Story


