import { notFound } from 'next/navigation'
import React from 'react'
import classes from './page.module.css'
import Image from 'next/image'
import { getMeal } from '@/lib/meals'

export const generateMetadata = async ({params}) => {
  const meal = getMeal(params.slug)
  if (!meal) {
    notFound()
  }
  return {
    title: meal.title,
    description: meal.summary,
  }
}

const MealDetails = ({params}) => {
  const meal = getMeal(params.slug)
  meal.instructions = meal.instructions.replace(/\n/g, '<br>')
  return (
    <>
      <header className={classes.header} >
        <div className={classes.image}>
          <Image src={`https://chrisroberts-nextjs-foodie-users-image.s3.eu-north-1.amazonaws.com/${meal.image}`} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto: ${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>
            {meal.summary}
          </p>
        </div>
      </header>
      <main>
        <p 
          className={classes.instructions} 
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}>
        </p>
      </main>
    </>
  )
}

export default MealDetails