import { createSlice } from "@reduxjs/toolkit";
import postsService from "../services/posts.service";

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        postsRequested: (state) => {
            state.isLoading = true;
        },
        postsReceved: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        postsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: postsReducer, actions } = postsSlice;
const {
    postsRequested,
    postsReceved,
    postsRequestFailed
} = actions;

export const loadPostsList = () => async (dispatch) => {
    dispatch(postsRequested());
    try {
        const content = await postsService.get();
        dispatch(postsReceved(content));
    } catch (error) {
        dispatch(postsRequestFailed(error.message));
    }
};

export const getPostsList = () => (state) => state.entities;
export const getPostsLoadingStatus = () => (state) => state.isLoading;
export const getPostById = (id) => (state) => {
    if (state.entities) {
        return state.entities.find((p) => p.id === id);
    }
};

export default postsReducer;
