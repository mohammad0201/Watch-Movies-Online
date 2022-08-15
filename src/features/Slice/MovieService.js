import { createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "service/apis/movieApi";
import { APIKey } from "service/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies",
    async () => {
        const movieText = "Harry";
        const response = await movieApi.get(
            `?apiKey=${APIKey}&s=${movieText}&type=movie`
        );
        return response.data;
    }
);
export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async () => {
        const seriesText = "Friends";
        const response = await movieApi.get(
            `?apiKey=${APIKey}&s=${seriesText}&type=series`
        );
        return response.data;
    }
);
export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowDetail",
    async (id) => {
        const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
        return response.data;
    }
);