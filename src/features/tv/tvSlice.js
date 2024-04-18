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
        console.log(response);
        console.log(response.data);
        return response.data;
    }
)



export const tvSlice = createSlice({
    name: "tv",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchNetflixOriginals.fulfilled, (state, action) => {
            state.netflixOriginals.data = action.payload;
        })
    }
})

export default tvSlice.reducer;




