/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import { Container, Background, BackgroundBackground } from './styles'

const Crossfade = (props) => {
  const containerDimensions = {
    height: props.height ? props.height : '100vh',
    width: props.width ? props.width : '100%'
  }
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
    }, props.interval || 5000)
    return () => clearInterval(interval)
  }, [currentCarouselIndex])

  const carousel = backgroundImages.map((element, index) => {
    return (
      // <img
      <Background
        key={index}
        className={currentCarouselIndex === index ? 'active' : 'inactive'}
        src={element}
        transitionDelay={
          props.transition ? `${props.transition / 1000}s` : '3s'
        }
      />
    )
  })

  return (
    <Container
      height={containerDimensions.height}
      width={containerDimensions.width}
    >
      <BackgroundBackground xRate={props.xRate} yRate={props.yRate}>
        {carousel}
      </BackgroundBackground>
    </Container>
  )
}

export default Crossfade
