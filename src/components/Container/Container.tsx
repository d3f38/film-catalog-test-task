import { FC } from 'react'
import classNames from 'classnames'

import styles from './Container.module.scss'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export const Container: FC<ContainerProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <div {...props} className={classNames(styles.container, className)}>
            {children}
        </div>
    )
}
