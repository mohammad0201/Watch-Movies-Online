import React, { useEffect } from "react";
import MovieListing from "../Movie/Listing/Listing"

import { useDispatch } from "react-redux";
import {
    fetchAsyncMovies,
    fetchAsyncShows,
} from "features/Slice/MovieService.js";


const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAsyncMovies());
        dispatch(fetchAsyncShows());
    }, [dispatch]);
    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing />
        </div>
    );
};

export default Home;