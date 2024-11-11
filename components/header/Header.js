import Link from 'next/link'
import React from 'react'
import logoImg from '@/assets/logo.png'
import classes from './Header.module.css'
import Image from 'next/image'
import HeaderBackground from './HeaderBackground'
import NavLink from './NavLink'

const Header = () => {
  return (
    <>
      <HeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="logo" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodie Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header