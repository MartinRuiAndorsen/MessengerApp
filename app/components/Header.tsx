'use client'
import Link from 'next/link'
import styles from './styles.module.css'
import { usePathname } from 'next/navigation'
import { ROUTES } from '../routes'

export default function Header() {
    const pathname = usePathname()
    
    return (
    <ul className={styles.nav}>
        <li className={pathname === ROUTES.Home.path ? styles.activeLink : ''}>
            <Link href={ROUTES.Home.path}>{ROUTES.Home.name}</Link>
        </li>
        <li className={pathname === ROUTES.About.path ? styles.activeLink : ''}>
            <Link href={ROUTES.About.path}>{ROUTES.About.name}</Link>
        </li>
    </ul>
    )
}