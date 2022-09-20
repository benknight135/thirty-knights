

function PostsList({ posts, isLoaded, error }) {
    if (!isLoaded) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    } else if (error) {
        return (
            <div>
                <p>Failed to load posts</p>
            </div>
        )
    } else {
        return (
            <div>
                {posts.map(post => (
                    <PostItem key={post.key} post={post} />
                ))}
            </div>
        )
    }
}

export default PostList