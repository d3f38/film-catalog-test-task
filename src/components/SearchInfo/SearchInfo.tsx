import { FC } from 'react'

import styles from './SearchInfo.module.scss'

interface SearchInfoProps {
    search: string
    totalResults: number
}

export const SearchInfo: FC<SearchInfoProps> = ({ search, totalResults }) => {
    return (
        <section className={styles.info}>
            You searched for: {search}, {totalResults} results found
        </section>
    )
}
