import { useEffect, useState } from 'react'
import { Header } from '../../components/Header/Header'

import { searchMoviesByName } from '../../api/movies'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { Catalog } from '../../components/Catalog/Catalog'
import { Pagination } from '../../components/Pagination/Pagination'
import { Container } from '../../components/Container/Container'

import { Loader } from '../../components/Loader/Loader'

import styles from './Main.module.scss'
import { SearchInfo } from '../../components/SearchInfo/SearchInfo'

function Main() {
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')

    const { data, isFetching, refetch } = useQuery({
        queryKey: ['movies', page, search],
        queryFn: () => searchMoviesByName(search, page),
        placeholderData: keepPreviousData,
        enabled: false,
    })

    useEffect(() => {
        refetch()
        setPage(1)
    }, [search, refetch])

    useEffect(() => {
        refetch()
    }, [page, refetch])

    return (
        <div>
            <Header setSearch={setSearch} />
            {isFetching ? (
                <Container className={styles.statusWrapper}>
                    <Loader />
                </Container>
            ) : data && 'data' in data ? (
                <Container>
                    <SearchInfo
                        search={search}
                        totalResults={data.totalResults}
                    />
                    <Catalog movies={data?.data || []} />
                    <Pagination
                        activePage={page}
                        setActivePage={setPage}
                        moviesPerPage={10}
                        totalMovies={data?.totalResults}
                        paginate={setPage}
                    />
                </Container>
            ) : (
                <Container className={styles.statusWrapper}>
                    {data?.error}
                </Container>
            )}
        </div>
    )
}

export default Main
