import {IComment} from "../models/IComment";
import {IPost} from "../models/IPost";

export const ShowPostsWithComments = (posts: IPost[], comments: IComment[]): IPost[] => {
    let postModel: IPost[] = posts.map((post: IPost) => ({...post, comments: []}));

    for (const post of postModel) {
        for (const comment of comments) {
            if(post.id === comment.postId){
                post.comments.push(comment)
            }
        }
    }

    return postModel
}