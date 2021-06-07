import axios from "axios"

export async function getStoryIds() {
    const storyIds = await fetch ('https://hacker-news.firebaseio.com/v0/topstories.json').then(res => res.json())
    return storyIds.slice(0, 30)    
}

export async function getStory(id) {
    const story = await fetch (`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(res => res.json())
    return story
}

export async function getStories() {
    const storyIds = await getStoryIds()
    const stories = await storyIds.map(async (storyId) => await getStory(storyId))
    return Promise.all(stories)
}

export async function getCommentIds(id) {
    const commentIds = await fetch (`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(res => res.json())
    const ids = commentIds.kids.map(id => id)
    return ids
    
}

export async function getComment(id) {
    const comments = await fetch (`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(res => res.json())
    return comments
}

export async function getComments(commentIds) {
    const comments = await commentIds.kids.map(async (commentId) => await getComment(commentId))
    return Promise.all(comments)
}