import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Footer from './Footer'
import Post from './Post';

const theme = createTheme();

function BlogContainer({ api_base_url }) {
  const [posts, setPosts] = useState(null);
  const [isPostsLoaded, setIsPostsLoaded] = useState(false);
  const [postsError, setPostsError] = useState(0);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleFirstPostRequested = () => {
    setSelectedPost(posts[0]);
  }

  const handleLatestPostRequested = () => {
    setSelectedPost(posts[posts.length - 1]);
  }

  useEffect(() => {
    const handleFetchUpdate = () => {
      fetch(api_base_url + "/posts")
        .then(res => res.json())
        .then(
          (result) => {
            setIsPostsLoaded(true);
            setPosts(result.posts);
            setSelectedPost(result.posts[result.posts.length - 1]);
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header
          title="Thirty Knights"
          onFirstPostRequested={handleFirstPostRequested}
          onLatestPostRequested={handleLatestPostRequested} />
        <main>
          <Post post={selectedPost} />
          {/* <MainFeaturedPost post={mainFeaturedPost} />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid>
        <Grid container spacing={5} sx={{ mt: 3 }}>
          <Main title="From the firehose" posts={posts} />
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid> */}
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  )
}

export default BlogContainer
