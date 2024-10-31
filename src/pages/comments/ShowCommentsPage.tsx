import React from 'react';
import {useStore} from "../../store";
import {IComment} from "../../models/IComment";

const ShowCommentsPage = () => {

    const {commentsSlice: {allComments}} = useStore()

    return (
        <div>
            {
                allComments.map((comment: IComment) => <div key={comment.id}>id: {comment.id}, name: {comment.name}</div>)
            }
        </div>
    );
};

export default ShowCommentsPage;