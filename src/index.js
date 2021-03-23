/* eslint-disable react/react-in-jsx-scope */
import styles from './index.module.css'
import React from 'react'
function Crossfade({ images, customInterval }) {
  const backgroundImages = images || []
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
    }, customInterval || 5000)
    return () => clearInterval(interval)
  }, [currentCarouselIndex])

  const carousel = backgroundImages.map((element, index) => {
    return (
      <img
        key={index}
        // className={currentCarouselIndex === index ? 'active' : 'inactive'}
        className={`${styles.background} ${
          currentCarouselIndex === index ? styles.active : styles.inactive
        }`}
        src={element}
      />
    )
  })

  // return <div id='background-background'>{carousel}</div>
  return <div className={styles.backgroundBackground}>{carousel}</div>
}

export default Crossfade
