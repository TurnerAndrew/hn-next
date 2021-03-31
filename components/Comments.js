import React from 'react'

const Comments = (articleId) => {
    return (
        <div>
            <h1>{`This is the comments page for article ${articleId} `}</h1>
            
        </div>
    )
}

export default Comments

export async function getServerSideProps(commentIds) {
    const comments = getComments(commentIds)
    console.log(comments)
  
    return {
      props: {
        comments
      }
    }
  }
