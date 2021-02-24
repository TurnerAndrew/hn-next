import TopStories from '../components/TopStories'
import Header from '../components/Header'
import { getStories } from '../functions/stories'

const index = ({stories}) => {
  // console.log(topStories)
  return (
    <div>
      <Header/>
      <TopStories stories={stories}/>      
    </div>
  )
}

export default index

export async function getServerSideProps() {
  const stories = await getStories()

  return {
    props: {
      stories
    }
  }
}