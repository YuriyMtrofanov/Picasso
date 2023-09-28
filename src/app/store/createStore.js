import postsReducer from "./posts";

const { configureStore } = require("@reduxjs/toolkit");

export function createStore() {
    return configureStore({
        reducer: postsReducer
    });
};
