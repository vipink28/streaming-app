import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../utility/axios';
import { apirequests, endpoints, platformType } from "../../utility/apireqeusts";

const initialState = {
    upcoming: {
        status: "idle",
        data: null,
        error: null
    },
    popular: {
        status: "idle",
        data: null,
        error: null
    }
}

export const fetchUpcomingMovies = createAsyncThunk(
    "movie/fetchUpcomingMovies",
    async () => {
        const response = await axios.get(apirequests.getCollections(platformType.movie, endpoints.upcoming));
        return response.data;
    }
);

export const fetchPopularMovies = createAsyncThunk(
    "movie/fetchPopularMovies",
    async () => {
        const response = await axios.get(apirequests.getCollections(platformType.movie, endpoints.popular));
        return response.data;
    }
);



export const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUpcomingMovies.pending, (state, action) => {
                state.upcoming.status = "loading";
            })
            .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
                state.upcoming.status = "success";
                state.upcoming.data = action.payload;
            })
            .addCase(fetchUpcomingMovies.rejected, (state, action) => {
                state.upcoming.status = "failed";
                state.upcoming.error = action.error;
            })
            .addCase(fetchPopularMovies.pending, (state, action) => {
                state.popular.status = "loading";
            })
            .addCase(fetchPopularMovies.fulfilled, (state, action) => {
                state.popular.status = "success";
                state.popular.data = action.payload;
            })
            .addCase(fetchPopularMovies.rejected, (state, action) => {
                state.popular.status = "failed";
                state.popular.error = action.error;
            })
    }
})


export const upcomingMoviesSelector = (state) => state.movie.upcoming;
export const popularMoviesSelector = (state) => state.movie.popular;

export default movieSlice.reducer;

