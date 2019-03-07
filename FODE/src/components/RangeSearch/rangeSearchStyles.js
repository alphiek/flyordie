import styled from "styled-components";
import { BodyText, Subheading } from "../../GlobalCss/other";
import { color } from "../../GlobalCss/variables";

export const RangeFlex = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin-left: 5em;
  margin-right: 5em;
  margin-bottom: 3em;
  margin-top: -2em;
`;

export const InfoContainer = styled.div`
  width: 15em;
  padding: 2em;
  text-align: left;
  background-color: white;
`;

export const Blurb = styled(BodyText)``;
export const OptionsText = styled(Subheading)`
  background-color: ${color.primary};
  color: ${color.secondary};
  margin-bottom: 2em;
  width: 20em;
  margin-left: 7em;
`;

export const OptionsFlex = styled.div`
  width: 65em;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2em;
`;

export const RangeSelector = styled.div`
  display: flex;
  flex-direction: column;
  width: 7em;
  margin: 1em;
  height: 7em;
  border-radius: 50%;
  background-color: white;
`;
export const RangeIcon = styled.img`
  width: 6em;
`;
