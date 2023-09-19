import

const postsHandler = async () => {
    const posts = await getPosts();
    posts.forEach((postData) => {
        const postDom = createPost(postData);
        dom.root.append(postDom);
    });
};
