import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Footer from './Footer'
import Post from './Post';
import Admin from './Admin';

const theme = createTheme();

const PageMode = {
  Main: 'Main',
  Admin: 'Admin'
};

function MainPage( { apiBaseUrl, pageMode, post } ){
  if (pageMode === PageMode.Main){
    return (
      <Post post={post} />
    )
  } else if (pageMode === PageMode.Admin){
    return (
      <Admin apiBaseUrl={apiBaseUrl}/>
    )
  }
}

function BlogContainer({ apiBaseUrl }) {
  const [posts, setPosts] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [pageMode, setPageMode] = useState(PageMode.Main)

  const handleFirstPostRequested = () => {
    setPageMode(PageMode.Main);
    setSelectedPost(posts[0]);
  }

  const handleLatestPostRequested = () => {
    setPageMode(PageMode.Main);
    setSelectedPost(posts[posts.length - 1]);
  }

  const handleNameClick = () => {
    setPageMode(PageMode.Admin);
  }

  useEffect(() => {
    const handleFetchUpdate = () => {
      fetch(apiBaseUrl + "/posts")
        .then(res => res.json())
        .then(
          (result) => {
            setPosts(result.posts);
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
        <Header
          title="Thirty Knights"
          onFirstPostRequested={handleFirstPostRequested}
          onLatestPostRequested={handleLatestPostRequested} />
          <MainPage
            apiBaseUrl={apiBaseUrl}
            pageMode={pageMode}
            post={selectedPost} />
          {/* <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid> */}
      </Container>
      <Footer
        onNameClick={handleNameClick}
      />
    </ThemeProvider>
  )
}

export default BlogContainer
