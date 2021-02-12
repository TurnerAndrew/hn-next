import StoryItem from './StoryItem'

const TopStories = ({stories}) => {
    return (
        <div>
            {stories.map((story, index) => <StoryItem key={story.id} story={story} number={index +1}/>)}
        </div>
    )
}

export default TopStories
