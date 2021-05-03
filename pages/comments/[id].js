import { useRouter } from 'next/router'

import Comments from '../../components/Comments'
import { getCommentIds } from '../../functions/stories'

const comments = () => {
   const router = useRouter()
   const articleId = router.query.id

    return (
        <div>
            <h1>{`${articleId}`}</h1>
            <Comments articleId={articleId}/>
        </div>
    )
}

export default comments
