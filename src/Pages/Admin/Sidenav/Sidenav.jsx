import React from 'react'
import styles from './Sidenav.module.scss'
import { Home, Video, FolderOpen, Location, DirectboxSend, Maximize3, User } from 'iconsax-react'
import {Box} from '@chakra-ui/react'

const Sidenav = () => {
    return (
        <Box position={'relative'} top='-330px' left='30px' className={styles.sidenav_container}>
            <nav>
                <ul>
                    <li className={styles.max_con}>
                        <Maximize3 className={styles.maximize} />
                    </li>
                    <li>
                        <Home />
                        <span>Home</span>
                    </li>
                    <li>
                        <Video />
                        <span>Meeting</span>
                    </li>
                    <li>
                        <User />
                        <span>Users</span>
                    </li>
                    <li>
                        <FolderOpen />
                        <span>Records</span>
                    </li>
                    <li>
                        <DirectboxSend />
                        <span>Send Files</span>
                    </li>
                    <li>
                        <Location />
                        <span>Location</span>
                    </li>
                </ul>
            </nav>
        </Box>
    )
}

export default Sidenav