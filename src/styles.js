import styled from 'styled-components'

export const BackgroundBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  min-height: 100%;
  max-height: 100vh;
  min-width: 100%;
  object-fit: cover;
  background-color: black;
`

export const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  min-height: 100%;
  max-height: 100vh;
  min-width: 100%;
  object-fit: cover;
  opacity: 0;

  &.active {
    opacity: 1;
    transition: opacity 3s;
  }

  &.inactive {
    opacity: 0;
    transition: opacity 3s;
  }
`