import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../../utility/axios";
import { apirequests } from "../../utility/apireqeusts";

const initialState = {
    netflixOriginals: {
        status: "idle",
        data: null,
        error: null
    }
}

//fetch netflix originals
export const fetchNetflixOriginals = createAsyncThunk(
    "tv/fetchNetflixOriginals",
    async () => {
        const response = await axios.get(apirequests.getNetflixOriginals);
        return response.data;
    }
)



export const tvSlice = createSlice({
    name: "tv",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNetflixOriginals.pending, (state, action) => {
                state.netflixOriginals.status = "loading";
            })
            .addCase(fetchNetflixOriginals.fulfilled, (state, action) => {
                state.netflixOriginals.status = "success";
                state.netflixOriginals.data = action.payload;
            })
            .addCase(fetchNetflixOriginals.rejected, (state, action) => {
                state.netflixOriginals.status = "failed";
                state.netflixOriginals.error = action.error;
            })
    }
})


export const netflixOriginalsSelector = (state) => state.tv.netflixOriginals;

export default tvSlice.reducer;




