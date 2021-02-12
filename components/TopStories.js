import StoryItem from './StoryItem'

const TopStories = ({stories}) => {
    console.log(stories)
    return (
        <div>
            {stories.map(story => <StoryItem story={story}/>)}
        </div>
    )
}

export default TopStories
