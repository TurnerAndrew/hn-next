import { useRouter } from 'next/router'
import { getStory } from '../../functions/stories'
import Comments from '../../components/Comments'

const comments = (comments) => {
   const router = useRouter()
   const articleId = router.query.id
   const commentIds = comments.comments.kids
  
    return (
        <div>
            <h1>{`${articleId}`}</h1>
            <Comments article={articleId} comments={commentIds} />
        </div>
    )
}

export async function getServerSideProps(router) {
    const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${router.query.id}.json`)
    const json = await res.json()
    const comments = json
    
    return {
      props: {
        comments
      }
    }
  }

export default comments
