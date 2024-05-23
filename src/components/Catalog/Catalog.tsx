import { FC } from 'react'
import { MovieCard } from '../MovieCard/MovieCard'
import { Movie } from '../../api/movies'
import styles from './Catalog.module.scss'

export const Catalog: FC<{ movies: Movie[] }> = ({ movies }) => {
    return (
        <main className={styles.catalog}>
            {movies.map((movie) => (
                <MovieCard key={movie.imdbid} {...movie} />
            ))}
        </main>
    )
}
