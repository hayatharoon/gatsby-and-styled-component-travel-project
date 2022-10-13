import styled from "styled-components"

export const ImageContainer = styled.div`
  text-align: center;
  margin: 150px;
`

export const ImageHeading = styled.h1`
  margin-bottom: 64px;
`
export const ImageGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(50px, auto);
  margin: 0 auto;
  max-width: 1000px;
  padding: 0 32px;
`
