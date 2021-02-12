import {useRouter} from 'next/link'
import Link from 'next/link'

const Story = ({article}) => {
    const router = useRouter()

    const {story} = router.query

    return (
        <div>
            <Link to={`${article.url}`}>
                <h3><span>{article.title}</span></h3>
            </Link>
            <h3> by: {article.author}</h3>
            <h5>{article.score} points</h5>
            
        </div>
    )
}

export default Story

export const getServerSideProps = async (context) => {
    const res = fetch(`https://hacker-news.firebaseio.com/v0/item/${context.params.story}`)

    const article = await (await res).json()

    return {
        props: {
            article
        }
    }
}

