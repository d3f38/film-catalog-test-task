import { FC, FormEvent, useRef } from 'react'

import styles from './Search.module.scss'

interface SearchProps {
    onSubmit: (search: string) => void
}

export const Search: FC<SearchProps> = ({ onSubmit }) => {
    const formRef = useRef(null)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        if (formRef.current) {
            const formdata = new FormData(formRef.current)
            onSubmit(formdata.get('search') as string)
        }
    }

    return (
        <form onSubmit={handleSubmit} ref={formRef} className={styles.form}>
            <input name="search" type="text" className={styles.input} />
        </form>
    )
}
