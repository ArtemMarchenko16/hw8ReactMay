import React from 'react';
import {useStore} from "../../store";
import {IPost} from "../../models/IPost";

const ShowPostsPage = () => {

    const {postSlice: {allPosts}} =  useStore()

    return (
        <div>
            {
                allPosts.map((post: IPost) => <div key={post.id}>id: {post.id}, title: {post.title}</div>)
            }
        </div>
    );
};

export default ShowPostsPage;