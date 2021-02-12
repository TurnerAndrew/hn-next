import TopStories from '../components/TopStories'
import { getStories } from '../functions/stories'

const index = ({stories}) => {
  // console.log(topStories)
  return (
    <div>
      <TopStories stories={stories}/>      
    </div>
  )
}

export default index

export async function getStaticProps() {
  const stories = await getStories()

  return {
    props: {
      stories
    }
  }
}