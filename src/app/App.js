import React from "react";
import AppLoader from "./components/HOC/appLoader";
import PostsListPage from "./pages/postsListPage";
import PostPage from "./pages/postPage";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";

function App() {
    return (
        <AppLoader>
            <Routes>
                <Route path="" element={<Outlet />}>
                    <Route path="" element={<PostsListPage/>}/>
                    <Route path=":postId" element={<PostPage/>}/>
                </Route>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </AppLoader>
    );
}

export default App;
