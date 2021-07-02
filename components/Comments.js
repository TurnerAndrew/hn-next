import React from 'react'
import { useRouter } from 'next/router'
import { getComment, getStory } from '../functions/stories'

const Comments = (commentIds) => {
    

    return (
        <div>
              
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

export default Comments
