import {Action, AnyAction, configureStore, ThunkDispatch, Tuple} from "@reduxjs/toolkit";
import {logger} from 'redux-logger'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import MoviesReducer from "./slices/movies-slice.ts";


export const store = configureStore({
    reducer: {
        movies: MoviesReducer,
    },

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunkDispatch = ThunkDispatch<RootState, any, Action>


export const useAppDispatch: () => AppThunkDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector