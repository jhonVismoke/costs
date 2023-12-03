import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li className={styles.facebook}>
                    <FaFacebook size={32}/>
                </li>
                <li className={styles.instagram}>
                    <FaInstagram size={32}/>
                </li>
                <li className={styles.linkedin}>
                    <FaLinkedin size={32}/>
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>Costs</span> &copy; 2023
            </p>
        </footer>
    )
}

export default Footer