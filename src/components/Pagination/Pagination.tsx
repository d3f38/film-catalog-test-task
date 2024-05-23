import { FC } from 'react'
import classNames from 'classnames'

import styles from './Pagination.module.scss'

interface PaginationProps {
    activePage: number
    setActivePage: (page: number) => void
    moviesPerPage: number
    totalMovies: number
    paginate: (page: number) => void
}

export const Pagination: FC<PaginationProps> = ({
    activePage,
    setActivePage,
    moviesPerPage,
    totalMovies,
    paginate,
}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
        pageNumbers.push(i)
    }

    const handleClick = (page: number) => {
        setActivePage(page)
        paginate(page)
    }

    return (
        <nav className={styles.wrapper}>
            <ul className={styles.pages}>
                {pageNumbers.map((number) => (
                    <li
                        key={number}
                        className={classNames({
                            [styles.active]: activePage === number,
                        })}
                    >
                        <button onClick={() => handleClick(number)}>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
