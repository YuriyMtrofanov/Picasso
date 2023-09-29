import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Post = ({ id, title, body }) => {
    return (
        <div
            className="card m-1 shadow p-2"
            style={{
                background: "lightgray"
            }}
        >
            <div className="card-body">
                <h4 className="mb-1 ">{`${id}. ${title}`}</h4>
                <p className="card-text">{body.slice(0, 300)}</p>
                <h5 role="button">
                    <Link to={`/${id}`}>
                        ...Read more
                    </Link>
                </h5>
            </div>
        </div>
    );
};

Post.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    style: PropTypes.object
};

export default Post;
