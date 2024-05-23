import { FC } from 'react'
import profileIcon from './../../assets/user.png'

import styles from './UserProfile.module.scss'

interface UserProfileProps {
    name: string
}

export const UserProfile: FC<UserProfileProps> = ({ name }) => {
    return (
        <div className={styles.container}>
            <img src={profileIcon} alt="profile-icon" className={styles.icon} />
            <span className={styles.name}>{name}</span>
            <span>▼</span>
        </div>
    )
}
