import { FC } from 'react'
import { Movie } from '../../api/movies'
import imagePlaceholder from './../../assets/img-placeholder.png'

import styles from './MovieCard.module.scss'

interface MovieCardProps extends Movie {}

export const MovieCard: FC<MovieCardProps> = ({
    poster,
    title,
    imdbid,
    year,
    type,
}) => {
    return (
        <article className={styles.card}>
            <img
                className={styles.poster}
                src={poster === 'N/A' ? imagePlaceholder : poster}
            />

            <div className={styles.description}>
                <p className={styles.name}>Name: {title}</p>
                <p className={styles.year}>Year: {year}</p>
                <p className={styles.rate}>imdbID: {imdbid}</p>
                <p className={styles.type}>Type: {type}</p>
            </div>
        </article>
    )
}
