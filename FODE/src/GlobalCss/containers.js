import styled from "styled-components";

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: ${props => (props.column ? "column" : "row")};
  background-color: ${props => props.bgColor};
  padding-top: ${props => (props.padding ? "5em" : "0")};
  height: 100%;
`;
export const Pattern = styled(SectionWrapper)`
  background-image: ${props => `url(${props.background})`};
  background-repeat: repeat;
  background-size: 90px 90px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
  margin-bottom: 1em;
`;
