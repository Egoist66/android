import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {moviesAPI} from "../../../api/moviesAPI.ts";

export type MoviesResponse = {
    Title: string
    Year: string
    Rated: string
    Released: string
    Runtime: string
    Genre: string
    Director: string
    Writer: string
    Actors: string
    Plot: string
    Language: string
    Country: string
    Awards: string
    Poster: string
    Metascore: string
    imdbRating: string
    imdbVotes: string
    imdbID: string
    Type: string
    Response: string
    Images: string[]
}

type InitialStateType = {
    movies: MoviesResponse[]
    status: 'idle' | 'pending' | 'succeeded' | 'failed'
    error: null | string | undefined
}
const initialState: InitialStateType = {
    movies: [],
    status: 'idle',
    error: null
}




export const fetchMovies = createAsyncThunk<MoviesResponse[]>(
    'movies/fetch',
    async (_, {rejectWithValue}) => {
        try {
            return await moviesAPI.getMovies()
        }
        catch (e) {
            console.log(rejectWithValue(e))
            return rejectWithValue(e)
        }
    }

)



const MoviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state) => {
            state.status = 'pending'
            state.error = null
        })

        builder.addCase(fetchMovies.fulfilled, (state, action: PayloadAction<MoviesResponse[]>) => {
            state.status = 'succeeded'
            state.movies.push(...action.payload)
        })

        builder.addCase(fetchMovies.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message

        })




    }

})
const MoviesReducer = MoviesSlice.reducer
export default MoviesReducer
export const {} = MoviesSlice.actions