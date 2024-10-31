import React, {useEffect} from 'react';
import {useStore} from "../../store";
import {getPosts} from "../../services/api.service";
import ShowPostsPage from "./ShowPostsPage";

const PostsPage = () => {

    const {postSlice: {loadPosts}} = useStore()

    useEffect(() => {
        getPosts()
            .then(value => {
                loadPosts(value)
            })
    }, []);

    return (
        <div>
            <ShowPostsPage/>
        </div>
    );
};

export default PostsPage;