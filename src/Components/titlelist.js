import React from 'react'
import Story from './Story';

const TitleList = ({storyInfo, handleSelectChange}) => {


    const handleChange = (evt) => {
        const index = evt.target.value
        handleSelectChange(storyInfo[index])
    }

    const titleList = storyInfo.map((story, index) => {
        return <option key={index} value={index}>{story.title}</option>
    })


    return (
        <>
        <Story/>
        <select onChange={handleChange}>
                {titleList}
        </select>
        </>
    );
}

export default TitleList;