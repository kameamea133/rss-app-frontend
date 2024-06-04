import React from 'react'

const Feed = ({  title, link, date}) => {

    let formatted = { day: "numeric", month: "long", year: "numeric"}
    let articleDate = new Date(date).toLocaleDateString("fr-FR", formatted)
  return (
    <>
        <a href={link} target="_blank" rel='noopener noreferrer' className='hover:opacity-70 hover:text-amber-400'>
        <h3 className='text-xl mb-1 underline decoration-blue-400'>{title}</h3>
        <p>{articleDate}</p>
        </a>
    </>
  )
}

export default Feed