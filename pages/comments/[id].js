import { useRouter } from 'next/router'

import Comments from '../../components/Comments'
import { getCommentIds } from '../../functions/stories'

const comments = () => {
   const router = useRouter()
   const {articleId} = router.query

    return (
        <div>
            <h1>{`${articleId}`}</h1>
            <Comments articleId={articleId}/>
        </div>
    )
}

export default comments

// export const getServerSideProps = async (context) => {
//     const commentIds = await getCommentIds()

//     return { 
//         props: {
//             commentIds
//         }
//     }
// }