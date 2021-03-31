import Comments from '../../../components/Comments'
import { getCommentIds } from '../../../functions/stories'

const comments = ({commentIds}) => {
   
    return (
        <div>
            <Comments commentIds={commentIds}/>
        </div>
    )
}

export default comments

export const getServerSideProps = async (context) => {
    const commentIds = await getCommentIds()

    return { 
        props: {
            commentIds
        }
    }
}