import {MoviesResponse} from "../logic/store/slices/movies-slice.ts";
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://gist.githubusercontent.com/'
})
export const moviesAPI = {

    async getMovies(){
        const response = await instance.get<MoviesResponse[]>('saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON')
        return response.data
    }
}