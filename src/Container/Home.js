import React, {useState, useEffect} from 'react'
import TitleList from '../Components/titlelist';
import Story from '../Components/Story';

const Home = () => {

    const [story, setStory] = useState([])
    const [listIds , setListIds]= useState([])
    const [storyInfo, setStoryInfo] =useState([])
    
    
    useEffect(()=>{
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
        .then(res => res.json())
        .then(data => setListIds(data.slice(0,20)))
        .catch(error => console.error(error))
    },[])


    useEffect(() => {
        const idToStory = listIds.map((id)=>{
            return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .then(res => res.json())
        })
        Promise.all(idToStory)
            .then(storyInfo => setStoryInfo(storyInfo))
    },[listIds])
    console.log(storyInfo)

    const handleSelectChange = (value) => {
        return setStory(value.url)
    }


    return (
        <>
        <TitleList storyInfo = {storyInfo} handleSelectChange={handleSelectChange}/>
        <Story story = {story}/>
        </>
    );
}

export default Home;