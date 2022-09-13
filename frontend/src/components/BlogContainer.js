import React, { useState, useEffect } from 'react';

function BlogContainer({api_base_url}) {
  const [apiServerTime, setApiServerTime] = useState(null);
  const [isApiServerTimetLoaded, setIsApiServerTimeLoaded] = useState(false);
  const [apiServerTimeError, setApiServerTimeError] = useState(0);

  // useEffect(()=>{
  //   handleTime();
  // }, [])

  useEffect(()=>{
    handleTime();
  })

  const handleTime = () => {
    fetch(api_base_url+"/time")
    .then(res => res.json())
    .then(
      (result) => {
        setIsApiServerTimeLoaded(true);
        setApiServerTime(result.time);
      },
      (error) => {
        setIsApiServerTimeLoaded(true);
        setApiServerTimeError(error);
        console.log(error);
      }
    )
  }

  const timeText = (serverTime, isLoaded, error) => {
    if (!isLoaded){
      return "Loading..."
    }
    if (error){
      return "Failed to load server time";
    }
    return serverTime
  }
  
  return (
    <div>
      <h1>The time is: {timeText(apiServerTime, isApiServerTimetLoaded, apiServerTimeError)}</h1>
    </div>
  )
}

export default BlogContainer
