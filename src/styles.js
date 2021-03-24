import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`

export const BackgroundBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
`

export const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  /* min-height: 100%;
  max-height: 100vh;
  min-width: 100%; */
  object-fit: cover;
  opacity: 0;

  &.active {
    opacity: 1;
    transition: opacity ${(props) => props.transitionDelay};
  }

  &.inactive {
    opacity: 0;
    transition: opacity ${(props) => props.transitionDelay};
  }
`
