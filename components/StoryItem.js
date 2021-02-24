import Link from 'next/link'
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
                <p>{story.score} points by {story.by} | {moment(time).fromNow()} | hide | <Link href='/comments/[id]' as={`/comments/${story.id}`}>
                         <a>{story.descendants} comments</a>
                    </Link>
                </p>
            </span>
            
        </div>
    )
}

export default Story


