import React from 'react'
import { Link } from 'react-router-dom'

const Default = () => {
  return (
      <div>
      <h3>Welcom to My-React</h3>
      Here I will use the react app to display my django-based <Link to={'products'}>super-market</Link>, wich is runing on a "render" server, and my <Link to={'books'}>'Library'</Link> project, also runing on render.
      Enjoy!
      </div>
  )
}

export default Default