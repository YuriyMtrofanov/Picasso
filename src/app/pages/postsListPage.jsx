import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { getPostsList } from "../store/posts";
import {
    AutoSizer,
    CellMeasurer,
    CellMeasurerCache,
    List
} from "react-virtualized";
import Post from "../components/cards/postCard";

const PostsListPage = () => {
    const postsList = useSelector(getPostsList());
    const cache = useRef(new CellMeasurerCache({
        fixedWidth: true,
        defaultHeight: 200
    }));
    if (!postsList) return "Loading...";
    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <AutoSizer>
                {({ width, height }) => (
                    <List
                        width={width}
                        height={height}
                        rowHeight={cache.current.rowHeight}
                        deferredMeasurementCache={cache.current}
                        rowCount={postsList.length}
                        rowRenderer={({ key, index, style, parent }) => {
                            const post = postsList[index];
                            return (
                                <CellMeasurer
                                    key={key}
                                    cache={cache.current}
                                    parent={parent}
                                    columnIndex={0}
                                    rowIndex={index}
                                >
                                    <div className="container mt-3 p-3" style={style}>
                                        <div className="row justify-content-center">
                                            <div className="col-10">
                                                <Post
                                                    id={post.id}
                                                    title={post.title}
                                                    body={post.body}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </CellMeasurer>
                            );
                        }}
                    >
                    </List>
                )}
            </AutoSizer>
        </div>
    );
};

export default PostsListPage;
