import React from 'react'
import { useRouter } from 'next/router'
import { getComment } from '../functions/stories'

const Comments = (comments) => {
  const router = useRouter()
  const articleId = router.query.id
  console.log(comments)
    return (
        <div>
            <h1>{`This is the comments page for article ${articleId} `}</h1>            
        </div>
    )
}

export default Comments

export async function getStaticProps(articleId) {
    const comments = getComment(articleId)  
    return {
      props: {
        comments
      }
    }
  }
