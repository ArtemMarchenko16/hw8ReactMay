import React, {useEffect} from 'react';
import ShowCommentsPage from "./ShowCommentsPage";
import {useStore} from "../../store";
import {getComments} from "../../services/api.service";

const CommentsPage = () => {

    const {commentsSlice: {loadComments}} = useStore()
    useEffect(() => {
        getComments()
            .then(value => {
                loadComments(value)
            })
    }, []);

    return (
        <div>
            <ShowCommentsPage/>
        </div>
    );
};

export default CommentsPage;