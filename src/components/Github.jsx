import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";   
export default function Github(){
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])
    return (
        <div>GitHub Followers: {data.followers}</div>
    )
}

export const gitHubLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}