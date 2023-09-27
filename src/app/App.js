import React from "react";
import Post from "./components/post";
import AppLoader from "./components/HOC/appLoader";
import { useSelector } from "react-redux";
import { getPostsList } from "./store/posts";

function App() {
    const posts = useSelector(getPostsList());
    return (
        <AppLoader>
            <div className="container p-3">
                {posts &&
                    posts.map(c => (
                        <Post
                            key={c.id}
                            title={c.title}
                            body={c.body}
                        />
                    ))
                }
            </div>
        </AppLoader>
    );
}

export default App;
