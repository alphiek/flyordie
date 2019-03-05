import styled from 'styled-components'
import { Title, Subheading, BodyText } from '../../GlobalCss/other'
import { color, fontSize } from '../../GlobalCss/variables'

export const FaqText = styled(BodyText)`
  padding-top: 1em;
  font-size: ${fontSize.small};
`

export const FaqHeadText = styled(BodyText)`
  width: 65vw;
  @media (max-width: 767px) {
  width: 60vw;
  }
  @media (max-width: 479px) {
  width: 65vw;
  }
`

export const FaqTitle = styled(Title)`
  text-transform: none;
  margin-bottom: 1em;
`

export const FaqHeading = styled(Subheading)`
  border-bottom: 0.25em solid ${color.dullgreen};
  padding-bottom: 0.5em;
  font-size: ${fontSize.body};
`

export const FaqWrapper = styled.div`
  width: 70vw;
  margin-left: 2em;
  margin-right: 2em;
  margin-top: 3em;
  margin-bottom: 3em;
  padding-bottom: 2.5em;
  padding-top: 2.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${color.white};
  border-radius: 0.3em;
  z-index: 3;
  @media (max-width: 767px) {
  width: 75vw;
  }
  @media (max-width: 479px) {
  width: 80vw;
}
`
export const FaqItem = styled.div`
  position: relative;
  width: 60vw;
  margin: 0.5em 1em;
  text-align: center;
`
export const InfoButton = styled.button`
  position: absolute;
  right: 0;
  padding: 0.7 1em;
  border-radius: 0.15em;
  margin-bottom: 0.5em;
  font-size: ${fontSize.xsmall};
  text-transform: uppercase;
  background-color: ${color.dullblue};
  color: ${color.secondary};
  border: none;
`
