import Link from 'next/link'
import moment from 'moment'
import styles from './StoryItem.module.css'

const Story = ({story, number}) => {
    const time = moment.unix(story.time)

    return (
        <div className={styles.story}>
            <span className={styles.title}>
                <p>{number}. </p>
                <a href={`${story.url}`} target='_blank' className={styles.link}>
                    <p>{story.title}</p>
                </a>
            </span>
            <span className={styles.stats}>
                <p>
                    {story.score} points by {story.by} | {moment(time).fromNow()} | hide | <Link href='/comments/[id]' as={`/comments/${story.id}`}>
                         <a>{story.descendants} comments</a>
                    </Link>
                </p>
            </span>
            
        </div>
    )
}

export default Story


