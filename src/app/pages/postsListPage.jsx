import React from "react";
import Post from "../components/cards/postCard";
import { useSelector } from "react-redux";
import { getPostsList } from "../store/posts";

const PostsListPage = () => {
    const posts = useSelector(getPostsList());
    return (
        <div className="container p-3">
            {posts &&
                posts.map(c => (
                    <Post
                        key={c.id}
                        id={c.id}
                        title={c.title}
                        body={c.body}
                    />
                ))
            }
        </div>
    );
};

export default PostsListPage;
