import styles from './TopStories.module.css'
import StoryItem from './StoryItem'

const TopStories = ({stories}) => {
    return (
        <div className={styles.main}>
            {stories.map((story, index) => <StoryItem key={story.id} story={story} number={index +1}/>)}
        </div>
    )
}

export default TopStories
