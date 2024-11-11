import Link from 'next/link'
import React from 'react'
import classes from './not-found.module.css'

const NotFound = () => {
  return (
    <>
      <main className='not-found'>
        <h1>Not Found</h1>
        <p>Unfortunately, we could not find the page you are looking for.</p>
        <div className={classes.cta}>
          <Link href='/'>Go back to the homepage</Link>
        </div>
      </main>
    </>
  )
}

export default NotFound