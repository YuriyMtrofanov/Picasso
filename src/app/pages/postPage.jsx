import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getPostById } from "../store/posts";

const PostPage = () => {
    const { postId } = useParams();
    const post = useSelector(getPostById(Number(postId)));
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };
    if (post) {
        return (
            <div className="container p-3">
                <div
                    className="card m-3 shadow p-2"
                    style={{
                        background: "lightgray"
                    }}
                >
                    <div className="card-body">
                        <h4 className="card-title ">{`${post.id}. ${post.title}`}</h4>
                        <p className="card-text">{post.body}</p>
                    </div>
                    <a role="button" className="go-back p-3" onClick = {handleBack}>
                        <h5><i className="bi bi-arrow-left-short"/>Go back</h5>
                    </a>
                </div>
            </div>
        );
    } else {
        return (
            <Navigate to="/"/>
        );
    }
};

export default PostPage;
