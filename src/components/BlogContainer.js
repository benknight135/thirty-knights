import React, { useState, useEffect } from 'react';

function PostItem({post}){
  return (
    <p>
      {post.title}
    </p>
  );
}

function PostsList({posts, isLoaded, error}){
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
        {posts.map(post => (
          <PostItem key={post.key} post={post} />
        ))}
      </div>
    )
  }
}

function BlogContainer({api_base_url}) {
  const [posts, setPosts] = useState(null);
  const [isPostsLoaded, setIsPostsLoaded] = useState(false);
  const [postsError, setPostsError] = useState(0);

  useEffect(()=>{
    const handleFetchUpdate = () => {
      fetch(api_base_url+"/posts")
      .then(res => res.json())
      .then(
        (result) => {
          setIsPostsLoaded(true);
          setPosts(result.posts);
        },
        (error) => {
          setIsPostsLoaded(true);
          setPostsError(error);
          console.log(error);
        }
      )
    }

    handleFetchUpdate();
  }, [api_base_url])
  
  return (
    <PostsList
      posts={posts}
      isLoaded={isPostsLoaded}
      error={postsError} />
  )
}

export default BlogContainer
