import { axiosClient } from './axiosClient'

type MovieType = "movie" | "series"

export interface MovieFromApi {
    Title: string;
    Year: string;
    imdbID: string;
    Type: MovieType;
    Poster: string;
}

export interface Movie {
    title: string;
    year: string;
    imdbid: string;
    type: MovieType;
    poster: string;
}

interface MoviesResponseFromApi {
    Search: MovieFromApi[]
    totalResults: string;
    Response: "True" | "False";
    Error: string;
}

type MoviesResponse = {
    data: Movie[]
    totalResults: number;
} | {
    error: string;
}

export const searchMoviesByName = (search: string, page = 1): Promise<MoviesResponse> => {
    return axiosClient
        .get<MoviesResponseFromApi>('', {
            params: {
                s: search,
                page: page
            },
        })
        .then(({ data }) => {
            const dataWithKeysInLowerCase = data.Search.map(movie => {
                return Object.fromEntries(
                    Object.entries(movie).map(([k, v]) => [k.toLowerCase(), v])
                ) as Movie;
            })

            return data.Response === "True" ? {
                data: dataWithKeysInLowerCase || [],
                totalResults: Number(data.totalResults) || 0,
            } : {
                error: data.Error
            }
        })
}