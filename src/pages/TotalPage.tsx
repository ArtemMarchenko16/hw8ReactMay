import React, {useEffect, useState} from 'react';
import {useStore} from "../store";
import {IPost} from "../models/IPost";
import {ShowPostsWithComments} from "../showPostsWithComments/ShowPostsWithComments";


const TotalPage = () => {
    let {postSlice: {allPosts}, commentsSlice: {allComments}} = useStore();
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        let postsModel = ShowPostsWithComments(allPosts, allComments);
        setPosts(postsModel);

    }, []);

    return (
        <ul>
            {
                posts.map((post) => <li key={post.id}><div>postTitle: {post.title}</div> <ol>{post.comments.map((comment) => <li key={comment.id}>commentName: {comment.name}</li>)}</ol></li>)
            }
        </ul>
    );
};

export default TotalPage;