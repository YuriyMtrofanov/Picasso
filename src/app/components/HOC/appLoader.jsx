import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { loadPostsList, getPostsLoadingStatus } from "../../store/posts";

const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    const dataStatus = useSelector(getPostsLoadingStatus());
    useEffect(() => {
        dispatch(loadPostsList());
    }, []);
    if (dataStatus) return "loading...";
    return children;
};

AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default AppLoader;
