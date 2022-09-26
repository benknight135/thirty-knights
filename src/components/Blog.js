import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Header from './Header';
import PostListBar from './PostListBar';
import Footer from './Footer'
import Post from './Post';
import Admin from './Admin';
import Sidebar from './Sidebar';

const theme = createTheme();

const PageMode = {
  Main: 'Main',
  Admin: 'Admin'
};

function MainPage( { apiBaseUrl, pageMode, post, posts, onPostRequested } ){
  const handlePostRequested = (index) => {
    onPostRequested(index);
  }

  const showSidebar = false;

  const sideBar = showSidebar && <Sidebar posts={posts} onPostRequested={(index) => handlePostRequested(index)}/>
  var content; 
  if (pageMode === PageMode.Main){
    content = <Post post={post} />;
  } else if (pageMode === PageMode.Admin){
    content = <Admin apiBaseUrl={apiBaseUrl}/>;
  }

  return (
    <Grid container>
      <Grid item xs={0.25}>
        {sideBar}
      </Grid>
      <Grid item xs={11.5}>
        {content}
      </Grid>
      <Grid item xs={0.25}></Grid>
    </Grid>
  )
}

function BlogContainer({ apiBaseUrl }) {
  const [posts, setPosts] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedPostIndex, setSelectedPostIndex] = useState(0);
  const [pageMode, setPageMode] = useState(PageMode.Main)
  
  const scrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  } 

  const handleFirstPostRequested = () => {
    handlePostRequested(0);
    scrollToTop();
  }

  const handleLatestPostRequested = () => {
    var newPostIndex = posts.length - 1;
    if (newPostIndex < 0 {
      newPostIndex = 0;
    }  
    handlePostRequested(newPostIndex);
    scrollToTop();
  }

  const handleNextPostRequested = () => {
    var newPostIndex = selectedPostIndex + 1;
    if (newPostIndex > (posts.length - 1)){
      newPostIndex = posts.length - 1;
    }
    handlePostRequested(newPostIndex);
    scrollToTop();
  }

  const handlePreviousPostRequested = () => {
    var newPostIndex = selectedPostIndex - 1;
    if (newPostIndex < 0){
      newPostIndex = 0;
    }
    handlePostRequested(newPostIndex);
    scrollToTop();
  }

  const handlePostRequested = (index) => {
    setPageMode(PageMode.Main);
    setSelectedPost(posts[index]);
    setSelectedPostIndex(index);
  }
 
  const handleSecretClick = () => {
    setPageMode(PageMode.Admin);
  }

  useEffect(() => {
    const handleFetchUpdate = () => {
      fetch(apiBaseUrl + "/posts")
        .then(res => res.json())
        .then(
          (result) => {
            setPosts(result.posts);
            setSelectedPostIndex(result.posts.length - 1);
            setSelectedPost(result.posts[result.posts.length - 1]);
          },
          (error) => {
            console.log(error);
          }
        )
    }

    handleFetchUpdate();
  }, [apiBaseUrl])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Thirty Knights" />
          <PostListBar
          onFirstPostRequested={handleFirstPostRequested}
          onLatestPostRequested={handleLatestPostRequested}
          onNextPostRequested={handleNextPostRequested}
          onPreviousPostRequested={handlePreviousPostRequested} />
              <MainPage
                apiBaseUrl={apiBaseUrl}
                pageMode={pageMode}
                post={selectedPost}
                posts={posts}
                onPostRequested={(index) => handlePostRequested(index)} />
            <PostListBar
          onFirstPostRequested={handleFirstPostRequested}
          onLatestPostRequested={handleLatestPostRequested}
          onNextPostRequested={handleNextPostRequested}
          onPreviousPostRequested={handlePreviousPostRequested} />
      </Container>
      <Footer
        onSecretClick={handleSecretClick}
      />
    </ThemeProvider>
  )
}

export default BlogContainer
