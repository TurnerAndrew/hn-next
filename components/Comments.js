import React from 'react'
import { useRouter } from 'next/router'
import { getComment, getStory } from '../functions/stories'

const Comments = (comments) => {
  
  const commentIds = comments.comments

  const commentDisplay = []
   
  const getComment = async (id) => {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    const commentResponse = await response.json()
    commentDisplay.push(commentResponse)
  }

  const getComments = async () => {
    const promises = Promise.all(commentIds.map(async comment => {
      await getComment(comment)
    }))
  }
  

  getComments()

  console.log(commentDisplay)

  // const commentsMapped = commentDisplay.map(comment => {
  //   <div className='comment'>
  //     <span><p>{comment.by}</p><p>{comment.time}</p></span>
  //     <span><p>{comment.text}</p></span>
  //   </div>
  // })


  return (
        <div>
            {/* {commentsMapped} */}
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
