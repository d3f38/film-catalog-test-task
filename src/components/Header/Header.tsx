import { Container } from '../Container/Container'
import styles from './Header.module.scss'
import { Search } from '../Search/Search'
import { UserProfile } from '../UserProfile/UserProfile'
import { FC } from 'react'

interface HeaderProps {
    setSearch: (search: string) => void
}

export const Header: FC<HeaderProps> = ({ setSearch }) => {
    return (
        <header className={styles.header}>
            <Container className={styles.headerContainer}>
                <h1 className={styles.title}>Movie Catalog</h1>
                <Search onSubmit={setSearch} />
                <UserProfile name={'Alexander Borisenko'} />
            </Container>
        </header>
    )
}
