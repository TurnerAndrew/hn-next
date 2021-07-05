import React from 'react'
import { useRouter } from 'next/router'
import { getComment, getStory } from '../functions/stories'

const Comments = (comments) => { 
  
  const commentIds = comments.comments
  
  const getComment = async (id) => {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    const commentResponse = await response.json()
    console.log(commentResponse)
  }

  const getComments = async () => {
    const promise = Promise.all(commentIds.map(comment => {
      getComment(comment).then()
    }))
    return promise.then(res => console.log(res))
  }

  getComments()

  return (
        <div>
            {/* {commentDisplay} */}
        </div>
    )
}

export async function getServerSideProps(router) {
    const comments = getStory(router.query.id)
        
    return {
      props: {
        comments
      }
    }
  }

export default Comments
