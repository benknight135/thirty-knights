import React, { useState, useEffect } from 'react';

function PostInfoItem({postInfo}){
  return (
    <p>
      {postInfo.title}
    </p>
  );
}

function PostsInfoList({postsInfo, isLoaded, error}){
  if (!isLoaded){
    return(
      <div>
        <p>Loading...</p>
      </div>
    )
  } else if (error){
    return(
      <div>
        <p>Failed to load posts</p>
      </div>
    )
  } else {
    return(
      <div>
        {postsInfo.map(postInfo => (
          <PostInfoItem key={postInfo.key} postInfo={postInfo} />
        ))}
      </div>
    )
  }
}

function BlogContainer({api_base_url}) {
  const [postsInfo, setPostsInfo] = useState(null);
  const [isPostsInfoLoaded, setIsPostsInfoLoaded] = useState(false);
  const [postsInfoError, setPostsInfoError] = useState(0);

  useEffect(()=>{
    const handleFetchUpdate = () => {
      fetch(api_base_url+"/postsinfo")
      .then(res => res.json())
      .then(
        (result) => {
          setIsPostsInfoLoaded(true);
          setPostsInfo(result.info);
        },
        (error) => {
          setIsPostsInfoLoaded(true);
          setPostsInfoError(error);
          console.log(error);
        }
      )
    }

    handleFetchUpdate();
  }, [api_base_url])
  
  return (
    <PostsInfoList
      postsInfo={postsInfo}
      isLoaded={isPostsInfoLoaded}
      error={postsInfoError} />
  )
}

export default BlogContainer
