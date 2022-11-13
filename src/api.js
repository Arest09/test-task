const baseUrl = 'https://hacker-news.firebaseio.com/v0/';   ///https://hacker-news.firebaseio.com/v0/newstories.json
const storyUrl = `${baseUrl}item/`                         ///https://hacker-news.firebaseio.com/v0/item/33506331.json?print=pretty



export const getStoriesId = async() =>{
    let response = await fetch(`${baseUrl}newstories.json`);
    let id = await response.json(); 
    return id;
}

export const getStories = async(storyId) =>{
    let response = await fetch(`${storyUrl}${storyId}.json?print=pretty`);
    let story = await response.json(); 
    return story;
}
