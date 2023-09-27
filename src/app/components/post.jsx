import React from "react";
import PropTypes from "prop-types";

const Post = ({ title, body }) => {
    return (
        <div
            className="card m-3"
            style={{
                backgroundColor: "gray"
            }}
        >
            <div className="card-body">
                <h4 className="mb-1 ">{title}</h4>
                <p className="card-text">{body}</p>
            </div>
        </div>
    );
};

Post.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string
};

export default Post;
