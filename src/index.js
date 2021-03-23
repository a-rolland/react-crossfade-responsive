/* eslint-disable react/react-in-jsx-scope */
// import styles from './index.module.css'
import styles from './Index.css'
import React from 'react'

const Crossfade = (props) => {
  const backgroundImages = props.images || [
    'https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1616450030149-26a8bc9dd54f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1616445598565-5327a63e85d0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
  ]
  const carouselLength = backgroundImages.length
  const [currentCarouselIndex, setCarouselIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((currentCarouselIndex) => {
        const newIndex =
          currentCarouselIndex + 1 >= carouselLength
            ? 0
            : currentCarouselIndex + 1
        return newIndex
      })
    }, props.customInterval || 5000)
    return () => clearInterval(interval)
  }, [currentCarouselIndex])

  const carousel = backgroundImages.map((element, index) => {
    return (
      <img
        key={index}
        className={`${
          currentCarouselIndex === index ? 'active' : 'inactive'
        } background ${styles.background} ${
          currentCarouselIndex === index ? styles.active : styles.inactive
        }`}
        src={element}
      />
    )
  })

  return (
    <div className={`backgroundBackground ${styles.backgroundBackground}`}>
      {carousel}
    </div>
  )
}

export default Crossfade
